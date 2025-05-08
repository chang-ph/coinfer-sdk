using Mocking
using Coinfer
using HTTP
using JSON
using Turing
using DynamicPPL
using StableRNGs

Mocking.activate()

struct HTTPResp
    body::String
end
patches = [
    @patch function HTTP.post(args...; kwargs...)
        return HTTPResp(
            JSON.json(Dict("status" => "ok", "data" => Dict("short_id" => "X999")))
        )
    end
    @patch function HTTP.get(args...; kwargs...)
        return HTTPResp(
            JSON.json(
                Dict(
                    "status" => "ok",
                    "data" => Dict("short_id" => "X999", "fmt" => "", "path" => ""),
                ),
            ),
        )
    end
    @patch function download(args...; kwargs...)
        return ""
    end
]

@model function gdemo(x, y)
    s ~ InverseGamma(2, 3)
    m ~ Normal(0, sqrt(s))
    x ~ Normal(m, sqrt(s))
    return y ~ Normal(m, sqrt(s))
end;

function model(_input)
    _model = gdemo(1.5, 2)
    return _model, DynamicPPL.Sampler(NUTS(), _model)
end

@testset "run_model tests" begin
    withenv("IS_CLOUD" => "") do
        apply(patches) do
            m, sampler = model(nothing)
            Coinfer.ServerlessBayes.inner_sample(
                StableRNG(123), m, sampler, Coinfer.ServerlessBayes.iteration_count()
            )
        end
    end
end
