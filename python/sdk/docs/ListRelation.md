# ListRelation


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**page_no** | **int** | page number | [optional] [default to 1]
**page_size** | **int** | page size | [optional] [default to 100]
**object_type** | **str** |  | 

## Example

```python
from openapi_client.models.list_relation import ListRelation

# TODO update the JSON string below
json = "{}"
# create an instance of ListRelation from a JSON string
list_relation_instance = ListRelation.from_json(json)
# print the JSON string representation of the object
print(ListRelation.to_json())

# convert the object into a dict
list_relation_dict = list_relation_instance.to_dict()
# create an instance of ListRelation from a dict
list_relation_from_dict = ListRelation.from_dict(list_relation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


