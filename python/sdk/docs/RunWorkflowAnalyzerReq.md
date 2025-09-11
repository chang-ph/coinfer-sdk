# RunWorkflowAnalyzerReq


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**object_type** | **str** |  | 
**params** | **str** | params for analyzer | [optional] [default to '{}']
**lock_key** | **str** | lock key | [optional] [default to '']

## Example

```python
from openapi_client.models.run_workflow_analyzer_req import RunWorkflowAnalyzerReq

# TODO update the JSON string below
json = "{}"
# create an instance of RunWorkflowAnalyzerReq from a JSON string
run_workflow_analyzer_req_instance = RunWorkflowAnalyzerReq.from_json(json)
# print the JSON string representation of the object
print(RunWorkflowAnalyzerReq.to_json())

# convert the object into a dict
run_workflow_analyzer_req_dict = run_workflow_analyzer_req_instance.to_dict()
# create an instance of RunWorkflowAnalyzerReq from a dict
run_workflow_analyzer_req_from_dict = RunWorkflowAnalyzerReq.from_dict(run_workflow_analyzer_req_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


