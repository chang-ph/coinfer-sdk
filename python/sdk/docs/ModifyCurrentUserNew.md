# ModifyCurrentUserNew


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | [optional] [default to 'update_user']
**new_password** | **str** |  | [optional] 
**password** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.modify_current_user_new import ModifyCurrentUserNew

# TODO update the JSON string below
json = "{}"
# create an instance of ModifyCurrentUserNew from a JSON string
modify_current_user_new_instance = ModifyCurrentUserNew.from_json(json)
# print the JSON string representation of the object
print(ModifyCurrentUserNew.to_json())

# convert the object into a dict
modify_current_user_new_dict = modify_current_user_new_instance.to_dict()
# create an instance of ModifyCurrentUserNew from a dict
modify_current_user_new_from_dict = ModifyCurrentUserNew.from_dict(modify_current_user_new_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


