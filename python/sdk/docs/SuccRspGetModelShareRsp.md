# SuccRspGetModelShareRsp


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **str** |  | 
**data** | [**GetModelShareRsp**](GetModelShareRsp.md) |  | 

## Example

```python
from openapi_client.models.succ_rsp_get_model_share_rsp import SuccRspGetModelShareRsp

# TODO update the JSON string below
json = "{}"
# create an instance of SuccRspGetModelShareRsp from a JSON string
succ_rsp_get_model_share_rsp_instance = SuccRspGetModelShareRsp.from_json(json)
# print the JSON string representation of the object
print(SuccRspGetModelShareRsp.to_json())

# convert the object into a dict
succ_rsp_get_model_share_rsp_dict = succ_rsp_get_model_share_rsp_instance.to_dict()
# create an instance of SuccRspGetModelShareRsp from a dict
succ_rsp_get_model_share_rsp_from_dict = SuccRspGetModelShareRsp.from_dict(succ_rsp_get_model_share_rsp_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


