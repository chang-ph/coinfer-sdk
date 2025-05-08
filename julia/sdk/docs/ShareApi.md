# ShareApi

All URIs are relative to *https://api.coinfer.ai*

Method | HTTP request | Description
------------- | ------------- | -------------
[**coinfer_apis_no_auth_api_get_experiment_share**](ShareApi.md#coinfer_apis_no_auth_api_get_experiment_share) | **GET** /api/object/share/{share_id} | Get sharing information of an experiment.
[**create_experiment_share**](ShareApi.md#create_experiment_share) | **POST** /mcmc/experiment/{exp_id}/share | Share an experiment.
[**create_model_share**](ShareApi.md#create_model_share) | **POST** /turing/model/{model_id}/share | Share a model specified by model ID.
[**delete_experiment_share**](ShareApi.md#delete_experiment_share) | **DELETE** /mcmc/experiment/share/{share_id} | Delete experiment shares.
[**delete_model_share**](ShareApi.md#delete_model_share) | **DELETE** /turing/model/share/{share_id} | Delete model shares.
[**get_experiment_share**](ShareApi.md#get_experiment_share) | **GET** /mcmc/experiment/share/{share_id} | Get sharing information of an experiment.
[**get_model_share**](ShareApi.md#get_model_share) | **GET** /turing/model/share/{share_id} | Get basic share information of a model sharing.


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

# **create_experiment_share**
> create_experiment_share(_api::ShareApi, exp_id::String, create_experiment_share_param::CreateExperimentShare; _mediaType=nothing) -> SuccRspCreateExperimentShareRsp, OpenAPI.Clients.ApiResponse <br/>
> create_experiment_share(_api::ShareApi, response_stream::Channel, exp_id::String, create_experiment_share_param::CreateExperimentShare; _mediaType=nothing) -> Channel{ SuccRspCreateExperimentShareRsp }, OpenAPI.Clients.ApiResponse

Share an experiment.

Share an experiment specified by experiment ID.  Currently we support three types of sharing:  1. Public sharing: The experiment is shared publicly. Create a public share by not specifying `target_user` and share password in the request body.  2. User-specific sharing: The experiment is shared with a specific user. Create a user-specific share by specifying `target_user` in the request body. The `target_user` should be in the format of `name(@id)`. This is exactly the format what the user info API returns.  3. Password-protected sharing: The experiment is shared with a password. Create a password-protected share by specifying `password` in the request body.

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **_api** | **ShareApi** | API context | 
**exp_id** | **String** |  |
**create_experiment_share_param** | [**CreateExperimentShare**](CreateExperimentShare.md) |  |

### Return type

[**SuccRspCreateExperimentShareRsp**](SuccRspCreateExperimentShareRsp.md)

### Authorization

[GlobalAuth](../README.md#GlobalAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

# **create_model_share**
> create_model_share(_api::ShareApi, model_id::String, create_model_share_param::CreateModelShare; _mediaType=nothing) -> SuccRspCreateModelShareRsp, OpenAPI.Clients.ApiResponse <br/>
> create_model_share(_api::ShareApi, response_stream::Channel, model_id::String, create_model_share_param::CreateModelShare; _mediaType=nothing) -> Channel{ SuccRspCreateModelShareRsp }, OpenAPI.Clients.ApiResponse

Share a model specified by model ID.

Share a model specified by model ID.  Currently we support three types of sharing:  1. Public sharing: The model is shared publicly. Create a public share by not specifying `target_user` and share password in the request body.  2. User-specific sharing: The model is shared with a specific user. Create a user-specific share by specifying `target_user` in the request body. The `target_user` should be in the format of `name(@id)`. This is exactly the format what the user info API returns.  3. Password-protected sharing: The model is shared with a password. Create a password-protected share by specifying `password` in the request body.

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **_api** | **ShareApi** | API context | 
**model_id** | **String** |  |
**create_model_share_param** | [**CreateModelShare**](CreateModelShare.md) |  |

### Return type

[**SuccRspCreateModelShareRsp**](SuccRspCreateModelShareRsp.md)

### Authorization

[GlobalAuth](../README.md#GlobalAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

# **delete_experiment_share**
> delete_experiment_share(_api::ShareApi, share_id::String; _mediaType=nothing) -> SuccRspNoneType, OpenAPI.Clients.ApiResponse <br/>
> delete_experiment_share(_api::ShareApi, response_stream::Channel, share_id::String; _mediaType=nothing) -> Channel{ SuccRspNoneType }, OpenAPI.Clients.ApiResponse

Delete experiment shares.

Deletion in batch is supported by passing \"-\" separated share ids in the path param.

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **_api** | **ShareApi** | API context | 
**share_id** | **String** | \&quot;-\&quot;separated share ids |

### Return type

[**SuccRspNoneType**](SuccRspNoneType.md)

### Authorization

[GlobalAuth](../README.md#GlobalAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

# **delete_model_share**
> delete_model_share(_api::ShareApi, share_id::String; _mediaType=nothing) -> SuccRspNoneType, OpenAPI.Clients.ApiResponse <br/>
> delete_model_share(_api::ShareApi, response_stream::Channel, share_id::String; _mediaType=nothing) -> Channel{ SuccRspNoneType }, OpenAPI.Clients.ApiResponse

Delete model shares.

     

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **_api** | **ShareApi** | API context | 
**share_id** | **String** | \&quot;-\&quot;separated share ids |

### Return type

[**SuccRspNoneType**](SuccRspNoneType.md)

### Authorization

[GlobalAuth](../README.md#GlobalAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

# **get_experiment_share**
> get_experiment_share(_api::ShareApi, share_id::String; _mediaType=nothing) -> SuccRspGetExperimentShareRsp, OpenAPI.Clients.ApiResponse <br/>
> get_experiment_share(_api::ShareApi, response_stream::Channel, share_id::String; _mediaType=nothing) -> Channel{ SuccRspGetExperimentShareRsp }, OpenAPI.Clients.ApiResponse

Get sharing information of an experiment.

Returns very basic sharing info without any authorization. Currently it only returns one field `require_password`, which is used when opening a share URL. If `require_password` is true, then a password input box is open. Else the page should be directly displayed.

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

# **get_model_share**
> get_model_share(_api::ShareApi, share_id::String; _mediaType=nothing) -> SuccRspGetModelShareRsp, OpenAPI.Clients.ApiResponse <br/>
> get_model_share(_api::ShareApi, response_stream::Channel, share_id::String; _mediaType=nothing) -> Channel{ SuccRspGetModelShareRsp }, OpenAPI.Clients.ApiResponse

Get basic share information of a model sharing.

Returns very basic share information without authorization. Currently it only returns one field `require_password`, which is used when opening a share URL. If `require_password` is true, then a password input box is open. Else the page should be directly displayed.

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **_api** | **ShareApi** | API context | 
**share_id** | **String** |  |

### Return type

[**SuccRspGetModelShareRsp**](SuccRspGetModelShareRsp.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

