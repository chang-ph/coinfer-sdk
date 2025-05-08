# ListingRspDataUnionListExperimentRspListModelsRspItemObjectsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**short_id** | **str** |  | 
**name** | **str** |  | 
**model_id** | **str** |  | [optional] 
**status** | **str** |  | 
**meta** | [**ModelMetaInRsp**](ModelMetaInRsp.md) |  | 
**n_chains** | **int** |  | 
**n_variables** | **int** |  | 
**n_samples** | **int** |  | 
**sample_update_time** | **datetime** |  | 
**run_on** | **str** |  | 
**share_info** | [**List[ShareInfoModel]**](ShareInfoModel.md) |  | [optional] 
**model_name** | **str** |  | 
**id** | **int** |  | 
**env** | **str** |  | 
**content** | **object** |  | [optional] 

## Example

```python
from openapi_client.models.listing_rsp_data_union_list_experiment_rsp_list_models_rsp_item_objects_inner import ListingRspDataUnionListExperimentRspListModelsRspItemObjectsInner

# TODO update the JSON string below
json = "{}"
# create an instance of ListingRspDataUnionListExperimentRspListModelsRspItemObjectsInner from a JSON string
listing_rsp_data_union_list_experiment_rsp_list_models_rsp_item_objects_inner_instance = ListingRspDataUnionListExperimentRspListModelsRspItemObjectsInner.from_json(json)
# print the JSON string representation of the object
print(ListingRspDataUnionListExperimentRspListModelsRspItemObjectsInner.to_json())

# convert the object into a dict
listing_rsp_data_union_list_experiment_rsp_list_models_rsp_item_objects_inner_dict = listing_rsp_data_union_list_experiment_rsp_list_models_rsp_item_objects_inner_instance.to_dict()
# create an instance of ListingRspDataUnionListExperimentRspListModelsRspItemObjectsInner from a dict
listing_rsp_data_union_list_experiment_rsp_list_models_rsp_item_objects_inner_from_dict = ListingRspDataUnionListExperimentRspListModelsRspItemObjectsInner.from_dict(listing_rsp_data_union_list_experiment_rsp_list_models_rsp_item_objects_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


