# SystemApi

All URIs are relative to *https://api.coinfer.ai*

Method | HTTP request | Description
------------- | ------------- | -------------
[**branch**](SystemApi.md#branch) | **GET** /sys/github/branch | List branches.
[**colab**](SystemApi.md#colab) | **GET** /sys/colab | Get a link of the notebook in Colab
[**config**](SystemApi.md#config) | **GET** /sys/config | Get configuration about how to run a model.
[**gist_files**](SystemApi.md#gist_files) | **GET** /sys/github/gist-files | Gist Files
[**repo_files**](SystemApi.md#repo_files) | **GET** /sys/github/repo-files | Repo Files
[**repository**](SystemApi.md#repository) | **GET** /sys/github/repository | List repositories and gists.


# **branch**
> branch(_api::SystemApi, repo::String; _mediaType=nothing) -> SuccRspListBranchRsp, OpenAPI.Clients.ApiResponse <br/>
> branch(_api::SystemApi, response_stream::Channel, repo::String; _mediaType=nothing) -> Channel{ SuccRspListBranchRsp }, OpenAPI.Clients.ApiResponse

List branches.

List branches of the specified repository.

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **_api** | **SystemApi** | API context | 
**repo** | **String** |  |

### Return type

[**SuccRspListBranchRsp**](SuccRspListBranchRsp.md)

### Authorization

[GlobalAuth](../README.md#GlobalAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

# **colab**
> colab(_api::SystemApi; _mediaType=nothing) -> SuccRspAny, OpenAPI.Clients.ApiResponse <br/>
> colab(_api::SystemApi, response_stream::Channel; _mediaType=nothing) -> Channel{ SuccRspAny }, OpenAPI.Clients.ApiResponse

Get a link of the notebook in Colab

Create notebook which can be used to load and visualize the experiment result. Save it to Github and returns a link which can be used to open this notebook in Google Colab

### Required Parameters
This endpoint does not need any parameter.

### Return type

[**SuccRspAny**](SuccRspAny.md)

### Authorization

[GlobalAuth](../README.md#GlobalAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

# **config**
> config(_api::SystemApi; _mediaType=nothing) -> SuccRspGetConfigRsp, OpenAPI.Clients.ApiResponse <br/>
> config(_api::SystemApi, response_stream::Channel; _mediaType=nothing) -> Channel{ SuccRspGetConfigRsp }, OpenAPI.Clients.ApiResponse

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

# **gist_files**
> gist_files(_api::SystemApi, gist_id::String; _mediaType=nothing) -> SuccRspListGistFilesRsp, OpenAPI.Clients.ApiResponse <br/>
> gist_files(_api::SystemApi, response_stream::Channel, gist_id::String; _mediaType=nothing) -> Channel{ SuccRspListGistFilesRsp }, OpenAPI.Clients.ApiResponse

Gist Files

List files of gist.

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **_api** | **SystemApi** | API context | 
**gist_id** | **String** |  |

### Return type

[**SuccRspListGistFilesRsp**](SuccRspListGistFilesRsp.md)

### Authorization

[GlobalAuth](../README.md#GlobalAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

# **repo_files**
> repo_files(_api::SystemApi, repo::String, ref::String; _mediaType=nothing) -> SuccRspListRepoFilesRsp, OpenAPI.Clients.ApiResponse <br/>
> repo_files(_api::SystemApi, response_stream::Channel, repo::String, ref::String; _mediaType=nothing) -> Channel{ SuccRspListRepoFilesRsp }, OpenAPI.Clients.ApiResponse

Repo Files

List files of repository.

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **_api** | **SystemApi** | API context | 
**repo** | **String** |  |
**ref** | **String** |  |

### Return type

[**SuccRspListRepoFilesRsp**](SuccRspListRepoFilesRsp.md)

### Authorization

[GlobalAuth](../README.md#GlobalAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

# **repository**
> repository(_api::SystemApi; page_no=nothing, page_size=nothing, _mediaType=nothing) -> SuccRspListRepositoryRsp, OpenAPI.Clients.ApiResponse <br/>
> repository(_api::SystemApi, response_stream::Channel; page_no=nothing, page_size=nothing, _mediaType=nothing) -> Channel{ SuccRspListRepositoryRsp }, OpenAPI.Clients.ApiResponse

List repositories and gists.

List repositories and gists of the current (GitHub) user.  Of course this API can only be used when the user is login using the GitHub account.  The return value contains two parts: 1. List of repositories names. 2. List of gists. As the description field can't uniquely identify a gist, the id field is also returned. In practice, the description field should be showed to user for them to select the gist, the ID field should be used to specify a gist.

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **_api** | **SystemApi** | API context | 

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

