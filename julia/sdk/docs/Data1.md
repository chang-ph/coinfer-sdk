# Data1



## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | This is a oneOf model. The value must be exactly one of the following types: ExperimentCloudwatchLogRsp, ExperimentRsp, ExperimentSampleDataRsp, ViewExperimentShareRsp, ViewModelsRsp |  | [optional] 

The discriminator field is `object_type` with the following mapping:
 - `experiment`: `ExperimentRsp`
 - `experiment.cloudwatch_log`: `ExperimentCloudwatchLogRsp`
 - `experiment.sampledata`: `ExperimentSampleDataRsp`
 - `model`: `ViewModelsRsp`
 - `share`: `ViewExperimentShareRsp`



[[Back to Model list]](../README.md#models) [[Back to API list]](../README.md#api-endpoints) [[Back to README]](../README.md)


