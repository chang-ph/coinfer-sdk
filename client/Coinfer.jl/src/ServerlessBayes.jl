module ServerlessBayes

using StableRNGs
using AbstractMCMC
using Parameters
using JSON
using HTTP
using TOML
using SHA
using Turing
using TuringCallbacks
using Logging
using Base.CoreLogging
using TensorBoardLogger
using Dates
using Random
using Base64
using DynamicPPL
using UUIDs
using DocStringExtensions
using YAML
using Base.Filesystem
using DataFrames
using CSV
using OnlineStats
using OnlineStatsBase

### msg_collector
interval = parse(Int, get(ENV, "COINFER_DATA_SENDING_INTERVAL", "3000"))

function is_sync()
    ENV["COINFER_SYNC"] != "FALSE"
end

function default_endpoints()
    return get(ENV, "COINFER_SERVER_ENDPOINT", "https://api.coinfer.ai")
end

mutable struct Workflow
    model
    parsed_data
    analyzer
    settings
end

function get_object(objid::String)
    url = endpoint("api", "/object/$objid")
    headers = headers_with_token("Content-Type" => "application/json")
    resp = HTTP.get(url, headers)
    json = JSON.parse(String(resp.body))
    if json["status"] != "ok"
        throw(ErrorException("Failed to get object $id: $(json["message"])"))
    end
    return json["data"]
end

wf = Ref{Workflow}()
function current_workflow()
    if isassigned(wf)
        return wf[]
    end
    settings = YAML.load(read("../workflow.yaml", String))  # cwd=model root directory
    parsed_data = []
    if Filesystem.isfile("../tmp/parsed-data")
        parsed_data = [_convert_type(x) for x in JSON.parsefile("../tmp/parsed-data")]
    end

    wf[] = Workflow(nothing, parsed_data, nothing, settings)
    return wf[]
end

function _convert_type(v::Union{Any,Array{Any}})
    if isa(v, Vector)
        isempty(v) && return v
        return convert.(typeof(v[1]), v)
    end
    return v
end

mutable struct MsgCollector
    name::String
    datas
    last_send_time
    send_func::Function
    lock::Base.AbstractLock
end
function MsgCollector(name::String, send_func::Function)
    return MsgCollector(name, [], Dates.now(), send_func, ReentrantLock())
end

function open_collector(context_func::Function, name, send_func::Function)
    collector = MsgCollector(name, send_func)
    try
        context_func(collector)
    finally
        if !isempty(collector.datas)
            send_func(collector.datas)
        end
    end
end

function collect_msg!(collector::MsgCollector, data)
    lock(collector.lock) do
        push!(collector.datas, data)
        now = Dates.now()
        if Dates.now() - collector.last_send_time > Dates.Millisecond(interval) &&
            !isempty(collector.datas)
            # println("$(collector.name) sending $(length(collector.datas)) messages")
            collector.send_func(collector.datas)
            empty!(collector.datas)
            collector.last_send_time = now
        end
    end
end

mutable struct DataCollector
    name::String
    datas::Dict{String,Dict{Int,Vector{Any}}}
    last_send_time
    send_func::Function
    lock::Base.AbstractLock

    # This is used to generate a seqno, so that the data can be ordered by a combination of:
    # 1. The time at which the experiment is started
    # 2. The seqno of the data
    start_time::Int128
end
function DataCollector(name::String, send_func::Function)
    return DataCollector(
        name,
        Dict{String,Dict{Int,Vector{Any}}}(),
        Dates.now(),
        send_func,
        ReentrantLock(),
        trunc(Int128, time() * 1E10),
    )
end

function open_data_collector(context_func::Function, name, send_func::Function)
    collector = DataCollector(name, send_func)
    try
        context_func(collector)
    finally
        vars = Dict{String,Dict{String,Vector{Any}}}()  # chain_name => var_name => var_vals
        chain_iteration = Dict{String,Tuple{Int,Int,Int128}}()  # The min and max iteration value of each chain

        for (chain_name, chain_data) in collector.datas
            chain_iteration[chain_name] = tuple(typemax(Int), 0, 0)
            if !haskey(vars, chain_name)
                vars[chain_name] = Dict{String,Vector{Any}}()
            end

            sorted_items = sort(collect(chain_data); by=x -> x[1])  # sort by iteration
            for (iteration, var_datas) in sorted_items
                for (varname, varval) in var_datas
                    if !(isa(varval, Number) || isa(varval, Bool))
                        continue
                    end
                    if !haskey(vars[chain_name], varname)
                        vars[chain_name][varname] = Vector{Any}()
                    end

                    push!(vars[chain_name][varname], varval)
                end
                chain_iteration[chain_name] = tuple(
                    min(chain_iteration[chain_name][1], iteration),
                    max(chain_iteration[chain_name][2], iteration),
                    collector.start_time + max(chain_iteration[chain_name][2], iteration),
                )
            end
        end

        if !isempty(vars) && !all(isempty(x) for x in values(vars))
            # println("$(collector.name) sending $(chain_iteration) messages")
            collector.send_func(Dict(:vars=>vars, :iteration=>chain_iteration))
        end
    end
