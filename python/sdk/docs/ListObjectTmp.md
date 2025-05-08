# ListObjectTmp


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**page_no** | **int** | page number | [optional] [default to 1]
**page_size** | **int** | page size | [optional] [default to 100]
**object_type** | **str** |  | 
**with_share_info** | **bool** | Whether to return the related share info | [optional] [default to False]
**shared_by_me** | **bool** | Filter objects shared by the current user | [optional] [default to False]
**shared_with_me** | **bool** | Filter objects shared with the current user | [optional] [default to False]
**model_ids** | **List[str]** |  | [optional] 
**status** | **str** |  | [optional] [default to '']
**run_on** | **str** |  | [optional] [default to '']
**has_model** | **str** |  | [optional] [default to '']

## Example

```python
from openapi_client.models.list_object_tmp import ListObjectTmp

# TODO update the JSON string below
json = "{}"
# create an instance of ListObjectTmp from a JSON string
list_object_tmp_instance = ListObjectTmp.from_json(json)
# print the JSON string representation of the object
print(ListObjectTmp.to_json())

# convert the object into a dict
list_object_tmp_dict = list_object_tmp_instance.to_dict()
# create an instance of ListObjectTmp from a dict
list_object_tmp_from_dict = ListObjectTmp.from_dict(list_object_tmp_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


