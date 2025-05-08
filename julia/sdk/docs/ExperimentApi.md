# ExperimentApi

All URIs are relative to *https://api.coinfer.ai*

Method | HTTP request | Description
------------- | ------------- | -------------
[**batch_delete_experiment**](ExperimentApi.md#batch_delete_experiment) | **DELETE** /mcmc/object | Delete experiments in batch.
[**create_object_v1**](ExperimentApi.md#create_object_v1) | **POST** /mcmc/object | Create an experiment.
[**delete_data**](ExperimentApi.md#delete_data) | **DELETE** /mcmc/object/D{objid} | Delete a data object by its ID.
[**experiment_notebook**](ExperimentApi.md#experiment_notebook) | **GET** /mcmc/experiment/{expid}/notebook | Download a notebook which can be used to load and visualize the experiment result
[**experiment_notebook_colab**](ExperimentApi.md#experiment_notebook_colab) | **GET** /mcmc/experiment/{expid}/notebook/colab | Get a link of the notebook in Colab
[**get_sample_data**](ExperimentApi.md#get_sample_data) | **GET** /mcmc/experiment/{experiment_id}/sampledata/{fmt} | Get sample data
[**list_objects**](ExperimentApi.md#list_objects) | **GET** /mcmc/object | List experiments or data.
[**update_data**](ExperimentApi.md#update_data) | **POST** /mcmc/object/D{objid} | Update a data object by its ID.
[**update_experiment**](ExperimentApi.md#update_experiment) | **POST** /mcmc/object/X{objid} | Update an experiment by its ID.
[**view_data**](ExperimentApi.md#view_data) | **GET** /mcmc/object/D{objid} | View a data object by its ID.
[**view_experiment**](ExperimentApi.md#view_experiment) | **GET** /mcmc/object/X{objid} | View an experiment by its ID.
[**view_xp_cloudwatch_logs**](ExperimentApi.md#view_xp_cloudwatch_logs) | **GET** /mcmc/object/{objid}/cloudwatch-logs | Get Cloudwatch logs


# **batch_delete_experiment**
> batch_delete_experiment(_api::ExperimentApi; objids=nothing, model_ids=nothing, _mediaType=nothing) -> SuccRspNoneType, OpenAPI.Clients.ApiResponse <br/>
> batch_delete_experiment(_api::ExperimentApi, response_stream::Channel; objids=nothing, model_ids=nothing, _mediaType=nothing) -> Channel{ SuccRspNoneType }, OpenAPI.Clients.ApiResponse

Delete experiments in batch.

Delete experiments in batch.  There are two ways to specify the experiments to be deleted: 1. By experiment IDs. In this case all experiments with the specified IDs will be deleted. 2. By model IDs. In this case all experiments with the specified model IDs will be deleted.

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **_api** | **ExperimentApi** | API context | 

### Optional Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **objids** | [**Vector{String}**](String.md) |  | [default to nothing]
 **model_ids** | [**Vector{String}**](String.md) |  | [default to nothing]

### Return type

[**SuccRspNoneType**](SuccRspNoneType.md)

### Authorization

[GlobalAuth](../README.md#GlobalAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

# **create_object_v1**
> create_object_v1(_api::ExperimentApi; _mediaType=nothing) -> SuccRspAny, OpenAPI.Clients.ApiResponse <br/>
> create_object_v1(_api::ExperimentApi, response_stream::Channel; _mediaType=nothing) -> Channel{ SuccRspAny }, OpenAPI.Clients.ApiResponse

Create an experiment.

The API allows you to create a new experiment.

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

# **delete_data**
> delete_data(_api::ExperimentApi, objid::String; _mediaType=nothing) -> SuccRspNoneType, OpenAPI.Clients.ApiResponse <br/>
> delete_data(_api::ExperimentApi, response_stream::Channel, objid::String; _mediaType=nothing) -> Channel{ SuccRspNoneType }, OpenAPI.Clients.ApiResponse

Delete a data object by its ID.

NOTE: the 'D' prefix in URL is part of the ID.

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **_api** | **ExperimentApi** | API context | 
**objid** | **String** |  |

### Return type

[**SuccRspNoneType**](SuccRspNoneType.md)

### Authorization

[GlobalAuth](../README.md#GlobalAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

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

# **list_objects**
> list_objects(_api::ExperimentApi; page_no=nothing, page_size=nothing, with_share_info=nothing, shared_by_me=nothing, shared_with_me=nothing, object_type=nothing, status=nothing, run_on=nothing, has_model=nothing, _mediaType=nothing) -> ListingRspListObjectRsp, OpenAPI.Clients.ApiResponse <br/>
> list_objects(_api::ExperimentApi, response_stream::Channel; page_no=nothing, page_size=nothing, with_share_info=nothing, shared_by_me=nothing, shared_with_me=nothing, object_type=nothing, status=nothing, run_on=nothing, has_model=nothing, _mediaType=nothing) -> Channel{ ListingRspListObjectRsp }, OpenAPI.Clients.ApiResponse

List experiments or data.

### List Experiment  By default, the API returns only experiments created by the current user, excluding sharing information for performance optimization.  When `shared_with_me` is enabled, the API returns experiments owned by other users but shared with the current user, including their sharing details.  Enabling `shared_by_me` will include sharing information for experiments that the current user has shared with others.  Setting `with_share_info` to true combines both scenarios: it returns experiments shared by the current user as well as experiments shared with the current user, complete with their respective sharing information. This effectively merges the functionality of both `shared_by_me` and `shared_with_me`.

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **_api** | **ExperimentApi** | API context | 

### Optional Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page_no** | **Int64** |  | [default to 1]
 **page_size** | **Int64** |  | [default to 100]
 **with_share_info** | **Bool** | Whether to return the related share info | [default to false]
 **shared_by_me** | **Bool** | Filter experiments shared by the current user | [default to false]
 **shared_with_me** | **Bool** | Filter experiments shared with the current user | [default to false]
 **object_type** | **String** |  | [default to &quot;experiment&quot;]
 **status** | **String** |  | [default to &quot;&quot;]
 **run_on** | **String** |  | [default to &quot;&quot;]
 **has_model** | **String** |  | [default to &quot;&quot;]

### Return type

[**ListingRspListObjectRsp**](ListingRspListObjectRsp.md)

### Authorization

[GlobalAuth](../README.md#GlobalAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

# **update_data**
> update_data(_api::ExperimentApi, objid::String, fmt::String, file::String; use=nothing, _mediaType=nothing) -> SuccRspAny, OpenAPI.Clients.ApiResponse <br/>
> update_data(_api::ExperimentApi, response_stream::Channel, objid::String, fmt::String, file::String; use=nothing, _mediaType=nothing) -> Channel{ SuccRspAny }, OpenAPI.Clients.ApiResponse

Update a data object by its ID.

NOTE: the 'D' prefix in URL is part of the ID.

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **_api** | **ExperimentApi** | API context | 
**objid** | **String** |  |
**fmt** | **String** |  |
**file** | **String** |  |

### Optional Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **use** | **String** |  | [default to &quot;main&quot;]

### Return type

[**SuccRspAny**](SuccRspAny.md)

### Authorization

[GlobalAuth](../README.md#GlobalAuth)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

# **update_experiment**
> update_experiment(_api::ExperimentApi, objid::String, update_x_p::UpdateXP; _mediaType=nothing) -> SuccRspAny, OpenAPI.Clients.ApiResponse <br/>
> update_experiment(_api::ExperimentApi, response_stream::Channel, objid::String, update_x_p::UpdateXP; _mediaType=nothing) -> Channel{ SuccRspAny }, OpenAPI.Clients.ApiResponse

Update an experiment by its ID.

NOTE: the 'D' prefix in URL is part of the ID.  NOTE: The status of experiment is manipulated by the system. So normally you should not call this API to update the status.

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **_api** | **ExperimentApi** | API context | 
**objid** | **String** |  |
**update_x_p** | [**UpdateXP**](UpdateXP.md) |  |

### Return type

[**SuccRspAny**](SuccRspAny.md)

### Authorization

[GlobalAuth](../README.md#GlobalAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

# **view_data**
> view_data(_api::ExperimentApi, objid::String; _mediaType=nothing) -> SuccRspAny, OpenAPI.Clients.ApiResponse <br/>
> view_data(_api::ExperimentApi, response_stream::Channel, objid::String; _mediaType=nothing) -> Channel{ SuccRspAny }, OpenAPI.Clients.ApiResponse

View a data object by its ID.

NOTE: the 'D' prefix in URL is part of the ID.

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **_api** | **ExperimentApi** | API context | 
**objid** | **String** |  |

### Return type

[**SuccRspAny**](SuccRspAny.md)

### Authorization

[GlobalAuth](../README.md#GlobalAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

# **view_experiment**
> view_experiment(_api::ExperimentApi, objid::String; o=nothing, log=nothing, _mediaType=nothing) -> SuccRspAny, OpenAPI.Clients.ApiResponse <br/>
> view_experiment(_api::ExperimentApi, response_stream::Channel, objid::String; o=nothing, log=nothing, _mediaType=nothing) -> Channel{ SuccRspAny }, OpenAPI.Clients.ApiResponse

View an experiment by its ID.

NOTE: the 'D' prefix in URL is part of the ID.  This API is primarily designed for experiment owners to view their experiments, requiring a valid access token for authentication.  For shared experiments, access is granted based on the sharing configuration: 1. Password-protected sharing: Requires the share password for access, eg. `X-Share-Password` in the header 2. Public sharing: Allows access without any password 3. User-specific sharing: Permits access for designated users without requiring a password

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **_api** | **ExperimentApi** | API context | 
**objid** | **String** |  |

### Optional Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **o** | **String** |  | [default to &quot;None&quot;]
 **log** | **String** |  | [default to nothing]

### Return type

[**SuccRspAny**](SuccRspAny.md)

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

