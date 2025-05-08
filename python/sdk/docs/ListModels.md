# ListModels


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**page_no** | **int** | page number | [optional] [default to 1]
**page_size** | **int** | page size | [optional] [default to 100]
**model_ids** | **List[str]** |  | [optional] 
**with_share_info** | **bool** | Whether to return the related share info | [optional] [default to False]
**shared_by_me** | **bool** | Filter models shared by the current user | [optional] [default to False]
**shared_with_me** | **bool** | Filter models shared with the current user | [optional] [default to False]

## Example

```python
from openapi_client.models.list_models import ListModels

# TODO update the JSON string below
json = "{}"
# create an instance of ListModels from a JSON string
list_models_instance = ListModels.from_json(json)
# print the JSON string representation of the object
print(ListModels.to_json())

# convert the object into a dict
list_models_dict = list_models_instance.to_dict()
# create an instance of ListModels from a dict
list_models_from_dict = ListModels.from_dict(list_models_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


