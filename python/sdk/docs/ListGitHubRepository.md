# ListGitHubRepository


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**page_no** | **int** | page number | [optional] [default to 1]
**page_size** | **int** | page size | [optional] [default to 100]

## Example

```python
from openapi_client.models.list_git_hub_repository import ListGitHubRepository

# TODO update the JSON string below
json = "{}"
# create an instance of ListGitHubRepository from a JSON string
list_git_hub_repository_instance = ListGitHubRepository.from_json(json)
# print the JSON string representation of the object
print(ListGitHubRepository.to_json())

# convert the object into a dict
list_git_hub_repository_dict = list_git_hub_repository_instance.to_dict()
# create an instance of ListGitHubRepository from a dict
list_git_hub_repository_from_dict = ListGitHubRepository.from_dict(list_git_hub_repository_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


