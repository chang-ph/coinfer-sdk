# Payload2


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

## Example

```python
from openapi_client.models.payload2 import Payload2

# TODO update the JSON string below
json = "{}"
# create an instance of Payload2 from a JSON string
payload2_instance = Payload2.from_json(json)
# print the JSON string representation of the object
print(Payload2.to_json())

# convert the object into a dict
payload2_dict = payload2_instance.to_dict()
# create an instance of Payload2 from a dict
payload2_from_dict = Payload2.from_dict(payload2_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


