# Data1


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**object_type** | **str** |  | 
**short_id** | **str** |  | 
**name** | **str** |  | 
**model_id** | **str** |  | [optional] [default to '']
**status** | **str** |  | 
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
**url** | **str** |  | 
**progress** | **str** |  | 
**message** | **str** |  | [optional] [default to '']
**logs** | **List[List[object]]** |  | 

## Example

```python
from openapi_client.models.data1 import Data1

# TODO update the JSON string below
json = "{}"
# create an instance of Data1 from a JSON string
data1_instance = Data1.from_json(json)
# print the JSON string representation of the object
print(Data1.to_json())

# convert the object into a dict
data1_dict = data1_instance.to_dict()
# create an instance of Data1 from a dict
data1_from_dict = Data1.from_dict(data1_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


