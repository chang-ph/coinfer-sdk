# openapi_client.ExperimentApi

All URIs are relative to *https://api.coinfer.ai*

Method | HTTP request | Description
------------- | ------------- | -------------
[**experiment_notebook_colab**](ExperimentApi.md#experiment_notebook_colab) | **GET** /mcmc/experiment/{expid}/notebook/colab | Get a link of the notebook in Colab
[**view_xp_cloudwatch_logs**](ExperimentApi.md#view_xp_cloudwatch_logs) | **GET** /mcmc/object/{objid}/cloudwatch-logs | [DEPRECATED] Get Cloudwatch logs


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

# **view_xp_cloudwatch_logs**
> SuccRspViewCloudwatchLogsRsp view_xp_cloudwatch_logs(objid)

[DEPRECATED] Get Cloudwatch logs

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
        # [DEPRECATED] Get Cloudwatch logs
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

