module ServerlessBayes

using StableRNGs
using AbstractMCMC
using Parameters
using Mocking
using JSON
using HTTP
using TOML
using SHA
using Turing
using MCMCChains
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

### msg_collector
interval = parse(Int, get(ENV, "COINFER_DATA_SENDING_INTERVAL", "1000"))
function default_endpoints()
    return get(ENV, "COINFER_SERVER_ENDPOINT", "https://api.coinfer.ai")
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

function collect_msg!(collector, data)
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
    url = endpoint("mcmc", "/object/$(cd.cloud_id)")
    headers = headers_with_token()
    resp = @mock HTTP.get(url, headers)
    data = response_data(resp)
    url = data["path"]
    temp_file = @mock download(url)
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
    generated_script::String = ""
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
    generated_script::String = ""
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
    generated_script::String = ""
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

function iteration_count()
    str_icount = get(ENV, "ITERATION_COUNT", "1000")
    return parse(Int, str_icount)
end

const _TOKEN = Ref("")
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

symbolize_keys(d::Dict) = Dict(Symbol(k) => v for (k, v) in d)

function withdata_logger(experiment_id::String, url::String, collector::MsgCollector)
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

function get_entrance()
    file = get(ENV, "ENTRANCE_FILE", "main.jl")
    isfile(file) || error("ENTRANCE_FILE $file doesn't exist.")
    Base.include(Main, file)
    func = Symbol(get(ENV, "ENTRANCE_FUNC", "model"))
    isdefined(Main, func) && return getproperty(Main, func)
    return error("Entrance function '$func' is undefined.")
end

function get_entrance_args()
    model_dir = ENV["MODEL_DIR"]
    modelmeta = JSON.parse(open(joinpath(model_dir, "__modelmeta")))
    serialized_entrance_args = get(modelmeta, "entrance_args", [])
    return get_entrance_args(serialized_entrance_args)
end

function get_entrance_args(serialized_entrance_args)
    args = []
    for item in serialized_entrance_args
        if item isa Dict && item["type"] == "input_id"
            input_id = item["params"]
            if isempty(input_id)
                input = nothing
            else
                input = as_local(OpaqueData(input_id))
            end
            args = push!(args, input)
        else
            args = push!(args, item)
        end
    end

    return args
end

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
    iteration_count = parse(Int, get(ENV, "ITERATION_COUNT", "1000"))
    if !isempty(iteration_count)
        xp_meta["iteration_count"] = iteration_count
    end
    if !isempty(xp_meta)
        data["xp_meta"] = xp_meta
    end
    headers = headers_with_token("Content-Type" => "application/json")
    res = @mock HTTP.post(url, headers, JSON.json(data))
    return response_data(res)
end

function update_experiment_runinfo(exp_id, batch_id, run_id, status)
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
    res = @mock HTTP.post(url, headers, JSON.json(data))
    return response_data(res)
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

function send_msg_func(datas)
    body = JSON.json(
        Dict(
            "payload" => Dict(
                "object_type" => "experiment.text_message",
                "datas" => datas,
                "batch_id" => ENV["BATCH_ID"],
                "run_id" => ENV["RUN_ID"],
            ),
        ),
    )
    headers = headers_with_token("Content-Type" => "application/json")

    url = endpoint("api", "/object/" * ENV["EXPERIMENT_ID"])
    resp = @mock HTTP.post(url, headers, body)
    return response_data(resp)
end

function send_msg(collector::MsgCollector, message; group="", type="object_broadcast")
    if !iscloud()
        println(message)
        return nothing
    end
    isempty(group) && (group = "object_$(get_experiment_id())")
    data = Dict{Symbol,Any}(:group => group, :type => type, :message => message)
    return collect_msg!(collector, data)
end

# https://github.com/TuringLang/TuringCallbacks.jl/blob/master/src/callbacks/tensorboard.jl#L113
struct COINFERCallback
    data::Vector{Dict}
    tb_callback
end

function (cb::COINFERCallback)(rng, model, sampler, transition, iteration, state; kwargs...)
    row = Dict()
    for (ksym, val) in zip(Turing.Inference._params_to_array([transition])...)
        k = string(ksym)
        row[k] = val
    end
    push!(cb.data, row)
    sample_data([row])
    if iscloud()
        cb.tb_callback(rng, model, sampler, transition, iteration, state; kwargs...)
    end
end

