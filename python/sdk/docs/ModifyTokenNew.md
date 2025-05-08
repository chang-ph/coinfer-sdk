# ModifyTokenNew


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | [optional] [default to 'update_token']
**id** | **int** |  | 
**name** | **str** |  | [optional] 
**desc** | **str** |  | [optional] 
**expire** | **datetime** |  | [optional] 

## Example

```python
from openapi_client.models.modify_token_new import ModifyTokenNew

# TODO update the JSON string below
json = "{}"
# create an instance of ModifyTokenNew from a JSON string
modify_token_new_instance = ModifyTokenNew.from_json(json)
# print the JSON string representation of the object
print(ModifyTokenNew.to_json())

# convert the object into a dict
modify_token_new_dict = modify_token_new_instance.to_dict()
# create an instance of ModifyTokenNew from a dict
modify_token_new_from_dict = ModifyTokenNew.from_dict(modify_token_new_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


