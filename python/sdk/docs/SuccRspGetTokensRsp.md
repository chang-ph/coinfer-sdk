# SuccRspGetTokensRsp


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **str** |  | 
**data** | [**GetTokensRsp**](GetTokensRsp.md) |  | 

## Example

```python
from openapi_client.models.succ_rsp_get_tokens_rsp import SuccRspGetTokensRsp

# TODO update the JSON string below
json = "{}"
# create an instance of SuccRspGetTokensRsp from a JSON string
succ_rsp_get_tokens_rsp_instance = SuccRspGetTokensRsp.from_json(json)
# print the JSON string representation of the object
print(SuccRspGetTokensRsp.to_json())

# convert the object into a dict
succ_rsp_get_tokens_rsp_dict = succ_rsp_get_tokens_rsp_instance.to_dict()
# create an instance of SuccRspGetTokensRsp from a dict
succ_rsp_get_tokens_rsp_from_dict = SuccRspGetTokensRsp.from_dict(succ_rsp_get_tokens_rsp_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


