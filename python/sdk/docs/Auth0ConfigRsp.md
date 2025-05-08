# Auth0ConfigRsp


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**domain** | **str** |  | 
**client_id** | **str** |  | 

## Example

```python
from openapi_client.models.auth0_config_rsp import Auth0ConfigRsp

# TODO update the JSON string below
json = "{}"
# create an instance of Auth0ConfigRsp from a JSON string
auth0_config_rsp_instance = Auth0ConfigRsp.from_json(json)
# print the JSON string representation of the object
print(Auth0ConfigRsp.to_json())

# convert the object into a dict
auth0_config_rsp_dict = auth0_config_rsp_instance.to_dict()
# create an instance of Auth0ConfigRsp from a dict
auth0_config_rsp_from_dict = Auth0ConfigRsp.from_dict(auth0_config_rsp_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


