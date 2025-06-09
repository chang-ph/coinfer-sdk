# ExperimentApi

All URIs are relative to *https://api.coinfer.ai*

Method | HTTP request | Description
------------- | ------------- | -------------
[**experiment_notebook_colab**](ExperimentApi.md#experiment_notebook_colab) | **GET** /mcmc/experiment/{expid}/notebook/colab | [DEPRECATED] Get a link of the notebook in Colab
[**view_xp_cloudwatch_logs**](ExperimentApi.md#view_xp_cloudwatch_logs) | **GET** /mcmc/object/{objid}/cloudwatch-logs | [DEPRECATED] Get Cloudwatch logs


# **experiment_notebook_colab**
> experiment_notebook_colab(_api::ExperimentApi, expid::String; _mediaType=nothing) -> SuccRspAny, OpenAPI.Clients.ApiResponse <br/>
> experiment_notebook_colab(_api::ExperimentApi, response_stream::Channel, expid::String; _mediaType=nothing) -> Channel{ SuccRspAny }, OpenAPI.Clients.ApiResponse

[DEPRECATED] Get a link of the notebook in Colab

DEPRECATED: Use /sys/colab instead.  Create notebook which can be used to load and visualize the experiment result. Save it to Github and returns a link which can be used to open this notebook in Google Colab

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **_api** | **ExperimentApi** | API context | 
**expid** | **String** |  |

### Return type

[**SuccRspAny**](SuccRspAny.md)

### Authorization

[GlobalAuth](../README.md#GlobalAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

# **view_xp_cloudwatch_logs**
> view_xp_cloudwatch_logs(_api::ExperimentApi, objid::String; _mediaType=nothing) -> SuccRspViewCloudwatchLogsRsp, OpenAPI.Clients.ApiResponse <br/>
> view_xp_cloudwatch_logs(_api::ExperimentApi, response_stream::Channel, objid::String; _mediaType=nothing) -> Channel{ SuccRspViewCloudwatchLogsRsp }, OpenAPI.Clients.ApiResponse

[DEPRECATED] Get Cloudwatch logs

DEPRECATED: Use `/api/object/[experiment_id]?object_type=experiment.cloudwatch` instead.  As logs may contain sensetive info, this api can only be used by admin

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **_api** | **ExperimentApi** | API context | 
**objid** | **String** |  |

### Return type

[**SuccRspViewCloudwatchLogsRsp**](SuccRspViewCloudwatchLogsRsp.md)

### Authorization

[GlobalAuth](../README.md#GlobalAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

