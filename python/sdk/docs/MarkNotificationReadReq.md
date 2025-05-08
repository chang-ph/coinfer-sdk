# MarkNotificationReadReq


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**notification_ids** | **List[int]** |  | [optional] 
**status** | **str** | the target status to be set | 

## Example

```python
from openapi_client.models.mark_notification_read_req import MarkNotificationReadReq

# TODO update the JSON string below
json = "{}"
# create an instance of MarkNotificationReadReq from a JSON string
mark_notification_read_req_instance = MarkNotificationReadReq.from_json(json)
# print the JSON string representation of the object
print(MarkNotificationReadReq.to_json())

# convert the object into a dict
mark_notification_read_req_dict = mark_notification_read_req_instance.to_dict()
# create an instance of MarkNotificationReadReq from a dict
mark_notification_read_req_from_dict = MarkNotificationReadReq.from_dict(mark_notification_read_req_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


