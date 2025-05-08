# Payload


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | [optional] [default to 'update_user']
**new_password** | **str** |  | [optional] 
**password** | **str** |  | [optional] 
**id** | **int** |  | 
**name** | **str** |  | [optional] 
**desc** | **str** |  | [optional] 
**expire** | **datetime** |  | [optional] 

## Example

```python
from openapi_client.models.payload import Payload

# TODO update the JSON string below
json = "{}"
# create an instance of Payload from a JSON string
payload_instance = Payload.from_json(json)
# print the JSON string representation of the object
print(Payload.to_json())

# convert the object into a dict
payload_dict = payload_instance.to_dict()
# create an instance of Payload from a dict
payload_from_dict = Payload.from_dict(payload_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


