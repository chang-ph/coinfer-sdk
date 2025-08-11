# ListingRspDataUnionListExperimentRspListModelsRspItemCreateEventRspCreateCallbackRspCreateRelationRspObjectsInner


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
**object_type** | **str** |  | 
**id** | **int** |  | 
**content** | **object** |  | [optional] 
**tags** | **List[str]** |  | 
**lambda_image_url** | **str** |  | [optional] 
**lambda_image_name** | **str** |  | [optional] 
**created_at** | **datetime** |  | 
**lang** | **str** |  | 
**code** | **str** |  | 
**token** | **str** |  | 
**user_id** | **int** |  | 
**object1_id** | **str** |  | 
**object2_id** | **str** |  | 

## Example

```python
from openapi_client.models.listing_rsp_data_union_list_experiment_rsp_list_models_rsp_item_create_event_rsp_create_callback_rsp_create_relation_rsp_objects_inner import ListingRspDataUnionListExperimentRspListModelsRspItemCreateEventRspCreateCallbackRspCreateRelationRspObjectsInner

# TODO update the JSON string below
json = "{}"
# create an instance of ListingRspDataUnionListExperimentRspListModelsRspItemCreateEventRspCreateCallbackRspCreateRelationRspObjectsInner from a JSON string
listing_rsp_data_union_list_experiment_rsp_list_models_rsp_item_create_event_rsp_create_callback_rsp_create_relation_rsp_objects_inner_instance = ListingRspDataUnionListExperimentRspListModelsRspItemCreateEventRspCreateCallbackRspCreateRelationRspObjectsInner.from_json(json)
# print the JSON string representation of the object
print(ListingRspDataUnionListExperimentRspListModelsRspItemCreateEventRspCreateCallbackRspCreateRelationRspObjectsInner.to_json())

# convert the object into a dict
listing_rsp_data_union_list_experiment_rsp_list_models_rsp_item_create_event_rsp_create_callback_rsp_create_relation_rsp_objects_inner_dict = listing_rsp_data_union_list_experiment_rsp_list_models_rsp_item_create_event_rsp_create_callback_rsp_create_relation_rsp_objects_inner_instance.to_dict()
# create an instance of ListingRspDataUnionListExperimentRspListModelsRspItemCreateEventRspCreateCallbackRspCreateRelationRspObjectsInner from a dict
listing_rsp_data_union_list_experiment_rsp_list_models_rsp_item_create_event_rsp_create_callback_rsp_create_relation_rsp_objects_inner_from_dict = ListingRspDataUnionListExperimentRspListModelsRspItemCreateEventRspCreateCallbackRspCreateRelationRspObjectsInner.from_dict(listing_rsp_data_union_list_experiment_rsp_list_models_rsp_item_create_event_rsp_create_callback_rsp_create_relation_rsp_objects_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


