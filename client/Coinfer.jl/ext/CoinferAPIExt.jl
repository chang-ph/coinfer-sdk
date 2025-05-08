module CoinferAPIExt
using HTTP
using CSV
using DataFrames
using Dates: Minute, Second, now
using Coinfer
using Coinfer.ServerlessBayes
using Coinfer.ServerlessBayes:
    endpoint, headers_with_token, response_data, Experiment, Model, save_model
using DocStringExtensions: SIGNATURES

"""
list all the experiments including those shared from others

$(SIGNATURES)

- **page_size**:: the max number of items to return in each page
- **page_no**:: the page window offset
"""
function Coinfer.ServerlessBayes.API.list_experiment(; page_size=10, page_no=1)
    url = endpoint("mcmc", "/object")
    headers = headers_with_token()
    query = Dict(
        "object_type" => "experiment",
        "page_no" => page_no,
        "page_size" => page_size,
        "with_share_info" => true,
    )
    resp = HTTP.get(url, headers; query=query)
    data = response_data(resp)
    return data
end

"""
list all the models including those shared from others

$(SIGNATURES)

- **page_size**:: the max number of items to return in each page
- **page_no**:: the page window offset
"""
function Coinfer.ServerlessBayes.API.list_model(; page_size=10, page_no=1)
    url = endpoint("turing", "/object")
    headers = headers_with_token()
    query = Dict("page_no" => page_no, "page_size" => page_size, "with_share_info" => true)
    resp = HTTP.get(url, headers; query=query)
    data = response_data(resp)
    return data
end

"""
get model data

$(SIGNATURES)

- **model**:: The model ID
- **outpath**:: The path to a folder where model files are saved into.
"""
function Coinfer.ServerlessBayes.API.get_model_data(model::Model, outpath)
    url = endpoint("turing", "/object/$(model.model_id)")
    headers = headers_with_token()
    resp = HTTP.get(url; headers=headers)
    data = response_data(resp)
    return save_model(data["content"]["tree"], outpath)
end

"""
get sample data

$(SIGNATURES)

This API blocks until the data is generated. The data will be in CSV format.

- **exp**:: The experiment ID
- **max_wait**:: The max waiting time for the data to be ready
- **interval**:: The interval to pull the API for generating status
- **sink**:: If sink is nothing, this function returns the download url of the data,
             else it can be any type which is supported by the same name param in the `CSV.read`.
"""
function Coinfer.ServerlessBayes.API.get_sample_data(
    exp::Experiment; max_wait=Minute(20), interval=Second(3), sink=nothing
)
    url = endpoint("mcmc", "/experiment/$(exp.experiment_id)/sampledata/csv")
    headers = headers_with_token()
    start_time = now()
    data = Dict()
    while true
        resp = HTTP.get(url, headers)
        data = response_data(resp)
        data["progress"] == "done" && break
        now() - start_time > max_wait && error("Timeout")
        sleep(interval)
    end
    url = data["url"]
    if sink === nothing
        return url
    else
        return CSV.read(download(url), sink; header=["chain", "name", "var"])
    end
end
end
