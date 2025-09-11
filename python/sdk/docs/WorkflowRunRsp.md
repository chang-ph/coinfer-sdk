# WorkflowRunRsp


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**object_type** | **str** |  | 
**experiment_id** | **str** |  | 
**experiment_name** | **str** |  | 

## Example

```python
from openapi_client.models.workflow_run_rsp import WorkflowRunRsp

# TODO update the JSON string below
json = "{}"
# create an instance of WorkflowRunRsp from a JSON string
workflow_run_rsp_instance = WorkflowRunRsp.from_json(json)
# print the JSON string representation of the object
print(WorkflowRunRsp.to_json())

# convert the object into a dict
workflow_run_rsp_dict = workflow_run_rsp_instance.to_dict()
# create an instance of WorkflowRunRsp from a dict
workflow_run_rsp_from_dict = WorkflowRunRsp.from_dict(workflow_run_rsp_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


