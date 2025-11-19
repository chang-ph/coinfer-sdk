# openapi_client.SystemApi

All URIs are relative to *https://api.coinfer.ai*

Method | HTTP request | Description
------------- | ------------- | -------------
[**config**](SystemApi.md#config) | **GET** /sys/config | Get configuration about how to run a model.
[**repository**](SystemApi.md#repository) | **GET** /sys/gallery | List gallery data.


# **config**
> SuccRspGetConfigRsp config()

Get configuration about how to run a model.

This API is used to get the configuration about how to run a model. Currently the configuration includes the URL of the proxy lambda function which is used to run the model.

### Example


```python
import openapi_client
from openapi_client.models.succ_rsp_get_config_rsp import SuccRspGetConfigRsp
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
    api_instance = openapi_client.SystemApi(api_client)

    try:
        # Get configuration about how to run a model.
        api_response = api_instance.config()
        print("The response of SystemApi->config:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SystemApi->config: %s\n" % e)
```


### Parameters

This endpoint does not need any parameter.

### Return type

[**SuccRspGetConfigRsp**](SuccRspGetConfigRsp.md)

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

# **repository**
> SuccRspDemoListRsp repository()

List gallery data.

### Example


```python
import openapi_client
from openapi_client.models.succ_rsp_demo_list_rsp import SuccRspDemoListRsp
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
    api_instance = openapi_client.SystemApi(api_client)

    try:
        # List gallery data.
        api_response = api_instance.repository()
        print("The response of SystemApi->repository:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SystemApi->repository: %s\n" % e)
```


### Parameters

This endpoint does not need any parameter.

### Return type

[**SuccRspDemoListRsp**](SuccRspDemoListRsp.md)

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