end
function collect_msg!(collector::DataCollector, data::Dict{Symbol,Any})
    lock(collector.lock) do
        chain_name = data[:chain_name]
        iteration = data[:iteration]

        if !haskey(collector.datas, chain_name)
            collector.datas[chain_name] = Dict{Int,Vector{Any}}()
        end

        chain_dict = collector.datas[chain_name]

        if !haskey(chain_dict, iteration)
            chain_dict[iteration] = []
        end

        append!(chain_dict[iteration], data[:data])
        now = Dates.now()
        if now - collector.last_send_time > Dates.Millisecond(interval)
            # println("$(now) - $(collector.last_send_time) > $(Dates.Millisecond(interval))")
            uncompleted_data = Dict{String,Dict{Int,Vector{Any}}}()
            vars = Dict{String,Dict{String,Vector{Any}}}()  # chain_name => var_name => var_vals
            chain_iteration = Dict{String,Tuple{Int,Int,Int128}}()  # The min and max iteration value of each chain

            for (chain_name, chain_data) in collector.datas
                chain_iteration[chain_name] = tuple(typemax(Int), 0, 0)
                if !haskey(vars, chain_name)
                    vars[chain_name] = Dict{String,Vector{Any}}()
                end

                uncompleted_data[chain_name] = Dict{Int,Vector{Any}}()
                sorted_items = sort(collect(chain_data); by=x -> x[1])  # sort by iteration
                for (iteration, var_datas) in sorted_items[begin:(end - 1)]
                    for (varname, varval) in var_datas
                        if !(isa(varval, Number) || isa(varval, Bool))
                            continue
                        end
                        if !haskey(vars[chain_name], varname)
                            vars[chain_name][varname] = Vector{Any}()
                        end

                        push!(vars[chain_name][varname], varval)
                    end
                    chain_iteration[chain_name] = tuple(
                        min(chain_iteration[chain_name][1], iteration),
                        max(chain_iteration[chain_name][2], iteration),
                        collector.start_time +
                        max(chain_iteration[chain_name][2], iteration),
                    )
                end
                if !isempty(sorted_items)
                    last_item = sorted_items[end]
                    iteration = last_item[1]
                    uncompleted_data[chain_name] = Dict{Int,Vector{Any}}(last_item)
                    delete!(chain_data, iteration)
                end
            end

            if !isempty(vars) && !all(isempty(x) for x in values(vars))
                # println("$(collector.name) sending $(chain_iteration) messages")
                collector.send_func(Dict(:vars=>vars, :iteration=>chain_iteration))
                collector.last_send_time = now
            end
            collector.datas = uncompleted_data
        end
    end
end

### Types

abstract type Data end
abstract type CloudData end

struct OpaqueData <: CloudData
    cloud_id::String
end

struct Experiment <: CloudData
    experiment_id::String
end

struct Model <: CloudData
    model_id::String
end

mutable struct LocalData <: Data
    cloud_id::String
    file::String
    fmt::String
end

struct CloudDataRef
    cloud_data_id::String
    ready::Ref{Bool}
end

function as_withdata(file::String; fmt=nothing)
    isfile(file) || error("File $file does not exist.")
    fmt === nothing && (fmt = splitext(file)[end][2:end])
    return LocalData("", file, fmt)
end

function as_local(cd::OpaqueData)
    url = endpoint("api", "/object/$(cd.cloud_id)")
    headers = headers_with_token()
    resp = HTTP.get(url, headers)
    data = response_data(resp)
    url = data["path"]
    temp_file = download(url)
    return LocalData(data["short_id"], temp_file, data["fmt"])
end

"""
$(TYPEDEF)

Contains data used when running model locally.

$(TYPEDFIELDS)
"""
@with_kw struct LocalFunction
    "Model ID"
    model_id::String = ""

    "The directory which contains the project source code and data."
    project_dir::String = ""
    "The file which defines the required `model` function."
    entrance_file::String = "main.jl"
    "The name of the function to run."
    entrance_func::String = "main"
    "The julia project file."
    project_file::String = "Project.toml"
    "The julia project manifest file."
    manifest_file::String = "Manifest.toml"

    "Endpoints configuration"
    endpoint::String = default_endpoints()
