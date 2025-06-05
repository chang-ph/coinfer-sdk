# openapi_client.ObjectApi

All URIs are relative to *https://api.coinfer.ai*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_object**](ObjectApi.md#create_object) | **POST** /api/object | Create new object.
[**delete_object**](ObjectApi.md#delete_object) | **DELETE** /api/object | Delete objects.
[**list_object**](ObjectApi.md#list_object) | **GET** /api/object | List objects.
[**update_object**](ObjectApi.md#update_object) | **POST** /api/object/{objid} | Update object.
[**view_object**](ObjectApi.md#view_object) | **GET** /api/object/{objid} | View object.


# **create_object**
> SuccRspAnnotatedUnionExperimentRspListModelsRspItemCreateExperimentShareRspCreateEventRspCreateCallbackRspCreateRelationRspFieldInfoAnnotationNoneTypeRequiredTrueDiscriminatorObjectType create_object(create_object_req)

Create new object.

Create new object.  ### Example Create model: ``` POST /api/object {     \"payload\": {         \"object_type\": \"model\",         \"name\": \"model name\",         \"type\": \"local\",         \"content\": {             \"meta\": {\"entrance_file\": \"main.jl\"},             \"tree\": [],         }     } } ```  Create model from GitHub repo: ``` POST /api/object {     \"payload\": {         \"object_type\": \"model\",         \"repo\": \"vectorly-ai/simple-model\",         \"branch\": \"main\",         \"type\": \"repo\",     } } ```  Create model from GitHub gist: ``` POST /api/object {     \"payload\": {         \"object_type\": \"model\",         \"repo\": \"<the-gist-id>\",         \"type\": \"gist\",     } } ```  Create experiment: ``` POST /api/object {     \"payload\": {         \"object_type\": \"experiment\",         \"name\": \"experiment name\",         \"model_id\": \"M1234567\",     } } ```  Create share of experiment: ``` POST /api/object {     \"payload\": {         \"object_type\": \"share\",         \"objid\": \"X1234567\",         \"password\": \"the-pass\",     } } ```

### Example

* Bearer Authentication (GlobalAuth):

```python
import openapi_client
from openapi_client.models.create_object_req import CreateObjectReq
from openapi_client.models.succ_rsp_annotated_union_experiment_rsp_list_models_rsp_item_create_experiment_share_rsp_create_event_rsp_create_callback_rsp_create_relation_rsp_field_info_annotation_none_type_required_true_discriminator_object_type import SuccRspAnnotatedUnionExperimentRspListModelsRspItemCreateExperimentShareRspCreateEventRspCreateCallbackRspCreateRelationRspFieldInfoAnnotationNoneTypeRequiredTrueDiscriminatorObjectType
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.coinfer.ai
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.coinfer.ai"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization: GlobalAuth
configuration = openapi_client.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ObjectApi(api_client)
    create_object_req = openapi_client.CreateObjectReq() # CreateObjectReq | 

    try:
        # Create new object.
        api_response = api_instance.create_object(create_object_req)
        print("The response of ObjectApi->create_object:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ObjectApi->create_object: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **create_object_req** | [**CreateObjectReq**](CreateObjectReq.md)|  | 

### Return type

[**SuccRspAnnotatedUnionExperimentRspListModelsRspItemCreateExperimentShareRspCreateEventRspCreateCallbackRspCreateRelationRspFieldInfoAnnotationNoneTypeRequiredTrueDiscriminatorObjectType**](SuccRspAnnotatedUnionExperimentRspListModelsRspItemCreateExperimentShareRspCreateEventRspCreateCallbackRspCreateRelationRspFieldInfoAnnotationNoneTypeRequiredTrueDiscriminatorObjectType.md)

### Authorization

[GlobalAuth](../README.md#GlobalAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_object**
> SuccRspNoneType delete_object(objids)

Delete objects.

Delete objects of certain IDs in batch.  ### Example  ``` DELETE /api/object?objids=M1234567&objids=X1234567 ```

### Example

* Bearer Authentication (GlobalAuth):

```python
import openapi_client
from openapi_client.models.succ_rsp_none_type import SuccRspNoneType
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.coinfer.ai
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.coinfer.ai"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization: GlobalAuth
configuration = openapi_client.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ObjectApi(api_client)
    objids = ['objids_example'] # List[str] | 

    try:
        # Delete objects.
        api_response = api_instance.delete_object(objids)
        print("The response of ObjectApi->delete_object:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ObjectApi->delete_object: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **objids** | [**List[str]**](str.md)|  | 

### Return type

[**SuccRspNoneType**](SuccRspNoneType.md)

### Authorization

[GlobalAuth](../README.md#GlobalAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_object**
> SuccRspListingRspDataUnionListExperimentRspListModelsRspItemCreateEventRspCreateCallbackRspCreateRelationRsp list_object(object_type, page_no=page_no, page_size=page_size, with_share_info=with_share_info, shared_by_me=shared_by_me, shared_with_me=shared_with_me, model_ids=model_ids, status=status, run_on=run_on, has_model=has_model)

List objects.

### List Objects  By default, the API returns only objects created by the current user, excluding sharing information for performance optimization.  When `shared_with_me` is enabled, the API returns objects owned by other users but shared with the current user, including their sharing details.  Enabling `shared_by_me` will include sharing information for objects that the current user has shared with others.  Setting `with_share_info` to true combines both scenarios: it returns objects shared by the current user as well as objects shared with the current user, complete with their respective sharing information. This effectively merges the functionality of both `shared_by_me` and `shared_with_me`.  ### Example  List models: ``` GET /api/object?object_type=model GET /api/object?object_type=model&shared_by_me=true GET /api/object?object_type=model&shared_with_me=true GET /api/object?object_type=model&with_share_info=true ```  List experiments: ``` GET /api/object?object_type=experiment GET /api/object?object_type=experiment&shared_by_me=true GET /api/object?object_type=experiment&shared_with_me=true GET /api/object?object_type=experiment&with_share_info=true ```

### Example

* Bearer Authentication (GlobalAuth):

```python
import openapi_client
from openapi_client.models.succ_rsp_listing_rsp_data_union_list_experiment_rsp_list_models_rsp_item_create_event_rsp_create_callback_rsp_create_relation_rsp import SuccRspListingRspDataUnionListExperimentRspListModelsRspItemCreateEventRspCreateCallbackRspCreateRelationRsp
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.coinfer.ai
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.coinfer.ai"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization: GlobalAuth
configuration = openapi_client.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ObjectApi(api_client)
    object_type = 'object_type_example' # str | 
    page_no = 1 # int | page number (optional) (default to 1)
    page_size = 100 # int | page size (optional) (default to 100)
    with_share_info = False # bool | Whether to return the related share info (optional) (default to False)
    shared_by_me = False # bool | Filter objects shared by the current user (optional) (default to False)
    shared_with_me = False # bool | Filter objects shared with the current user (optional) (default to False)
    model_ids = ['model_ids_example'] # List[str] |  (optional)
    status =  # str |  (optional) (default to )
    run_on =  # str |  (optional) (default to )
    has_model =  # str |  (optional) (default to )

    try:
        # List objects.
        api_response = api_instance.list_object(object_type, page_no=page_no, page_size=page_size, with_share_info=with_share_info, shared_by_me=shared_by_me, shared_with_me=shared_with_me, model_ids=model_ids, status=status, run_on=run_on, has_model=has_model)
        print("The response of ObjectApi->list_object:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ObjectApi->list_object: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **object_type** | **str**|  | 
 **page_no** | **int**| page number | [optional] [default to 1]
 **page_size** | **int**| page size | [optional] [default to 100]
 **with_share_info** | **bool**| Whether to return the related share info | [optional] [default to False]
 **shared_by_me** | **bool**| Filter objects shared by the current user | [optional] [default to False]
 **shared_with_me** | **bool**| Filter objects shared with the current user | [optional] [default to False]
 **model_ids** | [**List[str]**](str.md)|  | [optional] 
 **status** | **str**|  | [optional] [default to ]
 **run_on** | **str**|  | [optional] [default to ]
 **has_model** | **str**|  | [optional] [default to ]

### Return type

[**SuccRspListingRspDataUnionListExperimentRspListModelsRspItemCreateEventRspCreateCallbackRspCreateRelationRsp**](SuccRspListingRspDataUnionListExperimentRspListModelsRspItemCreateEventRspCreateCallbackRspCreateRelationRsp.md)

### Authorization

[GlobalAuth](../README.md#GlobalAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_object**
> SuccRspUnionExperimentRspViewModelsRspNoneType update_object(objid, update_object)

Update object.

Update object of certain ID.  ### Example  Update model: ``` POST /api/object/M1234567  {     \"payload\": {         \"object_type\": \"model\",         \"name\": \"model name\",         \"content\": {             \"meta\": {\"entrance_file\": \"main.jl\"},             \"tree\": [],         }     } } ```  Update experiment: ``` POST /api/object/X1234567  {     \"payload\": {         \"object_type\": \"experiment\",         \"name\": \"experiment name\",     } } ```

### Example

* Bearer Authentication (GlobalAuth):

```python
import openapi_client
from openapi_client.models.succ_rsp_union_experiment_rsp_view_models_rsp_none_type import SuccRspUnionExperimentRspViewModelsRspNoneType
from openapi_client.models.update_object import UpdateObject
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.coinfer.ai
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.coinfer.ai"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization: GlobalAuth
configuration = openapi_client.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ObjectApi(api_client)
    objid = 'objid_example' # str | 
    update_object = openapi_client.UpdateObject() # UpdateObject | 

    try:
        # Update object.
        api_response = api_instance.update_object(objid, update_object)
        print("The response of ObjectApi->update_object:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ObjectApi->update_object: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **objid** | **str**|  | 
 **update_object** | [**UpdateObject**](UpdateObject.md)|  | 

### Return type

[**SuccRspUnionExperimentRspViewModelsRspNoneType**](SuccRspUnionExperimentRspViewModelsRspNoneType.md)

### Authorization

[GlobalAuth](../README.md#GlobalAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **view_object**
> SuccRspAnnotatedUnionExperimentRspViewModelsRspViewExperimentShareRspExperimentSampleDataRspExperimentCloudwatchLogRspFieldInfoAnnotationNoneTypeRequiredTrueDiscriminatorObjectType view_object(objid, object_type=object_type, share_id=share_id, sampledata=sampledata, fmt=fmt, cloudwatch_log=cloudwatch_log)

View object.

View object of certain ID.  ### Example  ``` GET /api/object/M1234567  # view model data GET /api/object/X1234567  # view experiment data GET /api/object/S1234566  # view share data ```

### Example

* Bearer Authentication (GlobalAuth):
* Api Key Authentication (SharingAuth):

```python
import openapi_client
from openapi_client.models.succ_rsp_annotated_union_experiment_rsp_view_models_rsp_view_experiment_share_rsp_experiment_sample_data_rsp_experiment_cloudwatch_log_rsp_field_info_annotation_none_type_required_true_discriminator_object_type import SuccRspAnnotatedUnionExperimentRspViewModelsRspViewExperimentShareRspExperimentSampleDataRspExperimentCloudwatchLogRspFieldInfoAnnotationNoneTypeRequiredTrueDiscriminatorObjectType
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.coinfer.ai
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.coinfer.ai"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization: GlobalAuth
configuration = openapi_client.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Configure API key authorization: SharingAuth
configuration.api_key['SharingAuth'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['SharingAuth'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ObjectApi(api_client)
    objid = 'objid_example' # str | 
    object_type =  # str |  (optional) (default to )
    share_id = '' # str |                  Only appicable to object_type == model or object_type == experiment                 If this field is empty, returns the latest version of the objects.                 otherwise returns the specified share snapshot (optional) (default to '')
    sampledata = False # bool |  (optional) (default to False)
    fmt = 'csv' # str |  (optional) (default to 'csv')
    cloudwatch_log = False # bool |  (optional) (default to False)

    try:
        # View object.
        api_response = api_instance.view_object(objid, object_type=object_type, share_id=share_id, sampledata=sampledata, fmt=fmt, cloudwatch_log=cloudwatch_log)
        print("The response of ObjectApi->view_object:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ObjectApi->view_object: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **objid** | **str**|  | 
 **object_type** | **str**|  | [optional] [default to ]
 **share_id** | **str**|                  Only appicable to object_type &#x3D;&#x3D; model or object_type &#x3D;&#x3D; experiment                 If this field is empty, returns the latest version of the objects.                 otherwise returns the specified share snapshot | [optional] [default to &#39;&#39;]
 **sampledata** | **bool**|  | [optional] [default to False]
 **fmt** | **str**|  | [optional] [default to &#39;csv&#39;]
 **cloudwatch_log** | **bool**|  | [optional] [default to False]

### Return type

[**SuccRspAnnotatedUnionExperimentRspViewModelsRspViewExperimentShareRspExperimentSampleDataRspExperimentCloudwatchLogRspFieldInfoAnnotationNoneTypeRequiredTrueDiscriminatorObjectType**](SuccRspAnnotatedUnionExperimentRspViewModelsRspViewExperimentShareRspExperimentSampleDataRspExperimentCloudwatchLogRspFieldInfoAnnotationNoneTypeRequiredTrueDiscriminatorObjectType.md)

### Authorization

[GlobalAuth](../README.md#GlobalAuth), [SharingAuth](../README.md#SharingAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

