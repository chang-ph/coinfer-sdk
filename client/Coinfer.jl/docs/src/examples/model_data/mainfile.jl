using DynamicPPL
using Turing

@model function gdemo(x, y)
    s ~ InverseGamma(2, 3)
    m ~ Normal(0, sqrt(s))
    x ~ Normal(m, sqrt(s))
    return y ~ Normal(m, sqrt(s))
end

function model(_input)
    _model = gdemo(1.5, 2)
    return _model, DynamicPPL.Sampler(NUTS(), _model)
end

function param_deserializer(str_val)
    # Do some form of transformation to construct you own data structure based on the string form param `str_val`
    return parse(Int, str_val) * 10
end

function to_evaluate(a, b, c)
    a = param_deserializer(a)
    println(a, b, c)
    return InverseGamma(2, 3)
end
