# .ShareApi

All URIs are relative to *https://api.coinfer.ai*

Method | HTTP request | Description
------------- | ------------- | -------------
[**coinferApisNoAuthApiGetExperimentShare**](ShareApi.md#coinferApisNoAuthApiGetExperimentShare) | **GET** /api/object/share/{share_id} | Get sharing information of an experiment.
[**createModelShare**](ShareApi.md#createModelShare) | **POST** /turing/model/{model_id}/share | Share a model specified by model ID.
[**deleteModelShare**](ShareApi.md#deleteModelShare) | **DELETE** /turing/model/share/{share_id} | Delete model shares.
[**getModelShare**](ShareApi.md#getModelShare) | **GET** /turing/model/share/{share_id} | Get basic share information of a model sharing.


# **coinferApisNoAuthApiGetExperimentShare**
> SuccRspGetExperimentShareRsp coinferApisNoAuthApiGetExperimentShare()


### Example


```typescript
import { createConfiguration, ShareApi } from 'coinfer-ts';
import type { ShareApiCoinferApisNoAuthApiGetExperimentShareRequest } from 'coinfer-ts';

const configuration = createConfiguration();
const apiInstance = new ShareApi(configuration);

const request: ShareApiCoinferApisNoAuthApiGetExperimentShareRequest = {
  
  shareId: "share_id_example",
};

const data = await apiInstance.coinferApisNoAuthApiGetExperimentShare(request);
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

# **createModelShare**
> SuccRspCreateModelShareRsp createModelShare(createModelShare)

Share a model specified by model ID.  Currently we support three types of sharing:  1. Public sharing: The model is shared publicly. Create a public share by not specifying `target_user` and share password in the request body.  2. User-specific sharing: The model is shared with a specific user. Create a user-specific share by specifying `target_user` in the request body. The `target_user` should be in the format of `name(@id)`. This is exactly the format what the user info API returns.  3. Password-protected sharing: The model is shared with a password. Create a password-protected share by specifying `password` in the request body.

### Example


```typescript
import { createConfiguration, ShareApi } from 'coinfer-ts';
import type { ShareApiCreateModelShareRequest } from 'coinfer-ts';

const configuration = createConfiguration();
const apiInstance = new ShareApi(configuration);

const request: ShareApiCreateModelShareRequest = {
  
  modelId: "model_id_example",
  
  createModelShare: {
    password: "",
    targetUser: "",
  },
};

const data = await apiInstance.createModelShare(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createModelShare** | **CreateModelShare**|  |
 **modelId** | [**string**] |  | defaults to undefined


### Return type

**SuccRspCreateModelShareRsp**

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

# **deleteModelShare**
> SuccRspNoneType deleteModelShare()

     

### Example


```typescript
import { createConfiguration, ShareApi } from 'coinfer-ts';
import type { ShareApiDeleteModelShareRequest } from 'coinfer-ts';

const configuration = createConfiguration();
const apiInstance = new ShareApi(configuration);

const request: ShareApiDeleteModelShareRequest = {
    // \"-\"separated share ids
  shareId: "share_id_example",
};

const data = await apiInstance.deleteModelShare(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **shareId** | [**string**] | \&quot;-\&quot;separated share ids | defaults to undefined


### Return type

**SuccRspNoneType**

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

# **getModelShare**
> SuccRspGetModelShareRsp getModelShare()

Returns very basic share information without authorization. Currently it only returns one field `require_password`, which is used when opening a share URL. If `require_password` is true, then a password input box is open. Else the page should be directly displayed.

### Example


```typescript
import { createConfiguration, ShareApi } from 'coinfer-ts';
import type { ShareApiGetModelShareRequest } from 'coinfer-ts';

const configuration = createConfiguration();
const apiInstance = new ShareApi(configuration);

const request: ShareApiGetModelShareRequest = {
  
  shareId: "share_id_example",
};

const data = await apiInstance.getModelShare(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **shareId** | [**string**] |  | defaults to undefined


### Return type

**SuccRspGetModelShareRsp**

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


