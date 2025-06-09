# ModelApi

All URIs are relative to *https://api.coinfer.ai*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_config**](ModelApi.md#get_config) | **GET** /turing/config | [DEPRECATED] Get configuration about how to run a model.
[**list_branch**](ModelApi.md#list_branch) | **GET** /turing/github/branch | [DEPRECATED] List branches.
[**list_repository**](ModelApi.md#list_repository) | **GET** /turing/github/repository | [DEPRECATED] List repositories and gists.


# **get_config**
> get_config(_api::ModelApi; _mediaType=nothing) -> SuccRspGetConfigRsp, OpenAPI.Clients.ApiResponse <br/>
> get_config(_api::ModelApi, response_stream::Channel; _mediaType=nothing) -> Channel{ SuccRspGetConfigRsp }, OpenAPI.Clients.ApiResponse

[DEPRECATED] Get configuration about how to run a model.

DEPRECATED: Use `/sys/config` instead.  This API is used to get the configuration about how to run a model. Currently the configuration includes the URL of the proxy lambda function which is used to run the model.

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

[DEPRECATED] List branches.

DEPRECATED: Use `/sys/github/branch` instead.  List branches of the specified repository.

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

# **list_repository**
> list_repository(_api::ModelApi; page_no=nothing, page_size=nothing, _mediaType=nothing) -> SuccRspListRepositoryRsp, OpenAPI.Clients.ApiResponse <br/>
> list_repository(_api::ModelApi, response_stream::Channel; page_no=nothing, page_size=nothing, _mediaType=nothing) -> Channel{ SuccRspListRepositoryRsp }, OpenAPI.Clients.ApiResponse

[DEPRECATED] List repositories and gists.

DEPRECATED: Use `/sys/github/repository` instead.  List repositories and gists of the current (GitHub) user.  Of course this API can only be used when the user is login using the GitHub account.  The return value contains two parts: 1. List of repositories names. 2. List of gists. As the description field can't uniquely identify a gist, the id field is also returned. In practice, the description field should be showed to user for them to select the gist, the ID field should be used to specify a gist.

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

