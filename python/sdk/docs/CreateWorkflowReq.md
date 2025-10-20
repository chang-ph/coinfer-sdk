# CreateWorkflowReq


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**object_type** | **str** |  | 
**name** | **str** | workflow name | [optional] [default to '']
**model_id** | **str** | model ID | [optional] [default to '']
**data_id** | **str** | data ID | [optional] [default to '']
**uri** | **str** | URI of model in Gallery | [optional] [default to '']

## Example

```python
from openapi_client.models.create_workflow_req import CreateWorkflowReq

# TODO update the JSON string below
json = "{}"
# create an instance of CreateWorkflowReq from a JSON string
create_workflow_req_instance = CreateWorkflowReq.from_json(json)
# print the JSON string representation of the object
print(CreateWorkflowReq.to_json())

# convert the object into a dict
create_workflow_req_dict = create_workflow_req_instance.to_dict()
# create an instance of CreateWorkflowReq from a dict
create_workflow_req_from_dict = CreateWorkflowReq.from_dict(create_workflow_req_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


