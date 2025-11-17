# ViewObject


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**object_type** | **String** |  | [optional] [default to ""]
**share_id** | **String** |                  Only appicable to object_type &#x3D;&#x3D; model or object_type &#x3D;&#x3D; experiment                 If this field is empty, returns the latest version of the objects.                 otherwise returns the specified share snapshot | [optional] [default to ""]
**sampledata** | **Bool** |  | [optional] [default to false]
**fmt** | **String** |  | [optional] [default to "csv"]
**n_iteration** | **Int64** |  | [optional] [default to 0]
**cloudwatch_log** | **Bool** |  | [optional] [default to false]
**batch_id** | **String** |  | [optional] [default to ""]
**run_id** | **String** |  | [optional] [default to ""]
**var&quot;view-analyzer&quot;** | **Bool** | view analyzer result | [optional] [default to false]
**plot_func** | **String** |  | [default to nothing]
**plot_chain** | **String** |  | [default to nothing]
**plot_var** | **String** |  | [default to nothing]


[[Back to Model list]](../README.md#models) [[Back to API list]](../README.md#api-endpoints) [[Back to README]](../README.md)


