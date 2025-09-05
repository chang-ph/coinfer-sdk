# .SystemApi

All URIs are relative to *https://api.coinfer.ai*

Method | HTTP request | Description
------------- | ------------- | -------------
[**arvizPlot**](SystemApi.md#arvizPlot) | **POST** /sys/plot | Get Arviz plot data.
[**config**](SystemApi.md#config) | **GET** /sys/config | Get configuration about how to run a model.
[**repository**](SystemApi.md#repository) | **GET** /sys/gallery | List gallery data.


# **arvizPlot**
> SuccRspPlotRsp arvizPlot(plotReq)


### Example


```typescript
import { createConfiguration, SystemApi } from 'coinfer-ts';
import type { SystemApiArvizPlotRequest } from 'coinfer-ts';

const configuration = createConfiguration();
const apiInstance = new SystemApi(configuration);

const request: SystemApiArvizPlotRequest = {
  
  plotReq: {
    coinferAuthToken: "",
    coinferSharePassword: "",
    experimentId: "experimentId_example",
    plotFunc: "plotFunc_example",
    plotChain: "plotChain_example",
    plotVar: "plotVar_example",
    nIteration: 0,
  },
};

const data = await apiInstance.arvizPlot(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **plotReq** | **PlotReq**|  |


### Return type

**SuccRspPlotRsp**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

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


