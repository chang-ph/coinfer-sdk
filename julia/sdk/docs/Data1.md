# Data1



## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | This is a oneOf model. The value must be exactly one of the following types: CreateDataRsp, CreateWorkflowRsp, ExperimentCloudwatchLogRsp, ExperimentRsp, ExperimentSampleDataRsp, GetExperimentRunInfoRsp, ViewAnalyzerRsp, ViewExperimentShareRsp, ViewModelsRsp |  | [optional] 

The discriminator field is `object_type` with the following mapping:
 - `data`: `CreateDataRsp`
 - `experiment`: `ExperimentRsp`
 - `experiment.cloudwatch_log`: `ExperimentCloudwatchLogRsp`
 - `experiment.run_info`: `GetExperimentRunInfoRsp`
 - `experiment.sampledata`: `ExperimentSampleDataRsp`
 - `model`: `ViewModelsRsp`
 - `share`: `ViewExperimentShareRsp`
 - `workflow`: `CreateWorkflowRsp`
 - `workflow.analyzer`: `ViewAnalyzerRsp`


[[Back to Model list]](../README.md#models) [[Back to API list]](../README.md#api-endpoints) [[Back to README]](../README.md)


