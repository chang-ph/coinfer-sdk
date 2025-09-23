using Pkg
# Pkg.instantiate()
Pkg.develop(; path=ARGS[1])

using Coinfer

entrance_func = Coinfer.ServerlessBayes.get_entrance()
entrance_args = Coinfer.ServerlessBayes.get_entrance_args()

rets = entrance_func(entrance_args...)
ret = if (rets isa Tuple)
    rets[1]
else
    rets
end
if Coinfer.ServerlessBayes.is_model(ret)
    m, sampler = Coinfer.ServerlessBayes.adapt_model_return(rets)
    sample_args = Coinfer.ServerlessBayes.get_sample_args(m, sampler)
    sample_kwargs = Coinfer.ServerlessBayes.get_sample_kwargs()
    if isempty(sample_args)
        @info "using default args"
        sample_args = Coinfer.ServerlessBayes.default_sampler_args(
            m, sampler, Coinfer.ServerlessBayes.iteration_count()
        )
    end

    Coinfer.ServerlessBayes.sample(sample_args...; sample_kwargs...)
else
    println("ret: ", Coinfer.ServerlessBayes.json(rets))
end
