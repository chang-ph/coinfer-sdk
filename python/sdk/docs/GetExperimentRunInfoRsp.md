# GetExperimentRunInfoRsp


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**object_type** | **str** |  | 
**status** | **str** |  | 

## Example

```python
from openapi_client.models.get_experiment_run_info_rsp import GetExperimentRunInfoRsp

# TODO update the JSON string below
json = "{}"
# create an instance of GetExperimentRunInfoRsp from a JSON string
get_experiment_run_info_rsp_instance = GetExperimentRunInfoRsp.from_json(json)
# print the JSON string representation of the object
print(GetExperimentRunInfoRsp.to_json())

# convert the object into a dict
get_experiment_run_info_rsp_dict = get_experiment_run_info_rsp_instance.to_dict()
# create an instance of GetExperimentRunInfoRsp from a dict
get_experiment_run_info_rsp_from_dict = GetExperimentRunInfoRsp.from_dict(get_experiment_run_info_rsp_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


