# ListingRspDataUnionListExperimentRspListModelsRspItemCreateEventRspCreateCallbackRspCreateRelationRspCreateDataRspCreateWorkflowRspObjectsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**short_id** | **str** |  | 
**name** | **str** |  | 
**model_id** | **str** |  | 
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
**description** | **str** |  | 
**updated_at** | **datetime** |  | 
**path** | **str** |  | [optional] [default to '']
**fmt** | **str** |  | [optional] [default to 'raw']
**data_id** | **str** |  | [optional] 
**data_name** | **str** |  | [optional] [default to '']

## Example

```python
from openapi_client.models.listing_rsp_data_union_list_experiment_rsp_list_models_rsp_item_create_event_rsp_create_callback_rsp_create_relation_rsp_create_data_rsp_create_workflow_rsp_objects_inner import ListingRspDataUnionListExperimentRspListModelsRspItemCreateEventRspCreateCallbackRspCreateRelationRspCreateDataRspCreateWorkflowRspObjectsInner

# TODO update the JSON string below
json = "{}"
# create an instance of ListingRspDataUnionListExperimentRspListModelsRspItemCreateEventRspCreateCallbackRspCreateRelationRspCreateDataRspCreateWorkflowRspObjectsInner from a JSON string
listing_rsp_data_union_list_experiment_rsp_list_models_rsp_item_create_event_rsp_create_callback_rsp_create_relation_rsp_create_data_rsp_create_workflow_rsp_objects_inner_instance = ListingRspDataUnionListExperimentRspListModelsRspItemCreateEventRspCreateCallbackRspCreateRelationRspCreateDataRspCreateWorkflowRspObjectsInner.from_json(json)
# print the JSON string representation of the object
print(ListingRspDataUnionListExperimentRspListModelsRspItemCreateEventRspCreateCallbackRspCreateRelationRspCreateDataRspCreateWorkflowRspObjectsInner.to_json())

# convert the object into a dict
listing_rsp_data_union_list_experiment_rsp_list_models_rsp_item_create_event_rsp_create_callback_rsp_create_relation_rsp_create_data_rsp_create_workflow_rsp_objects_inner_dict = listing_rsp_data_union_list_experiment_rsp_list_models_rsp_item_create_event_rsp_create_callback_rsp_create_relation_rsp_create_data_rsp_create_workflow_rsp_objects_inner_instance.to_dict()
# create an instance of ListingRspDataUnionListExperimentRspListModelsRspItemCreateEventRspCreateCallbackRspCreateRelationRspCreateDataRspCreateWorkflowRspObjectsInner from a dict
listing_rsp_data_union_list_experiment_rsp_list_models_rsp_item_create_event_rsp_create_callback_rsp_create_relation_rsp_create_data_rsp_create_workflow_rsp_objects_inner_from_dict = ListingRspDataUnionListExperimentRspListModelsRspItemCreateEventRspCreateCallbackRspCreateRelationRspCreateDataRspCreateWorkflowRspObjectsInner.from_dict(listing_rsp_data_union_list_experiment_rsp_list_models_rsp_item_create_event_rsp_create_callback_rsp_create_relation_rsp_create_data_rsp_create_workflow_rsp_objects_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


