# ExperimentApi

All URIs are relative to *https://api.coinfer.ai*

Method | HTTP request | Description
------------- | ------------- | -------------
[**experiment_notebook**](ExperimentApi.md#experiment_notebook) | **GET** /mcmc/experiment/{expid}/notebook | Download a notebook which can be used to load and visualize the experiment result
[**experiment_notebook_colab**](ExperimentApi.md#experiment_notebook_colab) | **GET** /mcmc/experiment/{expid}/notebook/colab | Get a link of the notebook in Colab
[**get_sample_data**](ExperimentApi.md#get_sample_data) | **GET** /mcmc/experiment/{experiment_id}/sampledata/{fmt} | Get sample data
[**view_xp_cloudwatch_logs**](ExperimentApi.md#view_xp_cloudwatch_logs) | **GET** /mcmc/object/{objid}/cloudwatch-logs | Get Cloudwatch logs


# **experiment_notebook**
> experiment_notebook(_api::ExperimentApi, expid::String; _mediaType=nothing) -> SuccRspAny, OpenAPI.Clients.ApiResponse <br/>
> experiment_notebook(_api::ExperimentApi, response_stream::Channel, expid::String; _mediaType=nothing) -> Channel{ SuccRspAny }, OpenAPI.Clients.ApiResponse

Download a notebook which can be used to load and visualize the experiment result

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

# **experiment_notebook_colab**
> experiment_notebook_colab(_api::ExperimentApi, expid::String; _mediaType=nothing) -> SuccRspAny, OpenAPI.Clients.ApiResponse <br/>
> experiment_notebook_colab(_api::ExperimentApi, response_stream::Channel, expid::String; _mediaType=nothing) -> Channel{ SuccRspAny }, OpenAPI.Clients.ApiResponse

Get a link of the notebook in Colab

Create notebook which can be used to load and visualize the experiment result. Save it to Github and returns a link which can be used to open this notebook in Google Colab

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

# **get_sample_data**
> get_sample_data(_api::ExperimentApi, experiment_id::String, fmt::String; _mediaType=nothing) -> SuccRspGetSampleDataRsp, OpenAPI.Clients.ApiResponse <br/>
> get_sample_data(_api::ExperimentApi, response_stream::Channel, experiment_id::String, fmt::String; _mediaType=nothing) -> Channel{ SuccRspGetSampleDataRsp }, OpenAPI.Clients.ApiResponse

Get sample data

It takes time for the system to build the sample data file.  If the sample data file not ready yet, the API will return with the `progress` field set to `generating` and the sample data file is then generating in the background by the system. You may need to call this API later to see if the sample data is ready.  If it is ready, the API will return with the `progress` field set to `done` and the `url` field is the presigned URL of the sample data file.

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **_api** | **ExperimentApi** | API context | 
**experiment_id** | **String** |  |
**fmt** | **String** |  |

### Return type

[**SuccRspGetSampleDataRsp**](SuccRspGetSampleDataRsp.md)

### Authorization

[SharingAuth](../README.md#SharingAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

# **view_xp_cloudwatch_logs**
> view_xp_cloudwatch_logs(_api::ExperimentApi, objid::String; _mediaType=nothing) -> SuccRspViewCloudwatchLogsRsp, OpenAPI.Clients.ApiResponse <br/>
> view_xp_cloudwatch_logs(_api::ExperimentApi, response_stream::Channel, objid::String; _mediaType=nothing) -> Channel{ SuccRspViewCloudwatchLogsRsp }, OpenAPI.Clients.ApiResponse

Get Cloudwatch logs

As logs may contain sensetive info, this api can only be used by admin

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