end

function create_model(
    FUNCION_TYPE, project_dir; endpoint=default_endpoints(), entrance_file="main.jl"
)
    return FUNCION_TYPE(;
        project_dir=project_dir,
        entrance_file=entrance_file,
        entrance_func="model",
        endpoint=endpoint,
    )
end

@with_kw struct LocalFunctionCarriage
    func::LocalFunction
    experiment_id::String = ""
    startup_script::String = ""
    executor::String = ""
    julia_args::String = ""
end

function Base.Dict(m::LocalFunctionCarriage)
    return Dict{String,Any}(
        "entrance_file" => m.func.entrance_file,
        "entrance_func" => m.func.entrance_func,
        "project_file" => m.func.project_file,
        "manifest_file" => m.func.manifest_file,
        "experiment_id" => m.experiment_id,
    )
end

"""
$(TYPEDEF)

Contains data used when running model in cloud. New models will be saved in the server.

$(TYPEDFIELDS)
"""
@with_kw struct CloudFunction <: CloudData
    "Model ID"
    model_id::String = ""
    "The directory which contains the project source code and data."
    project_dir::String = ""
    "The file which defines the required `model` function."
    entrance_file::String = "main.jl"
    "The name of the function to run."
    entrance_func::String = "main"
    "The julia project file."
    project_file::String = "Project.toml"
    "The julia project manifest file."
    manifest_file::String = "Manifest.toml"

    "Endpoints configuration"
    endpoint::String = default_endpoints()
end

@with_kw struct CloudFunctionCarriage
    func::CloudFunction
    experiment_id::String = ""
    startup_script::String = ""
    executor::String = ""
    julia_args::String = ""
end

function Base.Dict(m::CloudFunctionCarriage)
    return Dict{String,Any}(
        "entrance_file" => m.func.entrance_file,
        "entrance_func" => m.func.entrance_func,
        "project_file" => m.func.project_file,
        "manifest_file" => m.func.manifest_file,
        "experiment_id" => m.experiment_id,
    )
end

"""
$(TYPEDEF)

Contains data used when running model in cloud. New models won't be saved in the server.

$(TYPEDFIELDS)
"""
@with_kw struct AnonymousCloudFunction
    "The directory which contains the project source code and data."
    project_dir::String = ""
    "The file which defines the required `model` function."
    entrance_file::String = "main.jl"
    "The name of the function to run."
    entrance_func::String = "main"
    "The julia project file."
    project_file::String = "Project.toml"
    "The julia project manifest file."
    manifest_file::String = "Manifest.toml"

    "Endpoints configuration"
    endpoint::String = default_endpoints()
end

@with_kw struct AnonymousCloudFunctionCarriage
    func::AnonymousCloudFunction
    experiment_id::String = ""
    startup_script::String = ""
    executor::String = ""
    julia_args::String = ""
end

function Base.Dict(m::AnonymousCloudFunctionCarriage)
    return Dict{String,Any}(
        "entrance_file" => m.func.entrance_file,
        "entrance_func" => m.func.entrance_func,
        "project_file" => m.func.project_file,
        "manifest_file" => m.func.manifest_file,
        "experiment_id" => m.experiment_id,
    )
end

get_carriage_class(f::LocalFunction) = LocalFunctionCarriage
get_carriage_class(f::CloudFunction) = CloudFunctionCarriage
get_carriage_class(f::AnonymousCloudFunction) = AnonymousCloudFunctionCarriage

### utils
iscloud() = !(isempty(get(ENV, "IS_CLOUD", "")))

function project_file(path)
    project_root = dirname(@__DIR__)
    return joinpath(project_root, path)
end

function endpoint(name, path; endpoints=default_endpoints())
    return rstrip(endpoints, '/') * "/" * name * "/" * lstrip(path, '/')
end

const _TOKEN = Ref{String}()
set_token(t) = _TOKEN[] = t

function get_token()
    token = get(ENV, "COINFER_AUTH_TOKEN", "")
    isempty(token) && (token = _TOKEN[])
    return token
end

function headers_with_token(args...)
    token = get_token()
    headers = ["Authorization" => "bearer $(token)"]
    for p in args
        push!(headers, p)
    end
    return headers
end

function response_data(resp; debug=false)
    if resp.status != 200
        @error "HTTP Error" url = resp.request.url code = resp.status
    end
    body = String(resp.body)
    if debug
        println(">>>", body)
    end
    data = JSON.parse(body)
    if !("status" in keys(data)) && ("body" in keys(data))
        data = data["body"]
    end
    if data["status"] != "ok"
        @error "HTTP Error" url = resp.request.url return_data = data
        error(data["message"])
    end
    return data["data"]
