# SuccRspDemoListRsp


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **str** |  | 
**data** | [**DemoListRsp**](DemoListRsp.md) |  | 

## Example

```python
from openapi_client.models.succ_rsp_demo_list_rsp import SuccRspDemoListRsp

# TODO update the JSON string below
json = "{}"
# create an instance of SuccRspDemoListRsp from a JSON string
succ_rsp_demo_list_rsp_instance = SuccRspDemoListRsp.from_json(json)
# print the JSON string representation of the object
print(SuccRspDemoListRsp.to_json())

# convert the object into a dict
succ_rsp_demo_list_rsp_dict = succ_rsp_demo_list_rsp_instance.to_dict()
# create an instance of SuccRspDemoListRsp from a dict
succ_rsp_demo_list_rsp_from_dict = SuccRspDemoListRsp.from_dict(succ_rsp_demo_list_rsp_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


