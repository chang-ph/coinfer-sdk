# ListExperiment


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**page_no** | **int** | page number | [optional] [default to 1]
**page_size** | **int** | page size | [optional] [default to 100]
**object_type** | **str** |  | 
**with_share_info** | **bool** | Whether to return the related share info | [optional] [default to False]
**shared_by_me** | **bool** | Filter objects shared by the current user | [optional] [default to False]
**shared_with_me** | **bool** | Filter objects shared with the current user | [optional] [default to False]
**status** | **str** |  | [optional] [default to '']
**run_on** | **str** |  | [optional] [default to '']
**has_model** | **str** |  | [optional] [default to '']

## Example

```python
from openapi_client.models.list_experiment import ListExperiment

# TODO update the JSON string below
json = "{}"
# create an instance of ListExperiment from a JSON string
list_experiment_instance = ListExperiment.from_json(json)
# print the JSON string representation of the object
print(ListExperiment.to_json())

# convert the object into a dict
list_experiment_dict = list_experiment_instance.to_dict()
# create an instance of ListExperiment from a dict
list_experiment_from_dict = ListExperiment.from_dict(list_experiment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


