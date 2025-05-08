module test_julia_sdk
using Pkg
Pkg.develop(;path="../sdk")

using APIClient

endpoint = get(ENV, "HTTP_ENDPOINT", nothing)
if endpoint === nothing
    error("HTTP_ENDPOINT not set")
end

client = APIClient.OpenAPI.Clients.Client(endpoint)
auth_api = APIClient.AuthorizationApi(client)
user_login_params = APIClient.UserLogin("admin", "admin")
rsp = APIClient.user_login(auth_api, user_login_params)
println(rsp)
println(typeof(rsp[1]), typeof(rsp[2]))
token = rsp[1].data.tokens[1]
println(token)

auth_client = APIClient.OpenAPI.Clients.Client(endpoint; headers=Dict("Authorization"=> "Bearer $(token)"))
model_api = APIClient.ModelApi(auth_client)
meta = APIClient.ModelMeta()
model_content = APIClient.ModelContent(meta, APIClient.dir_to_UMF("../../test_data/simple_model"))
create_model_param = APIClient.CreateModel("", "test_model", model_content)
rsp = APIClient.create_model(model_api, create_model_param)
println(rsp)
model_id = rsp[1].data.short_id
println(model_id)

rsp = APIClient.list_models(model_api)
@assert any(item.short_id == model_id for item in rsp[1].data.objects)

share_api = APIClient.ShareApi(auth_client)
share_password = "123"
create_share_param = APIClient.CreateModelShare(share_password, "")
rsp = APIClient.create_model_share(share_api, model_id, create_share_param)
share_id = rsp[1].data.id
println(share_id)

share_auth_client = APIClient.OpenAPI.Clients.Client(endpoint; headers=Dict("X-Share-Password"=>share_password))
share_auth_model_api = APIClient.ModelApi(share_auth_client)
rsp = APIClient.view_model(share_auth_model_api, model_id)
print(rsp[1].data.short_id)

APIClient.delete_model_share(share_api, string(share_id))
APIClient.batch_delete_model(model_api; objids=[model_id])
end # module test_julia_sdk
