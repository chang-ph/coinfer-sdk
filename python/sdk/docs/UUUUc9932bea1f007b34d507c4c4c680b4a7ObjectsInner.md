# UUUUc9932bea1f007b34d507c4c4c680b4a7ObjectsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**object_type** | **str** |  | 
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
**id** | **int** |  | 
**content** | **object** |  | [optional] 
**tags** | [**List[DataTag]**](DataTag.md) | Data tags | 
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
**data_name** | **str** |  | [optional] 
**data_fmt** | **str** |  | [optional] 
**experiment_id** | **str** |  | [optional] 
**experiment_name** | **str** |  | [optional] 
**analyzer_id** | **str** |  | [optional] 
**analyzer_name** | **str** |  | [optional] 
**startup_script** | **str** |  | [optional] 
**settings** | **str** |  | [optional] 
**data_script** | **str** |  | [optional] 
**parsed_data_id** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.uuuuc9932bea1f007b34d507c4c4c680b4a7_objects_inner import UUUUc9932bea1f007b34d507c4c4c680b4a7ObjectsInner

# TODO update the JSON string below
json = "{}"
# create an instance of UUUUc9932bea1f007b34d507c4c4c680b4a7ObjectsInner from a JSON string
uuuuc9932bea1f007b34d507c4c4c680b4a7_objects_inner_instance = UUUUc9932bea1f007b34d507c4c4c680b4a7ObjectsInner.from_json(json)
# print the JSON string representation of the object
print(UUUUc9932bea1f007b34d507c4c4c680b4a7ObjectsInner.to_json())

# convert the object into a dict
uuuuc9932bea1f007b34d507c4c4c680b4a7_objects_inner_dict = uuuuc9932bea1f007b34d507c4c4c680b4a7_objects_inner_instance.to_dict()
# create an instance of UUUUc9932bea1f007b34d507c4c4c680b4a7ObjectsInner from a dict
uuuuc9932bea1f007b34d507c4c4c680b4a7_objects_inner_from_dict = UUUUc9932bea1f007b34d507c4c4c680b4a7ObjectsInner.from_dict(uuuuc9932bea1f007b34d507c4c4c680b4a7_objects_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


