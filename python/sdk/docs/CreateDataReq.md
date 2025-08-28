# CreateDataReq


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**object_type** | **str** |  | 
**name** | **str** | Data name | 
**description** | **str** | Data description | [optional] [default to '']
**base64_encoded** | **bool** | Whether the data in &#x60;data_file&#x60; is base64 encoded | [optional] [default to False]
**data** | **str** | File data in text format | [optional] [default to '']
**data_uri** | **str** | File data URI | [optional] [default to '']

## Example

```python
from openapi_client.models.create_data_req import CreateDataReq

# TODO update the JSON string below
json = "{}"
# create an instance of CreateDataReq from a JSON string
create_data_req_instance = CreateDataReq.from_json(json)
# print the JSON string representation of the object
print(CreateDataReq.to_json())

# convert the object into a dict
create_data_req_dict = create_data_req_instance.to_dict()
# create an instance of CreateDataReq from a dict
create_data_req_from_dict = CreateDataReq.from_dict(create_data_req_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


