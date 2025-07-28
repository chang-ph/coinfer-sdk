# DeleteTokenReq


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**deleted_key** | **str** |  | [optional] [default to '']
**tokens** | **List[str]** | list of tokens to be deleted | [optional] 

## Example

```python
from openapi_client.models.delete_token_req import DeleteTokenReq

# TODO update the JSON string below
json = "{}"
# create an instance of DeleteTokenReq from a JSON string
delete_token_req_instance = DeleteTokenReq.from_json(json)
# print the JSON string representation of the object
print(DeleteTokenReq.to_json())

# convert the object into a dict
delete_token_req_dict = delete_token_req_instance.to_dict()
# create an instance of DeleteTokenReq from a dict
delete_token_req_from_dict = DeleteTokenReq.from_dict(delete_token_req_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


