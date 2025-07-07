# .DefaultApi

All URIs are relative to *https://api.coinfer.ai*

Method | HTTP request | Description
------------- | ------------- | -------------
[**accessToken**](DefaultApi.md#accessToken) | **GET** /base/access_token | Access Token
[**code2token**](DefaultApi.md#code2token) | **POST** /base/code2token | Code2Token


# **accessToken**
> SuccRspCode2TokenRsp accessToken()

Get access token.

### Example


```typescript
import { createConfiguration, DefaultApi } from 'coinfer-ts';

const configuration = createConfiguration();
const apiInstance = new DefaultApi(configuration);

const request = {};

const data = await apiInstance.accessToken(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters
This endpoint does not need any parameter.


### Return type

**SuccRspCode2TokenRsp**

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

# **code2token**
> SuccRspCode2TokenRsp code2token()

Exchange code for access token.

### Example


```typescript
import { createConfiguration, DefaultApi } from 'coinfer-ts';
import type { DefaultApiCode2tokenRequest } from 'coinfer-ts';

const configuration = createConfiguration();
const apiInstance = new DefaultApi(configuration);

const request: DefaultApiCode2tokenRequest = {
  
  code: "code_example",
};

const data = await apiInstance.code2token(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **code** | [**string**] |  | defaults to undefined


### Return type

**SuccRspCode2TokenRsp**

### Authorization

[GlobalAuth](README.md#GlobalAuth)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


