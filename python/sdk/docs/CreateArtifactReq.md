# CreateArtifactReq


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**object_type** | **str** |  | 
**name** | **str** | Artifact name | 
**description** | **str** | Artifact description | [optional] [default to '']
**is_base64** | **bool** | Whether the data in &#x60;data_file&#x60; is base64 encoded | [optional] [default to False]
**data_file** | **str** | File data in text format | [optional] [default to '']
**data_uri** | **str** | File data URI | [optional] [default to '']

## Example

```python
from openapi_client.models.create_artifact_req import CreateArtifactReq

# TODO update the JSON string below
json = "{}"
# create an instance of CreateArtifactReq from a JSON string
create_artifact_req_instance = CreateArtifactReq.from_json(json)
# print the JSON string representation of the object
print(CreateArtifactReq.to_json())

# convert the object into a dict
create_artifact_req_dict = create_artifact_req_instance.to_dict()
# create an instance of CreateArtifactReq from a dict
create_artifact_req_from_dict = CreateArtifactReq.from_dict(create_artifact_req_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


