# ModifyCurrentUser


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**new_password** | **str** |  | [optional] 
**password** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.modify_current_user import ModifyCurrentUser

# TODO update the JSON string below
json = "{}"
# create an instance of ModifyCurrentUser from a JSON string
modify_current_user_instance = ModifyCurrentUser.from_json(json)
# print the JSON string representation of the object
print(ModifyCurrentUser.to_json())

# convert the object into a dict
modify_current_user_dict = modify_current_user_instance.to_dict()
# create an instance of ModifyCurrentUser from a dict
modify_current_user_from_dict = ModifyCurrentUser.from_dict(modify_current_user_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


