# BatchDeleteExperiment


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**objids** | **List[str]** |  | [optional] 
**model_ids** | **List[str]** |  | [optional] 

## Example

```python
from openapi_client.models.batch_delete_experiment import BatchDeleteExperiment

# TODO update the JSON string below
json = "{}"
# create an instance of BatchDeleteExperiment from a JSON string
batch_delete_experiment_instance = BatchDeleteExperiment.from_json(json)
# print the JSON string representation of the object
print(BatchDeleteExperiment.to_json())

# convert the object into a dict
batch_delete_experiment_dict = batch_delete_experiment_instance.to_dict()
# create an instance of BatchDeleteExperiment from a dict
batch_delete_experiment_from_dict = BatchDeleteExperiment.from_dict(batch_delete_experiment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


