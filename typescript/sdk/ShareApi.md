# .ShareApi

All URIs are relative to *https://api.coinfer.ai*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getExperimentShare**](ShareApi.md#getExperimentShare) | **GET** /api/object/share/{share_id} | Get sharing information of an experiment.


# **getExperimentShare**
> SuccRspGetExperimentShareRsp getExperimentShare()


### Example


```typescript
import { createConfiguration, ShareApi } from 'coinfer-ts';
import type { ShareApiGetExperimentShareRequest } from 'coinfer-ts';

const configuration = createConfiguration();
const apiInstance = new ShareApi(configuration);

const request: ShareApiGetExperimentShareRequest = {
  
  shareId: "share_id_example",
};

const data = await apiInstance.getExperimentShare(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **shareId** | [**string**] |  | defaults to undefined


### Return type

**SuccRspGetExperimentShareRsp**

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

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


