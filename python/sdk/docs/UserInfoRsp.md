# UserInfoRsp


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** |  | 
**username** | **str** |  | 
**super** | **bool** |  | 
**roles** | **List[str]** |  | 
**is_github_user** | **bool** |  | 

## Example

```python
from openapi_client.models.user_info_rsp import UserInfoRsp

# TODO update the JSON string below
json = "{}"
# create an instance of UserInfoRsp from a JSON string
user_info_rsp_instance = UserInfoRsp.from_json(json)
# print the JSON string representation of the object
print(UserInfoRsp.to_json())

# convert the object into a dict
user_info_rsp_dict = user_info_rsp_instance.to_dict()
# create an instance of UserInfoRsp from a dict
user_info_rsp_from_dict = UserInfoRsp.from_dict(user_info_rsp_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


