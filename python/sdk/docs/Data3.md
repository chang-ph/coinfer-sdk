# Data3


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**object_type** | **str** |  | 
**short_id** | **str** |  | 
**name** | **str** |  | 
**model_id** | **str** |  | [optional] [default to '']
**status** | **str** |  | [optional] [default to '']
**meta** | **object** |  | [optional] 
**n_chains** | **int** |  | [optional] [default to 0]
**n_variables** | **int** |  | [optional] [default to 0]
**n_samples** | **int** |  | [optional] [default to 0]
**sample_update_time** | **datetime** |  | [optional] 
**run_on** | **str** |  | [optional] [default to '']
**input** | **str** |  | [optional] 
**output** | **str** |  | [optional] 
**share_info** | [**List[ViewModelShareInfo]**](ViewModelShareInfo.md) |  | [optional] 
**model_name** | **str** |  | 
**id** | **int** |  | 
**env** | **str** |  | 
**content** | **object** |  | [optional] 

## Example

```python
from openapi_client.models.data3 import Data3

# TODO update the JSON string below
json = "{}"
# create an instance of Data3 from a JSON string
data3_instance = Data3.from_json(json)
# print the JSON string representation of the object
print(Data3.to_json())

# convert the object into a dict
data3_dict = data3_instance.to_dict()
# create an instance of Data3 from a dict
data3_from_dict = Data3.from_dict(data3_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


