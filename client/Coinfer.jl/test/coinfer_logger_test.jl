using Turing
using TensorBoardLogger
using TuringCallbacks

using CoinferLogger

ep = "http://eb.dev.withdata.io"
server = Server(; endpoint=ep)
user = User(server, get(ENV, "COINFER_AUTH_TOKEN", ""))
exp = create_experiment(user)
logger = Logger(user, exp)

callback = TensorBoardCallback(logger)

@model function gdemo(x, y)
    s ~ InverseGamma(2, 3)
    m ~ Normal(0, sqrt(s))
    x ~ Normal(m, sqrt(s))
    return y ~ Normal(m, sqrt(s))
end

model = gdemo(1.5, 2)
chn = Turing.sample(model, NUTS(), 200; callback=callback, save_state=true)
wait(logger)
@show size(fetch(exp)[1])

chn_resumed = Turing.Inference.resume(chn, 200; callback=callback)
wait(logger)
@show size(fetch(exp)[1])
