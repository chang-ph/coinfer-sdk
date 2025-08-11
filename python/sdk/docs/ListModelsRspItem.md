# ListModelsRspItem


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**object_type** | **str** |  | 
**id** | **int** |  | 
**short_id** | **str** |  | 
**name** | **str** |  | 
**content** | **object** |  | [optional] 
**meta** | [**ModelMetaInRsp**](ModelMetaInRsp.md) |  | 
**tags** | **List[str]** |  | 
**lambda_image_url** | **str** |  | [optional] 
**lambda_image_name** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.list_models_rsp_item import ListModelsRspItem

# TODO update the JSON string below
json = "{}"
# create an instance of ListModelsRspItem from a JSON string
list_models_rsp_item_instance = ListModelsRspItem.from_json(json)
# print the JSON string representation of the object
print(ListModelsRspItem.to_json())

# convert the object into a dict
list_models_rsp_item_dict = list_models_rsp_item_instance.to_dict()
# create an instance of ListModelsRspItem from a dict
list_models_rsp_item_from_dict = ListModelsRspItem.from_dict(list_models_rsp_item_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