end

symbolize_keys(d::Dict{Any,Any}) = Dict(Symbol(k) => v for (k, v) in d)

function withdata_logger(experiment_id::String, url::String, collector::DataCollector)
    logger = CoinferLogger(experiment_id, collector; endpoint=url)
    return logger
end

function copy_file(src_dir::String, dest_dir::String, relative_path::String)
    src = joinpath(src_dir, relative_path)
    dest = joinpath(dest_dir, relative_path)
    mkpath(dirname(dest))
    return cp(src, dest)
end

copy_file(src_dir::String, relative_path::String) = copy_file(src_dir, pwd(), relative_path)

## model, input, and output

function create_experiment()
    url = endpoint("api", "/object")
    data = Dict{String,Any}(
        "payload" => Dict{String,Any}(
            "object_type" => "experiment",
            "model_id" => get(ENV, "MODEL_ID", ""),
            "input_id" => get(ENV, "EXPERIMENT_INPUT", ""),
        ),
    )
    xp_meta = Dict()
    if !isempty(xp_meta)
        data["xp_meta"] = xp_meta
    end
    headers = headers_with_token("Content-Type" => "application/json")
    res = HTTP.post(url, headers, JSON.json(data))
    return response_data(res)
end

function update_experiment_runinfo(exp_id, batch_id, run_id, status)
    if !is_sync()
        println("Not sync, skip update experiment runinfo")
        return nothing
    end
    data = Dict{String,Any}(
        "payload" => Dict{String,Any}(
            "object_type" => "experiment",
            "meta" => Dict(
                "run_info" => Dict(
                    "experiment_id" => exp_id,
                    "batch_id" => batch_id,
                    "run_id" => run_id,
                    "status" => status,
                ),
            ),
        ),
    )
    url = endpoint("api", "/object/$exp_id")
    headers = headers_with_token("Content-Type" => "application/json")
    res = HTTP.post(url, headers, JSON.json(data))
    response_data(res)
end

function get_experiment_id()
    experiment_id = get(ENV, "EXPERIMENT_ID", "")
    if isempty(experiment_id)
        experiment = create_experiment()
        experiment_id = experiment["short_id"]
        ENV["EXPERIMENT_ID"] = experiment_id
    end
    return experiment_id
end

function get_experiment_status(xid, endpoint)
    headers = headers_with_token("Content-Type" => "application/json")
    rsp = HTTP.get("$(endpoint)/api/object/$xid"; headers=headers)
    return JSON.parse(String(rsp.body))["data"]["status"]
end

function wait_experiment(xid, endpoint=default_endpoints())
    println("Wait experiment to finish")
    while true
        status = get_experiment_status(xid, endpoint)
        print(status)
        if in(status, ["FIN", "ERR"])
            println("")
            break
        end
        sleep(10)
    end
end

function get_proxy_lambda_endpoint(endpoint::String)
    headers = headers_with_token("Content-Type" => "application/json")
    rsp = HTTP.get("$(endpoint)/sys/config"; headers=headers)
    return JSON.parse(String(rsp.body))["data"]["run_model_url"]
end

function notify_after_sample(exp_id)
    !is_sync() && return nothing
    headers = headers_with_token("Content-Type" => "application/json")
    url = endpoint("sys", "/config")
    rsp = HTTP.get(url; headers=headers)
    url = JSON.parse(String(rsp.body))["data"]["run_model_url"]
    resp = HTTP.post(
        url;
        headrs=["Content-Type" => "application/json"],
        body=JSON.json(
            Dict{String,Any}(
                "cmd" => "after_sample",
                "experiment_id" => exp_id,
                "wd_auth_token" => get_token(),
                "coinfer_server_endpoint" => ENV["COINFER_SERVER_ENDPOINT"],
                "batch_id" => ENV["BATCH_ID"],
                "run_id" => ENV["RUN_ID"],
            ),
        ),
    )

    response_data(resp)
end

function initialize_batch_id()
    if !haskey(ENV, "BATCH_ID")
        ENV["BATCH_ID"] = ENV["RUN_ID"] = string(UUIDs.uuid1().value; base=62)
    end
end

