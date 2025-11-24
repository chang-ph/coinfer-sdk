# CommandApi

All URIs are relative to *https://api.coinfer.ai*

Method | HTTP request | Description
------------- | ------------- | -------------
[**run_command**](CommandApi.md#run_command) | **POST** /command | Run command


# **run_command**
> run_command(_api::CommandApi, run_command_req::RunCommandReq; _mediaType=nothing) -> SuccRspAny, OpenAPI.Clients.ApiResponse <br/>
> run_command(_api::CommandApi, response_stream::Channel, run_command_req::RunCommandReq; _mediaType=nothing) -> Channel{ SuccRspAny }, OpenAPI.Clients.ApiResponse

Run command

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **_api** | **CommandApi** | API context | 
**run_command_req** | [**RunCommandReq**](RunCommandReq.md) |  |

### Return type

[**SuccRspAny**](SuccRspAny.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

