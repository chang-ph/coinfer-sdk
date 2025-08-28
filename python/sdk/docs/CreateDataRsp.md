# CreateDataRsp


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**object_type** | **str** |  | 
**name** | **str** |  | 
**description** | **str** |  | 
**short_id** | **str** |  | 
**created_at** | **datetime** |  | 
**updated_at** | **datetime** |  | 

## Example

```python
from openapi_client.models.create_data_rsp import CreateDataRsp

# TODO update the JSON string below
json = "{}"
# create an instance of CreateDataRsp from a JSON string
create_data_rsp_instance = CreateDataRsp.from_json(json)
# print the JSON string representation of the object
print(CreateDataRsp.to_json())

# convert the object into a dict
create_data_rsp_dict = create_data_rsp_instance.to_dict()
# create an instance of CreateDataRsp from a dict
create_data_rsp_from_dict = CreateDataRsp.from_dict(create_data_rsp_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


