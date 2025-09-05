# Data2


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**object_type** | **str** |  | 
**short_id** | **str** |  | 
**name** | **str** |  | 
**model_id** | **str** |  | 
**status** | **str** |  | 
**meta** | [**ModelMetaInRsp**](ModelMetaInRsp.md) |  | 
**n_chains** | **int** |  | [optional] [default to 0]
**n_variables** | **int** |  | [optional] [default to 0]
**n_samples** | **int** |  | [optional] [default to 0]
**sample_update_time** | **datetime** |  | [optional] 
**run_on** | **str** |  | [optional] [default to '']
**input** | **str** |  | [optional] 
**output** | **str** |  | [optional] 
**share_info** | [**List[ShareInfoModel]**](ShareInfoModel.md) |  | [optional] 
**model_name** | **str** |  | 
**id** | **int** |  | 
**content** | **object** |  | [optional] 
**tags** | **List[str]** |  | 
**lambda_image_url** | **str** |  | [optional] 
**lambda_image_name** | **str** |  | [optional] 
**require_password** | **bool** |  | 
**url** | **str** |  | 
**progress** | **str** |  | 
**message** | **str** |  | [optional] [default to '']
**logs** | **List[List[object]]** |  | 
**description** | **str** |  | 
**created_at** | **datetime** |  | 
**updated_at** | **datetime** |  | 
**path** | **str** |  | [optional] [default to '']
**fmt** | **str** |  | [optional] [default to 'raw']
**data_id** | **str** |  | [optional] 
**data_name** | **str** |  | [optional] [default to '']

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


