# openapi_client.NotificationApi

All URIs are relative to *https://api.coinfer.ai*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_notification**](NotificationApi.md#get_notification) | **GET** /api/notification | Get notification messsages
[**mark_notification_read**](NotificationApi.md#mark_notification_read) | **POST** /api/notification/mark | Mark notification messsage as already read


# **get_notification**
> SuccRspListingRspDataNotificationDict get_notification(status, page_no=page_no, page_size=page_size)

Get notification messsages

Get notification messages targeting the current user.

### Example

* Bearer Authentication (GlobalAuth):

```python
import openapi_client
from openapi_client.models.succ_rsp_listing_rsp_data_notification_dict import SuccRspListingRspDataNotificationDict
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
    api_instance = openapi_client.NotificationApi(api_client)
    status = 'status_example' # str | Filter the notification message by read status
    page_no = 1 # int | page number (optional) (default to 1)
    page_size = 100 # int | page size (optional) (default to 100)

    try:
        # Get notification messsages
        api_response = api_instance.get_notification(status, page_no=page_no, page_size=page_size)
        print("The response of NotificationApi->get_notification:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NotificationApi->get_notification: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **status** | **str**| Filter the notification message by read status | 
 **page_no** | **int**| page number | [optional] [default to 1]
 **page_size** | **int**| page size | [optional] [default to 100]

### Return type

[**SuccRspListingRspDataNotificationDict**](SuccRspListingRspDataNotificationDict.md)

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

# **mark_notification_read**
> SuccRspNoneType mark_notification_read(mark_notification_read_req)

Mark notification messsage as already read

Mark some notification as having been read by user. Listing messages support filtering by read mark.

### Example

* Bearer Authentication (GlobalAuth):

```python
import openapi_client
from openapi_client.models.mark_notification_read_req import MarkNotificationReadReq
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
    api_instance = openapi_client.NotificationApi(api_client)
    mark_notification_read_req = openapi_client.MarkNotificationReadReq() # MarkNotificationReadReq | 

    try:
        # Mark notification messsage as already read
        api_response = api_instance.mark_notification_read(mark_notification_read_req)
        print("The response of NotificationApi->mark_notification_read:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NotificationApi->mark_notification_read: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **mark_notification_read_req** | [**MarkNotificationReadReq**](MarkNotificationReadReq.md)|  | 

### Return type

[**SuccRspNoneType**](SuccRspNoneType.md)

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

