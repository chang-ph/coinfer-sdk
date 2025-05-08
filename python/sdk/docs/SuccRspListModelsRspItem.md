# SuccRspListModelsRspItem


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **str** |  | 
**data** | [**ListModelsRspItem**](ListModelsRspItem.md) |  | 

## Example

```python
from openapi_client.models.succ_rsp_list_models_rsp_item import SuccRspListModelsRspItem

# TODO update the JSON string below
json = "{}"
# create an instance of SuccRspListModelsRspItem from a JSON string
succ_rsp_list_models_rsp_item_instance = SuccRspListModelsRspItem.from_json(json)
# print the JSON string representation of the object
print(SuccRspListModelsRspItem.to_json())

# convert the object into a dict
succ_rsp_list_models_rsp_item_dict = succ_rsp_list_models_rsp_item_instance.to_dict()
# create an instance of SuccRspListModelsRspItem from a dict
succ_rsp_list_models_rsp_item_from_dict = SuccRspListModelsRspItem.from_dict(succ_rsp_list_models_rsp_item_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


