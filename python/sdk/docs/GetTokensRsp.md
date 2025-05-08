# GetTokensRsp


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** |  | 
**token** | **str** |  | 
**token_name** | **str** |  | 
**token_desc** | **str** |  | 
**token_expire** | **datetime** |  | 

## Example

```python
from openapi_client.models.get_tokens_rsp import GetTokensRsp

# TODO update the JSON string below
json = "{}"
# create an instance of GetTokensRsp from a JSON string
get_tokens_rsp_instance = GetTokensRsp.from_json(json)
# print the JSON string representation of the object
print(GetTokensRsp.to_json())

# convert the object into a dict
get_tokens_rsp_dict = get_tokens_rsp_instance.to_dict()
# create an instance of GetTokensRsp from a dict
get_tokens_rsp_from_dict = GetTokensRsp.from_dict(get_tokens_rsp_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


