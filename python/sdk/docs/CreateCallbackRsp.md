# CreateCallbackRsp


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**object_type** | **str** |  | 
**short_id** | **str** |  | 
**lang** | **str** |  | 
**code** | **str** |  | 
**token** | **str** |  | 
**created_at** | **datetime** |  | 

## Example

```python
from openapi_client.models.create_callback_rsp import CreateCallbackRsp

# TODO update the JSON string below
json = "{}"
# create an instance of CreateCallbackRsp from a JSON string
create_callback_rsp_instance = CreateCallbackRsp.from_json(json)
# print the JSON string representation of the object
print(CreateCallbackRsp.to_json())

# convert the object into a dict
create_callback_rsp_dict = create_callback_rsp_instance.to_dict()
# create an instance of CreateCallbackRsp from a dict
create_callback_rsp_from_dict = CreateCallbackRsp.from_dict(create_callback_rsp_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


