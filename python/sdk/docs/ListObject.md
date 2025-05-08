# ListObject


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**page_no** | **int** |  | [optional] [default to 1]
**page_size** | **int** |  | [optional] [default to 100]
**with_share_info** | **bool** | Whether to return the related share info | [optional] [default to False]
**shared_by_me** | **bool** | Filter experiments shared by the current user | [optional] [default to False]
**shared_with_me** | **bool** | Filter experiments shared with the current user | [optional] [default to False]
**object_type** | **str** |  | [optional] [default to 'experiment']
**status** | **str** |  | [optional] [default to '']
**run_on** | **str** |  | [optional] [default to '']
**has_model** | **str** |  | [optional] [default to '']

## Example

```python
from openapi_client.models.list_object import ListObject

# TODO update the JSON string below
json = "{}"
# create an instance of ListObject from a JSON string
list_object_instance = ListObject.from_json(json)
# print the JSON string representation of the object
print(ListObject.to_json())

# convert the object into a dict
list_object_dict = list_object_instance.to_dict()
# create an instance of ListObject from a dict
list_object_from_dict = ListObject.from_dict(list_object_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


