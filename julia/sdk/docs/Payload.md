# Payload



## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | This is a oneOf model. The value must be exactly one of the following types: ListEvent, ListExperiment, ListModel, ListRelation, ListShare |  | [optional] 

The discriminator field is `object_type` with the following mapping:
 - `event`: `ListEvent`
 - `experiment`: `ListExperiment`
 - `model`: `ListModel`
 - `relation`: `ListRelation`
 - `share`: `ListShare`



[[Back to Model list]](../README.md#models) [[Back to API list]](../README.md#api-endpoints) [[Back to README]](../README.md)


