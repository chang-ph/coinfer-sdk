module CoinferLogger

import Base.Event
using Base.CoreLogging
using DataFrames
using HTTP
using JSON
using Logging
using Parameters
using TensorBoardLogger
using TuringCallbacks

export Server, User, Logger
export create_experiment, experiments

"""
    Server("http://dev.withdata.io")

The type represents a Withdata Server.
"""
@with_kw struct Server
    endpoint::String = "http://dev.withdata.io"
end

"""
    User(server, "an_authentication_token")

Specify which user to use on the server. The authentication token can be found on the user profile page on the server.
"""
struct User
    server::Server
    token::String
end

"""
    Experiment

Select experiment on the server. Generally, an experiment is created by calling `create_experiment` rather than constructed explicitly.
"""
mutable struct Experiment
    user::User
    id::String
end

"""
    Logger

Withdata's Logger, which sends sample data onto the server.
"""
mutable struct Logger <: TensorBoardLogger.AbstractLogger
    user::User
    experiment::Experiment
    global_step::Int
    step_increment::Int
    min_level::LogLevel
    ws::Ref{Any}
    event::Event
end

function Logger(
    user::User,
    exp::Experiment;
    purge_step::Union{Int,Nothing}=nothing,
    step_increment=1,
    min_level::LogLevel=Logging.Info,
)
    start_step = something(purge_step, 0)
    return Logger(
        user, exp, start_step, step_increment, min_level, Ref{Any}(nothing), Event()
    )
end

# Implement the AbstractLogger Interface
TensorBoardLogger.set_step!(lg::Logger, step) = lg.global_step = step
TensorBoardLogger.set_step_increment!(lg::Logger, Δstep) = lg.step_increment = Δstep
TensorBoardLogger.increment_step!(lg::Logger, Δ_Step) = lg.global_step += Δ_Step
function TuringCallbacks.increment_step!(lg::Logger, Δ_Step)
    return TensorBoardLogger.increment_step!(lg, Δ_Step)
end
TensorBoardLogger.step(lg::Logger) = lg.global_step
TensorBoardLogger.reset!(lg::Logger) = TensorBoardLogger.set_step!(lg, 0)
CoreLogging.catch_exceptions(lg::Logger) = false
CoreLogging.min_enabled_level(lg::Logger) = lg.min_level
CoreLogging.shouldlog(lg::Logger, level, _module, group, id) = true

function CoreLogging.handle_message(
    lg::Logger, level, message, _module, group, id, file, line; kwargs...
)
    log = Dict(
        :module => string(_module),
        :file => file,
        :line => line,
        :id => id,
        :group => group,
        :message => message,
        :level => level,
        :experiment_id => lg.experiment.id,
        :task_id => "",
        :data => nothing,
    )
    i_step = lg.step_increment # :log_step_increment default value
    if !isempty(kwargs)
        data = Vector{Pair{String,Any}}()
        for (key, val) in pairs(kwargs)
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

    if isempty(lg.user.server.endpoint)
        # calling @warn/info in handle_message causes recursive-calls
        # thus stackoverflow.
        println("#Warning# No endpoint provided in Logger, log ignored.")
        return nothing
    end
    return send_sample_ws(lg, log)
end

function Base.wait(lg::Logger)
    fin_sig = Dict("action" => "experiment:control", "data" => "finish")
    send_raw_ws(lg, fin_sig)
    wait(lg.event)
    reset(lg.event)
    ws = lg.ws[]
    lg.ws[] = nothing
    return WebSockets.close(ws)
end

function send_sample_http(lg, data)
    headers = [
        "Content-Type" => "application/json", "Authorization" => "bearer $(lg.user.token)"
    ]

    url = _endpoint(lg.user.server, :mcmc_pb_msg)
    body = JSON.json(data)
    resp = HTTP.post(url, headers, body)
    return _response_data(resp)
end

function send_raw_ws(lg, data)
    url = _endpoint(lg.user.server, :mcmc_ws_pub; res="/$(lg.experiment.id)")
    if lg.ws[] == nothing
        con = @task WebSockets.open(url) do ws
            lg.ws[] = ws
            for msg in ws
                dmsg = JSON.parse(msg)
                if get(dmsg, "action", "") == "experiment:control" &&
                    get(dmsg, "data", "") == "finish"
                    notify(lg.event)
                end
            end
        end
        schedule(con)
        while lg.ws[] == nothing
            yield()
        end
    end
    body = JSON.json(data)
    WebSockets.send(lg.ws[], body)
    return nothing
end

function send_sample_ws(lg, data)
    data = Dict("action" => "experiment:event", "data" => data)
    return send_raw_ws(lg, data)
end

"""
    create_experiment(user) -> Experiment

Create a new experiment on the server. With an experiment, one can create
a `Logger`, which delivers the sample data to that experiment.
"""
function create_experiment(user::User)
    url = _endpoint(user.server, :mcmc_object)
    data = Dict("object_type" => "experiment", "model_id" => "")
    body = JSON.json(data)
    headers = [
        "Content-Type" => "application/json", "Authorization" => "bearer $(user.token)"
    ]
    resp = HTTP.post(url, headers, body)
    exp = _response_data(resp)
    xid = exp["short_id"]
    return Experiment(user, xid)
end

"""
    fetch(xp::Experiment) -> Experiment

Fetch the sample data and log of the given experiment from the server.
"""
function Base.fetch(xp::Experiment)
    log_url = _endpoint(xp.user.server, :mcmc_object; res="/$(xp.id)?log=1")
    data_url = _endpoint(xp.user.server, :mcmc_object; res="/$(xp.id)?data=1")
    headers = ["Authorization" => "bearer $(xp.user.token)"]
    resp = HTTP.get(log_url, headers)
    log = String(resp.body)
    resp = HTTP.get(data_url, headers)
    sample_data = _response_data(resp)
    df = DataFrame(; [Symbol(k) => v for (k, v) in sample_data]...)
    return (df, log)
end

"""
    experiments(user) -> [Experiment]

Get all experiments on the server for the user.
"""
function experiments(user::User)
    url = _endpoint(user.server, :mcmc_object)
    headers = [
        "Content-Type" => "application/json", "Authorization" => "bearer $(user.token)"
    ]
    query = ["object_type" => "experiment", "page_size" => "9999"]
    resp = HTTP.get(url, headers; query=query)
    exps = _response_data(resp)["objects"]
    return [Experiment(user, exp["short_id"]) for exp in exps]
end

## internal functions

const COINFER_API_PATH = Dict(
    :mcmc_object => "mcmc/object",
    :mcmc_pb_msg => "mcmc/protobuf_message",
    :mcmc_ws_pub => "mcmc/ws/pub/object",
    :mcmc_ws_sub => "mcmc/ws/sub/object",
)

function _endpoint(srv::Server, name::Symbol; res="")
    haskey(COINFER_API_PATH, name) || error("No such API: $(name)")
    prefix = srv.endpoint
    path = COINFER_API_PATH[name]
    sep = (prefix[end] == '/') ? "" : "/"
    path = (isempty(path) || path[1] != '/') ? path : path[2:end]
    api = prefix * sep * path
    # append resource
    return isempty(res) ? api : api * res
end

function _response_data(resp)
    data = JSON.parse(String(resp.body))
    data["status"] != "ok" && error(data["message"])
    return data["data"]
end

end
