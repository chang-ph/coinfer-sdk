# FolderChildrenInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** |  | 
**type** | **str** |  | [optional] [default to 'file']
**children** | [**List[FolderChildrenInner]**](FolderChildrenInner.md) |  | 

## Example

```python
from openapi_client.models.folder_children_inner import FolderChildrenInner

# TODO update the JSON string below
json = "{}"
# create an instance of FolderChildrenInner from a JSON string
folder_children_inner_instance = FolderChildrenInner.from_json(json)
# print the JSON string representation of the object
print(FolderChildrenInner.to_json())

# convert the object into a dict
folder_children_inner_dict = folder_children_inner_instance.to_dict()
# create an instance of FolderChildrenInner from a dict
folder_children_inner_from_dict = FolderChildrenInner.from_dict(folder_children_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


