# SuccRspAuth0ConfigRsp


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **str** |  | 
**data** | [**Auth0ConfigRsp**](Auth0ConfigRsp.md) |  | 

## Example

```python
from openapi_client.models.succ_rsp_auth0_config_rsp import SuccRspAuth0ConfigRsp

# TODO update the JSON string below
json = "{}"
# create an instance of SuccRspAuth0ConfigRsp from a JSON string
succ_rsp_auth0_config_rsp_instance = SuccRspAuth0ConfigRsp.from_json(json)
# print the JSON string representation of the object
print(SuccRspAuth0ConfigRsp.to_json())

# convert the object into a dict
succ_rsp_auth0_config_rsp_dict = succ_rsp_auth0_config_rsp_instance.to_dict()
# create an instance of SuccRspAuth0ConfigRsp from a dict
succ_rsp_auth0_config_rsp_from_dict = SuccRspAuth0ConfigRsp.from_dict(succ_rsp_auth0_config_rsp_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


