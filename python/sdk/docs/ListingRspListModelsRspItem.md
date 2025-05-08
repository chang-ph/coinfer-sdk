# ListingRspListModelsRspItem


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **str** |  | 
**data** | [**ListingRspDataListModelsRspItem**](ListingRspDataListModelsRspItem.md) |  | 

## Example

```python
from openapi_client.models.listing_rsp_list_models_rsp_item import ListingRspListModelsRspItem

# TODO update the JSON string below
json = "{}"
# create an instance of ListingRspListModelsRspItem from a JSON string
listing_rsp_list_models_rsp_item_instance = ListingRspListModelsRspItem.from_json(json)
# print the JSON string representation of the object
print(ListingRspListModelsRspItem.to_json())

# convert the object into a dict
listing_rsp_list_models_rsp_item_dict = listing_rsp_list_models_rsp_item_instance.to_dict()
# create an instance of ListingRspListModelsRspItem from a dict
listing_rsp_list_models_rsp_item_from_dict = ListingRspListModelsRspItem.from_dict(listing_rsp_list_models_rsp_item_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


