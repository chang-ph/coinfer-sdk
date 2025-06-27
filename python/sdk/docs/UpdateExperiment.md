# UpdateExperiment


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**object_type** | **str** |  | 
**action** | **str** |  | [optional] 
**meta** | **Dict[str, object]** |  | [optional] 
**status** | **str** |  | [optional] 
**n_chains** | **int** |  | [optional] [default to 0]
**n_variables** | **int** |  | [optional] [default to 0]
**n_samples** | **int** |  | [optional] [default to 0]
**sample_update_time** | **datetime** |  | [optional] 

## Example

```python
from openapi_client.models.update_experiment import UpdateExperiment

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateExperiment from a JSON string
update_experiment_instance = UpdateExperiment.from_json(json)
# print the JSON string representation of the object
print(UpdateExperiment.to_json())

# convert the object into a dict
update_experiment_dict = update_experiment_instance.to_dict()
# create an instance of UpdateExperiment from a dict
update_experiment_from_dict = UpdateExperiment.from_dict(update_experiment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


