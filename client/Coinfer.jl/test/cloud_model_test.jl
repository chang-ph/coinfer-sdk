using Coinfer

c = Coinfer.CloudModel("M0D0B4B18") # change me
d = Coinfer.sample(c; cloud_provider=:withdata)
@show d
@show Coinfer.check(d)