function write_data_csv(log_data)
    exp_id = get(ENV, "EXPERIMENT_ID", "")
    mcmc_data_path = get(ENV, "COINFER_MCMC_DATA_PATH", "mcmcdata")
    df = DataFrame(;
        chain_name=String[], var_name=String[], var_value=Union{Float64,Int,Bool}[]
    )
    for (chain_name, chain_data) in pairs(log_data[:vars])
        for (var_name, var_data) in pairs(chain_data)
            for _var_data in var_data
                push!(df, (chain_name, var_name, _var_data))
            end
        end
        min_iter, max_iter, seqno = log_data[:iteration][chain_name]
        _min_iter = lpad(min_iter, 10, "0")
        _max_iter = lpad(max_iter, 10, "0")
        _seqno = lpad(seqno, 20, "0")
        if size(df)[1] > 0
            csv_path = joinpath(
                mcmc_data_path, "$chain_name-$_min_iter-$_max_iter-$_seqno.csv"
            )
            CSV.write(csv_path, df)
        end
    end
end

function sample(args...; kwargs...)
    initialize_batch_id()
    # exp_id = get_experiment_id()
    exp_id = ENV["EXPERIMENT_ID"]
    mcmc_data_path = get(ENV, "COINFER_MCMC_DATA_PATH", "mcmcdata")
    mkpath(mcmc_data_path)
    url = endpoint("api", "/object/" * exp_id)

    try
        open_data_collector("sample_data", write_data_csv) do collector
            logger = withdata_logger(exp_id, url, collector)
            tb_callback = TensorBoardCallback(logger)
            cb = tb_callback
            chain_name = get(kwargs, :callback, "")
            if !startswith(chain_name, "chain#")
                kwargs = Dict{Symbol,Any}(kwargs)
                kwargs[:chain_name] = "chain#" * chain_name
            end
            chn = Turing.sample(args...; callback=cb, kwargs...)
        end
        update_experiment_runinfo(exp_id, ENV["BATCH_ID"], ENV["RUN_ID"], "SAMPLE_FIN")
    catch exp
        @error "ERROR" exception=(exp, catch_backtrace())
        update_experiment_runinfo(exp_id, ENV["BATCH_ID"], ENV["RUN_ID"], "ERR")
        exit(-1)
    finally
        notify_after_sample(exp_id)
    end
end

### Logger
mutable struct CoinferLogger <: TensorBoardLogger.AbstractLogger
    experiment_id::String
    endpoint::String
    auth_token::String
    global_step::Int
    step_increment::Int
    min_level::LogLevel
    collector::DataCollector
    iteration::Int
end

function CoinferLogger(
    experiment_id,
    collector::DataCollector;
    endpoint="",
    auth_token="",
    purge_step::Union{Int,Nothing}=nothing,
    step_increment=1,
    min_level::LogLevel=Logging.Info,
)
    start_step = something(purge_step, 0)
    return CoinferLogger(
        experiment_id,
        endpoint,
        auth_token,
        start_step,
        step_increment,
        min_level,
        collector,
        0,
    )
end

# Implement the AbstractLogger Interface
TensorBoardLogger.set_step!(lg::CoinferLogger, step) = lg.global_step = step
TensorBoardLogger.set_step_increment!(lg::CoinferLogger, Δstep) = lg.step_increment = Δstep
TensorBoardLogger.increment_step!(lg::CoinferLogger, Δ_Step) = lg.global_step += Δ_Step
function TuringCallbacks.increment_step!(lg::CoinferLogger, Δ_Step)
    return TensorBoardLogger.increment_step!(lg, Δ_Step)
end
TensorBoardLogger.step(lg::CoinferLogger) = lg.global_step
TensorBoardLogger.reset!(lg::CoinferLogger) = TensorBoardLogger.set_step!(lg, 0)
CoreLogging.catch_exceptions(lg::CoinferLogger) = false
CoreLogging.min_enabled_level(lg::CoinferLogger) = lg.min_level
CoreLogging.shouldlog(lg::CoinferLogger, level, _module, group, id) = true

function _preprocess(message, key, val::OnlineStatsBase.Series, data)
    new_series = Series([x for x in val.stats if !isa(x, OnlineStats.KHist)]...)
    TensorBoardLogger.preprocess(message * "/$key", new_series, data)
end

function _preprocess(message, key, val::T, data) where {T}
    TensorBoardLogger.preprocess(message * "/$key", val, data)
end
function CoreLogging.handle_message(
    lg::CoinferLogger, level, message, _module, group, id, file, line; kwargs...
)
    if isempty(lg.endpoint)
        # calling @warn/info in handle_message causes recursive-calls
        # thus stackoverflow.
        #@warn "No endpoint provided, log ignored."
        println("#Warning# No endpoint provided in CoinferLogger, log ignored.")
        return nothing
    end

    log = Dict{Symbol,Any}(:data => nothing)
    i_step = lg.step_increment # :log_step_increment default value
    if !isempty(kwargs)
        data = Vector{Pair{String,Any}}()
        for (key, val) in pairs(kwargs)
            if key == :iteration
                log[:iteration] = val
                continue
            end
            # special key describing step increment
            if key == :log_step_increment
                i_step = val
                continue
            end
            _preprocess(message, key, val, data)
        end
        log[:data] = data
    end
    iter = increment_step!(lg, i_step)
    log[:step] = iter
    log[:chain_name] = group
    return collect_msg!(lg.collector, log)
