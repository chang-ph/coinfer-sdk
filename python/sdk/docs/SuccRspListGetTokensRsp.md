# SuccRspListGetTokensRsp


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **str** |  | 
**data** | [**List[GetTokensRsp]**](GetTokensRsp.md) |  | 

## Example

```python
from openapi_client.models.succ_rsp_list_get_tokens_rsp import SuccRspListGetTokensRsp

# TODO update the JSON string below
json = "{}"
# create an instance of SuccRspListGetTokensRsp from a JSON string
succ_rsp_list_get_tokens_rsp_instance = SuccRspListGetTokensRsp.from_json(json)
# print the JSON string representation of the object
print(SuccRspListGetTokensRsp.to_json())

# convert the object into a dict
succ_rsp_list_get_tokens_rsp_dict = succ_rsp_list_get_tokens_rsp_instance.to_dict()
# create an instance of SuccRspListGetTokensRsp from a dict
succ_rsp_list_get_tokens_rsp_from_dict = SuccRspListGetTokensRsp.from_dict(succ_rsp_list_get_tokens_rsp_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


