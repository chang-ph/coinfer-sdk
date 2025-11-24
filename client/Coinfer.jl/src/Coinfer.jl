module Coinfer

using JSON
using HTTP
using Turing
using TuringCallbacks
using Logging
using Base.CoreLogging
using TensorBoardLogger
using Dates
using DynamicPPL
using UUIDs
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
        throw(ErrorException("Failed to get object $objid: $(json["message"])"))
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

function withdata_logger(experiment_id::String, url::String, collector::DataCollector)
    logger = CoinferLogger(experiment_id, collector; endpoint=url)
    return logger
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
    if !isempty(xp_meta)
        data["xp_meta"] = xp_meta
    end
    headers = headers_with_token("Content-Type" => "application/json")
    res = HTTP.post(url, headers, JSON.json(data))
    return response_data(res)
end

function update_experiment_runinfo(exp_id, batch_id, run_id, status)
    if !is_sync()
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

function notify_after_sample(exp_id)
    !is_sync() && return nothing
    headers = headers_with_token("Content-Type" => "application/json")
    url = endpoint("sys", "/config")
    rsp = HTTP.get(url; headers=headers)
    url = JSON.parse(String(rsp.body))["data"]["run_model_url"]
    resp = HTTP.post(
        url;
        headers=["Content-Type" => "application/json"],
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

end
