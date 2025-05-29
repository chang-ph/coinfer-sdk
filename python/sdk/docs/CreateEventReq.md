# CreateEventReq


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**object_type** | **str** |  | 
**name** | **str** |  | 

## Example

```python
from openapi_client.models.create_event_req import CreateEventReq

# TODO update the JSON string below
json = "{}"
# create an instance of CreateEventReq from a JSON string
create_event_req_instance = CreateEventReq.from_json(json)
# print the JSON string representation of the object
print(CreateEventReq.to_json())

# convert the object into a dict
create_event_req_dict = create_event_req_instance.to_dict()
# create an instance of CreateEventReq from a dict
create_event_req_from_dict = CreateEventReq.from_dict(create_event_req_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


