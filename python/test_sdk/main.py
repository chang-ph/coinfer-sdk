import os
from pprint import pprint

import openapi_client.coinfer_client as client
from openapi_client.utils.model_helper import dir_to_UMF
from openapi_client.models.create_model import CreateModel
from openapi_client.models.create_model_share import CreateModelShare
from openapi_client.models.model_content import ModelContent
from openapi_client.models.model_meta import ModelMeta
from openapi_client.models.user_login import UserLogin


endpoint = os.environ.get('HTTP_ENDPOINT')
if not endpoint:
    raise RuntimeError("HTTP_ENDPOINT not set")

clt = client.Client(host=endpoint)
authorization_api = clt.authorization_api()

login_params = UserLogin(username="admin", password="admin")
rsp = authorization_api.user_login(login_params)
pprint(rsp)
token = rsp.data.tokens[0]

clt.set_token(token)
model_api = clt.model_api()

# create new model
meta = ModelMeta()
model_content = ModelContent(meta=meta, tree=dir_to_UMF("../test_data/simple_model"))
create_model_param = CreateModel(name="test_model", content=model_content)
rsp = model_api.create_model(create_model_param)
model_id = rsp.data.short_id
print(model_id)

# list modesl
rsp = model_api.list_models()
assert any(item.short_id == model_id for item in rsp.data.objects)

# share the model
share_api = clt.share_api()
share_password = '123'
create_share_param = CreateModelShare(password=share_password)
rsp = share_api.create_model_share(model_id=model_id, create_model_share=create_share_param)
share_id = rsp.data.id
print(share_id)

# access shared model with password
unauth_clt = client.Client(host=endpoint, share_password=share_password)
unauth_model_api = unauth_clt.model_api()
rsp = unauth_model_api.view_model(model_id)
print(rsp.data.short_id)


share_api.delete_model_share(share_id=str(share_id))
model_api.batch_delete_model(objids=[model_id])
