# ViewObject


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**object_type** | **String** |  | [optional] [default to ""]
**share_id** | **String** |                  Only appicable to object_type &#x3D;&#x3D; model or object_type &#x3D;&#x3D; experiment                 If this field is empty, returns the latest version of the objects.                 otherwise returns the specified share snapshot | [optional] [default to ""]
**sampledata** | **Bool** |  | [optional] [default to false]
**fmt** | **String** |  | [optional] [default to "csv"]
**n_iteration** | **Int64** |  | [optional] [default to nothing]
**cloudwatch_log** | **Bool** |  | [optional] [default to false]
**batch_id** | **String** |  | [optional] [default to ""]
**run_id** | **String** |  | [optional] [default to ""]
**plot** | **Bool** | get arviz plot | [optional] [default to false]


[[Back to Model list]](../README.md#models) [[Back to API list]](../README.md#api-endpoints) [[Back to README]](../README.md)


