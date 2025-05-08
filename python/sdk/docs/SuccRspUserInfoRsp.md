# SuccRspUserInfoRsp


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **str** |  | 
**data** | [**UserInfoRsp**](UserInfoRsp.md) |  | 

## Example

```python
from openapi_client.models.succ_rsp_user_info_rsp import SuccRspUserInfoRsp

# TODO update the JSON string below
json = "{}"
# create an instance of SuccRspUserInfoRsp from a JSON string
succ_rsp_user_info_rsp_instance = SuccRspUserInfoRsp.from_json(json)
# print the JSON string representation of the object
print(SuccRspUserInfoRsp.to_json())

# convert the object into a dict
succ_rsp_user_info_rsp_dict = succ_rsp_user_info_rsp_instance.to_dict()
# create an instance of SuccRspUserInfoRsp from a dict
succ_rsp_user_info_rsp_from_dict = SuccRspUserInfoRsp.from_dict(succ_rsp_user_info_rsp_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


