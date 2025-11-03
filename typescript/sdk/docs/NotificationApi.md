# .NotificationApi

All URIs are relative to *https://api.coinfer.ai*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getNotification**](NotificationApi.md#getNotification) | **GET** /api/notification | Get notification messsages
[**markNotificationRead**](NotificationApi.md#markNotificationRead) | **POST** /api/notification/mark | Mark notification messsage as already read


# **getNotification**
> SuccRspListingRspDataNotificationDict getNotification()

Get notification messages targeting the current user.

### Example


```typescript
import { createConfiguration, NotificationApi } from 'coinfer-ts';
import type { NotificationApiGetNotificationRequest } from 'coinfer-ts';

const configuration = createConfiguration();
const apiInstance = new NotificationApi(configuration);

const request: NotificationApiGetNotificationRequest = {
    // Filter the notification message by read status
  status: "all",
    // page number (optional)
  pageNo: 1,
    // page size (optional)
  pageSize: 100,
};

const data = await apiInstance.getNotification(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **status** | [**&#39;all&#39; | &#39;read&#39; | &#39;unread&#39;**]**Array<&#39;all&#39; &#124; &#39;read&#39; &#124; &#39;unread&#39;>** | Filter the notification message by read status | defaults to undefined
 **pageNo** | [**number**] | page number | (optional) defaults to 1
 **pageSize** | [**number**] | page size | (optional) defaults to 100


### Return type

**SuccRspListingRspDataNotificationDict**

### Authorization

[GlobalAuth](README.md#GlobalAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **markNotificationRead**
> SuccRspNoneType markNotificationRead(markNotificationReadReq)

Mark some notification as having been read by user. Listing messages support filtering by read mark.

### Example


```typescript
import { createConfiguration, NotificationApi } from 'coinfer-ts';
import type { NotificationApiMarkNotificationReadRequest } from 'coinfer-ts';

const configuration = createConfiguration();
const apiInstance = new NotificationApi(configuration);

const request: NotificationApiMarkNotificationReadRequest = {
  
  markNotificationReadReq: {
    notificationIds: [
      1,
    ],
    status: "read",
  },
};

const data = await apiInstance.markNotificationRead(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **markNotificationReadReq** | **MarkNotificationReadReq**|  |


### Return type

**SuccRspNoneType**

### Authorization

[GlobalAuth](README.md#GlobalAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


