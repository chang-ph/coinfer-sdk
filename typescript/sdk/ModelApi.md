# .ModelApi

All URIs are relative to *https://api.coinfer.ai*

Method | HTTP request | Description
------------- | ------------- | -------------
[**batchDeleteModel**](ModelApi.md#batchDeleteModel) | **DELETE** /turing/object | Delete models in batch.
[**createModel**](ModelApi.md#createModel) | **POST** /turing/object | Create a new model.
[**createModelFromGithub**](ModelApi.md#createModelFromGithub) | **POST** /turing/github/model | Create a model from GitHub repository.
[**getConfig**](ModelApi.md#getConfig) | **GET** /turing/config | Get configuration about how to run a model.
[**listBranch**](ModelApi.md#listBranch) | **GET** /turing/github/branch | List branches.
[**listModels**](ModelApi.md#listModels) | **GET** /turing/object | List models.
[**listRepository**](ModelApi.md#listRepository) | **GET** /turing/github/repository | List repositories and gists.
[**updateModel**](ModelApi.md#updateModel) | **POST** /turing/object/{objid} | Update a model by its ID.
[**viewModel**](ModelApi.md#viewModel) | **GET** /turing/object/{objid} | View a model by its ID.
[**viewSharedModel**](ModelApi.md#viewSharedModel) | **GET** /turing/object/{objid}/share/{share_id} | View share snapshot of a model


# **batchDeleteModel**
> SuccRspNoneType batchDeleteModel()

Delete models in batch.

### Example


```typescript
import { createConfiguration, ModelApi } from 'coinfer-ts';
import type { ModelApiBatchDeleteModelRequest } from 'coinfer-ts';

const configuration = createConfiguration();
const apiInstance = new ModelApi(configuration);

const request: ModelApiBatchDeleteModelRequest = {
  
  objids: [
    "objids_example",
  ],
};

const data = await apiInstance.batchDeleteModel(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **objids** | **Array&lt;string&gt;** |  | (optional) defaults to undefined


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

# **createModel**
> SuccRspListModelsRspItem createModel(createModel)

Create a new model.

### Example


```typescript
import { createConfiguration, ModelApi } from 'coinfer-ts';
import type { ModelApiCreateModelRequest } from 'coinfer-ts';

const configuration = createConfiguration();
const apiInstance = new ModelApi(configuration);

const request: ModelApiCreateModelRequest = {
  
  createModel: {
    objectType: "model",
    repo: "",
    branch: "",
    type: "local",
    modelName: "",
    env: "env_example",
    name: "",
    content: {
      meta: null,
      tree: [
        {
          name: "name_example",
          type: "file",
          content: "",
          children: [
            ,
          ],
        },
      ],
    },
    isDemo: false,
  },
};

const data = await apiInstance.createModel(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createModel** | **CreateModel**|  |


### Return type

**SuccRspListModelsRspItem**

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

# **createModelFromGithub**
> SuccRspListModelsRspItem createModelFromGithub(importModelReq)

Create a model from GitHub repository/gist.  Some details: 1. Use the repository name as the model name. Use gist description as the model name if it is not empty, otherwise use the gist ID as the model name. 2. Assume that the repository/gist contains Project.toml. 3. Assume that the repository/gist contains main.jl as the entrance file. 4. Assume that the entrance file contains a function named model as the entrance function.

### Example


```typescript
import { createConfiguration, ModelApi } from 'coinfer-ts';
import type { ModelApiCreateModelFromGithubRequest } from 'coinfer-ts';

const configuration = createConfiguration();
const apiInstance = new ModelApi(configuration);

const request: ModelApiCreateModelFromGithubRequest = {
  
  importModelReq: {
    repo: "repo_example",
    branch: "",
    type: "repo",
    modelName: "modelName_example",
  },
};

const data = await apiInstance.createModelFromGithub(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **importModelReq** | **ImportModelReq**|  |


### Return type

**SuccRspListModelsRspItem**

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

# **listModels**
> ListingRspListModelsRspItem listModels()

By default, the API returns only models created by the current user, excluding sharing information for performance optimization.  When `shared_with_me` is enabled, the API returns models owned by other users but shared with the current user, including their sharing details.  Enabling `shared_by_me` will include sharing information for models that the current user has shared with others.  Setting `with_share_info` to true combines both scenarios: it returns models shared by the current user as well as models shared with the current user, complete with their respective sharing information. This effectively merges the functionality of both `shared_by_me` and `shared_with_me`.

### Example


```typescript
import { createConfiguration, ModelApi } from 'coinfer-ts';
import type { ModelApiListModelsRequest } from 'coinfer-ts';

const configuration = createConfiguration();
const apiInstance = new ModelApi(configuration);

const request: ModelApiListModelsRequest = {
    // page number (optional)
  pageNo: 1,
    // page size (optional)
  pageSize: 100,
  
  modelIds: [
    "model_ids_example",
  ],
    // Whether to return the related share info (optional)
  withShareInfo: false,
    // Filter models shared by the current user (optional)
  sharedByMe: false,
    // Filter models shared with the current user (optional)
  sharedWithMe: false,
};

const data = await apiInstance.listModels(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pageNo** | [**number**] | page number | (optional) defaults to 1
 **pageSize** | [**number**] | page size | (optional) defaults to 100
 **modelIds** | **Array&lt;string&gt;** |  | (optional) defaults to undefined
 **withShareInfo** | [**boolean**] | Whether to return the related share info | (optional) defaults to false
 **sharedByMe** | [**boolean**] | Filter models shared by the current user | (optional) defaults to false
 **sharedWithMe** | [**boolean**] | Filter models shared with the current user | (optional) defaults to false


### Return type

**ListingRspListModelsRspItem**

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

# **updateModel**
> SuccRspListModelsRspItem updateModel(updateModel)

Update a model by its ID.  NOTE: The status of model is manipulated by the system. So normally you should not call this API to update the status.

### Example


```typescript
import { createConfiguration, ModelApi } from 'coinfer-ts';
import type { ModelApiUpdateModelRequest } from 'coinfer-ts';

const configuration = createConfiguration();
const apiInstance = new ModelApi(configuration);

const request: ModelApiUpdateModelRequest = {
  
  objid: "objid_example",
  
  updateModel: {
    content: {
      meta: null,
      tree: [
        {
          name: "name_example",
          type: "file",
          content: "",
          children: [
            ,
          ],
        },
      ],
    },
    name: "name_example",
    version: "version_example",
    description: "description_example",
    status: "status_example",
    objectType: "model",
  },
};

const data = await apiInstance.updateModel(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateModel** | **UpdateModel**|  |
 **objid** | [**string**] |  | defaults to undefined


### Return type

**SuccRspListModelsRspItem**

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

# **viewModel**
> SuccRspViewModelsRsp viewModel()

This API is primarily designed for model owners to view their models, requiring a valid access token for authentication.  For shared models, access is granted based on the sharing configuration: 1. Password-protected sharing: Requires the share password for access, eg. `X-Share-Password` in the header 2. Public sharing: Allows access without any password 3. User-specific sharing: Permits access for designated users without requiring a password

### Example


```typescript
import { createConfiguration, ModelApi } from 'coinfer-ts';
import type { ModelApiViewModelRequest } from 'coinfer-ts';

const configuration = createConfiguration();
const apiInstance = new ModelApi(configuration);

const request: ModelApiViewModelRequest = {
  
  objid: "objid_example",
};

const data = await apiInstance.viewModel(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **objid** | [**string**] |  | defaults to undefined


### Return type

**SuccRspViewModelsRsp**

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

# **viewSharedModel**
> SuccRspViewModelsRsp viewSharedModel()

View the snapshot of a model which is created when creating the share.  The snapshot is assured to remain unchanged even when the model undergoes modifications. This guarantees that discussions regarding shared resources among users are grounded in a solid foundation.

### Example


```typescript
import { createConfiguration, ModelApi } from 'coinfer-ts';
import type { ModelApiViewSharedModelRequest } from 'coinfer-ts';

const configuration = createConfiguration();
const apiInstance = new ModelApi(configuration);

const request: ModelApiViewSharedModelRequest = {
  
  objid: "objid_example",
  
  shareId: "share_id_example",
};

const data = await apiInstance.viewSharedModel(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **objid** | [**string**] |  | defaults to undefined
 **shareId** | [**string**] |  | defaults to undefined


### Return type

**SuccRspViewModelsRsp**

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


