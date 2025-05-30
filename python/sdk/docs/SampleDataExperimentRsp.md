# SampleDataExperimentRsp


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**object_type** | **str** |  | 
**url** | **str** |  | 
**progress** | **str** |  | 
**message** | **str** |  | [optional] [default to '']

## Example

```python
from openapi_client.models.sample_data_experiment_rsp import SampleDataExperimentRsp

# TODO update the JSON string below
json = "{}"
# create an instance of SampleDataExperimentRsp from a JSON string
sample_data_experiment_rsp_instance = SampleDataExperimentRsp.from_json(json)
# print the JSON string representation of the object
print(SampleDataExperimentRsp.to_json())

# convert the object into a dict
sample_data_experiment_rsp_dict = sample_data_experiment_rsp_instance.to_dict()
# create an instance of SampleDataExperimentRsp from a dict
sample_data_experiment_rsp_from_dict = SampleDataExperimentRsp.from_dict(sample_data_experiment_rsp_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


