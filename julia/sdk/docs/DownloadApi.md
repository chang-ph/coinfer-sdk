# DownloadApi

All URIs are relative to *https://api.coinfer.ai*

Method | HTTP request | Description
------------- | ------------- | -------------
[**download**](DownloadApi.md#download) | **GET** /download/{objid} | Download resources.


# **download**
> download(_api::DownloadApi, objid::String; is_cloud=nothing, fmt=nothing, _mediaType=nothing) -> SuccRspAny, OpenAPI.Clients.ApiResponse <br/>
> download(_api::DownloadApi, response_stream::Channel, objid::String; is_cloud=nothing, fmt=nothing, _mediaType=nothing) -> Channel{ SuccRspAny }, OpenAPI.Clients.ApiResponse

Download resources.

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **_api** | **DownloadApi** | API context | 
**objid** | **String** |  |

### Optional Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **is_cloud** | **Bool** | is the downloaded package used to run workflow in cloud environment? | [default to false]
 **fmt** | **String** | download format, tar.gz or zip | [default to &quot;zip&quot;]

### Return type

[**SuccRspAny**](SuccRspAny.md)

### Authorization

[GlobalAuth](../README.md#GlobalAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