end

### Sample and Evaluate
_serialize(::MCMCThreads) = "MCMCThreads"
_serialize(::MCMCDistributed) = "MCMCDistributed"
_serialize(::MCMCSerial) = "MCMCSerial"

_deserialize(params::String) = _deserialize(Val(Symbol(params)))
_deserialize(::Val{:MCMCThreads}) = MCMCThreads()
_deserialize(::Val{:MCMCDistributed}) = MCMCDistributed()
_deserialize(::Val{:MCMCSerial}) = MCMCSerial()
function _deserialize(item::Dict{Any,Any}, m, sampler)
    return _deserialize(Val(Symbol(item["type"])), get(item, "params", nothing), m, sampler)
end
_deserialize(item::Any, m, sampler) = item
_deserialize(key::Val{Symbol("model-placeholder")}, val::Any, m, sampler) = m
_deserialize(key::Val{Symbol("sampler-placeholder")}, val::Any, m, sampler) = sampler
_deserialize(key::Val{Symbol("stable-rng")}, val::Any, m, sampler) = StableRNG(val[1])
function _deserialize(key::Val{Symbol("ensemble-placeholder")}, val::Any, m, sampler)
    return _deserialize(val[1])
end
_deserialize(key::Any, val::Any, m, sampler) = Dict("type" => key, "params" => val)

function codify(inst::StableRNG, modules)
    push!(modules, "StableRNGs")
    return "$(typeof(inst))(;state=$(typeof(inst.state))($(inst.state)))"
end

function codify(inst::String, modules)
    return repr(inst)
end

function codify(inst, modules)
    if isstructtype(typeof(inst))
        ret = []
        type = typeof(inst)
        push!(modules, repr(Base.moduleroot(parentmodule(type))))
        push!(ret, "$type(")
        for name in fieldnames(type)
            push!(ret, """$(codify(getfield(inst, name), modules)),""")
        end
        push!(ret, ")")
        return join(ret, "")
    else
        return """$(typeof(inst)(inst))"""
    end
end

function generate_script(
    rng::StableRNG,
    model::Union{LocalFunction,CloudFunction,AnonymousCloudFunction},
    N::Integer,
    parallel::AbstractMCMC.AbstractMCMCEnsemble=AbstractMCMC.Serial(),
    nchains::Integer=1;
    sample_kwargs...,
)
    # generate script from the function parameters
    modules = []
    script = [
        "Pkg.add(\"StableRNGs\")",
        "using StableRNGs",
        "include(\"$(model.entrance_file)\")",
        "using Coinfer",
    ]
    push!(script, "rets = $(model.entrance_func)(nothing)")
    push!(script, "m, s = Coinfer.ServerlessBayes.adapt_model_return(rets)")
    push!(script, "Coinfer.ServerlessBayes.inner_sample(")
    push!(script, "$(codify(rng, modules)),")
    push!(script, "m,")  # model
    push!(script, "s,")  # sample
    push!(script, "$(codify(parallel, modules)),")  # ensemble
    push!(script, "$N,")
    push!(script, "$nchains;")
    for (name, value) in sample_kwargs
        push!(script, "$name=$(codify(value, modules)),")
    end
    push!(script, ")")
    for mod in unique(modules)
        if !(mod in ["Coinfer", "StableRNGs"])
            pushfirst!(script, "Pkg.add(\"$mod\")\nusing $mod")
        end
    end
    pushfirst!(script, "using Pkg", "Pkg.develop(; path=ARGS[1])")
    str_script = join(script, "\n")
    println(str_script)
    return str_script
end

