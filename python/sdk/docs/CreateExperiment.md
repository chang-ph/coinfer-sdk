# CreateExperiment


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**object_type** | **str** |  | 
**model_id** | **str** |  | [optional] [default to '']
**xp_meta** | **object** |  | [optional] 
**meta** | **object** |  | [optional] 
**name** | **str** |  | [optional] [default to '']
**run_on** | **str** |  | [optional] [default to 'Lambda']
**data_file_type** | **str** |  | [optional] 
**data_files** | **List[str]** | File data in text format | [optional] 
**data_uris** | **List[str]** | File data URI | [optional] 

## Example

```python
from openapi_client.models.create_experiment import CreateExperiment

# TODO update the JSON string below
json = "{}"
# create an instance of CreateExperiment from a JSON string
create_experiment_instance = CreateExperiment.from_json(json)
# print the JSON string representation of the object
print(CreateExperiment.to_json())

# convert the object into a dict
create_experiment_dict = create_experiment_instance.to_dict()
# create an instance of CreateExperiment from a dict
create_experiment_from_dict = CreateExperiment.from_dict(create_experiment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