function notify_after_sample(exp_id)
    headers = headers_with_token("Content-Type" => "application/json")
    url = endpoint("sys", "/config")
    rsp = HTTP.get(url; headers=headers)
    url = JSON.parse(String(rsp.body))["data"]["run_model_url"]
    resp = @mock HTTP.post(
        url,
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

    return response_data(resp)
end

function initialize_batch_id()
    if !haskey(ENV, "BATCH_ID")
        ENV["BATCH_ID"] = ENV["RUN_ID"] = string(UUIDs.uuid1().value; base=62)
    end
end

function inner_sample(args...; kwargs...)
    initialize_batch_id()
    url = endpoint("api", "/object/" * ENV["EXPERIMENT_ID"])
    exp_id = get_experiment_id()

    function send_sample_func(log_data)
        headers = headers_with_token("Content-Type" => "application/json")
        body = JSON.json(
            Dict(
                "payload" => Dict(
                    "object_type" => "experiment.protobuf_message",
                    "logs" => log_data,
                    "batch_id" => ENV["BATCH_ID"],
                    "run_id" => ENV["RUN_ID"],
                ),
            ),
        )
        resp = @mock HTTP.post(
            url, headers, body; retry_non_idempotent=true, retries=2, retry=true
        )
        return response_data(resp)
    end

    try
        open_collector("sample_data", send_sample_func) do collector
            logger = withdata_logger(exp_id, url, collector)
            tb_callback = TensorBoardCallback(logger)
            # we don't use the internal message now
            # cd = COINFERCallback(Dict[], tb_callback)
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
        @error exp
        update_experiment_runinfo(exp_id, ENV["BATCH_ID"], ENV["RUN_ID"], "USER_ERR")
    finally
        notify_after_sample(exp_id)
    end

    fin_msg = Dict("action" => "experiment:finish", "data" => nothing)
    open_collector("fin_msg", send_msg_func) do collector
        send_msg(collector, fin_msg)
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
    collector::MsgCollector
    iteration::Int
end

function CoinferLogger(
    experiment_id,
    collector::MsgCollector;
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

function CoreLogging.handle_message(
    lg::CoinferLogger, level, message, _module, group, id, file, line; kwargs...
)
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
            TensorBoardLogger.preprocess(message * "/$key", val, data)
        end
        log[:data] = data
    end
    iter = increment_step!(lg, i_step)
    log[:step] = iter
    log[:chain_name] = group
    if isempty(lg.endpoint)
        # calling @warn/info in handle_message causes recursive-calls
        # thus stackoverflow.
        #@warn "No endpoint provided, log ignored."
        println("#Warning# No endpoint provided in CoinferLogger, log ignored.")
        return nothing
    end
    return collect_msg!(lg.collector, log)
end

function save_tblog(dir, logs)
    lg = TensorBoardLogger.TBLogger(dir; min_level=Logging.Info)

    for line in logs
        summ = TensorBoardLogger.SummaryCollection()
        json_data = JSON.Parser.parse(line)
        data = json_data["data"] # an Array
        step = json_data["step"] # an Int
        for d in data # d is a Dict
            for (name, val) in d
                if isa(val, Dict)
                    # val is a Histogram
                    # https://github.com/JuliaStats/StatsBase.jl/blob/master/src/hist.jl#L186
                    # unmarshal StatsBase.Histogram/TensorBoardLogger.Histogram
                    edges = tuple((convert(Vector{Float64}, x) for x in val["edges"])...)
                    weights = convert(Vector{Float64}, val["weights"])
                    val = TensorBoardLogger.Histogram(
                        edges, weights, Symbol(val["closed"]), val["isdensity"]
                    )
                end
                push!(summ.value, TensorBoardLogger.summary_impl(name, val))
            end
        end
        evt = TensorBoardLogger.make_event(lg, summ; step=step)
        TensorBoardLogger.write_event(lg.file, evt)
    end
    log_text = """
log
line 1
line 2
"""
    val = TensorBoardLogger.TBText(log_text)
    summ = TensorBoardLogger.SummaryCollection()
    push!(summ.value, TensorBoardLogger.summary_impl("log", val))
    evt = TensorBoardLogger.make_event(lg, summ; step=0)
    return TensorBoardLogger.write_event(lg.file, evt)
end

### Sample and Evaluate
_serialize(::MCMCThreads) = "MCMCThreads"
_serialize(::MCMCDistributed) = "MCMCDistributed"
_serialize(::MCMCSerial) = "MCMCSerial"

_deserialize(params::String) = _deserialize(Val(Symbol(params)))
_deserialize(::Val{:MCMCThreads}) = MCMCThreads()
_deserialize(::Val{:MCMCDistributed}) = MCMCDistributed()
_deserialize(::Val{:MCMCSerial}) = MCMCSerial()
function _deserialize(item::Dict, m, sampler)
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
            generated_script=generate_script(
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

function get_sample_args(m, sampler)
    model_dir = ENV["MODEL_DIR"]
    modelmeta = JSON.parse(open(joinpath(model_dir, "__modelmeta")))
    serialized_sample_args = get(modelmeta, "sample_args", [])
    return get_sample_args(serialized_sample_args, m, sampler)
end

function get_sample_args(serialized_sample_args, m, sampler)
    args = []
    for item in serialized_sample_args
        args = push!(args, _deserialize(item, m, sampler))
    end

    return args
end

function get_sample_kwargs()
    model_dir = ENV["MODEL_DIR"]
    modelmeta = JSON.parse(open(joinpath(model_dir, "__modelmeta")))
    serialized_sample_kwargs = get(modelmeta, "sample_kwargs", Dict())
    return get_sample_kwargs(serialized_sample_kwargs)
end

function get_sample_kwargs(serialized_sample_kwargs)
    kwargs = Dict()
    for (key, item) in serialized_sample_kwargs
        kwargs[Symbol(key)] = item
    end

    return kwargs
end

function default_sampler_args(model, sampler, iteration_count)
    seed = round(Integer, datetime2unix(Dates.now()))
    return [StableRNG(seed), model, sampler, iteration_count]
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
            "generated_script" => carriage.generated_script,
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
