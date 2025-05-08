# ListingRspDataUnionListExperimentRspListModelsRspItem


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**total** | **int** |  | 
**page** | **int** |  | 
**count_per_page** | **int** |  | 
**objects** | [**List[ListingRspDataUnionListExperimentRspListModelsRspItemObjectsInner]**](ListingRspDataUnionListExperimentRspListModelsRspItemObjectsInner.md) |  | 

## Example

```python
from openapi_client.models.listing_rsp_data_union_list_experiment_rsp_list_models_rsp_item import ListingRspDataUnionListExperimentRspListModelsRspItem

# TODO update the JSON string below
json = "{}"
# create an instance of ListingRspDataUnionListExperimentRspListModelsRspItem from a JSON string
listing_rsp_data_union_list_experiment_rsp_list_models_rsp_item_instance = ListingRspDataUnionListExperimentRspListModelsRspItem.from_json(json)
# print the JSON string representation of the object
print(ListingRspDataUnionListExperimentRspListModelsRspItem.to_json())

# convert the object into a dict
listing_rsp_data_union_list_experiment_rsp_list_models_rsp_item_dict = listing_rsp_data_union_list_experiment_rsp_list_models_rsp_item_instance.to_dict()
# create an instance of ListingRspDataUnionListExperimentRspListModelsRspItem from a dict
listing_rsp_data_union_list_experiment_rsp_list_models_rsp_item_from_dict = ListingRspDataUnionListExperimentRspListModelsRspItem.from_dict(listing_rsp_data_union_list_experiment_rsp_list_models_rsp_item_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


