# SuccRspListLinkedAccountRsp


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **str** |  | 
**data** | [**ListLinkedAccountRsp**](ListLinkedAccountRsp.md) |  | 

## Example

```python
from openapi_client.models.succ_rsp_list_linked_account_rsp import SuccRspListLinkedAccountRsp

# TODO update the JSON string below
json = "{}"
# create an instance of SuccRspListLinkedAccountRsp from a JSON string
succ_rsp_list_linked_account_rsp_instance = SuccRspListLinkedAccountRsp.from_json(json)
# print the JSON string representation of the object
print(SuccRspListLinkedAccountRsp.to_json())

# convert the object into a dict
succ_rsp_list_linked_account_rsp_dict = succ_rsp_list_linked_account_rsp_instance.to_dict()
# create an instance of SuccRspListLinkedAccountRsp from a dict
succ_rsp_list_linked_account_rsp_from_dict = SuccRspListLinkedAccountRsp.from_dict(succ_rsp_list_linked_account_rsp_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


