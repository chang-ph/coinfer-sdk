# ListRepositoryRsp


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**repos** | **List[str]** |  | 
**gists** | [**List[GistRsp]**](GistRsp.md) |  | 

## Example

```python
from openapi_client.models.list_repository_rsp import ListRepositoryRsp

# TODO update the JSON string below
json = "{}"
# create an instance of ListRepositoryRsp from a JSON string
list_repository_rsp_instance = ListRepositoryRsp.from_json(json)
# print the JSON string representation of the object
print(ListRepositoryRsp.to_json())

# convert the object into a dict
list_repository_rsp_dict = list_repository_rsp_instance.to_dict()
# create an instance of ListRepositoryRsp from a dict
list_repository_rsp_from_dict = ListRepositoryRsp.from_dict(list_repository_rsp_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


