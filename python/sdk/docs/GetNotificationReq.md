# GetNotificationReq


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**page_no** | **int** | page number | [optional] [default to 1]
**page_size** | **int** | page size | [optional] [default to 100]
**status** | **str** | Filter the notification message by read status | 

## Example

```python
from openapi_client.models.get_notification_req import GetNotificationReq

# TODO update the JSON string below
json = "{}"
# create an instance of GetNotificationReq from a JSON string
get_notification_req_instance = GetNotificationReq.from_json(json)
# print the JSON string representation of the object
print(GetNotificationReq.to_json())

# convert the object into a dict
get_notification_req_dict = get_notification_req_instance.to_dict()
# create an instance of GetNotificationReq from a dict
get_notification_req_from_dict = GetNotificationReq.from_dict(get_notification_req_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


