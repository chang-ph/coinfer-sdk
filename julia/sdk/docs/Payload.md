# Payload



## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | This is a oneOf model. The value must be exactly one of the following types: CreateCallbackReq, CreateDataReq, CreateEventReq, CreateExperiment, CreateExperimentShare, CreateModel, CreateRelationReq |  | [optional] 

The discriminator field is `object_type` with the following mapping:
 - `callback`: `CreateCallbackReq`
 - `data`: `CreateDataReq`
 - `event`: `CreateEventReq`
 - `experiment`: `CreateExperiment`
 - `model`: `CreateModel`
 - `relation`: `CreateRelationReq`
 - `share`: `CreateExperimentShare`


[[Back to Model list]](../README.md#models) [[Back to API list]](../README.md#api-endpoints) [[Back to README]](../README.md)


