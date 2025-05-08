using Coinfer

path = realpath(joinpath(@__DIR__, "../model-template"))

local_model_1 = Coinfer.as_withdata(path, ["main.jl", "rugged.csv"])
@show local_model_1
env = Coinfer.Env(local_model_1)
@show env

Coinfer.register(env)
@show env
