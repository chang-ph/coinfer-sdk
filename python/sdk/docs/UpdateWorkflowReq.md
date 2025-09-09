# UpdateWorkflowReq


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**object_type** | **str** |  | 
**name** | **str** |  | [optional] 
**description** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.update_workflow_req import UpdateWorkflowReq

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateWorkflowReq from a JSON string
update_workflow_req_instance = UpdateWorkflowReq.from_json(json)
# print the JSON string representation of the object
print(UpdateWorkflowReq.to_json())

# convert the object into a dict
update_workflow_req_dict = update_workflow_req_instance.to_dict()
# create an instance of UpdateWorkflowReq from a dict
update_workflow_req_from_dict = UpdateWorkflowReq.from_dict(update_workflow_req_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


