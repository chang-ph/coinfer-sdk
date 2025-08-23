# SystemApi

All URIs are relative to *https://api.coinfer.ai*

Method | HTTP request | Description
------------- | ------------- | -------------
[**config**](SystemApi.md#config) | **GET** /sys/config | Get configuration about how to run a model.
[**repository**](SystemApi.md#repository) | **GET** /sys/gallery | List gallery data.


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

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

# **repository**
> repository(_api::SystemApi; _mediaType=nothing) -> SuccRspDemoListRsp, OpenAPI.Clients.ApiResponse <br/>
> repository(_api::SystemApi, response_stream::Channel; _mediaType=nothing) -> Channel{ SuccRspDemoListRsp }, OpenAPI.Clients.ApiResponse

List gallery data.

### Required Parameters
This endpoint does not need any parameter.

### Return type

[**SuccRspDemoListRsp**](SuccRspDemoListRsp.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

