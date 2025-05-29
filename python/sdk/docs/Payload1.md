# Payload1


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**content** | [**ModelContent**](ModelContent.md) |  | [optional] 
**name** | **str** |  | [optional] 
**version** | **str** |  | [optional] 
**description** | **str** |  | [optional] 
**status** | **str** |  | [optional] 
**object_type** | **str** |  | 
**action** | **str** |  | [optional] 
**meta** | **Dict[str, object]** |  | [optional] 
**params** | **str** |  | [optional] [default to '']
**engine** | **str** |  | [optional] [default to 'lambda']
**lock_key** | **str** |  | [optional] [default to '']

## Example

```python
from openapi_client.models.payload1 import Payload1

# TODO update the JSON string below
json = "{}"
# create an instance of Payload1 from a JSON string
payload1_instance = Payload1.from_json(json)
# print the JSON string representation of the object
print(Payload1.to_json())

# convert the object into a dict
payload1_dict = payload1_instance.to_dict()
# create an instance of Payload1 from a dict
payload1_from_dict = Payload1.from_dict(payload1_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


