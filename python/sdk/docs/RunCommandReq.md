# RunCommandReq


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**target** | **str** | Target object to perform the action on | 
**action** | **str** | Action to perform | 
**parameters** | **Dict[str, object]** | Parameters for the command | [optional] 
**get_response** | **bool** | Whether to get the response from the command (Sync run) | [optional] [default to False]

## Example

```python
from openapi_client.models.run_command_req import RunCommandReq

# TODO update the JSON string below
json = "{}"
# create an instance of RunCommandReq from a JSON string
run_command_req_instance = RunCommandReq.from_json(json)
# print the JSON string representation of the object
print(RunCommandReq.to_json())

# convert the object into a dict
run_command_req_dict = run_command_req_instance.to_dict()
# create an instance of RunCommandReq from a dict
run_command_req_from_dict = RunCommandReq.from_dict(run_command_req_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


