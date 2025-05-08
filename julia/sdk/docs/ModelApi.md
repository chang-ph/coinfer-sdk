# ModelApi

All URIs are relative to *https://api.coinfer.ai*

Method | HTTP request | Description
------------- | ------------- | -------------
[**batch_delete_model**](ModelApi.md#batch_delete_model) | **DELETE** /turing/object | Delete models in batch.
[**create_model**](ModelApi.md#create_model) | **POST** /turing/object | Create a new model.
[**create_model_from_github**](ModelApi.md#create_model_from_github) | **POST** /turing/github/model | Create a model from GitHub repository.
[**get_config**](ModelApi.md#get_config) | **GET** /turing/config | Get configuration about how to run a model.
[**list_branch**](ModelApi.md#list_branch) | **GET** /turing/github/branch | List branches.
[**list_models**](ModelApi.md#list_models) | **GET** /turing/object | List models.
[**list_repository**](ModelApi.md#list_repository) | **GET** /turing/github/repository | List repositories and gists.
[**update_model**](ModelApi.md#update_model) | **POST** /turing/object/{objid} | Update a model by its ID.
[**view_model**](ModelApi.md#view_model) | **GET** /turing/object/{objid} | View a model by its ID.
[**view_shared_model**](ModelApi.md#view_shared_model) | **GET** /turing/object/{objid}/share/{share_id} | View share snapshot of a model


# **batch_delete_model**
> batch_delete_model(_api::ModelApi; objids=nothing, _mediaType=nothing) -> SuccRspNoneType, OpenAPI.Clients.ApiResponse <br/>
> batch_delete_model(_api::ModelApi, response_stream::Channel; objids=nothing, _mediaType=nothing) -> Channel{ SuccRspNoneType }, OpenAPI.Clients.ApiResponse

Delete models in batch.

Delete models in batch.

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **_api** | **ModelApi** | API context | 

### Optional Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **objids** | [**Vector{String}**](String.md) |  | [default to nothing]

### Return type

[**SuccRspNoneType**](SuccRspNoneType.md)

### Authorization

[GlobalAuth](../README.md#GlobalAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

# **create_model**
> create_model(_api::ModelApi, create_model_param::CreateModel; _mediaType=nothing) -> SuccRspListModelsRspItem, OpenAPI.Clients.ApiResponse <br/>
> create_model(_api::ModelApi, response_stream::Channel, create_model_param::CreateModel; _mediaType=nothing) -> Channel{ SuccRspListModelsRspItem }, OpenAPI.Clients.ApiResponse

Create a new model.

Create a new model.

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **_api** | **ModelApi** | API context | 
**create_model_param** | [**CreateModel**](CreateModel.md) |  |

### Return type

[**SuccRspListModelsRspItem**](SuccRspListModelsRspItem.md)

### Authorization

[GlobalAuth](../README.md#GlobalAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

# **create_model_from_github**
> create_model_from_github(_api::ModelApi, import_model_req::ImportModelReq; _mediaType=nothing) -> SuccRspListModelsRspItem, OpenAPI.Clients.ApiResponse <br/>
> create_model_from_github(_api::ModelApi, response_stream::Channel, import_model_req::ImportModelReq; _mediaType=nothing) -> Channel{ SuccRspListModelsRspItem }, OpenAPI.Clients.ApiResponse

Create a model from GitHub repository.

Create a model from GitHub repository/gist.  Some details: 1. Use the repository name as the model name. Use gist description as the model name if it is not empty, otherwise use the gist ID as the model name. 2. Assume that the repository/gist contains Project.toml. 3. Assume that the repository/gist contains main.jl as the entrance file. 4. Assume that the entrance file contains a function named model as the entrance function.

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **_api** | **ModelApi** | API context | 
**import_model_req** | [**ImportModelReq**](ImportModelReq.md) |  |

### Return type

[**SuccRspListModelsRspItem**](SuccRspListModelsRspItem.md)

### Authorization

[GlobalAuth](../README.md#GlobalAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

# **get_config**
> get_config(_api::ModelApi; _mediaType=nothing) -> SuccRspGetConfigRsp, OpenAPI.Clients.ApiResponse <br/>
> get_config(_api::ModelApi, response_stream::Channel; _mediaType=nothing) -> Channel{ SuccRspGetConfigRsp }, OpenAPI.Clients.ApiResponse

Get configuration about how to run a model.

This API is used to get the configuration about how to run a model. Currently the configuration includes the URL of the proxy lambda function which is used to run the model.

### Required Parameters
This endpoint does not need any parameter.

### Return type

[**SuccRspGetConfigRsp**](SuccRspGetConfigRsp.md)

### Authorization

[GlobalAuth](../README.md#GlobalAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

# **list_branch**
> list_branch(_api::ModelApi, repo::String; _mediaType=nothing) -> SuccRspListBranchRsp, OpenAPI.Clients.ApiResponse <br/>
> list_branch(_api::ModelApi, response_stream::Channel, repo::String; _mediaType=nothing) -> Channel{ SuccRspListBranchRsp }, OpenAPI.Clients.ApiResponse

List branches.

List branches of the specified repository.

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **_api** | **ModelApi** | API context | 
**repo** | **String** |  |

### Return type

[**SuccRspListBranchRsp**](SuccRspListBranchRsp.md)

### Authorization

[GlobalAuth](../README.md#GlobalAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

# **list_models**
> list_models(_api::ModelApi; page_no=nothing, page_size=nothing, model_ids=nothing, with_share_info=nothing, shared_by_me=nothing, shared_with_me=nothing, _mediaType=nothing) -> ListingRspListModelsRspItem, OpenAPI.Clients.ApiResponse <br/>
> list_models(_api::ModelApi, response_stream::Channel; page_no=nothing, page_size=nothing, model_ids=nothing, with_share_info=nothing, shared_by_me=nothing, shared_with_me=nothing, _mediaType=nothing) -> Channel{ ListingRspListModelsRspItem }, OpenAPI.Clients.ApiResponse

List models.

By default, the API returns only models created by the current user, excluding sharing information for performance optimization.  When `shared_with_me` is enabled, the API returns models owned by other users but shared with the current user, including their sharing details.  Enabling `shared_by_me` will include sharing information for models that the current user has shared with others.  Setting `with_share_info` to true combines both scenarios: it returns models shared by the current user as well as models shared with the current user, complete with their respective sharing information. This effectively merges the functionality of both `shared_by_me` and `shared_with_me`.

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **_api** | **ModelApi** | API context | 

### Optional Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page_no** | **Int64** | page number | [default to 1]
 **page_size** | **Int64** | page size | [default to 100]
 **model_ids** | [**Vector{String}**](String.md) |  | [default to nothing]
 **with_share_info** | **Bool** | Whether to return the related share info | [default to false]
 **shared_by_me** | **Bool** | Filter models shared by the current user | [default to false]
 **shared_with_me** | **Bool** | Filter models shared with the current user | [default to false]

### Return type

[**ListingRspListModelsRspItem**](ListingRspListModelsRspItem.md)

### Authorization

[GlobalAuth](../README.md#GlobalAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

# **list_repository**
> list_repository(_api::ModelApi; page_no=nothing, page_size=nothing, _mediaType=nothing) -> SuccRspListRepositoryRsp, OpenAPI.Clients.ApiResponse <br/>
> list_repository(_api::ModelApi, response_stream::Channel; page_no=nothing, page_size=nothing, _mediaType=nothing) -> Channel{ SuccRspListRepositoryRsp }, OpenAPI.Clients.ApiResponse

List repositories and gists.

List repositories and gists of the current (GitHub) user.  Of course this API can only be used when the user is login using the GitHub account.  The return value contains two parts: 1. List of repositories names. 2. List of gists. As the description field can't uniquely identify a gist, the id field is also returned. In practice, the description field should be showed to user for them to select the gist, the ID field should be used to specify a gist.

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **_api** | **ModelApi** | API context | 

### Optional Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page_no** | **Int64** | page number | [default to 1]
 **page_size** | **Int64** | page size | [default to 100]

### Return type

[**SuccRspListRepositoryRsp**](SuccRspListRepositoryRsp.md)

### Authorization

[GlobalAuth](../README.md#GlobalAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

# **update_model**
> update_model(_api::ModelApi, objid::String, update_model_param::UpdateModel; _mediaType=nothing) -> SuccRspListModelsRspItem, OpenAPI.Clients.ApiResponse <br/>
> update_model(_api::ModelApi, response_stream::Channel, objid::String, update_model_param::UpdateModel; _mediaType=nothing) -> Channel{ SuccRspListModelsRspItem }, OpenAPI.Clients.ApiResponse

Update a model by its ID.

Update a model by its ID.  NOTE: The status of model is manipulated by the system. So normally you should not call this API to update the status.

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **_api** | **ModelApi** | API context | 
**objid** | **String** |  |
**update_model_param** | [**UpdateModel**](UpdateModel.md) |  |

### Return type

[**SuccRspListModelsRspItem**](SuccRspListModelsRspItem.md)

### Authorization

[GlobalAuth](../README.md#GlobalAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

# **view_model**
> view_model(_api::ModelApi, objid::String; _mediaType=nothing) -> SuccRspViewModelsRsp, OpenAPI.Clients.ApiResponse <br/>
> view_model(_api::ModelApi, response_stream::Channel, objid::String; _mediaType=nothing) -> Channel{ SuccRspViewModelsRsp }, OpenAPI.Clients.ApiResponse

View a model by its ID.

This API is primarily designed for model owners to view their models, requiring a valid access token for authentication.  For shared models, access is granted based on the sharing configuration: 1. Password-protected sharing: Requires the share password for access, eg. `X-Share-Password` in the header 2. Public sharing: Allows access without any password 3. User-specific sharing: Permits access for designated users without requiring a password

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **_api** | **ModelApi** | API context | 
**objid** | **String** |  |

### Return type

[**SuccRspViewModelsRsp**](SuccRspViewModelsRsp.md)

### Authorization

[SharingAuth](../README.md#SharingAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

# **view_shared_model**
> view_shared_model(_api::ModelApi, objid::String, share_id::String; _mediaType=nothing) -> SuccRspViewModelsRsp, OpenAPI.Clients.ApiResponse <br/>
> view_shared_model(_api::ModelApi, response_stream::Channel, objid::String, share_id::String; _mediaType=nothing) -> Channel{ SuccRspViewModelsRsp }, OpenAPI.Clients.ApiResponse

View share snapshot of a model

View the snapshot of a model which is created when creating the share.  The snapshot is assured to remain unchanged even when the model undergoes modifications. This guarantees that discussions regarding shared resources among users are grounded in a solid foundation.

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **_api** | **ModelApi** | API context | 
**objid** | **String** |  |
**share_id** | **String** |  |

### Return type

[**SuccRspViewModelsRsp**](SuccRspViewModelsRsp.md)

### Authorization

[SharingAuth](../README.md#SharingAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

