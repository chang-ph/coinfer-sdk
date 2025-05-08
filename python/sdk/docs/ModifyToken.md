# ModifyToken


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** |  | [optional] 
**desc** | **str** |  | [optional] 
**expire** | **datetime** |  | [optional] 

## Example

```python
from openapi_client.models.modify_token import ModifyToken

# TODO update the JSON string below
json = "{}"
# create an instance of ModifyToken from a JSON string
modify_token_instance = ModifyToken.from_json(json)
# print the JSON string representation of the object
print(ModifyToken.to_json())

# convert the object into a dict
modify_token_dict = modify_token_instance.to_dict()
# create an instance of ModifyToken from a dict
modify_token_from_dict = ModifyToken.from_dict(modify_token_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


