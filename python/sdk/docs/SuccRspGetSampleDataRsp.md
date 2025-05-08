# SuccRspGetSampleDataRsp


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **str** |  | 
**data** | [**GetSampleDataRsp**](GetSampleDataRsp.md) |  | 

## Example

```python
from openapi_client.models.succ_rsp_get_sample_data_rsp import SuccRspGetSampleDataRsp

# TODO update the JSON string below
json = "{}"
# create an instance of SuccRspGetSampleDataRsp from a JSON string
succ_rsp_get_sample_data_rsp_instance = SuccRspGetSampleDataRsp.from_json(json)
# print the JSON string representation of the object
print(SuccRspGetSampleDataRsp.to_json())

# convert the object into a dict
succ_rsp_get_sample_data_rsp_dict = succ_rsp_get_sample_data_rsp_instance.to_dict()
# create an instance of SuccRspGetSampleDataRsp from a dict
succ_rsp_get_sample_data_rsp_from_dict = SuccRspGetSampleDataRsp.from_dict(succ_rsp_get_sample_data_rsp_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


