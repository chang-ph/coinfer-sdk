# Run any function using Coinfer
# Steps to run this example:
# 1. make sure you are currently in the Coinfer project root
#    and the project dependencies have properly instantiated.
# 2. make sure the `COINFER_AUTH_TOKEN` environment variable is correctly set
# 3. run: julia --project <this_file>

using Coinfer
using StableRNGs

endpoint = Coinfer.ServerlessBayes.Endpoints()

# params in serialized forms
entrance_args = [string(5432), "serialized_param2", "serialized_param3"]

project_dir = dirname(@__FILE__)
executor = "fargate"

# this structure tells us where the function to be evaluated is located, its project, its file and its name
local_function = Coinfer.ServerlessBayes.LocalFunction(;
    project_dir="$project_dir/model_data",
    entrance_file="mainfile.jl",  # entrance_file and entrance_func may be customized
    entrance_func="to_evaluate",
    endpoint=endpoint,
)

# evaluate the function in remote environment
Coinfer.ServerlessBayes.evaluate(
    local_function; entrance_args=entrance_args, executor=executor
)

anonymouse_cloud_function = Coinfer.ServerlessBayes.AnonymousCloudFunction(;
    project_dir="$project_dir/model_data",
    entrance_file="mainfile.jl",  # entrance_file and entrance_func may be customized
    entrance_func="to_evaluate",
    endpoint=endpoint,
)

# evaluate the function in remote environment
model_id, experiment_id = Coinfer.ServerlessBayes.evaluate(
    anonymouse_cloud_function; entrance_args=entrance_args, executor=executor
)

cloud_function = Coinfer.ServerlessBayes.CloudFunction(;
    project_dir="$project_dir/model_data",
    entrance_file="mainfile.jl",  # entrance_file and entrance_func may be customized
    entrance_func="to_evaluate",
    endpoint=endpoint,
)

# evaluate the function in remote environment
model_id, experiment_id = Coinfer.ServerlessBayes.evaluate(
    cloud_function; entrance_args=entrance_args, executor=executor
)
