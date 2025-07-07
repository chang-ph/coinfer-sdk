# SuccRspListGistFilesRsp


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **str** |  | 
**data** | [**ListGistFilesRsp**](ListGistFilesRsp.md) |  | 

## Example

```python
from openapi_client.models.succ_rsp_list_gist_files_rsp import SuccRspListGistFilesRsp

# TODO update the JSON string below
json = "{}"
# create an instance of SuccRspListGistFilesRsp from a JSON string
succ_rsp_list_gist_files_rsp_instance = SuccRspListGistFilesRsp.from_json(json)
# print the JSON string representation of the object
print(SuccRspListGistFilesRsp.to_json())

# convert the object into a dict
succ_rsp_list_gist_files_rsp_dict = succ_rsp_list_gist_files_rsp_instance.to_dict()
# create an instance of SuccRspListGistFilesRsp from a dict
succ_rsp_list_gist_files_rsp_from_dict = SuccRspListGistFilesRsp.from_dict(succ_rsp_list_gist_files_rsp_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


