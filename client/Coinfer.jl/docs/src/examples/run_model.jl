# Run turing model using Coinfer
# Steps to run this example:
# 1. make sure you are currently in the Coinfer project root
#    and the project dependencies have properly instantiated.
# 2. make sure the `COINFER_AUTH_TOKEN` environment variable is correctly set
# 3. run: julia --project <this_file>

using Coinfer
using StableRNGs: StableRNG
using AbstractMCMC: MCMCThreads

endpoint = Coinfer.ServerlessBayes.Endpoints()

executor = "fargate"
project_dir = dirname(@__FILE__)

# this structure gives us the information to locate the model entrypoint
model = Coinfer.ServerlessBayes.create_model(
    Coinfer.ServerlessBayes.CloudFunction,
    "$project_dir/model_data",
    endpoint;
    entrance_file="mainfile.jl",
)

# run the sample in remote environment
model_id, experiment_id = Coinfer.ServerlessBayes.sample(
    StableRNG(123),
    # "M1E55362A",
    model,
    10,  # the iteration count. As a demo, we set this to a small value
    MCMCThreads(),  # the parallel algorithm
    2;  # the chain number
    use_script=true,
    executor=executor,
)
println(model_id, ' ', experiment_id)

model = Coinfer.ServerlessBayes.CloudFunction(;
    model_id=model_id, endpoint=endpoint, entrance_file="mainfile.jl", entrance_func="model"
)

# run the sample in remote environment for a specific model_id
model_id, experiment_id = Coinfer.ServerlessBayes.sample(
    StableRNG(123),
    model,
    10,  # the iteration count. As a demo, we set this to a small value
    MCMCThreads(),  # the parallel algorithm
    2;  # the chain number
    run_remotely=true,
    use_script=true,
    executor=executor,
)
println(model_id, ' ', experiment_id)

model = Coinfer.ServerlessBayes.LocalFunction(;
    project_dir="$project_dir/model_data",
    endpoint=endpoint,
    entrance_file="mainfile.jl",
    entrance_func="model",
)

# run the sample in local environment
Coinfer.ServerlessBayes.sample(
    StableRNG(123), model, 10, MCMCThreads(), 2; run_remotely=false
)
