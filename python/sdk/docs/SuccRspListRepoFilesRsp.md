# SuccRspListRepoFilesRsp


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **str** |  | 
**data** | [**ListRepoFilesRsp**](ListRepoFilesRsp.md) |  | 

## Example

```python
from openapi_client.models.succ_rsp_list_repo_files_rsp import SuccRspListRepoFilesRsp

# TODO update the JSON string below
json = "{}"
# create an instance of SuccRspListRepoFilesRsp from a JSON string
succ_rsp_list_repo_files_rsp_instance = SuccRspListRepoFilesRsp.from_json(json)
# print the JSON string representation of the object
print(SuccRspListRepoFilesRsp.to_json())

# convert the object into a dict
succ_rsp_list_repo_files_rsp_dict = succ_rsp_list_repo_files_rsp_instance.to_dict()
# create an instance of SuccRspListRepoFilesRsp from a dict
succ_rsp_list_repo_files_rsp_from_dict = SuccRspListRepoFilesRsp.from_dict(succ_rsp_list_repo_files_rsp_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


