# CreateRelationReq


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**object_type** | **str** |  | 
**object1_id** | **str** |  | 
**object2_id** | **str** |  | 

## Example

```python
from openapi_client.models.create_relation_req import CreateRelationReq

# TODO update the JSON string below
json = "{}"
# create an instance of CreateRelationReq from a JSON string
create_relation_req_instance = CreateRelationReq.from_json(json)
# print the JSON string representation of the object
print(CreateRelationReq.to_json())

# convert the object into a dict
create_relation_req_dict = create_relation_req_instance.to_dict()
# create an instance of CreateRelationReq from a dict
create_relation_req_from_dict = CreateRelationReq.from_dict(create_relation_req_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


