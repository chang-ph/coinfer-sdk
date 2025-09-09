# UUUU256545f429a0ce36bfec4159b7df9cf4ObjectsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**short_id** | **str** |  | 
**name** | **str** |  | 
**model_id** | **str** |  | 
**status** | **str** |  | 
**meta** | [**ModelMetaInRsp**](ModelMetaInRsp.md) |  | 
**n_chains** | **int** |  | 
**n_variables** | **int** |  | 
**n_samples** | **int** |  | 
**sample_update_time** | **datetime** |  | 
**run_on** | **str** |  | 
**share_info** | [**List[ShareInfoModel]**](ShareInfoModel.md) |  | [optional] 
**model_name** | **str** |  | 
**workflow_id** | **str** |  | [optional] [default to '']
**workflow_name** | **str** |  | [optional] [default to '']
**object_type** | **str** |  | 
**id** | **int** |  | 
**content** | **object** |  | [optional] 
**tags** | **List[str]** |  | 
**lambda_image_url** | **str** |  | [optional] 
**lambda_image_name** | **str** |  | [optional] 
**created_at** | **datetime** |  | 
**lang** | **str** |  | 
**code** | **str** |  | 
**token** | **str** |  | 
**user_id** | **int** |  | 
**object1_id** | **str** |  | 
**object2_id** | **str** |  | 
**description** | **str** |  | 
**updated_at** | **datetime** |  | 
**path** | **str** |  | [optional] [default to '']
**fmt** | **str** |  | [optional] [default to 'raw']
**data_id** | **str** |  | [optional] 
**data_name** | **str** |  | [optional] [default to '']

## Example

```python
from openapi_client.models.uuuu256545f429a0ce36bfec4159b7df9cf4_objects_inner import UUUU256545f429a0ce36bfec4159b7df9cf4ObjectsInner

# TODO update the JSON string below
json = "{}"
# create an instance of UUUU256545f429a0ce36bfec4159b7df9cf4ObjectsInner from a JSON string
uuuu256545f429a0ce36bfec4159b7df9cf4_objects_inner_instance = UUUU256545f429a0ce36bfec4159b7df9cf4ObjectsInner.from_json(json)
# print the JSON string representation of the object
print(UUUU256545f429a0ce36bfec4159b7df9cf4ObjectsInner.to_json())

# convert the object into a dict
uuuu256545f429a0ce36bfec4159b7df9cf4_objects_inner_dict = uuuu256545f429a0ce36bfec4159b7df9cf4_objects_inner_instance.to_dict()
# create an instance of UUUU256545f429a0ce36bfec4159b7df9cf4ObjectsInner from a dict
uuuu256545f429a0ce36bfec4159b7df9cf4_objects_inner_from_dict = UUUU256545f429a0ce36bfec4159b7df9cf4ObjectsInner.from_dict(uuuu256545f429a0ce36bfec4159b7df9cf4_objects_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


