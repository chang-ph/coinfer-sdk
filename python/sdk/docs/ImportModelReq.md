# ImportModelReq


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**repo** | **str** | repo in the form of repo_owner/repo_name or gist id in case of importing from gist | 
**branch** | **str** | branch name or gist description in case of importing from gist | [optional] [default to '']
**type** | **str** | repo or gist | 
**model_name** | **str** | model name | 

## Example

```python
from openapi_client.models.import_model_req import ImportModelReq

# TODO update the JSON string below
json = "{}"
# create an instance of ImportModelReq from a JSON string
import_model_req_instance = ImportModelReq.from_json(json)
# print the JSON string representation of the object
print(ImportModelReq.to_json())

# convert the object into a dict
import_model_req_dict = import_model_req_instance.to_dict()
# create an instance of ImportModelReq from a dict
import_model_req_from_dict = ImportModelReq.from_dict(import_model_req_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


