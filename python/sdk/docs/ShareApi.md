# openapi_client.ShareApi

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
> SuccRspGetExperimentShareRsp coinfer_apis_no_auth_api_get_experiment_share(share_id)

Get sharing information of an experiment.

### Example


```python
import openapi_client
from openapi_client.models.succ_rsp_get_experiment_share_rsp import SuccRspGetExperimentShareRsp
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.coinfer.ai
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.coinfer.ai"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ShareApi(api_client)
    share_id = 'share_id_example' # str | 

    try:
        # Get sharing information of an experiment.
        api_response = api_instance.coinfer_apis_no_auth_api_get_experiment_share(share_id)
        print("The response of ShareApi->coinfer_apis_no_auth_api_get_experiment_share:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ShareApi->coinfer_apis_no_auth_api_get_experiment_share: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **share_id** | **str**|  | 

### Return type

[**SuccRspGetExperimentShareRsp**](SuccRspGetExperimentShareRsp.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **create_experiment_share**
> SuccRspCreateExperimentShareRsp create_experiment_share(exp_id, create_experiment_share)

Share an experiment.

Share an experiment specified by experiment ID.  Currently we support three types of sharing:  1. Public sharing: The experiment is shared publicly. Create a public share by not specifying `target_user` and share password in the request body.  2. User-specific sharing: The experiment is shared with a specific user. Create a user-specific share by specifying `target_user` in the request body. The `target_user` should be in the format of `name(@id)`. This is exactly the format what the user info API returns.  3. Password-protected sharing: The experiment is shared with a password. Create a password-protected share by specifying `password` in the request body.

### Example

* Bearer Authentication (GlobalAuth):

```python
import openapi_client
from openapi_client.models.create_experiment_share import CreateExperimentShare
from openapi_client.models.succ_rsp_create_experiment_share_rsp import SuccRspCreateExperimentShareRsp
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
    api_instance = openapi_client.ShareApi(api_client)
    exp_id = 'exp_id_example' # str | 
    create_experiment_share = openapi_client.CreateExperimentShare() # CreateExperimentShare | 

    try:
        # Share an experiment.
        api_response = api_instance.create_experiment_share(exp_id, create_experiment_share)
        print("The response of ShareApi->create_experiment_share:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ShareApi->create_experiment_share: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **exp_id** | **str**|  | 
 **create_experiment_share** | [**CreateExperimentShare**](CreateExperimentShare.md)|  | 

### Return type

[**SuccRspCreateExperimentShareRsp**](SuccRspCreateExperimentShareRsp.md)

### Authorization

[GlobalAuth](../README.md#GlobalAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **create_model_share**
> SuccRspCreateModelShareRsp create_model_share(model_id, create_model_share)

Share a model specified by model ID.

Share a model specified by model ID.  Currently we support three types of sharing:  1. Public sharing: The model is shared publicly. Create a public share by not specifying `target_user` and share password in the request body.  2. User-specific sharing: The model is shared with a specific user. Create a user-specific share by specifying `target_user` in the request body. The `target_user` should be in the format of `name(@id)`. This is exactly the format what the user info API returns.  3. Password-protected sharing: The model is shared with a password. Create a password-protected share by specifying `password` in the request body.

### Example

* Bearer Authentication (GlobalAuth):

```python
import openapi_client
from openapi_client.models.create_model_share import CreateModelShare
from openapi_client.models.succ_rsp_create_model_share_rsp import SuccRspCreateModelShareRsp
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
    api_instance = openapi_client.ShareApi(api_client)
    model_id = 'model_id_example' # str | 
    create_model_share = openapi_client.CreateModelShare() # CreateModelShare | 

    try:
        # Share a model specified by model ID.
        api_response = api_instance.create_model_share(model_id, create_model_share)
        print("The response of ShareApi->create_model_share:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ShareApi->create_model_share: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **model_id** | **str**|  | 
 **create_model_share** | [**CreateModelShare**](CreateModelShare.md)|  | 

### Return type

[**SuccRspCreateModelShareRsp**](SuccRspCreateModelShareRsp.md)

### Authorization

[GlobalAuth](../README.md#GlobalAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_experiment_share**
> SuccRspNoneType delete_experiment_share(share_id)

Delete experiment shares.

Deletion in batch is supported by passing \"-\" separated share ids in the path param.

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
    api_instance = openapi_client.ShareApi(api_client)
    share_id = 'share_id_example' # str | \"-\"separated share ids

    try:
        # Delete experiment shares.
        api_response = api_instance.delete_experiment_share(share_id)
        print("The response of ShareApi->delete_experiment_share:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ShareApi->delete_experiment_share: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **share_id** | **str**| \&quot;-\&quot;separated share ids | 

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

# **delete_model_share**
> SuccRspNoneType delete_model_share(share_id)

Delete model shares.

     

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
    api_instance = openapi_client.ShareApi(api_client)
    share_id = 'share_id_example' # str | \"-\"separated share ids

    try:
        # Delete model shares.
        api_response = api_instance.delete_model_share(share_id)
        print("The response of ShareApi->delete_model_share:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ShareApi->delete_model_share: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **share_id** | **str**| \&quot;-\&quot;separated share ids | 

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

# **get_experiment_share**
> SuccRspGetExperimentShareRsp get_experiment_share(share_id)

Get sharing information of an experiment.

Returns very basic sharing info without any authorization. Currently it only returns one field `require_password`, which is used when opening a share URL. If `require_password` is true, then a password input box is open. Else the page should be directly displayed.

### Example


```python
import openapi_client
from openapi_client.models.succ_rsp_get_experiment_share_rsp import SuccRspGetExperimentShareRsp
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.coinfer.ai
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.coinfer.ai"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ShareApi(api_client)
    share_id = 'share_id_example' # str | 

    try:
        # Get sharing information of an experiment.
        api_response = api_instance.get_experiment_share(share_id)
        print("The response of ShareApi->get_experiment_share:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ShareApi->get_experiment_share: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **share_id** | **str**|  | 

### Return type

[**SuccRspGetExperimentShareRsp**](SuccRspGetExperimentShareRsp.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_model_share**
> SuccRspGetModelShareRsp get_model_share(share_id)

Get basic share information of a model sharing.

Returns very basic share information without authorization. Currently it only returns one field `require_password`, which is used when opening a share URL. If `require_password` is true, then a password input box is open. Else the page should be directly displayed.

### Example


```python
import openapi_client
from openapi_client.models.succ_rsp_get_model_share_rsp import SuccRspGetModelShareRsp
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.coinfer.ai
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.coinfer.ai"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ShareApi(api_client)
    share_id = 'share_id_example' # str | 

    try:
        # Get basic share information of a model sharing.
        api_response = api_instance.get_model_share(share_id)
        print("The response of ShareApi->get_model_share:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ShareApi->get_model_share: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **share_id** | **str**|  | 

### Return type

[**SuccRspGetModelShareRsp**](SuccRspGetModelShareRsp.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

