# SuccRspAuth0LoginRsp


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **str** |  | 
**data** | [**Auth0LoginRsp**](Auth0LoginRsp.md) |  | 

## Example

```python
from openapi_client.models.succ_rsp_auth0_login_rsp import SuccRspAuth0LoginRsp

# TODO update the JSON string below
json = "{}"
# create an instance of SuccRspAuth0LoginRsp from a JSON string
succ_rsp_auth0_login_rsp_instance = SuccRspAuth0LoginRsp.from_json(json)
# print the JSON string representation of the object
print(SuccRspAuth0LoginRsp.to_json())

# convert the object into a dict
succ_rsp_auth0_login_rsp_dict = succ_rsp_auth0_login_rsp_instance.to_dict()
# create an instance of SuccRspAuth0LoginRsp from a dict
succ_rsp_auth0_login_rsp_from_dict = SuccRspAuth0LoginRsp.from_dict(succ_rsp_auth0_login_rsp_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


