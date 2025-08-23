# .SystemApi

All URIs are relative to *https://api.coinfer.ai*

Method | HTTP request | Description
------------- | ------------- | -------------
[**config**](SystemApi.md#config) | **GET** /sys/config | Get configuration about how to run a model.
[**repository**](SystemApi.md#repository) | **GET** /sys/gallery | List gallery data.


# **config**
> SuccRspGetConfigRsp config()

This API is used to get the configuration about how to run a model. Currently the configuration includes the URL of the proxy lambda function which is used to run the model.

### Example


```typescript
import { createConfiguration, SystemApi } from 'coinfer-ts';

const configuration = createConfiguration();
const apiInstance = new SystemApi(configuration);

const request = {};

const data = await apiInstance.config(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters
This endpoint does not need any parameter.


### Return type

**SuccRspGetConfigRsp**

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

# **repository**
> SuccRspDemoListRsp repository()


### Example


```typescript
import { createConfiguration, SystemApi } from 'coinfer-ts';

const configuration = createConfiguration();
const apiInstance = new SystemApi(configuration);

const request = {};

const data = await apiInstance.repository(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters
This endpoint does not need any parameter.


### Return type

**SuccRspDemoListRsp**

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


