# Data2


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
**require_password** | **bool** |  | 

## Example

```python
from openapi_client.models.data2 import Data2

# TODO update the JSON string below
json = "{}"
# create an instance of Data2 from a JSON string
data2_instance = Data2.from_json(json)
# print the JSON string representation of the object
print(Data2.to_json())

# convert the object into a dict
data2_dict = data2_instance.to_dict()
# create an instance of Data2 from a dict
data2_from_dict = Data2.from_dict(data2_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


