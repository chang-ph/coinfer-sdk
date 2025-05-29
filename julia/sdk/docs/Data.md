# Data



## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | This is a oneOf model. The value must be exactly one of the following types: CreateCallbackRsp, CreateEventRsp, CreateExperimentShareRsp, CreateRelationRsp, ExperimentRsp, ListModelsRspItem |  | [optional] 

The discriminator field is `object_type` with the following mapping:
 - `callback`: `CreateCallbackRsp`
 - `event`: `CreateEventRsp`
 - `experiment`: `ExperimentRsp`
 - `model`: `ListModelsRspItem`
 - `relation`: `CreateRelationRsp`
 - `share`: `CreateExperimentShareRsp`



[[Back to Model list]](../README.md#models) [[Back to API list]](../README.md#api-endpoints) [[Back to README]](../README.md)


