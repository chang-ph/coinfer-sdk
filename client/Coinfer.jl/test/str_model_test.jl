using Coinfer

code = """
println("I am a String-Model!")
"""

local_model_1 = Coinfer.LocalModel(code)
@show local_model_1
#data = Coinfer.sample(local_model_1)
#@show data |> typeof

cloud_model_1 = Coinfer.register(local_model_1)
@show cloud_model_1

local_model_2 = Coinfer.as_local(cloud_model_1)
@show local_model_2
Coinfer.sample(local_model_2)
