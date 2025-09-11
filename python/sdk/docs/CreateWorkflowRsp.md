# CreateWorkflowRsp


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**object_type** | **str** |  | 
**short_id** | **str** |  | 
**name** | **str** |  | 
**model_id** | **str** |  | 
**model_name** | **str** |  | 
**data_id** | **str** |  | [optional] 
**data_name** | **str** |  | [optional] 
**experiment_id** | **str** |  | [optional] 
**experiment_name** | **str** |  | [optional] 
**analyzer_id** | **str** |  | [optional] 
**analyzer_name** | **str** |  | [optional] 
**created_at** | **datetime** |  | 
**updated_at** | **datetime** |  | 

## Example

```python
from openapi_client.models.create_workflow_rsp import CreateWorkflowRsp

# TODO update the JSON string below
json = "{}"
# create an instance of CreateWorkflowRsp from a JSON string
create_workflow_rsp_instance = CreateWorkflowRsp.from_json(json)
# print the JSON string representation of the object
print(CreateWorkflowRsp.to_json())

# convert the object into a dict
create_workflow_rsp_dict = create_workflow_rsp_instance.to_dict()
# create an instance of CreateWorkflowRsp from a dict
create_workflow_rsp_from_dict = CreateWorkflowRsp.from_dict(create_workflow_rsp_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


