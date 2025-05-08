# SuccRspCreateExperimentShareRsp


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **str** |  | 
**data** | [**CreateExperimentShareRsp**](CreateExperimentShareRsp.md) |  | 

## Example

```python
from openapi_client.models.succ_rsp_create_experiment_share_rsp import SuccRspCreateExperimentShareRsp

# TODO update the JSON string below
json = "{}"
# create an instance of SuccRspCreateExperimentShareRsp from a JSON string
succ_rsp_create_experiment_share_rsp_instance = SuccRspCreateExperimentShareRsp.from_json(json)
# print the JSON string representation of the object
print(SuccRspCreateExperimentShareRsp.to_json())

# convert the object into a dict
succ_rsp_create_experiment_share_rsp_dict = succ_rsp_create_experiment_share_rsp_instance.to_dict()
# create an instance of SuccRspCreateExperimentShareRsp from a dict
succ_rsp_create_experiment_share_rsp_from_dict = SuccRspCreateExperimentShareRsp.from_dict(succ_rsp_create_experiment_share_rsp_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


