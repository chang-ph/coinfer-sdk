# CreateArtifactRsp


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
from openapi_client.models.create_artifact_rsp import CreateArtifactRsp

# TODO update the JSON string below
json = "{}"
# create an instance of CreateArtifactRsp from a JSON string
create_artifact_rsp_instance = CreateArtifactRsp.from_json(json)
# print the JSON string representation of the object
print(CreateArtifactRsp.to_json())

# convert the object into a dict
create_artifact_rsp_dict = create_artifact_rsp_instance.to_dict()
# create an instance of CreateArtifactRsp from a dict
create_artifact_rsp_from_dict = CreateArtifactRsp.from_dict(create_artifact_rsp_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


