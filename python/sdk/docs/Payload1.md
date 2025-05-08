# Payload1


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**object_type** | **str** |  | 
**repo** | **str** | repo in the form of repo_owner/repo_name or gist id in case of importing from gist | [optional] [default to '']
**branch** | **str** | branch name or gist description in case of importing from gist | [optional] [default to '']
**type** | **str** | repo or gist | [optional] [default to 'local']
**model_name** | **str** | [deprecated] model name | [optional] [default to '']
**env** | **str** |  | [optional] 
**name** | **str** |  | [optional] [default to '']
**content** | [**ModelContent**](ModelContent.md) |  | [optional] 
**is_demo** | **bool** |  | [optional] [default to False]
**model_id** | **str** |  | 
**xp_meta** | **object** |  | [optional] 
**meta** | **object** |  | [optional] 
**objid** | **str** |  | 
**password** | **str** |  | [optional] [default to '']
**target_user** | **str** |  | [optional] [default to '']

## Example

```python
from openapi_client.models.payload1 import Payload1

# TODO update the JSON string below
json = "{}"
# create an instance of Payload1 from a JSON string
payload1_instance = Payload1.from_json(json)
# print the JSON string representation of the object
print(Payload1.to_json())

# convert the object into a dict
payload1_dict = payload1_instance.to_dict()
# create an instance of Payload1 from a dict
payload1_from_dict = Payload1.from_dict(payload1_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


