# .ExperimentApi

All URIs are relative to *https://api.coinfer.ai*

Method | HTTP request | Description
------------- | ------------- | -------------
[**batchDeleteExperiment**](ExperimentApi.md#batchDeleteExperiment) | **DELETE** /mcmc/object | Delete experiments in batch.
[**createObjectV1**](ExperimentApi.md#createObjectV1) | **POST** /mcmc/object | Create an experiment.
[**deleteData**](ExperimentApi.md#deleteData) | **DELETE** /mcmc/object/D{objid} | Delete a data object by its ID.
[**experimentNotebook**](ExperimentApi.md#experimentNotebook) | **GET** /mcmc/experiment/{expid}/notebook | Download a notebook which can be used to load and visualize the experiment result
[**experimentNotebookColab**](ExperimentApi.md#experimentNotebookColab) | **GET** /mcmc/experiment/{expid}/notebook/colab | Get a link of the notebook in Colab
[**getSampleData**](ExperimentApi.md#getSampleData) | **GET** /mcmc/experiment/{experiment_id}/sampledata/{fmt} | Get sample data
[**listObjects**](ExperimentApi.md#listObjects) | **GET** /mcmc/object | List experiments or data.
[**updateData**](ExperimentApi.md#updateData) | **POST** /mcmc/object/D{objid} | Update a data object by its ID.
[**updateExperiment**](ExperimentApi.md#updateExperiment) | **POST** /mcmc/object/X{objid} | Update an experiment by its ID.
[**viewData**](ExperimentApi.md#viewData) | **GET** /mcmc/object/D{objid} | View a data object by its ID.
[**viewExperiment**](ExperimentApi.md#viewExperiment) | **GET** /mcmc/object/X{objid} | View an experiment by its ID.
[**viewXpCloudwatchLogs**](ExperimentApi.md#viewXpCloudwatchLogs) | **GET** /mcmc/object/{objid}/cloudwatch-logs | Get Cloudwatch logs


# **batchDeleteExperiment**
> SuccRspNoneType batchDeleteExperiment()

Delete experiments in batch.  There are two ways to specify the experiments to be deleted: 1. By experiment IDs. In this case all experiments with the specified IDs will be deleted. 2. By model IDs. In this case all experiments with the specified model IDs will be deleted.

### Example


```typescript
import { createConfiguration, ExperimentApi } from 'coinfer-ts';
import type { ExperimentApiBatchDeleteExperimentRequest } from 'coinfer-ts';

const configuration = createConfiguration();
const apiInstance = new ExperimentApi(configuration);

const request: ExperimentApiBatchDeleteExperimentRequest = {
  
  objids: [
    "objids_example",
  ],
  
  modelIds: [
    "model_ids_example",
  ],
};

const data = await apiInstance.batchDeleteExperiment(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **objids** | **Array&lt;string&gt;** |  | (optional) defaults to undefined
 **modelIds** | **Array&lt;string&gt;** |  | (optional) defaults to undefined


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

# **createObjectV1**
> SuccRspAny createObjectV1()

The API allows you to create a new experiment.

### Example


```typescript
import { createConfiguration, ExperimentApi } from 'coinfer-ts';

const configuration = createConfiguration();
const apiInstance = new ExperimentApi(configuration);

const request = {};

const data = await apiInstance.createObjectV1(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters
This endpoint does not need any parameter.


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

# **deleteData**
> SuccRspNoneType deleteData()

NOTE: the \'D\' prefix in URL is part of the ID.

### Example


```typescript
import { createConfiguration, ExperimentApi } from 'coinfer-ts';
import type { ExperimentApiDeleteDataRequest } from 'coinfer-ts';

const configuration = createConfiguration();
const apiInstance = new ExperimentApi(configuration);

const request: ExperimentApiDeleteDataRequest = {
  
  objid: "objid_example",
};

const data = await apiInstance.deleteData(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **objid** | [**string**] |  | defaults to undefined


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

# **experimentNotebook**
> SuccRspAny experimentNotebook()


### Example


```typescript
import { createConfiguration, ExperimentApi } from 'coinfer-ts';
import type { ExperimentApiExperimentNotebookRequest } from 'coinfer-ts';

const configuration = createConfiguration();
const apiInstance = new ExperimentApi(configuration);

const request: ExperimentApiExperimentNotebookRequest = {
  
  expid: "expid_example",
};

const data = await apiInstance.experimentNotebook(request);
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

# **listObjects**
> ListingRspListObjectRsp listObjects()

### List Experiment  By default, the API returns only experiments created by the current user, excluding sharing information for performance optimization.  When `shared_with_me` is enabled, the API returns experiments owned by other users but shared with the current user, including their sharing details.  Enabling `shared_by_me` will include sharing information for experiments that the current user has shared with others.  Setting `with_share_info` to true combines both scenarios: it returns experiments shared by the current user as well as experiments shared with the current user, complete with their respective sharing information. This effectively merges the functionality of both `shared_by_me` and `shared_with_me`.

### Example


```typescript
import { createConfiguration, ExperimentApi } from 'coinfer-ts';
import type { ExperimentApiListObjectsRequest } from 'coinfer-ts';

const configuration = createConfiguration();
const apiInstance = new ExperimentApi(configuration);

const request: ExperimentApiListObjectsRequest = {
  
  pageNo: 1,
  
  pageSize: 100,
    // Whether to return the related share info (optional)
  withShareInfo: false,
    // Filter experiments shared by the current user (optional)
  sharedByMe: false,
    // Filter experiments shared with the current user (optional)
  sharedWithMe: false,
  
  objectType: "experiment",
  
  status: "",
  
  runOn: "",
  
  hasModel: "",
};

const data = await apiInstance.listObjects(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pageNo** | [**number**] |  | (optional) defaults to 1
 **pageSize** | [**number**] |  | (optional) defaults to 100
 **withShareInfo** | [**boolean**] | Whether to return the related share info | (optional) defaults to false
 **sharedByMe** | [**boolean**] | Filter experiments shared by the current user | (optional) defaults to false
 **sharedWithMe** | [**boolean**] | Filter experiments shared with the current user | (optional) defaults to false
 **objectType** | [**&#39;data&#39; | &#39;experiment&#39;**]**Array<&#39;data&#39; &#124; &#39;experiment&#39;>** |  | (optional) defaults to 'experiment'
 **status** | [**&#39;NEW&#39; | &#39;RUN&#39; | &#39;FIN&#39; | &#39;ERR&#39; | &#39;&#39;**]**Array<&#39;NEW&#39; &#124; &#39;RUN&#39; &#124; &#39;FIN&#39; &#124; &#39;ERR&#39; &#124; &#39;&#39;>** |  | (optional) defaults to ''
 **runOn** | [**&#39;Lambda&#39; | &#39;Fargate&#39; | &#39;Local&#39; | &#39;&#39;**]**Array<&#39;Lambda&#39; &#124; &#39;Fargate&#39; &#124; &#39;Local&#39; &#124; &#39;&#39;>** |  | (optional) defaults to ''
 **hasModel** | [**&#39;true&#39; | &#39;false&#39; | &#39;&#39;**]**Array<&#39;true&#39; &#124; &#39;false&#39; &#124; &#39;&#39;>** |  | (optional) defaults to ''


### Return type

**ListingRspListObjectRsp**

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

# **updateData**
> SuccRspAny updateData()

NOTE: the \'D\' prefix in URL is part of the ID.

### Example


```typescript
import { createConfiguration, ExperimentApi } from 'coinfer-ts';
import type { ExperimentApiUpdateDataRequest } from 'coinfer-ts';

const configuration = createConfiguration();
const apiInstance = new ExperimentApi(configuration);

const request: ExperimentApiUpdateDataRequest = {
  
  objid: "objid_example",
  
  fmt: "fmt_example",
  
  file: { data: Buffer.from(fs.readFileSync('/path/to/file', 'utf-8')), name: '/path/to/file' },
  
  use: "main",
};

const data = await apiInstance.updateData(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **objid** | [**string**] |  | defaults to undefined
 **fmt** | [**string**] |  | defaults to undefined
 **file** | [**HttpFile**] |  | defaults to undefined
 **use** | [**string**] |  | (optional) defaults to 'main'


### Return type

**SuccRspAny**

### Authorization

[GlobalAuth](README.md#GlobalAuth)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateExperiment**
> SuccRspAny updateExperiment(updateXP)

NOTE: the \'D\' prefix in URL is part of the ID.  NOTE: The status of experiment is manipulated by the system. So normally you should not call this API to update the status.

### Example


```typescript
import { createConfiguration, ExperimentApi } from 'coinfer-ts';
import type { ExperimentApiUpdateExperimentRequest } from 'coinfer-ts';

const configuration = createConfiguration();
const apiInstance = new ExperimentApi(configuration);

const request: ExperimentApiUpdateExperimentRequest = {
  
  objid: "objid_example",
  
  updateXP: {
    action: "action_example",
    meta: {},
    name: "name_example",
    version: "version_example",
    description: "description_example",
    status: "status_example",
  },
};

const data = await apiInstance.updateExperiment(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateXP** | **UpdateXP**|  |
 **objid** | [**string**] |  | defaults to undefined


### Return type

**SuccRspAny**

### Authorization

[GlobalAuth](README.md#GlobalAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **viewData**
> SuccRspAny viewData()

NOTE: the \'D\' prefix in URL is part of the ID.

### Example


```typescript
import { createConfiguration, ExperimentApi } from 'coinfer-ts';
import type { ExperimentApiViewDataRequest } from 'coinfer-ts';

const configuration = createConfiguration();
const apiInstance = new ExperimentApi(configuration);

const request: ExperimentApiViewDataRequest = {
  
  objid: "objid_example",
};

const data = await apiInstance.viewData(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **objid** | [**string**] |  | defaults to undefined


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

# **viewExperiment**
> SuccRspAny viewExperiment()

NOTE: the \'D\' prefix in URL is part of the ID.  This API is primarily designed for experiment owners to view their experiments, requiring a valid access token for authentication.  For shared experiments, access is granted based on the sharing configuration: 1. Password-protected sharing: Requires the share password for access, eg. `X-Share-Password` in the header 2. Public sharing: Allows access without any password 3. User-specific sharing: Permits access for designated users without requiring a password

### Example


```typescript
import { createConfiguration, ExperimentApi } from 'coinfer-ts';
import type { ExperimentApiViewExperimentRequest } from 'coinfer-ts';

const configuration = createConfiguration();
const apiInstance = new ExperimentApi(configuration);

const request: ExperimentApiViewExperimentRequest = {
  
  objid: "objid_example",
  
  o: "None",
  
  log: "log_example",
};

const data = await apiInstance.viewExperiment(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **objid** | [**string**] |  | defaults to undefined
 **o** | [**string**] |  | (optional) defaults to 'None'
 **log** | [**string**] |  | (optional) defaults to undefined


### Return type

**SuccRspAny**

### Authorization

[SharingAuth](README.md#SharingAuth)

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


