using Coinfer

# Coinfer.set_token("45c1c39b-12f8-484b-b2b9-5e7864aa72ad")

path = realpath(joinpath(@__DIR__, "../model-template"))

local_model_1 = Coinfer.as_withdata(path, ["main.jl", "rugged.csv"])
@show local_model_1
data = Coinfer.sample(local_model_1)
@show typeof(data)

cloud_model_1 = Coinfer.register(local_model_1)
@show cloud_model_1

local_model_2 = Coinfer.as_local(cloud_model_1)
@show local_model_2
Coinfer.sample(local_model_2)
