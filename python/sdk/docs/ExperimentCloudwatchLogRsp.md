# ExperimentCloudwatchLogRsp


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**object_type** | **str** |  | 
**logs** | **List[List[object]]** |  | 

## Example

```python
from openapi_client.models.experiment_cloudwatch_log_rsp import ExperimentCloudwatchLogRsp

# TODO update the JSON string below
json = "{}"
# create an instance of ExperimentCloudwatchLogRsp from a JSON string
experiment_cloudwatch_log_rsp_instance = ExperimentCloudwatchLogRsp.from_json(json)
# print the JSON string representation of the object
print(ExperimentCloudwatchLogRsp.to_json())

# convert the object into a dict
experiment_cloudwatch_log_rsp_dict = experiment_cloudwatch_log_rsp_instance.to_dict()
# create an instance of ExperimentCloudwatchLogRsp from a dict
experiment_cloudwatch_log_rsp_from_dict = ExperimentCloudwatchLogRsp.from_dict(experiment_cloudwatch_log_rsp_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


