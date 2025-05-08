using Coinfer

path = realpath(joinpath(@__DIR__, "../model-template"))
file = joinpath(path, "rugged.csv")
data = Coinfer.as_withdata(file)
@show data

cloud_data = Coinfer.register(data)
@show cloud_data

local_data = Coinfer.as_local(cloud_data)
@show local_data
