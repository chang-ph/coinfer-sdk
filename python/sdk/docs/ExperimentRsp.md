# ExperimentRsp


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**object_type** | **str** |  | 
**short_id** | **str** |  | [optional] [default to '']
**name** | **str** |  | [optional] [default to '']
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
**share_info** | [**List[ShareInfoModel]**](ShareInfoModel.md) |  | [optional] 
**model_name** | **str** |  | 

## Example

```python
from openapi_client.models.experiment_rsp import ExperimentRsp

# TODO update the JSON string below
json = "{}"
# create an instance of ExperimentRsp from a JSON string
experiment_rsp_instance = ExperimentRsp.from_json(json)
# print the JSON string representation of the object
print(ExperimentRsp.to_json())

# convert the object into a dict
experiment_rsp_dict = experiment_rsp_instance.to_dict()
# create an instance of ExperimentRsp from a dict
experiment_rsp_from_dict = ExperimentRsp.from_dict(experiment_rsp_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


