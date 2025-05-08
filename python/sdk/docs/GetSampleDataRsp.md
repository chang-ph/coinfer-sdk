# GetSampleDataRsp


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**url** | **str** |  | [optional] 
**progress** | **str** |  | 
**message** | **str** |  | [optional] [default to '']

## Example

```python
from openapi_client.models.get_sample_data_rsp import GetSampleDataRsp

# TODO update the JSON string below
json = "{}"
# create an instance of GetSampleDataRsp from a JSON string
get_sample_data_rsp_instance = GetSampleDataRsp.from_json(json)
# print the JSON string representation of the object
print(GetSampleDataRsp.to_json())

# convert the object into a dict
get_sample_data_rsp_dict = get_sample_data_rsp_instance.to_dict()
# create an instance of GetSampleDataRsp from a dict
get_sample_data_rsp_from_dict = GetSampleDataRsp.from_dict(get_sample_data_rsp_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


