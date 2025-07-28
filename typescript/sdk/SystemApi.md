# .SystemApi

All URIs are relative to *https://api.coinfer.ai*

Method | HTTP request | Description
------------- | ------------- | -------------
[**branch**](SystemApi.md#branch) | **GET** /sys/github/branch | List branches.
[**config**](SystemApi.md#config) | **GET** /sys/config | Get configuration about how to run a model.
[**gistFiles**](SystemApi.md#gistFiles) | **GET** /sys/github/gist-files | Gist Files
[**repoFiles**](SystemApi.md#repoFiles) | **GET** /sys/github/repo-files | Repo Files
[**repository**](SystemApi.md#repository) | **GET** /sys/github/repository | List repositories and gists.


# **branch**
> SuccRspListBranchRsp branch()

List branches of the specified repository.

### Example


```typescript
import { createConfiguration, SystemApi } from 'coinfer-ts';
import type { SystemApiBranchRequest } from 'coinfer-ts';

const configuration = createConfiguration();
const apiInstance = new SystemApi(configuration);

const request: SystemApiBranchRequest = {
  
  repo: "repo_example",
};

const data = await apiInstance.branch(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **repo** | [**string**] |  | defaults to undefined


### Return type

**SuccRspListBranchRsp**

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

# **gistFiles**
> SuccRspListGistFilesRsp gistFiles()

List files of gist.

### Example


```typescript
import { createConfiguration, SystemApi } from 'coinfer-ts';
import type { SystemApiGistFilesRequest } from 'coinfer-ts';

const configuration = createConfiguration();
const apiInstance = new SystemApi(configuration);

const request: SystemApiGistFilesRequest = {
  
  gistId: "gist_id_example",
};

const data = await apiInstance.gistFiles(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **gistId** | [**string**] |  | defaults to undefined


### Return type

**SuccRspListGistFilesRsp**

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

# **repoFiles**
> SuccRspListRepoFilesRsp repoFiles()

List files of repository.

### Example


```typescript
import { createConfiguration, SystemApi } from 'coinfer-ts';
import type { SystemApiRepoFilesRequest } from 'coinfer-ts';

const configuration = createConfiguration();
const apiInstance = new SystemApi(configuration);

const request: SystemApiRepoFilesRequest = {
  
  repo: "repo_example",
  
  ref: "ref_example",
};

const data = await apiInstance.repoFiles(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **repo** | [**string**] |  | defaults to undefined
 **ref** | [**string**] |  | defaults to undefined


### Return type

**SuccRspListRepoFilesRsp**

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

# **repository**
> SuccRspListRepositoryRsp repository()

List repositories and gists of the current (GitHub) user.  Of course this API can only be used when the user is login using the GitHub account.  The return value contains two parts: 1. List of repositories names. 2. List of gists. As the description field can\'t uniquely identify a gist, the id field is also returned. In practice, the description field should be showed to user for them to select the gist, the ID field should be used to specify a gist.

### Example


```typescript
import { createConfiguration, SystemApi } from 'coinfer-ts';
import type { SystemApiRepositoryRequest } from 'coinfer-ts';

const configuration = createConfiguration();
const apiInstance = new SystemApi(configuration);

const request: SystemApiRepositoryRequest = {
    // page number (optional)
  pageNo: 1,
    // page size (optional)
  pageSize: 100,
};

const data = await apiInstance.repository(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pageNo** | [**number**] | page number | (optional) defaults to 1
 **pageSize** | [**number**] | page size | (optional) defaults to 100


### Return type

**SuccRspListRepositoryRsp**

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


