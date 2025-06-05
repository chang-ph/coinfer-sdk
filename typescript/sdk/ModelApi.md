# .ModelApi

All URIs are relative to *https://api.coinfer.ai*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getConfig**](ModelApi.md#getConfig) | **GET** /turing/config | Get configuration about how to run a model.
[**listBranch**](ModelApi.md#listBranch) | **GET** /turing/github/branch | List branches.
[**listRepository**](ModelApi.md#listRepository) | **GET** /turing/github/repository | List repositories and gists.


# **getConfig**
> SuccRspGetConfigRsp getConfig()

This API is used to get the configuration about how to run a model. Currently the configuration includes the URL of the proxy lambda function which is used to run the model.

### Example


```typescript
import { createConfiguration, ModelApi } from 'coinfer-ts';

const configuration = createConfiguration();
const apiInstance = new ModelApi(configuration);

const request = {};

const data = await apiInstance.getConfig(request);
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

# **listBranch**
> SuccRspListBranchRsp listBranch()

List branches of the specified repository.

### Example


```typescript
import { createConfiguration, ModelApi } from 'coinfer-ts';
import type { ModelApiListBranchRequest } from 'coinfer-ts';

const configuration = createConfiguration();
const apiInstance = new ModelApi(configuration);

const request: ModelApiListBranchRequest = {
  
  repo: "repo_example",
};

const data = await apiInstance.listBranch(request);
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

# **listRepository**
> SuccRspListRepositoryRsp listRepository()

List repositories and gists of the current (GitHub) user.  Of course this API can only be used when the user is login using the GitHub account.  The return value contains two parts: 1. List of repositories names. 2. List of gists. As the description field can\'t uniquely identify a gist, the id field is also returned. In practice, the description field should be showed to user for them to select the gist, the ID field should be used to specify a gist.

### Example


```typescript
import { createConfiguration, ModelApi } from 'coinfer-ts';
import type { ModelApiListRepositoryRequest } from 'coinfer-ts';

const configuration = createConfiguration();
const apiInstance = new ModelApi(configuration);

const request: ModelApiListRepositoryRequest = {
    // page number (optional)
  pageNo: 1,
    // page size (optional)
  pageSize: 100,
};

const data = await apiInstance.listRepository(request);
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


