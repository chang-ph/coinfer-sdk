# UpdateDataReq


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**object_type** | **str** |  | 
**name** | **str** |  | [optional] 
**description** | **str** |  | [optional] 
**base64_encoded** | **bool** | Whether the data in &#x60;data&#x60; is base64 encoded | [optional] [default to False]
**data** | **str** |  | [optional] 
**data_uri** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.update_data_req import UpdateDataReq

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateDataReq from a JSON string
update_data_req_instance = UpdateDataReq.from_json(json)
# print the JSON string representation of the object
print(UpdateDataReq.to_json())

# convert the object into a dict
update_data_req_dict = update_data_req_instance.to_dict()
# create an instance of UpdateDataReq from a dict
update_data_req_from_dict = UpdateDataReq.from_dict(update_data_req_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


