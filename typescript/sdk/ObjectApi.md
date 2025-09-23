# .ObjectApi

All URIs are relative to *https://api.coinfer.ai*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createObject**](ObjectApi.md#createObject) | **POST** /api/object | Create new object.
[**deleteObject**](ObjectApi.md#deleteObject) | **DELETE** /api/object | Delete objects.
[**listObject**](ObjectApi.md#listObject) | **GET** /api/object | List objects.
[**updateObject**](ObjectApi.md#updateObject) | **POST** /api/object/{objid} | Update object.
[**viewObject**](ObjectApi.md#viewObject) | **GET** /api/object/{objid} | View object.


# **createObject**
> UUUU4be0e69353a8fb4b4ca5b5b1a94b3f66 createObject(createObjectReq)

Create new object.  ### Example Create model: ``` POST /api/object {     \"payload\": {         \"object_type\": \"model\",         \"name\": \"model name\",         \"type\": \"local\",         \"content\": {             \"meta\": {\"entrance_file\": \"main.jl\"},             \"tree\": [],         }     } } ```  Create model from GitHub repo: ``` POST /api/object {     \"payload\": {         \"object_type\": \"model\",         \"repo\": \"vectorly-ai/simple-model\",         \"branch\": \"main\",         \"type\": \"repo\",     } } ```  Create model from GitHub gist: ``` POST /api/object {     \"payload\": {         \"object_type\": \"model\",         \"repo\": \"<the-gist-id>\",         \"type\": \"gist\",     } } ```  Create experiment: ``` POST /api/object {     \"payload\": {         \"object_type\": \"experiment\",         \"name\": \"experiment name\",         \"model_id\": \"M1234567\",     } } ```  Create share of experiment: ``` POST /api/object {     \"payload\": {         \"object_type\": \"share\",         \"objid\": \"X1234567\",         \"password\": \"the-pass\",     } } ```

### Example


```typescript
import { createConfiguration, ObjectApi } from 'coinfer-ts';
import type { ObjectApiCreateObjectRequest } from 'coinfer-ts';

const configuration = createConfiguration();
const apiInstance = new ObjectApi(configuration);

const request: ObjectApiCreateObjectRequest = {
  
  createObjectReq: {
    payload: null,
  },
};

const data = await apiInstance.createObject(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createObjectReq** | **CreateObjectReq**|  |


### Return type

**UUUU4be0e69353a8fb4b4ca5b5b1a94b3f66**

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

# **deleteObject**
> SuccRspSoftDeletedRsp deleteObject()

Delete objects of certain IDs in batch.  ### Example  ``` DELETE /api/object?objids=M1234567&objids=X1234567 ```

### Example


```typescript
import { createConfiguration, ObjectApi } from 'coinfer-ts';
import type { ObjectApiDeleteObjectRequest } from 'coinfer-ts';

const configuration = createConfiguration();
const apiInstance = new ObjectApi(configuration);

const request: ObjectApiDeleteObjectRequest = {
    // list of object ids (optional)
  objids: [
    "objids_example",
  ],
  
  deletedKey: "",
};

const data = await apiInstance.deleteObject(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **objids** | **Array&lt;string&gt;** | list of object ids | (optional) defaults to undefined
 **deletedKey** | [**string**] |  | (optional) defaults to ''


### Return type

**SuccRspSoftDeletedRsp**

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

# **listObject**
> UUUU18d10abbf81f28b86769c427804ea587 listObject()

### List Objects  By default, the API returns only objects created by the current user, excluding sharing information for performance optimization.  When `shared_with_me` is enabled, the API returns objects owned by other users but shared with the current user, including their sharing details.  Enabling `shared_by_me` will include sharing information for objects that the current user has shared with others.  Setting `with_share_info` to true combines both scenarios: it returns objects shared by the current user as well as objects shared with the current user, complete with their respective sharing information. This effectively merges the functionality of both `shared_by_me` and `shared_with_me`.  ### Example  List models: ``` GET /api/object?object_type=model GET /api/object?object_type=model&shared_by_me=true GET /api/object?object_type=model&shared_with_me=true GET /api/object?object_type=model&with_share_info=true ```  List experiments: ``` GET /api/object?object_type=experiment GET /api/object?object_type=experiment&shared_by_me=true GET /api/object?object_type=experiment&shared_with_me=true GET /api/object?object_type=experiment&with_share_info=true ```

### Example


```typescript
import { createConfiguration, ObjectApi } from 'coinfer-ts';
import type { ObjectApiListObjectRequest } from 'coinfer-ts';

const configuration = createConfiguration();
const apiInstance = new ObjectApi(configuration);

const request: ObjectApiListObjectRequest = {
  
  objectType: "model",
    // page number (optional)
  pageNo: 1,
    // page size (optional)
  pageSize: 100,
    // Whether to return the related share info (optional)
  withShareInfo: false,
    // Filter objects shared by the current user (optional)
  sharedByMe: false,
    // Filter objects shared with the current user (optional)
  sharedWithMe: false,
  
  modelIds: [
    "model_ids_example",
  ],
  
  status: "",
  
  runOn: "",
  
  hasModel: "",
    // Filter by tags (optional)
  tags: [
    "internal",
  ],
};

const data = await apiInstance.listObject(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **objectType** | [**&#39;model&#39; | &#39;experiment&#39; | &#39;share&#39; | &#39;event&#39; | &#39;callback&#39; | &#39;relation&#39; | &#39;data&#39; | &#39;workflow&#39; | &#39;&#39;**]**Array<&#39;model&#39; &#124; &#39;experiment&#39; &#124; &#39;share&#39; &#124; &#39;event&#39; &#124; &#39;callback&#39; &#124; &#39;relation&#39; &#124; &#39;data&#39; &#124; &#39;workflow&#39; &#124; &#39;&#39;>** |  | defaults to undefined
 **pageNo** | [**number**] | page number | (optional) defaults to 1
 **pageSize** | [**number**] | page size | (optional) defaults to 100
 **withShareInfo** | [**boolean**] | Whether to return the related share info | (optional) defaults to false
 **sharedByMe** | [**boolean**] | Filter objects shared by the current user | (optional) defaults to false
 **sharedWithMe** | [**boolean**] | Filter objects shared with the current user | (optional) defaults to false
 **modelIds** | **Array&lt;string&gt;** |  | (optional) defaults to undefined
 **status** | [**&#39;NEW&#39; | &#39;RUN&#39; | &#39;FIN&#39; | &#39;ERR&#39; | &#39;&#39;**]**Array<&#39;NEW&#39; &#124; &#39;RUN&#39; &#124; &#39;FIN&#39; &#124; &#39;ERR&#39; &#124; &#39;&#39;>** |  | (optional) defaults to ''
 **runOn** | [**&#39;Lambda&#39; | &#39;Fargate&#39; | &#39;Local&#39; | &#39;&#39;**]**Array<&#39;Lambda&#39; &#124; &#39;Fargate&#39; &#124; &#39;Local&#39; &#124; &#39;&#39;>** |  | (optional) defaults to ''
 **hasModel** | [**&#39;true&#39; | &#39;false&#39; | &#39;&#39;**]**Array<&#39;true&#39; &#124; &#39;false&#39; &#124; &#39;&#39;>** |  | (optional) defaults to ''
 **tags** | **Array<&#39;internal&#39; &#124; &#39;builtin&#39; &#124; &#39;reserved&#39; &#124; &#39;model&#39; &#124; &#39;code&#39;>** | Filter by tags | (optional) defaults to undefined


### Return type

**UUUU18d10abbf81f28b86769c427804ea587**

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

# **updateObject**
> UUUU28b510deefc97bb409a5d7911e299314 updateObject(updateObject)

Update object of certain ID.  ### Example  Update model: ``` POST /api/object/M1234567  {     \"payload\": {         \"object_type\": \"model\",         \"name\": \"model name\",         \"content\": {             \"meta\": {\"entrance_file\": \"main.jl\"},             \"tree\": [],         }     } } ```  Update experiment: ``` POST /api/object/X1234567  {     \"payload\": {         \"object_type\": \"experiment\",         \"name\": \"experiment name\",     } } ```

### Example


```typescript
import { createConfiguration, ObjectApi } from 'coinfer-ts';
import type { ObjectApiUpdateObjectRequest } from 'coinfer-ts';

const configuration = createConfiguration();
const apiInstance = new ObjectApi(configuration);

const request: ObjectApiUpdateObjectRequest = {
  
  objid: "objid_example",
  
  updateObject: {
    payload: null,
  },
};

const data = await apiInstance.updateObject(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateObject** | **UpdateObject**|  |
 **objid** | [**string**] |  | defaults to undefined


### Return type

**UUUU28b510deefc97bb409a5d7911e299314**

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

# **viewObject**
> UUUU0bdaccc02abe3e86fd53540d087462d8 viewObject()

View object of certain ID.  ### Example  ``` GET /api/object/M1234567  # view model data GET /api/object/X1234567  # view experiment data GET /api/object/S1234566  # view share data ```

### Example


```typescript
import { createConfiguration, ObjectApi } from 'coinfer-ts';
import type { ObjectApiViewObjectRequest } from 'coinfer-ts';

const configuration = createConfiguration();
const apiInstance = new ObjectApi(configuration);

const request: ObjectApiViewObjectRequest = {
  
  objid: "objid_example",
  
  objectType: "",
    //                  Only appicable to object_type == model or object_type == experiment                 If this field is empty, returns the latest version of the objects.                 otherwise returns the specified share snapshot (optional)
  shareId: "",
  
  sampledata: false,
  
  fmt: "csv",
    // Number of iterations to sample (optional)
  nIteration: 1,
  
  cloudwatchLog: false,
  
  batchId: "",
  
  runId: "",
    // get arviz plot (optional)
  plot: false,
    // view analyzer result (optional)
  viewAnalyzer: false,
};

const data = await apiInstance.viewObject(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **objid** | [**string**] |  | defaults to undefined
 **objectType** | [**&#39;model&#39; | &#39;experiment&#39; | &#39;share&#39; | &#39;event&#39; | &#39;callback&#39; | &#39;relation&#39; | &#39;data&#39; | &#39;workflow&#39; | &#39;&#39;**]**Array<&#39;model&#39; &#124; &#39;experiment&#39; &#124; &#39;share&#39; &#124; &#39;event&#39; &#124; &#39;callback&#39; &#124; &#39;relation&#39; &#124; &#39;data&#39; &#124; &#39;workflow&#39; &#124; &#39;&#39;>** |  | (optional) defaults to ''
 **shareId** | [**string**] |                  Only appicable to object_type &#x3D;&#x3D; model or object_type &#x3D;&#x3D; experiment                 If this field is empty, returns the latest version of the objects.                 otherwise returns the specified share snapshot | (optional) defaults to ''
 **sampledata** | [**boolean**] |  | (optional) defaults to false
 **fmt** | [**&#39;csv&#39; | &#39;grist&#39; | &#39;arviz&#39;**]**Array<&#39;csv&#39; &#124; &#39;grist&#39; &#124; &#39;arviz&#39;>** |  | (optional) defaults to 'csv'
 **nIteration** | [**number**] | Number of iterations to sample | (optional) defaults to undefined
 **cloudwatchLog** | [**boolean**] |  | (optional) defaults to false
 **batchId** | [**string**] |  | (optional) defaults to ''
 **runId** | [**string**] |  | (optional) defaults to ''
 **plot** | [**boolean**] | get arviz plot | (optional) defaults to false
 **viewAnalyzer** | [**boolean**] | view analyzer result | (optional) defaults to false


### Return type

**UUUU0bdaccc02abe3e86fd53540d087462d8**

### Authorization

[GlobalAuth](README.md#GlobalAuth), [SharingAuth](README.md#SharingAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


