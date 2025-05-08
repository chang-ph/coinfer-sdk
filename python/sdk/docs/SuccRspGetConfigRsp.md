# SuccRspGetConfigRsp


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **str** |  | 
**data** | [**GetConfigRsp**](GetConfigRsp.md) |  | 

## Example

```python
from openapi_client.models.succ_rsp_get_config_rsp import SuccRspGetConfigRsp

# TODO update the JSON string below
json = "{}"
# create an instance of SuccRspGetConfigRsp from a JSON string
succ_rsp_get_config_rsp_instance = SuccRspGetConfigRsp.from_json(json)
# print the JSON string representation of the object
print(SuccRspGetConfigRsp.to_json())

# convert the object into a dict
succ_rsp_get_config_rsp_dict = succ_rsp_get_config_rsp_instance.to_dict()
# create an instance of SuccRspGetConfigRsp from a dict
succ_rsp_get_config_rsp_from_dict = SuccRspGetConfigRsp.from_dict(succ_rsp_get_config_rsp_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


