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
    // is the downloaded package used to run workflow in cloud environment? (optional)
  isCloud: false,
    // download format, tar.gz or zip (optional)
  fmt: "zip",
};

const data = await apiInstance.download(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **objid** | [**string**] |  | defaults to undefined
 **isCloud** | [**boolean**] | is the downloaded package used to run workflow in cloud environment? | (optional) defaults to false
 **fmt** | [**&#39;tar.gz&#39; | &#39;zip&#39;**]**Array<&#39;tar.gz&#39; &#124; &#39;zip&#39;>** | download format, tar.gz or zip | (optional) defaults to 'zip'


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


