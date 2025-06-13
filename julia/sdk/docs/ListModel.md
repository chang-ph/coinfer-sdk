# ListModel


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**page_no** | **Int64** | page number | [optional] [default to 1]
**page_size** | **Int64** | page size | [optional] [default to 100]
**object_type** | **String** |  | [default to nothing]
**with_share_info** | **Bool** | Whether to return the related share info | [optional] [default to false]
**shared_by_me** | **Bool** | Filter objects shared by the current user | [optional] [default to false]
**shared_with_me** | **Bool** | Filter objects shared with the current user | [optional] [default to false]
**model_ids** | **Vector{String}** |  | [optional] [default to nothing]
**kind** | [***CloudFunctionKind**](CloudFunctionKind.md) | Filter by kind | [optional] [default to nothing]


[[Back to Model list]](../README.md#models) [[Back to API list]](../README.md#api-endpoints) [[Back to README]](../README.md)


