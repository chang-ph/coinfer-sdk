# CreateTextMessageReq


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**object_type** | **str** |  | 
**datas** | **List[Dict[str, object]]** | list of messages | 
**batch_id** | **str** |  | 
**run_id** | **str** |  | 

## Example

```python
from openapi_client.models.create_text_message_req import CreateTextMessageReq

# TODO update the JSON string below
json = "{}"
# create an instance of CreateTextMessageReq from a JSON string
create_text_message_req_instance = CreateTextMessageReq.from_json(json)
# print the JSON string representation of the object
print(CreateTextMessageReq.to_json())

# convert the object into a dict
create_text_message_req_dict = create_text_message_req_instance.to_dict()
# create an instance of CreateTextMessageReq from a dict
create_text_message_req_from_dict = CreateTextMessageReq.from_dict(create_text_message_req_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


