# SystemApi

All URIs are relative to *https://api.coinfer.ai*

Method | HTTP request | Description
------------- | ------------- | -------------
[**arviz_plot**](SystemApi.md#arviz_plot) | **POST** /sys/plot | Get Arviz plot data.
[**config**](SystemApi.md#config) | **GET** /sys/config | Get configuration about how to run a model.
[**download_workflow**](SystemApi.md#download_workflow) | **GET** /sys/download-workflow | Download workflow.
[**repository**](SystemApi.md#repository) | **GET** /sys/gallery | List gallery data.


# **arviz_plot**
> arviz_plot(_api::SystemApi, plot_req::PlotReq; _mediaType=nothing) -> SuccRspPlotRsp, OpenAPI.Clients.ApiResponse <br/>
> arviz_plot(_api::SystemApi, response_stream::Channel, plot_req::PlotReq; _mediaType=nothing) -> Channel{ SuccRspPlotRsp }, OpenAPI.Clients.ApiResponse

Get Arviz plot data.

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **_api** | **SystemApi** | API context | 
**plot_req** | [**PlotReq**](PlotReq.md) |  |

### Return type

[**SuccRspPlotRsp**](SuccRspPlotRsp.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
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

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

# **download_workflow**
> download_workflow(_api::SystemApi, objid::String; is_cloud=nothing, _mediaType=nothing) -> SuccRspAny, OpenAPI.Clients.ApiResponse <br/>
> download_workflow(_api::SystemApi, response_stream::Channel, objid::String; is_cloud=nothing, _mediaType=nothing) -> Channel{ SuccRspAny }, OpenAPI.Clients.ApiResponse

Download workflow.

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **_api** | **SystemApi** | API context | 
**objid** | **String** |  |

### Optional Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **is_cloud** | **Bool** |  | [default to false]

### Return type

[**SuccRspAny**](SuccRspAny.md)

### Authorization

[GlobalAuth](../README.md#GlobalAuth)

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

