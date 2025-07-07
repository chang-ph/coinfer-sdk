# DefaultApi

All URIs are relative to *https://api.coinfer.ai*

Method | HTTP request | Description
------------- | ------------- | -------------
[**access_token**](DefaultApi.md#access_token) | **GET** /base/access_token | Access Token
[**code2token**](DefaultApi.md#code2token) | **POST** /base/code2token | Code2Token


# **access_token**
> access_token(_api::DefaultApi; _mediaType=nothing) -> SuccRspCode2TokenRsp, OpenAPI.Clients.ApiResponse <br/>
> access_token(_api::DefaultApi, response_stream::Channel; _mediaType=nothing) -> Channel{ SuccRspCode2TokenRsp }, OpenAPI.Clients.ApiResponse

Access Token

Get access token.

### Required Parameters
This endpoint does not need any parameter.

### Return type

[**SuccRspCode2TokenRsp**](SuccRspCode2TokenRsp.md)

### Authorization

[GlobalAuth](../README.md#GlobalAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

# **code2token**
> code2token(_api::DefaultApi, code::String; _mediaType=nothing) -> SuccRspCode2TokenRsp, OpenAPI.Clients.ApiResponse <br/>
> code2token(_api::DefaultApi, response_stream::Channel, code::String; _mediaType=nothing) -> Channel{ SuccRspCode2TokenRsp }, OpenAPI.Clients.ApiResponse

Code2Token

Exchange code for access token.

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **_api** | **DefaultApi** | API context | 
**code** | **String** |  |

### Return type

[**SuccRspCode2TokenRsp**](SuccRspCode2TokenRsp.md)

### Authorization

[GlobalAuth](../README.md#GlobalAuth)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

