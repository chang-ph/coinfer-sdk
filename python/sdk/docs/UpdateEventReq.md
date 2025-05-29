# UpdateEventReq


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**object_type** | **str** |  | 
**params** | **str** |  | [optional] [default to '']
**engine** | **str** |  | [optional] [default to 'lambda']
**lock_key** | **str** |  | [optional] [default to '']

## Example

```python
from openapi_client.models.update_event_req import UpdateEventReq

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateEventReq from a JSON string
update_event_req_instance = UpdateEventReq.from_json(json)
# print the JSON string representation of the object
print(UpdateEventReq.to_json())

# convert the object into a dict
update_event_req_dict = update_event_req_instance.to_dict()
# create an instance of UpdateEventReq from a dict
update_event_req_from_dict = UpdateEventReq.from_dict(update_event_req_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


