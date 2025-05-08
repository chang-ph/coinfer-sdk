# NotificationDict


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** |  | 
**event** | **str** |  | 
**title** | **str** |  | 
**message** | **str** |  | 
**msg_object** | **str** |  | 
**msg_verb** | **str** |  | 
**created_at** | **str** |  | 
**read_at** | **str** |  | 

## Example

```python
from openapi_client.models.notification_dict import NotificationDict

# TODO update the JSON string below
json = "{}"
# create an instance of NotificationDict from a JSON string
notification_dict_instance = NotificationDict.from_json(json)
# print the JSON string representation of the object
print(NotificationDict.to_json())

# convert the object into a dict
notification_dict_dict = notification_dict_instance.to_dict()
# create an instance of NotificationDict from a dict
notification_dict_from_dict = NotificationDict.from_dict(notification_dict_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


