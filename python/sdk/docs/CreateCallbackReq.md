# CreateCallbackReq


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**object_type** | **str** |  | 
**lang** | **str** |  | 
**gist_id** | **str** |  | 
**single_instance** | **bool** | Only allow one instance of this callback to run at a time. | [optional] [default to True]

## Example

```python
from openapi_client.models.create_callback_req import CreateCallbackReq

# TODO update the JSON string below
json = "{}"
# create an instance of CreateCallbackReq from a JSON string
create_callback_req_instance = CreateCallbackReq.from_json(json)
# print the JSON string representation of the object
print(CreateCallbackReq.to_json())

# convert the object into a dict
create_callback_req_dict = create_callback_req_instance.to_dict()
# create an instance of CreateCallbackReq from a dict
create_callback_req_from_dict = CreateCallbackReq.from_dict(create_callback_req_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


