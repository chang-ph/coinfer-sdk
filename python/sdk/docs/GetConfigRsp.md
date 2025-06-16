# GetConfigRsp


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**run_model_url** | **str** |  | 
**max_upload_sample_size** | **int** |  | 
**max_upload_sample_file** | **int** |  | 

## Example

```python
from openapi_client.models.get_config_rsp import GetConfigRsp

# TODO update the JSON string below
json = "{}"
# create an instance of GetConfigRsp from a JSON string
get_config_rsp_instance = GetConfigRsp.from_json(json)
# print the JSON string representation of the object
print(GetConfigRsp.to_json())

# convert the object into a dict
get_config_rsp_dict = get_config_rsp_instance.to_dict()
# create an instance of GetConfigRsp from a dict
get_config_rsp_from_dict = GetConfigRsp.from_dict(get_config_rsp_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


