# Payload1



## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | This is a oneOf model. The value must be exactly one of the following types: CreateNSampleStatReq, CreateProtobufMessageReq, CreateTextMessageReq, UpdateEventReq, UpdateExperiment, UpdateModel |  | [optional] 

The discriminator field is `object_type` with the following mapping:
 - `event`: `UpdateEventReq`
 - `experiment`: `UpdateExperiment`
 - `experiment.nsample_stat`: `CreateNSampleStatReq`
 - `experiment.protobuf_message`: `CreateProtobufMessageReq`
 - `experiment.text_message`: `CreateTextMessageReq`
 - `model`: `UpdateModel`



[[Back to Model list]](../README.md#models) [[Back to API list]](../README.md#api-endpoints) [[Back to README]](../README.md)


