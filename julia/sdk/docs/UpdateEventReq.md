# UpdateEventReq


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**object_type** | **String** |  | [default to nothing]
**params** | **String** |  | [optional] [default to ""]
**engine** | **String** |  | [optional] [default to "lambda"]
**lock_key** | **String** | lock key provided by user. It is combined with the cloudfunction_id to form the real lock key when running cloudfunction triggered by this event.  Sometimes, users may want CloudFunctions to run exclusively, but not just one instance globally. For example, when running a CloudFunction specific to an experiment, users may want only one instance of that CloudFunction to run simultaneously for that experiment. In this case, users can specify the lock_key as the experiment_id. | [optional] [default to ""]


[[Back to Model list]](../README.md#models) [[Back to API list]](../README.md#api-endpoints) [[Back to README]](../README.md)


