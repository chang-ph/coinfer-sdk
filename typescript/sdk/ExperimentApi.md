# .ExperimentApi

All URIs are relative to *https://api.coinfer.ai*

Method | HTTP request | Description
------------- | ------------- | -------------
[**experimentNotebookColab**](ExperimentApi.md#experimentNotebookColab) | **GET** /mcmc/experiment/{expid}/notebook/colab | Get a link of the notebook in Colab
[**getSampleData**](ExperimentApi.md#getSampleData) | **GET** /mcmc/experiment/{experiment_id}/sampledata/{fmt} | Get sample data
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

# **getSampleData**
> SuccRspGetSampleDataRsp getSampleData()

It takes time for the system to build the sample data file.  If the sample data file not ready yet, the API will return with the `progress` field set to `generating` and the sample data file is then generating in the background by the system. You may need to call this API later to see if the sample data is ready.  If it is ready, the API will return with the `progress` field set to `done` and the `url` field is the presigned URL of the sample data file.

### Example


```typescript
import { createConfiguration, ExperimentApi } from 'coinfer-ts';
import type { ExperimentApiGetSampleDataRequest } from 'coinfer-ts';

const configuration = createConfiguration();
const apiInstance = new ExperimentApi(configuration);

const request: ExperimentApiGetSampleDataRequest = {
  
  experimentId: "experiment_id_example",
  
  fmt: "csv",
};

const data = await apiInstance.getSampleData(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **experimentId** | [**string**] |  | defaults to undefined
 **fmt** | [**&#39;csv&#39; | &#39;grist&#39;**]**Array<&#39;csv&#39; &#124; &#39;grist&#39;>** |  | defaults to undefined


### Return type

**SuccRspGetSampleDataRsp**

### Authorization

[SharingAuth](README.md#SharingAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |

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


