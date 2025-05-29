# CreateRelationRsp


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**object_type** | **str** |  | 
**short_id** | **str** |  | 
**user_id** | **int** |  | 
**object1_id** | **str** |  | 
**object2_id** | **str** |  | 
**created_at** | **datetime** |  | 

## Example

```python
from openapi_client.models.create_relation_rsp import CreateRelationRsp

# TODO update the JSON string below
json = "{}"
# create an instance of CreateRelationRsp from a JSON string
create_relation_rsp_instance = CreateRelationRsp.from_json(json)
# print the JSON string representation of the object
print(CreateRelationRsp.to_json())

# convert the object into a dict
create_relation_rsp_dict = create_relation_rsp_instance.to_dict()
# create an instance of CreateRelationRsp from a dict
create_relation_rsp_from_dict = CreateRelationRsp.from_dict(create_relation_rsp_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


