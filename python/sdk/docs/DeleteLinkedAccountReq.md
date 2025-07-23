# DeleteLinkedAccountReq


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**deleted_key** | **str** |  | [optional] [default to '']
**accounts** | **List[str]** | account list. List item in format &#x60;&lt;account_type&gt;:&lt;account&gt;&#x60; | [optional] 

## Example

```python
from openapi_client.models.delete_linked_account_req import DeleteLinkedAccountReq

# TODO update the JSON string below
json = "{}"
# create an instance of DeleteLinkedAccountReq from a JSON string
delete_linked_account_req_instance = DeleteLinkedAccountReq.from_json(json)
# print the JSON string representation of the object
print(DeleteLinkedAccountReq.to_json())

# convert the object into a dict
delete_linked_account_req_dict = delete_linked_account_req_instance.to_dict()
# create an instance of DeleteLinkedAccountReq from a dict
delete_linked_account_req_from_dict = DeleteLinkedAccountReq.from_dict(delete_linked_account_req_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


