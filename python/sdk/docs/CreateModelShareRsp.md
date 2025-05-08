# CreateModelShareRsp


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** |  | 
**model_id** | **str** |  | 
**model_name** | **str** |  | 
**password** | **str** |  | 
**created_at** | **datetime** |  | 
**from_user** | **str** |  | [optional] 
**to_user** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.create_model_share_rsp import CreateModelShareRsp

# TODO update the JSON string below
json = "{}"
# create an instance of CreateModelShareRsp from a JSON string
create_model_share_rsp_instance = CreateModelShareRsp.from_json(json)
# print the JSON string representation of the object
print(CreateModelShareRsp.to_json())

# convert the object into a dict
create_model_share_rsp_dict = create_model_share_rsp_instance.to_dict()
# create an instance of CreateModelShareRsp from a dict
create_model_share_rsp_from_dict = CreateModelShareRsp.from_dict(create_model_share_rsp_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


