# openapi_client.ExperimentApi

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
> SuccRspNoneType batch_delete_experiment(objids=objids, model_ids=model_ids)

Delete experiments in batch.

Delete experiments in batch.  There are two ways to specify the experiments to be deleted: 1. By experiment IDs. In this case all experiments with the specified IDs will be deleted. 2. By model IDs. In this case all experiments with the specified model IDs will be deleted.

### Example

* Bearer Authentication (GlobalAuth):

```python
import openapi_client
from openapi_client.models.succ_rsp_none_type import SuccRspNoneType
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.coinfer.ai
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.coinfer.ai"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization: GlobalAuth
configuration = openapi_client.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ExperimentApi(api_client)
    objids = ['objids_example'] # List[Optional[str]] |  (optional)
    model_ids = ['model_ids_example'] # List[str] |  (optional)

    try:
        # Delete experiments in batch.
        api_response = api_instance.batch_delete_experiment(objids=objids, model_ids=model_ids)
        print("The response of ExperimentApi->batch_delete_experiment:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ExperimentApi->batch_delete_experiment: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **objids** | [**List[Optional[str]]**](str.md)|  | [optional] 
 **model_ids** | [**List[str]**](str.md)|  | [optional] 

### Return type

[**SuccRspNoneType**](SuccRspNoneType.md)

### Authorization

[GlobalAuth](../README.md#GlobalAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **create_object_v1**
> SuccRspAny create_object_v1()

Create an experiment.

The API allows you to create a new experiment.

### Example

* Bearer Authentication (GlobalAuth):

```python
import openapi_client
from openapi_client.models.succ_rsp_any import SuccRspAny
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.coinfer.ai
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.coinfer.ai"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization: GlobalAuth
configuration = openapi_client.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ExperimentApi(api_client)

    try:
        # Create an experiment.
        api_response = api_instance.create_object_v1()
        print("The response of ExperimentApi->create_object_v1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ExperimentApi->create_object_v1: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**SuccRspAny**](SuccRspAny.md)

### Authorization

[GlobalAuth](../README.md#GlobalAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_data**
> SuccRspNoneType delete_data(objid)

Delete a data object by its ID.

NOTE: the 'D' prefix in URL is part of the ID.

### Example

* Bearer Authentication (GlobalAuth):

```python
import openapi_client
from openapi_client.models.succ_rsp_none_type import SuccRspNoneType
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.coinfer.ai
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.coinfer.ai"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization: GlobalAuth
configuration = openapi_client.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ExperimentApi(api_client)
    objid = 'objid_example' # str | 

    try:
        # Delete a data object by its ID.
        api_response = api_instance.delete_data(objid)
        print("The response of ExperimentApi->delete_data:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ExperimentApi->delete_data: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **objid** | **str**|  | 

### Return type

[**SuccRspNoneType**](SuccRspNoneType.md)

### Authorization

[GlobalAuth](../README.md#GlobalAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **experiment_notebook**
> SuccRspAny experiment_notebook(expid)

Download a notebook which can be used to load and visualize the experiment result

### Example

* Bearer Authentication (GlobalAuth):

```python
import openapi_client
from openapi_client.models.succ_rsp_any import SuccRspAny
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.coinfer.ai
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.coinfer.ai"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization: GlobalAuth
configuration = openapi_client.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ExperimentApi(api_client)
    expid = 'expid_example' # str | 

    try:
        # Download a notebook which can be used to load and visualize the experiment result
        api_response = api_instance.experiment_notebook(expid)
        print("The response of ExperimentApi->experiment_notebook:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ExperimentApi->experiment_notebook: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **expid** | **str**|  | 

### Return type

[**SuccRspAny**](SuccRspAny.md)

### Authorization

[GlobalAuth](../README.md#GlobalAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **experiment_notebook_colab**
> SuccRspAny experiment_notebook_colab(expid)

Get a link of the notebook in Colab

Create notebook which can be used to load and visualize the experiment result. Save it to Github and returns a link which can be used to open this notebook in Google Colab

### Example

* Bearer Authentication (GlobalAuth):

```python
import openapi_client
from openapi_client.models.succ_rsp_any import SuccRspAny
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.coinfer.ai
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.coinfer.ai"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization: GlobalAuth
configuration = openapi_client.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ExperimentApi(api_client)
    expid = 'expid_example' # str | 

    try:
        # Get a link of the notebook in Colab
        api_response = api_instance.experiment_notebook_colab(expid)
        print("The response of ExperimentApi->experiment_notebook_colab:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ExperimentApi->experiment_notebook_colab: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **expid** | **str**|  | 

### Return type

[**SuccRspAny**](SuccRspAny.md)

### Authorization

[GlobalAuth](../README.md#GlobalAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_sample_data**
> SuccRspGetSampleDataRsp get_sample_data(experiment_id, fmt)

Get sample data

It takes time for the system to build the sample data file.  If the sample data file not ready yet, the API will return with the `progress` field set to `generating` and the sample data file is then generating in the background by the system. You may need to call this API later to see if the sample data is ready.  If it is ready, the API will return with the `progress` field set to `done` and the `url` field is the presigned URL of the sample data file.

### Example

* Api Key Authentication (SharingAuth):

```python
import openapi_client
from openapi_client.models.succ_rsp_get_sample_data_rsp import SuccRspGetSampleDataRsp
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.coinfer.ai
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.coinfer.ai"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: SharingAuth
configuration.api_key['SharingAuth'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['SharingAuth'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ExperimentApi(api_client)
    experiment_id = 'experiment_id_example' # str | 
    fmt = 'fmt_example' # str | 

    try:
        # Get sample data
        api_response = api_instance.get_sample_data(experiment_id, fmt)
        print("The response of ExperimentApi->get_sample_data:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ExperimentApi->get_sample_data: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **experiment_id** | **str**|  | 
 **fmt** | **str**|  | 

### Return type

[**SuccRspGetSampleDataRsp**](SuccRspGetSampleDataRsp.md)

### Authorization

[SharingAuth](../README.md#SharingAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_objects**
> ListingRspListObjectRsp list_objects(page_no=page_no, page_size=page_size, with_share_info=with_share_info, shared_by_me=shared_by_me, shared_with_me=shared_with_me, object_type=object_type, status=status, run_on=run_on, has_model=has_model)

List experiments or data.

### List Experiment  By default, the API returns only experiments created by the current user, excluding sharing information for performance optimization.  When `shared_with_me` is enabled, the API returns experiments owned by other users but shared with the current user, including their sharing details.  Enabling `shared_by_me` will include sharing information for experiments that the current user has shared with others.  Setting `with_share_info` to true combines both scenarios: it returns experiments shared by the current user as well as experiments shared with the current user, complete with their respective sharing information. This effectively merges the functionality of both `shared_by_me` and `shared_with_me`.

### Example

* Bearer Authentication (GlobalAuth):

```python
import openapi_client
from openapi_client.models.listing_rsp_list_object_rsp import ListingRspListObjectRsp
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.coinfer.ai
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.coinfer.ai"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization: GlobalAuth
configuration = openapi_client.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ExperimentApi(api_client)
    page_no = 1 # int |  (optional) (default to 1)
    page_size = 100 # int |  (optional) (default to 100)
    with_share_info = False # bool | Whether to return the related share info (optional) (default to False)
    shared_by_me = False # bool | Filter experiments shared by the current user (optional) (default to False)
    shared_with_me = False # bool | Filter experiments shared with the current user (optional) (default to False)
    object_type = experiment # str |  (optional) (default to experiment)
    status =  # str |  (optional) (default to )
    run_on =  # str |  (optional) (default to )
    has_model =  # str |  (optional) (default to )

    try:
        # List experiments or data.
        api_response = api_instance.list_objects(page_no=page_no, page_size=page_size, with_share_info=with_share_info, shared_by_me=shared_by_me, shared_with_me=shared_with_me, object_type=object_type, status=status, run_on=run_on, has_model=has_model)
        print("The response of ExperimentApi->list_objects:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ExperimentApi->list_objects: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page_no** | **int**|  | [optional] [default to 1]
 **page_size** | **int**|  | [optional] [default to 100]
 **with_share_info** | **bool**| Whether to return the related share info | [optional] [default to False]
 **shared_by_me** | **bool**| Filter experiments shared by the current user | [optional] [default to False]
 **shared_with_me** | **bool**| Filter experiments shared with the current user | [optional] [default to False]
 **object_type** | **str**|  | [optional] [default to experiment]
 **status** | **str**|  | [optional] [default to ]
 **run_on** | **str**|  | [optional] [default to ]
 **has_model** | **str**|  | [optional] [default to ]

### Return type

[**ListingRspListObjectRsp**](ListingRspListObjectRsp.md)

### Authorization

[GlobalAuth](../README.md#GlobalAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_data**
> SuccRspAny update_data(objid, fmt, file, use=use)

Update a data object by its ID.

NOTE: the 'D' prefix in URL is part of the ID.

### Example

* Bearer Authentication (GlobalAuth):

```python
import openapi_client
from openapi_client.models.succ_rsp_any import SuccRspAny
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.coinfer.ai
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.coinfer.ai"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization: GlobalAuth
configuration = openapi_client.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ExperimentApi(api_client)
    objid = 'objid_example' # str | 
    fmt = 'fmt_example' # str | 
    file = None # bytearray | 
    use = 'main' # str |  (optional) (default to 'main')

    try:
        # Update a data object by its ID.
        api_response = api_instance.update_data(objid, fmt, file, use=use)
        print("The response of ExperimentApi->update_data:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ExperimentApi->update_data: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **objid** | **str**|  | 
 **fmt** | **str**|  | 
 **file** | **bytearray**|  | 
 **use** | **str**|  | [optional] [default to &#39;main&#39;]

### Return type

[**SuccRspAny**](SuccRspAny.md)

### Authorization

[GlobalAuth](../README.md#GlobalAuth)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_experiment**
> SuccRspAny update_experiment(objid, update_xp)

Update an experiment by its ID.

NOTE: the 'D' prefix in URL is part of the ID.  NOTE: The status of experiment is manipulated by the system. So normally you should not call this API to update the status.

### Example

* Bearer Authentication (GlobalAuth):

```python
import openapi_client
from openapi_client.models.succ_rsp_any import SuccRspAny
from openapi_client.models.update_xp import UpdateXP
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.coinfer.ai
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.coinfer.ai"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization: GlobalAuth
configuration = openapi_client.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ExperimentApi(api_client)
    objid = 'objid_example' # str | 
    update_xp = openapi_client.UpdateXP() # UpdateXP | 

    try:
        # Update an experiment by its ID.
        api_response = api_instance.update_experiment(objid, update_xp)
        print("The response of ExperimentApi->update_experiment:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ExperimentApi->update_experiment: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **objid** | **str**|  | 
 **update_xp** | [**UpdateXP**](UpdateXP.md)|  | 

### Return type

[**SuccRspAny**](SuccRspAny.md)

### Authorization

[GlobalAuth](../README.md#GlobalAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **view_data**
> SuccRspAny view_data(objid)

View a data object by its ID.

NOTE: the 'D' prefix in URL is part of the ID.

### Example

* Bearer Authentication (GlobalAuth):

```python
import openapi_client
from openapi_client.models.succ_rsp_any import SuccRspAny
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.coinfer.ai
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.coinfer.ai"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization: GlobalAuth
configuration = openapi_client.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ExperimentApi(api_client)
    objid = 'objid_example' # str | 

    try:
        # View a data object by its ID.
        api_response = api_instance.view_data(objid)
        print("The response of ExperimentApi->view_data:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ExperimentApi->view_data: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **objid** | **str**|  | 

### Return type

[**SuccRspAny**](SuccRspAny.md)

### Authorization

[GlobalAuth](../README.md#GlobalAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **view_experiment**
> SuccRspAny view_experiment(objid, o=o, log=log)

View an experiment by its ID.

NOTE: the 'D' prefix in URL is part of the ID.  This API is primarily designed for experiment owners to view their experiments, requiring a valid access token for authentication.  For shared experiments, access is granted based on the sharing configuration: 1. Password-protected sharing: Requires the share password for access, eg. `X-Share-Password` in the header 2. Public sharing: Allows access without any password 3. User-specific sharing: Permits access for designated users without requiring a password

### Example

* Api Key Authentication (SharingAuth):

```python
import openapi_client
from openapi_client.models.succ_rsp_any import SuccRspAny
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.coinfer.ai
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.coinfer.ai"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: SharingAuth
configuration.api_key['SharingAuth'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['SharingAuth'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ExperimentApi(api_client)
    objid = 'objid_example' # str | 
    o = 'None' # str |  (optional) (default to 'None')
    log = 'log_example' # str |  (optional)

    try:
        # View an experiment by its ID.
        api_response = api_instance.view_experiment(objid, o=o, log=log)
        print("The response of ExperimentApi->view_experiment:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ExperimentApi->view_experiment: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **objid** | **str**|  | 
 **o** | **str**|  | [optional] [default to &#39;None&#39;]
 **log** | **str**|  | [optional] 

### Return type

[**SuccRspAny**](SuccRspAny.md)

### Authorization

[SharingAuth](../README.md#SharingAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **view_xp_cloudwatch_logs**
> SuccRspViewCloudwatchLogsRsp view_xp_cloudwatch_logs(objid)

Get Cloudwatch logs

As logs may contain sensetive info, this api can only be used by admin

### Example

* Bearer Authentication (GlobalAuth):

```python
import openapi_client
from openapi_client.models.succ_rsp_view_cloudwatch_logs_rsp import SuccRspViewCloudwatchLogsRsp
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.coinfer.ai
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.coinfer.ai"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization: GlobalAuth
configuration = openapi_client.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ExperimentApi(api_client)
    objid = 'objid_example' # str | 

    try:
        # Get Cloudwatch logs
        api_response = api_instance.view_xp_cloudwatch_logs(objid)
        print("The response of ExperimentApi->view_xp_cloudwatch_logs:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ExperimentApi->view_xp_cloudwatch_logs: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **objid** | **str**|  | 

### Return type

[**SuccRspViewCloudwatchLogsRsp**](SuccRspViewCloudwatchLogsRsp.md)

### Authorization

[GlobalAuth](../README.md#GlobalAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

