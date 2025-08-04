# RunCloudFunctionScript


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**object_type** | **str** |  | 
**params** | **str** |  | [optional] [default to '']
**engine** | **str** |  | [optional] [default to 'lambda']
**lock_key** | **str** |  | [optional] [default to '']

## Example

```python
from openapi_client.models.run_cloud_function_script import RunCloudFunctionScript

# TODO update the JSON string below
json = "{}"
# create an instance of RunCloudFunctionScript from a JSON string
run_cloud_function_script_instance = RunCloudFunctionScript.from_json(json)
# print the JSON string representation of the object
print(RunCloudFunctionScript.to_json())

# convert the object into a dict
run_cloud_function_script_dict = run_cloud_function_script_instance.to_dict()
# create an instance of RunCloudFunctionScript from a dict
run_cloud_function_script_from_dict = RunCloudFunctionScript.from_dict(run_cloud_function_script_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


