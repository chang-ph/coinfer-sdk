# ListLinkedAccountRsp


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**linked_accounts** | [**List[LinkedAccountSchema]**](LinkedAccountSchema.md) |  | 

## Example

```python
from openapi_client.models.list_linked_account_rsp import ListLinkedAccountRsp

# TODO update the JSON string below
json = "{}"
# create an instance of ListLinkedAccountRsp from a JSON string
list_linked_account_rsp_instance = ListLinkedAccountRsp.from_json(json)
# print the JSON string representation of the object
print(ListLinkedAccountRsp.to_json())

# convert the object into a dict
list_linked_account_rsp_dict = list_linked_account_rsp_instance.to_dict()
# create an instance of ListLinkedAccountRsp from a dict
list_linked_account_rsp_from_dict = ListLinkedAccountRsp.from_dict(list_linked_account_rsp_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


