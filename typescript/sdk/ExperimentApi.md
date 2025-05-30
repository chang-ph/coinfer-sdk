# .ExperimentApi

All URIs are relative to *https://api.coinfer.ai*

Method | HTTP request | Description
------------- | ------------- | -------------
[**experimentNotebookColab**](ExperimentApi.md#experimentNotebookColab) | **GET** /mcmc/experiment/{expid}/notebook/colab | Get a link of the notebook in Colab
[**viewXpCloudwatchLogs**](ExperimentApi.md#viewXpCloudwatchLogs) | **GET** /mcmc/object/{objid}/cloudwatch-logs | Get Cloudwatch logs


# **experimentNotebookColab**
> SuccRspAny experimentNotebookColab()

Create notebook which can be used to load and visualize the experiment result. Save it to Github and returns a link which can be used to open this notebook in Google Colab

### Example


```typescript
import { createConfiguration, ExperimentApi } from 'coinfer-ts';
import type { ExperimentApiExperimentNotebookColabRequest } from 'coinfer-ts';

const configuration = createConfiguration();
const apiInstance = new ExperimentApi(configuration);

const request: ExperimentApiExperimentNotebookColabRequest = {
  
  expid: "expid_example",
};

const data = await apiInstance.experimentNotebookColab(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **expid** | [**string**] |  | defaults to undefined


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

# **viewXpCloudwatchLogs**
> SuccRspViewCloudwatchLogsRsp viewXpCloudwatchLogs()

As logs may contain sensetive info, this api can only be used by admin

### Example


```typescript
import { createConfiguration, ExperimentApi } from 'coinfer-ts';
import type { ExperimentApiViewXpCloudwatchLogsRequest } from 'coinfer-ts';

const configuration = createConfiguration();
const apiInstance = new ExperimentApi(configuration);

const request: ExperimentApiViewXpCloudwatchLogsRequest = {
  
  objid: "objid_example",
};

const data = await apiInstance.viewXpCloudwatchLogs(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **objid** | [**string**] |  | defaults to undefined


### Return type

**SuccRspViewCloudwatchLogsRsp**

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


