# Run turing model using Coinfer with different chain name and chain number
# Steps to run this example:
# 1. make sure you are currently in the Coinfer project root
#    and the project dependencies have properly instantiated.
# 2. make sure the `COINFER_AUTH_TOKEN` environment variable is correctly set
# 3. run: julia --project <this_file>

using HTTP
using JSON
using Coinfer
using StableRNGs: StableRNG
using AbstractMCMC: MCMCSerial

project_dir = dirname(@__FILE__)
executor = "fargate"

# this structure gives us the information to locate the model entrypoint
model = Coinfer.ServerlessBayes.AnonymousCloudFunction(;
    project_dir="$project_dir/model_data",
    entrance_file="mainfile.jl",
    entrance_func="model",
)

# run a new experiment with the given model. generate sample data in 1 chain.
chain_name = "mychain"
println("sampling with experiment_id=, chain_name=$chain_name")
model_id, experiment_id = Coinfer.ServerlessBayes.sample(
    StableRNG(123),
    model,
    10,  # the iteration count. As a demo, we set this to a small value
    MCMCSerial(),  # the parallel algorithm
    1;  # the chain number
    chain_name=chain_name,
    executor=executor,
)
Coinfer.ServerlessBayes.wait_experiment(experiment_id)

# run the above experiment again. generate sample data in another chain.
chain_name = "another chain"
println("sampling with experiment_id=$(experiment_id), chain_name=$chain_name")
model_id, experiment_id = Coinfer.ServerlessBayes.sample(
    StableRNG(123),
    model,
    10,
    MCMCSerial(),
    1;
    experiment_id=experiment_id,
    chain_name=chain_name,
    executor=executor,
)
Coinfer.ServerlessBayes.wait_experiment(experiment_id)

# run the above experiment again. append sample data to an existing chain.
chain_name = "mychain"
println("sampling with experiment_id=$(experiment_id), chain_name=$chain_name")
model_id, experiment_id = Coinfer.ServerlessBayes.sample(
    StableRNG(123),
    model,
    10,
    MCMCSerial(),
    1;
    experiment_id=experiment_id,
    chain_name=chain_name,
    executor=executor,
)
Coinfer.ServerlessBayes.wait_experiment(experiment_id)

# Run the above experiment again. This time we specify a different chain_name but with chain number greater than 1.
# The chain_name will be used as the prefix. The resulting chain_name will be "$(chain_name)1", $(chain_name)2"...
chain_name = "yetanotherchain"
println(
    "sampling with experiment_id=$(experiment_id), chain_name=$chain_name, multiple chain"
)
model_id, experiment_id = Coinfer.ServerlessBayes.sample(
    StableRNG(123),
    model,
    10,
    MCMCSerial(),
    2;
    experiment_id=experiment_id,
    chain_name=chain_name,
    executor=executor,
)
Coinfer.ServerlessBayes.wait_experiment(experiment_id)
