# ShareApi

All URIs are relative to *https://api.coinfer.ai*

Method | HTTP request | Description
------------- | ------------- | -------------
[**coinfer_apis_no_auth_api_get_experiment_share**](ShareApi.md#coinfer_apis_no_auth_api_get_experiment_share) | **GET** /api/object/share/{share_id} | Get sharing information of an experiment.


# **coinfer_apis_no_auth_api_get_experiment_share**
> coinfer_apis_no_auth_api_get_experiment_share(_api::ShareApi, share_id::String; _mediaType=nothing) -> SuccRspGetExperimentShareRsp, OpenAPI.Clients.ApiResponse <br/>
> coinfer_apis_no_auth_api_get_experiment_share(_api::ShareApi, response_stream::Channel, share_id::String; _mediaType=nothing) -> Channel{ SuccRspGetExperimentShareRsp }, OpenAPI.Clients.ApiResponse

Get sharing information of an experiment.

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **_api** | **ShareApi** | API context | 
**share_id** | **String** |  |

### Return type

[**SuccRspGetExperimentShareRsp**](SuccRspGetExperimentShareRsp.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

