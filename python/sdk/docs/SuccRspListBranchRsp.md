# SuccRspListBranchRsp


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **str** |  | 
**data** | [**ListBranchRsp**](ListBranchRsp.md) |  | 

## Example

```python
from openapi_client.models.succ_rsp_list_branch_rsp import SuccRspListBranchRsp

# TODO update the JSON string below
json = "{}"
# create an instance of SuccRspListBranchRsp from a JSON string
succ_rsp_list_branch_rsp_instance = SuccRspListBranchRsp.from_json(json)
# print the JSON string representation of the object
print(SuccRspListBranchRsp.to_json())

# convert the object into a dict
succ_rsp_list_branch_rsp_dict = succ_rsp_list_branch_rsp_instance.to_dict()
# create an instance of SuccRspListBranchRsp from a dict
succ_rsp_list_branch_rsp_from_dict = SuccRspListBranchRsp.from_dict(succ_rsp_list_branch_rsp_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


