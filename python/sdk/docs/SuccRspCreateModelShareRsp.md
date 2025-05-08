# SuccRspCreateModelShareRsp


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **str** |  | 
**data** | [**CreateModelShareRsp**](CreateModelShareRsp.md) |  | 

## Example

```python
from openapi_client.models.succ_rsp_create_model_share_rsp import SuccRspCreateModelShareRsp

# TODO update the JSON string below
json = "{}"
# create an instance of SuccRspCreateModelShareRsp from a JSON string
succ_rsp_create_model_share_rsp_instance = SuccRspCreateModelShareRsp.from_json(json)
# print the JSON string representation of the object
print(SuccRspCreateModelShareRsp.to_json())

# convert the object into a dict
succ_rsp_create_model_share_rsp_dict = succ_rsp_create_model_share_rsp_instance.to_dict()
# create an instance of SuccRspCreateModelShareRsp from a dict
succ_rsp_create_model_share_rsp_from_dict = SuccRspCreateModelShareRsp.from_dict(succ_rsp_create_model_share_rsp_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


