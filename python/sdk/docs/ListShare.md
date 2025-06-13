# ListShare


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**page_no** | **int** | page number | [optional] [default to 1]
**page_size** | **int** | page size | [optional] [default to 100]
**object_type** | **str** |  | 

## Example

```python
from openapi_client.models.list_share import ListShare

# TODO update the JSON string below
json = "{}"
# create an instance of ListShare from a JSON string
list_share_instance = ListShare.from_json(json)
# print the JSON string representation of the object
print(ListShare.to_json())

# convert the object into a dict
list_share_dict = list_share_instance.to_dict()
# create an instance of ListShare from a dict
list_share_from_dict = ListShare.from_dict(list_share_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


