# UUUUc9932bea1f007b34d507c4c4c680b4a7ObjectsInner



## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | This is a oneOf model. The value must be exactly one of the following types: CreateCallbackRsp, CreateDataRsp, CreateEventRsp, CreateRelationRsp, CreateWorkflowRsp, ListExperimentRsp, ListModelsRspItem |  | [optional] 

The discriminator field is `object_type` with the following mapping:
 - `callback`: `CreateCallbackRsp`
 - `data`: `CreateDataRsp`
 - `event`: `CreateEventRsp`
 - `experiment`: `ListExperimentRsp`
 - `model`: `ListModelsRspItem`
 - `relation`: `CreateRelationRsp`
 - `workflow`: `CreateWorkflowRsp`


[[Back to Model list]](../README.md#models) [[Back to API list]](../README.md#api-endpoints) [[Back to README]](../README.md)


