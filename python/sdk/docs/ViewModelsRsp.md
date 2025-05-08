# ViewModelsRsp


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**object_type** | **str** |  | 
**id** | **int** |  | 
**short_id** | **str** |  | 
**name** | **str** |  | 
**env** | **str** |  | 
**share_info** | [**List[ViewModelShareInfo]**](ViewModelShareInfo.md) |  | [optional] 
**content** | **object** |  | [optional] 

## Example

```python
from openapi_client.models.view_models_rsp import ViewModelsRsp

# TODO update the JSON string below
json = "{}"
# create an instance of ViewModelsRsp from a JSON string
view_models_rsp_instance = ViewModelsRsp.from_json(json)
# print the JSON string representation of the object
print(ViewModelsRsp.to_json())

# convert the object into a dict
view_models_rsp_dict = view_models_rsp_instance.to_dict()
# create an instance of ViewModelsRsp from a dict
view_models_rsp_from_dict = ViewModelsRsp.from_dict(view_models_rsp_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