"""
Run sample on specified model which generate multiple chains.

$(SIGNATURES)

- rng::StableRNG. The random number generator. Currently only StableRNG is supported.
- model::LocalFunction|CloudFunction|AnonymousCloudFunction. The model meta info.
- parallel::MCMCThreads|MCMCDistributed|MCMCSerial. The algorithm for sampling MCMC chains.
- N::Int. iteration count.
- nchains::Int. Number of chains.
- use_script::Bool. whether to use the script mode or not. In script there will be a script file generated from the parameters of this function and this script will be run in the server side.
- experiment_id::String. The experiment id.
- executor::String. The executor to use: fargate|lambda.

# Example

- [run model](examples/run_model.jl)
- [run model multichain](examples/run_model_multichain.jl)

"""
function sample(
    rng::StableRNG,
    model::Union{LocalFunction,CloudFunction,AnonymousCloudFunction},
    N::Integer,
    parallel::AbstractMCMC.AbstractMCMCEnsemble=AbstractMCMC.Serial(),
    nchains::Integer=1;
    use_script=false,
    experiment_id="",
    executor="fargate",
    sample_kwargs...,
)
    carriage_class = get_carriage_class(model)
    if use_script
        model_carriage = carriage_class(;
            func=model,
            experiment_id=experiment_id,
            startup_script=generate_script(
                rng, model, N, parallel, nchains; sample_kwargs...
            ),
            executor=executor,
            julia_args=get_julia_parallel_args(parallel, nchains),
        )
    else
        model_carriage = carriage_class(;
            func=model,
            experiment_id=experiment_id,
            executor=executor,
            julia_args=get_julia_parallel_args(parallel, nchains),
        )
    end
    sample_args = [
        Dict("type" => "stable-rng", "params" => [rng.state]),
        Dict("type" => "model-placeholder"),
        Dict("type" => "sampler-placeholder"),
        Dict("type" => "ensemble-placeholder", "params" => [_serialize(parallel)]),
        N,
        nchains,
    ]
    entrance_args = [Dict("type" => "input_id", "params" => "")]
    return _evaluate(
        model_carriage;
        entrance_args=entrance_args,
        sample_args=sample_args,
        sample_kwargs=sample_kwargs,
    )
end

function dir_to_json(path)
    children = []

    if !isdir(path)
        return children
    end

    for entry in readdir(path; sort=false)
        entry_path = joinpath(path, entry)

        if isdir(entry_path)
            push!(
                children,
                Dict(
                    "name" => basename(entry_path),
                    "type" => "folder",
                    "children" => dir_to_json(entry_path),
                ),
            )
        else
            push!(
                children,
                Dict(
                    "name" => entry,
                    "type" => "file",
                    "content" => Base64.base64encode(read(entry_path)),
                ),
            )
        end
    end

    return children
end

function get_input_data()
    input_id = get(ENV, "INPUT_ID", "")
    isempty(input_id) ? nothing : as_local(OpaqueData(input_id))
end

function adapt_model_return(model_return)
    if isa(model_return, Tuple)
        elem_num = length(model_return)
        if elem_num == 2
            return model_return
        else
            @error "Unexpected model return value" model_return
        end
    else
        return model_return, DynamicPPL.Sampler(NUTS(), model_return)
    end
end

function is_model(m)
    return (m isa DynamicPPL.Model)
end

function _cloud_evaluate(
    carriage; entrance_args, entrance_kwargs, sample_args, sample_kwargs, save_model
)
    func = carriage.func
    endpoint = func.endpoint
    _func = Dict(carriage)
    dkwargs = Dict(entrance_kwargs)
    executor = carriage.executor
    model_dict = Dict{String,Any}("meta" => _func)
    _func["entrance_args"] = entrance_args
    _func["entrance_kwargs"] = entrance_kwargs
    _func["sample_args"] = sample_args
    _func["sample_kwargs"] = sample_kwargs
    if hasfield(typeof(func), :model_id)
        model_id = func.model_id
    else
        model_id = ""
    end
    if isempty(model_id)
        tree = dir_to_json(func.project_dir)
        model_dict["tree"] = tree
    end
    data = JSON.json(
        Dict(
            "model_id" => model_id,
            "model" => model_dict,
            "coinfer_auth_token" => get_token(),
            "cmd" => """run_in_$(executor)""",
            "coinfer_server_endpoint" => endpoint,
            "experiment_id" => _func["experiment_id"],
            "startup_script" => carriage.startup_script,
            "julia_args" => get(entrance_kwargs, :julia_args, ""),
            "save_model" => save_model,
        ),
    )
    headers = []
    url = get_proxy_lambda_endpoint(endpoint)
    rsp = HTTP.post(url; headers=headers, body=data)
    if rsp.status == 200
        rsp_data = response_data(rsp)
        experiment_id = rsp_data["experiment_id"]
        model_id = rsp_data["model_id"]
        println("The model have been scheduled to run. You can query it with:")
        println("model_id=$(model_id), experiment_id=$(experiment_id)")
        return model_id, experiment_id
    else
        println(stderr, "Error accurred: $(rsp.text)")
        return nothing, nothing
    end
end

