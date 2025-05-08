# CreateExperimentShare


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**object_type** | **str** |  | 
**objid** | **str** |  | 
**password** | **str** |  | [optional] [default to '']
**target_user** | **str** |  | [optional] [default to '']

## Example

```python
from openapi_client.models.create_experiment_share import CreateExperimentShare

# TODO update the JSON string below
json = "{}"
# create an instance of CreateExperimentShare from a JSON string
create_experiment_share_instance = CreateExperimentShare.from_json(json)
# print the JSON string representation of the object
print(CreateExperimentShare.to_json())

# convert the object into a dict
create_experiment_share_dict = create_experiment_share_instance.to_dict()
# create an instance of CreateExperimentShare from a dict
create_experiment_share_from_dict = CreateExperimentShare.from_dict(create_experiment_share_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


