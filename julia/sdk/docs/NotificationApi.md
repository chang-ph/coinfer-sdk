# NotificationApi

All URIs are relative to *https://api.coinfer.ai*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_notification**](NotificationApi.md#get_notification) | **GET** /api/notification | Get notification messsages
[**mark_notification_read**](NotificationApi.md#mark_notification_read) | **POST** /api/notification/mark | Mark notification messsage as already read


# **get_notification**
> get_notification(_api::NotificationApi, status::String; page_no=nothing, page_size=nothing, _mediaType=nothing) -> SuccRspListingRspDataNotificationDict, OpenAPI.Clients.ApiResponse <br/>
> get_notification(_api::NotificationApi, response_stream::Channel, status::String; page_no=nothing, page_size=nothing, _mediaType=nothing) -> Channel{ SuccRspListingRspDataNotificationDict }, OpenAPI.Clients.ApiResponse

Get notification messsages

Get notification messages targeting the current user.

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **_api** | **NotificationApi** | API context | 
**status** | **String** | Filter the notification message by read status |

### Optional Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page_no** | **Int64** | page number | [default to 1]
 **page_size** | **Int64** | page size | [default to 100]

### Return type

[**SuccRspListingRspDataNotificationDict**](SuccRspListingRspDataNotificationDict.md)

### Authorization

[GlobalAuth](../README.md#GlobalAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

# **mark_notification_read**
> mark_notification_read(_api::NotificationApi, mark_notification_read_req::MarkNotificationReadReq; _mediaType=nothing) -> SuccRspNoneType, OpenAPI.Clients.ApiResponse <br/>
> mark_notification_read(_api::NotificationApi, response_stream::Channel, mark_notification_read_req::MarkNotificationReadReq; _mediaType=nothing) -> Channel{ SuccRspNoneType }, OpenAPI.Clients.ApiResponse

Mark notification messsage as already read

Mark some notification as having been read by user. Listing messages support filtering by read mark.

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **_api** | **NotificationApi** | API context | 
**mark_notification_read_req** | [**MarkNotificationReadReq**](MarkNotificationReadReq.md) |  |

### Return type

[**SuccRspNoneType**](SuccRspNoneType.md)

### Authorization

[GlobalAuth](../README.md#GlobalAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

