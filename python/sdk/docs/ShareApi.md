# openapi_client.ShareApi

All URIs are relative to *https://api.coinfer.ai*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_experiment_share**](ShareApi.md#get_experiment_share) | **GET** /api/object/share/{share_id} | Get sharing information of an experiment.


# **get_experiment_share**
> SuccRspGetExperimentShareRsp get_experiment_share(share_id)

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

