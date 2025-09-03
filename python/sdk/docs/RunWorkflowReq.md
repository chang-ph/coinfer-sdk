# RunWorkflowReq


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**object_type** | **str** |  | 
**experiment_name** | **str** | experiment name | 
**iteration** | **int** | iteration number | [optional] [default to 1000]
**parallel** | **int** | parallel number | [optional] [default to 1]
**engine** | **str** |  | [optional] [default to 'fargate']
**chains** | **int** | chains number | [optional] [default to 1]
**parallel_algorithm** | **str** |  | [optional] [default to 'Serial']

## Example

```python
from openapi_client.models.run_workflow_req import RunWorkflowReq

# TODO update the JSON string below
json = "{}"
# create an instance of RunWorkflowReq from a JSON string
run_workflow_req_instance = RunWorkflowReq.from_json(json)
# print the JSON string representation of the object
print(RunWorkflowReq.to_json())

# convert the object into a dict
run_workflow_req_dict = run_workflow_req_instance.to_dict()
# create an instance of RunWorkflowReq from a dict
run_workflow_req_from_dict = RunWorkflowReq.from_dict(run_workflow_req_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


