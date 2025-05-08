# ListObjectRsp


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**short_id** | **str** |  | 
**name** | **str** |  | 
**model_id** | **str** |  | [optional] 
**status** | **str** |  | 
**meta** | [**MetaModel**](MetaModel.md) |  | [optional] 
**n_chains** | **int** |  | 
**n_variables** | **int** |  | 
**n_samples** | **int** |  | 
**sample_update_time** | **datetime** |  | 
**run_on** | **str** |  | 
**share_info** | [**List[ShareInfoModel]**](ShareInfoModel.md) |  | [optional] 
**model_name** | **str** |  | 

## Example

```python
from openapi_client.models.list_object_rsp import ListObjectRsp

# TODO update the JSON string below
json = "{}"
# create an instance of ListObjectRsp from a JSON string
list_object_rsp_instance = ListObjectRsp.from_json(json)
# print the JSON string representation of the object
print(ListObjectRsp.to_json())

# convert the object into a dict
list_object_rsp_dict = list_object_rsp_instance.to_dict()
# create an instance of ListObjectRsp from a dict
list_object_rsp_from_dict = ListObjectRsp.from_dict(list_object_rsp_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


