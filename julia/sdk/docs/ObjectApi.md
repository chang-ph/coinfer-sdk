# ObjectApi

All URIs are relative to *https://api.coinfer.ai*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_object**](ObjectApi.md#create_object) | **POST** /api/object | Create new object.
[**delete_object**](ObjectApi.md#delete_object) | **DELETE** /api/object | Delete objects.
[**list_object**](ObjectApi.md#list_object) | **GET** /api/object | List objects.
[**update_object**](ObjectApi.md#update_object) | **POST** /api/object/{objid} | Update object.
[**view_object**](ObjectApi.md#view_object) | **GET** /api/object/{objid} | View object.


# **create_object**
> create_object(_api::ObjectApi, create_object_req::CreateObjectReq; _mediaType=nothing) -> UUUU4be0e69353a8fb4b4ca5b5b1a94b3f66, OpenAPI.Clients.ApiResponse <br/>
> create_object(_api::ObjectApi, response_stream::Channel, create_object_req::CreateObjectReq; _mediaType=nothing) -> Channel{ UUUU4be0e69353a8fb4b4ca5b5b1a94b3f66 }, OpenAPI.Clients.ApiResponse

Create new object.

Create new object.  ### Example Create model: ``` POST /api/object {     \"payload\": {         \"object_type\": \"model\",         \"name\": \"model name\",         \"type\": \"local\",         \"content\": {             \"meta\": {\"entrance_file\": \"main.jl\"},             \"tree\": [],         }     } } ```  Create model from GitHub repo: ``` POST /api/object {     \"payload\": {         \"object_type\": \"model\",         \"repo\": \"vectorly-ai/simple-model\",         \"branch\": \"main\",         \"type\": \"repo\",     } } ```  Create model from GitHub gist: ``` POST /api/object {     \"payload\": {         \"object_type\": \"model\",         \"repo\": \"<the-gist-id>\",         \"type\": \"gist\",     } } ```  Create experiment: ``` POST /api/object {     \"payload\": {         \"object_type\": \"experiment\",         \"name\": \"experiment name\",         \"model_id\": \"M1234567\",     } } ```  Create share of experiment: ``` POST /api/object {     \"payload\": {         \"object_type\": \"share\",         \"objid\": \"X1234567\",         \"password\": \"the-pass\",     } } ```

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **_api** | **ObjectApi** | API context | 
**create_object_req** | [**CreateObjectReq**](CreateObjectReq.md) |  |

### Return type

[**UUUU4be0e69353a8fb4b4ca5b5b1a94b3f66**](UUUU4be0e69353a8fb4b4ca5b5b1a94b3f66.md)

### Authorization

[GlobalAuth](../README.md#GlobalAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

# **delete_object**
> delete_object(_api::ObjectApi; objids=nothing, deleted_key=nothing, _mediaType=nothing) -> SuccRspSoftDeletedRsp, OpenAPI.Clients.ApiResponse <br/>
> delete_object(_api::ObjectApi, response_stream::Channel; objids=nothing, deleted_key=nothing, _mediaType=nothing) -> Channel{ SuccRspSoftDeletedRsp }, OpenAPI.Clients.ApiResponse

Delete objects.

Delete objects of certain IDs in batch.  ### Example  ``` DELETE /api/object?objids=M1234567&objids=X1234567 ```

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **_api** | **ObjectApi** | API context | 

### Optional Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **objids** | [**Vector{String}**](String.md) | list of object ids | [default to nothing]
 **deleted_key** | **String** |  | [default to &quot;&quot;]

### Return type

[**SuccRspSoftDeletedRsp**](SuccRspSoftDeletedRsp.md)

### Authorization

[GlobalAuth](../README.md#GlobalAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

# **list_object**
> list_object(_api::ObjectApi, object_type::String; page_no=nothing, page_size=nothing, with_share_info=nothing, shared_by_me=nothing, shared_with_me=nothing, model_ids=nothing, status=nothing, run_on=nothing, has_model=nothing, tags=nothing, _mediaType=nothing) -> UUUU18d10abbf81f28b86769c427804ea587, OpenAPI.Clients.ApiResponse <br/>
> list_object(_api::ObjectApi, response_stream::Channel, object_type::String; page_no=nothing, page_size=nothing, with_share_info=nothing, shared_by_me=nothing, shared_with_me=nothing, model_ids=nothing, status=nothing, run_on=nothing, has_model=nothing, tags=nothing, _mediaType=nothing) -> Channel{ UUUU18d10abbf81f28b86769c427804ea587 }, OpenAPI.Clients.ApiResponse

List objects.

### List Objects  By default, the API returns only objects created by the current user, excluding sharing information for performance optimization.  When `shared_with_me` is enabled, the API returns objects owned by other users but shared with the current user, including their sharing details.  Enabling `shared_by_me` will include sharing information for objects that the current user has shared with others.  Setting `with_share_info` to true combines both scenarios: it returns objects shared by the current user as well as objects shared with the current user, complete with their respective sharing information. This effectively merges the functionality of both `shared_by_me` and `shared_with_me`.  ### Example  List models: ``` GET /api/object?object_type=model GET /api/object?object_type=model&shared_by_me=true GET /api/object?object_type=model&shared_with_me=true GET /api/object?object_type=model&with_share_info=true ```  List experiments: ``` GET /api/object?object_type=experiment GET /api/object?object_type=experiment&shared_by_me=true GET /api/object?object_type=experiment&shared_with_me=true GET /api/object?object_type=experiment&with_share_info=true ```

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **_api** | **ObjectApi** | API context | 
**object_type** | **String** |  |

### Optional Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page_no** | **Int64** | page number | [default to 1]
 **page_size** | **Int64** | page size | [default to 100]
 **with_share_info** | **Bool** | Whether to return the related share info | [default to false]
 **shared_by_me** | **Bool** | Filter objects shared by the current user | [default to false]
 **shared_with_me** | **Bool** | Filter objects shared with the current user | [default to false]
 **model_ids** | [**Vector{String}**](String.md) |  | [default to nothing]
 **status** | **String** |  | [default to &quot;&quot;]
 **run_on** | **String** |  | [default to &quot;&quot;]
 **has_model** | **String** |  | [default to &quot;&quot;]
 **tags** | [**Vector{String}**](String.md) | Filter by tags | [default to nothing]

### Return type

[**UUUU18d10abbf81f28b86769c427804ea587**](UUUU18d10abbf81f28b86769c427804ea587.md)

### Authorization

[GlobalAuth](../README.md#GlobalAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

# **update_object**
> update_object(_api::ObjectApi, objid::String, update_object_param::UpdateObject; _mediaType=nothing) -> UUUU28b510deefc97bb409a5d7911e299314, OpenAPI.Clients.ApiResponse <br/>
> update_object(_api::ObjectApi, response_stream::Channel, objid::String, update_object_param::UpdateObject; _mediaType=nothing) -> Channel{ UUUU28b510deefc97bb409a5d7911e299314 }, OpenAPI.Clients.ApiResponse

Update object.

Update object of certain ID.  ### Example  Update model: ``` POST /api/object/M1234567  {     \"payload\": {         \"object_type\": \"model\",         \"name\": \"model name\",         \"content\": {             \"meta\": {\"entrance_file\": \"main.jl\"},             \"tree\": [],         }     } } ```  Update experiment: ``` POST /api/object/X1234567  {     \"payload\": {         \"object_type\": \"experiment\",         \"name\": \"experiment name\",     } } ```

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **_api** | **ObjectApi** | API context | 
**objid** | **String** |  |
**update_object_param** | [**UpdateObject**](UpdateObject.md) |  |

### Return type

[**UUUU28b510deefc97bb409a5d7911e299314**](UUUU28b510deefc97bb409a5d7911e299314.md)

### Authorization

[GlobalAuth](../README.md#GlobalAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

# **view_object**
> view_object(_api::ObjectApi, objid::String; object_type=nothing, share_id=nothing, sampledata=nothing, fmt=nothing, n_iteration=nothing, cloudwatch_log=nothing, batch_id=nothing, run_id=nothing, view_analyzer=nothing, _mediaType=nothing) -> UUUU0bdaccc02abe3e86fd53540d087462d8, OpenAPI.Clients.ApiResponse <br/>
> view_object(_api::ObjectApi, response_stream::Channel, objid::String; object_type=nothing, share_id=nothing, sampledata=nothing, fmt=nothing, n_iteration=nothing, cloudwatch_log=nothing, batch_id=nothing, run_id=nothing, view_analyzer=nothing, _mediaType=nothing) -> Channel{ UUUU0bdaccc02abe3e86fd53540d087462d8 }, OpenAPI.Clients.ApiResponse

View object.

View object of certain ID.  ### Example  ``` GET /api/object/M1234567  # view model data GET /api/object/X1234567  # view experiment data GET /api/object/S1234566  # view share data ```

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **_api** | **ObjectApi** | API context | 
**objid** | **String** |  |

### Optional Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **object_type** | **String** |  | [default to &quot;&quot;]
 **share_id** | **String** |                  Only appicable to object_type &#x3D;&#x3D; model or object_type &#x3D;&#x3D; experiment                 If this field is empty, returns the latest version of the objects.                 otherwise returns the specified share snapshot | [default to &quot;&quot;]
 **sampledata** | **Bool** |  | [default to false]
 **fmt** | **String** |  | [default to &quot;csv&quot;]
 **n_iteration** | **Int64** | Number of iterations to sample | [default to nothing]
 **cloudwatch_log** | **Bool** |  | [default to false]
 **batch_id** | **String** |  | [default to &quot;&quot;]
 **run_id** | **String** |  | [default to &quot;&quot;]
 **view_analyzer** | **Bool** | view analyzer result | [default to false]

### Return type

[**UUUU0bdaccc02abe3e86fd53540d087462d8**](UUUU0bdaccc02abe3e86fd53540d087462d8.md)

### Authorization

[GlobalAuth](../README.md#GlobalAuth), [SharingAuth](../README.md#SharingAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

