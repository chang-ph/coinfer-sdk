# ExperimentSampleDataRsp


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**object_type** | **str** |  | 
**url** | **str** |  | 
**progress** | **str** |  | 
**message** | **str** |  | [optional] [default to '']

## Example

```python
from openapi_client.models.experiment_sample_data_rsp import ExperimentSampleDataRsp

# TODO update the JSON string below
json = "{}"
# create an instance of ExperimentSampleDataRsp from a JSON string
experiment_sample_data_rsp_instance = ExperimentSampleDataRsp.from_json(json)
# print the JSON string representation of the object
print(ExperimentSampleDataRsp.to_json())

# convert the object into a dict
experiment_sample_data_rsp_dict = experiment_sample_data_rsp_instance.to_dict()
# create an instance of ExperimentSampleDataRsp from a dict
experiment_sample_data_rsp_from_dict = ExperimentSampleDataRsp.from_dict(experiment_sample_data_rsp_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


