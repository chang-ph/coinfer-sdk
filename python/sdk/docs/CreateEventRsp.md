# CreateEventRsp


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**object_type** | **str** |  | 
**name** | **str** |  | 
**short_id** | **str** |  | 
**created_at** | **datetime** |  | 

## Example

```python
from openapi_client.models.create_event_rsp import CreateEventRsp

# TODO update the JSON string below
json = "{}"
# create an instance of CreateEventRsp from a JSON string
create_event_rsp_instance = CreateEventRsp.from_json(json)
# print the JSON string representation of the object
print(CreateEventRsp.to_json())

# convert the object into a dict
create_event_rsp_dict = create_event_rsp_instance.to_dict()
# create an instance of CreateEventRsp from a dict
create_event_rsp_from_dict = CreateEventRsp.from_dict(create_event_rsp_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


