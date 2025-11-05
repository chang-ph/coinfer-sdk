# .DownloadApi

All URIs are relative to *https://api.coinfer.ai*

Method | HTTP request | Description
------------- | ------------- | -------------
[**download**](DownloadApi.md#download) | **GET** /download/{objid} | Download resources.


# **download**
> SuccRspAny download()


### Example


```typescript
import { createConfiguration, DownloadApi } from 'coinfer-ts';
import type { DownloadApiDownloadRequest } from 'coinfer-ts';

const configuration = createConfiguration();
const apiInstance = new DownloadApi(configuration);

const request: DownloadApiDownloadRequest = {
  
  objid: "objid_example",
    // is the downloaded pakcage used to run workflow in cloud envirioment? (optional)
  isCloud: false,
};

const data = await apiInstance.download(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **objid** | [**string**] |  | defaults to undefined
 **isCloud** | [**boolean**] | is the downloaded pakcage used to run workflow in cloud envirioment? | (optional) defaults to false


### Return type

**SuccRspAny**

### Authorization

[GlobalAuth](README.md#GlobalAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


