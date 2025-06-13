# ListEvent


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**page_no** | **int** | page number | [optional] [default to 1]
**page_size** | **int** | page size | [optional] [default to 100]
**object_type** | **str** |  | 

## Example

```python
from openapi_client.models.list_event import ListEvent

# TODO update the JSON string below
json = "{}"
# create an instance of ListEvent from a JSON string
list_event_instance = ListEvent.from_json(json)
# print the JSON string representation of the object
print(ListEvent.to_json())

# convert the object into a dict
list_event_dict = list_event_instance.to_dict()
# create an instance of ListEvent from a dict
list_event_from_dict = ListEvent.from_dict(list_event_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


