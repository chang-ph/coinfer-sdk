# CreateProtobufMessageReq


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**object_type** | **str** |  | 
**batch_id** | **str** |  | 
**run_id** | **str** |  | 
**logs** | [**DataTyping**](DataTyping.md) |  | 

## Example

```python
from openapi_client.models.create_protobuf_message_req import CreateProtobufMessageReq

# TODO update the JSON string below
json = "{}"
# create an instance of CreateProtobufMessageReq from a JSON string
create_protobuf_message_req_instance = CreateProtobufMessageReq.from_json(json)
# print the JSON string representation of the object
print(CreateProtobufMessageReq.to_json())

# convert the object into a dict
create_protobuf_message_req_dict = create_protobuf_message_req_instance.to_dict()
# create an instance of CreateProtobufMessageReq from a dict
create_protobuf_message_req_from_dict = CreateProtobufMessageReq.from_dict(create_protobuf_message_req_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