function _evaluate(
    func::CloudFunctionCarriage;
    entrance_args=[],
    entrance_kwargs=Dict(),
    sample_args=[],
    sample_kwargs=Dict(),
)
    return _cloud_evaluate(
        func;
        entrance_args=entrance_args,
        entrance_kwargs=entrance_kwargs,
        sample_args=sample_args,
        sample_kwargs=sample_kwargs,
        save_model=true,
    )
end

function _evaluate(
    func::AnonymousCloudFunctionCarriage;
    entrance_args=[],
    entrance_kwargs=Dict(),
    sample_args=[],
    sample_kwargs=Dict(),
)
    return _cloud_evaluate(
        func;
        entrance_args=entrance_args,
        entrance_kwargs=entrance_kwargs,
        sample_args=sample_args,
        sample_kwargs=sample_kwargs,
        save_model=false,
    )
end

get_julia_parallel_args(::MCMCThreads, nchains::Int) = "-t $nchains"
get_julia_parallel_args(::MCMCDistributed, nchains::Int) = "-p $nchains"
get_julia_parallel_args(::Any, nchains::Int) = ""

function _evaluate(
    carriage::LocalFunctionCarriage;
    entrance_args=[],
    entrance_kwargs=Dict(),
    sample_args=[],
    sample_kwargs=Dict(),
)
    func = carriage.func
    endpoint = func.endpoint
    _func = Dict(carriage)
    _func["entrance_args"] = entrance_args
    _func["entrance_kwargs"] = entrance_kwargs
    _func["sample_args"] = sample_args
    _func["sample_kwargs"] = sample_kwargs

    julia = "$(Sys.BINDIR)/julia"
    cd(func.project_dir) do
        coinfer_dir = normpath(joinpath(@__FILE__, "..", ".."))
        coinfer_main_file = joinpath(coinfer_dir, "src", "__main.jl")
        cp(coinfer_main_file, "__main.jl"; force=true)
        open("__modelmeta", "w") do fhandle
            print(fhandle, JSON.json(_func))
        end
        parallel_args = carriage.julia_args
        repo_root = get(ENV, "JL_REPO_ROOT", "https://github.com")
        if isempty(parallel_args)
            cmd = Cmd([julia, "--project", "__main.jl", coinfer_dir, repo_root])
        else
            cmd = Cmd([
                julia, parallel_args, "--project", "__main.jl", coinfer_dir, repo_root
            ])
        end
        println("Run cmd: $cmd")
        try
            run(
                Cmd(
                    cmd;
                    env=(
                        "MODEL_DIR" => func.project_dir,
                        "ENTRANCE_FILE" => func.entrance_file,
                        "ENTRANCE_FUNC" => func.entrance_func,
                        "COINFER_SERVER_ENDPOINT" => endpoint,
                        "COINFER_AUTH_TOKEN" => get_token(),
                        "EXPERIMENT_ID" => carriage.experiment_id,
                    ),
                ),
            )
        finally
            Base.unlink("__main.jl")
            Base.unlink("__modelmeta")
        end
    end
end

"""
run any function locally or remotely

$(SIGNATURES)

- *func*:: the config used to locate the function
- *args*:: the args used to invoke the function
- *kwargs*:: the keyword args used to invoke the function
- *sample_args*:: if the function returns a model, then you may provide additional args for sampling
- *sample_kwargs*:: if the function returns a model, then you may provide additional keyword args for sampling

# Example

[run code](examples/run_code.jl)

Only simple arguments that can be serialized and deserialized using JSON directly should be passed in entrance_args and entrance_kwargs. For complex arguments, you need to convert them to simple forms before calling evaluate. In your entrance_func, you will then need to convert them back to their original complex forms.

The return value of the entrance_func will be printed to stdout when executed locally, or it will be sent to the experiment logs when run remotely. It is essential to ensure that the return value contains only simple data structures that can be serialized using JSON.
"""
function evaluate(
    func::Union{LocalFunction,CloudFunction,AnonymousCloudFunction};
    args=[],
    kwargs=Dict(),
    executor="fargate",
    other_kwargs...,
)
    carriage_class = get_carriage_class(func)
    func = carriage_class(; func=func, executor=executor)
    return _evaluate(func; entrance_args=args, entrance_kwargs=kwargs, other_kwargs...)
end

function save_model(json_data, current_dir::String)
    mkpath(current_dir)
    for item in json_data
        if item["type"] == "file"
            file_path = joinpath(current_dir, item["name"])
            if !isfile(file_path)
                open(file_path, "w") do file
                    write(file, base64decode(item["content"]))
                end
            end
        else
            dir_path = joinpath(current_dir, item["name"])
            save_model(item["children"], dir_path)
        end
    end
end

module API
    function list_experiment end
    function list_model end
    function get_model_data end
    function get_sample_data end
end
end
