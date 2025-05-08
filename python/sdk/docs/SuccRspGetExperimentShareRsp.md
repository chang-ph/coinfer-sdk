# SuccRspGetExperimentShareRsp


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **str** |  | 
**data** | [**GetExperimentShareRsp**](GetExperimentShareRsp.md) |  | 

## Example

```python
from openapi_client.models.succ_rsp_get_experiment_share_rsp import SuccRspGetExperimentShareRsp

# TODO update the JSON string below
json = "{}"
# create an instance of SuccRspGetExperimentShareRsp from a JSON string
succ_rsp_get_experiment_share_rsp_instance = SuccRspGetExperimentShareRsp.from_json(json)
# print the JSON string representation of the object
print(SuccRspGetExperimentShareRsp.to_json())

# convert the object into a dict
succ_rsp_get_experiment_share_rsp_dict = succ_rsp_get_experiment_share_rsp_instance.to_dict()
# create an instance of SuccRspGetExperimentShareRsp from a dict
succ_rsp_get_experiment_share_rsp_from_dict = SuccRspGetExperimentShareRsp.from_dict(succ_rsp_get_experiment_share_rsp_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


