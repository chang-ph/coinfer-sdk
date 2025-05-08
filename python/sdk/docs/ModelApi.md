# openapi_client.ModelApi

All URIs are relative to *https://api.coinfer.ai*

Method | HTTP request | Description
------------- | ------------- | -------------
[**batch_delete_model**](ModelApi.md#batch_delete_model) | **DELETE** /turing/object | Delete models in batch.
[**create_model**](ModelApi.md#create_model) | **POST** /turing/object | Create a new model.
[**create_model_from_github**](ModelApi.md#create_model_from_github) | **POST** /turing/github/model | Create a model from GitHub repository.
[**get_config**](ModelApi.md#get_config) | **GET** /turing/config | Get configuration about how to run a model.
[**list_branch**](ModelApi.md#list_branch) | **GET** /turing/github/branch | List branches.
[**list_models**](ModelApi.md#list_models) | **GET** /turing/object | List models.
[**list_repository**](ModelApi.md#list_repository) | **GET** /turing/github/repository | List repositories and gists.
[**update_model**](ModelApi.md#update_model) | **POST** /turing/object/{objid} | Update a model by its ID.
[**view_model**](ModelApi.md#view_model) | **GET** /turing/object/{objid} | View a model by its ID.
[**view_shared_model**](ModelApi.md#view_shared_model) | **GET** /turing/object/{objid}/share/{share_id} | View share snapshot of a model


# **batch_delete_model**
> SuccRspNoneType batch_delete_model(objids=objids)

Delete models in batch.

Delete models in batch.

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
    api_instance = openapi_client.ModelApi(api_client)
    objids = ['objids_example'] # List[Optional[str]] |  (optional)

    try:
        # Delete models in batch.
        api_response = api_instance.batch_delete_model(objids=objids)
        print("The response of ModelApi->batch_delete_model:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ModelApi->batch_delete_model: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **objids** | [**List[Optional[str]]**](str.md)|  | [optional] 

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

# **create_model**
> SuccRspListModelsRspItem create_model(create_model)

Create a new model.

Create a new model.

### Example

* Bearer Authentication (GlobalAuth):

```python
import openapi_client
from openapi_client.models.create_model import CreateModel
from openapi_client.models.succ_rsp_list_models_rsp_item import SuccRspListModelsRspItem
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
    api_instance = openapi_client.ModelApi(api_client)
    create_model = openapi_client.CreateModel() # CreateModel | 

    try:
        # Create a new model.
        api_response = api_instance.create_model(create_model)
        print("The response of ModelApi->create_model:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ModelApi->create_model: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **create_model** | [**CreateModel**](CreateModel.md)|  | 

### Return type

[**SuccRspListModelsRspItem**](SuccRspListModelsRspItem.md)

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

# **create_model_from_github**
> SuccRspListModelsRspItem create_model_from_github(import_model_req)

Create a model from GitHub repository.

Create a model from GitHub repository/gist.  Some details: 1. Use the repository name as the model name. Use gist description as the model name if it is not empty, otherwise use the gist ID as the model name. 2. Assume that the repository/gist contains Project.toml. 3. Assume that the repository/gist contains main.jl as the entrance file. 4. Assume that the entrance file contains a function named model as the entrance function.

### Example

* Bearer Authentication (GlobalAuth):

```python
import openapi_client
from openapi_client.models.import_model_req import ImportModelReq
from openapi_client.models.succ_rsp_list_models_rsp_item import SuccRspListModelsRspItem
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
    api_instance = openapi_client.ModelApi(api_client)
    import_model_req = openapi_client.ImportModelReq() # ImportModelReq | 

    try:
        # Create a model from GitHub repository.
        api_response = api_instance.create_model_from_github(import_model_req)
        print("The response of ModelApi->create_model_from_github:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ModelApi->create_model_from_github: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **import_model_req** | [**ImportModelReq**](ImportModelReq.md)|  | 

### Return type

[**SuccRspListModelsRspItem**](SuccRspListModelsRspItem.md)

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

# **get_config**
> SuccRspGetConfigRsp get_config()

Get configuration about how to run a model.

This API is used to get the configuration about how to run a model. Currently the configuration includes the URL of the proxy lambda function which is used to run the model.

### Example

* Bearer Authentication (GlobalAuth):

```python
import openapi_client
from openapi_client.models.succ_rsp_get_config_rsp import SuccRspGetConfigRsp
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
    api_instance = openapi_client.ModelApi(api_client)

    try:
        # Get configuration about how to run a model.
        api_response = api_instance.get_config()
        print("The response of ModelApi->get_config:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ModelApi->get_config: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**SuccRspGetConfigRsp**](SuccRspGetConfigRsp.md)

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

# **list_branch**
> SuccRspListBranchRsp list_branch(repo)

List branches.

List branches of the specified repository.

### Example

* Bearer Authentication (GlobalAuth):

```python
import openapi_client
from openapi_client.models.succ_rsp_list_branch_rsp import SuccRspListBranchRsp
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
    api_instance = openapi_client.ModelApi(api_client)
    repo = 'repo_example' # str | 

    try:
        # List branches.
        api_response = api_instance.list_branch(repo)
        print("The response of ModelApi->list_branch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ModelApi->list_branch: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **repo** | **str**|  | 

### Return type

[**SuccRspListBranchRsp**](SuccRspListBranchRsp.md)

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

# **list_models**
> ListingRspListModelsRspItem list_models(page_no=page_no, page_size=page_size, model_ids=model_ids, with_share_info=with_share_info, shared_by_me=shared_by_me, shared_with_me=shared_with_me)

List models.

By default, the API returns only models created by the current user, excluding sharing information for performance optimization.  When `shared_with_me` is enabled, the API returns models owned by other users but shared with the current user, including their sharing details.  Enabling `shared_by_me` will include sharing information for models that the current user has shared with others.  Setting `with_share_info` to true combines both scenarios: it returns models shared by the current user as well as models shared with the current user, complete with their respective sharing information. This effectively merges the functionality of both `shared_by_me` and `shared_with_me`.

### Example

* Bearer Authentication (GlobalAuth):

```python
import openapi_client
from openapi_client.models.listing_rsp_list_models_rsp_item import ListingRspListModelsRspItem
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
    api_instance = openapi_client.ModelApi(api_client)
    page_no = 1 # int | page number (optional) (default to 1)
    page_size = 100 # int | page size (optional) (default to 100)
    model_ids = ['model_ids_example'] # List[Optional[str]] |  (optional)
    with_share_info = False # bool | Whether to return the related share info (optional) (default to False)
    shared_by_me = False # bool | Filter models shared by the current user (optional) (default to False)
    shared_with_me = False # bool | Filter models shared with the current user (optional) (default to False)

    try:
        # List models.
        api_response = api_instance.list_models(page_no=page_no, page_size=page_size, model_ids=model_ids, with_share_info=with_share_info, shared_by_me=shared_by_me, shared_with_me=shared_with_me)
        print("The response of ModelApi->list_models:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ModelApi->list_models: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page_no** | **int**| page number | [optional] [default to 1]
 **page_size** | **int**| page size | [optional] [default to 100]
 **model_ids** | [**List[Optional[str]]**](str.md)|  | [optional] 
 **with_share_info** | **bool**| Whether to return the related share info | [optional] [default to False]
 **shared_by_me** | **bool**| Filter models shared by the current user | [optional] [default to False]
 **shared_with_me** | **bool**| Filter models shared with the current user | [optional] [default to False]

### Return type

[**ListingRspListModelsRspItem**](ListingRspListModelsRspItem.md)

### Authorization

[GlobalAuth](../README.md#GlobalAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_repository**
> SuccRspListRepositoryRsp list_repository(page_no=page_no, page_size=page_size)

List repositories and gists.

List repositories and gists of the current (GitHub) user.  Of course this API can only be used when the user is login using the GitHub account.  The return value contains two parts: 1. List of repositories names. 2. List of gists. As the description field can't uniquely identify a gist, the id field is also returned. In practice, the description field should be showed to user for them to select the gist, the ID field should be used to specify a gist.

### Example

* Bearer Authentication (GlobalAuth):

```python
import openapi_client
from openapi_client.models.succ_rsp_list_repository_rsp import SuccRspListRepositoryRsp
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
    api_instance = openapi_client.ModelApi(api_client)
    page_no = 1 # int | page number (optional) (default to 1)
    page_size = 100 # int | page size (optional) (default to 100)

    try:
        # List repositories and gists.
        api_response = api_instance.list_repository(page_no=page_no, page_size=page_size)
        print("The response of ModelApi->list_repository:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ModelApi->list_repository: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page_no** | **int**| page number | [optional] [default to 1]
 **page_size** | **int**| page size | [optional] [default to 100]

### Return type

[**SuccRspListRepositoryRsp**](SuccRspListRepositoryRsp.md)

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

# **update_model**
> SuccRspListModelsRspItem update_model(objid, update_model)

Update a model by its ID.

Update a model by its ID.  NOTE: The status of model is manipulated by the system. So normally you should not call this API to update the status.

### Example

* Bearer Authentication (GlobalAuth):

```python
import openapi_client
from openapi_client.models.succ_rsp_list_models_rsp_item import SuccRspListModelsRspItem
from openapi_client.models.update_model import UpdateModel
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
    api_instance = openapi_client.ModelApi(api_client)
    objid = 'objid_example' # str | 
    update_model = openapi_client.UpdateModel() # UpdateModel | 

    try:
        # Update a model by its ID.
        api_response = api_instance.update_model(objid, update_model)
        print("The response of ModelApi->update_model:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ModelApi->update_model: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **objid** | **str**|  | 
 **update_model** | [**UpdateModel**](UpdateModel.md)|  | 

### Return type

[**SuccRspListModelsRspItem**](SuccRspListModelsRspItem.md)

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

# **view_model**
> SuccRspViewModelsRsp view_model(objid)

View a model by its ID.

This API is primarily designed for model owners to view their models, requiring a valid access token for authentication.  For shared models, access is granted based on the sharing configuration: 1. Password-protected sharing: Requires the share password for access, eg. `X-Share-Password` in the header 2. Public sharing: Allows access without any password 3. User-specific sharing: Permits access for designated users without requiring a password

### Example

* Api Key Authentication (SharingAuth):

```python
import openapi_client
from openapi_client.models.succ_rsp_view_models_rsp import SuccRspViewModelsRsp
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

# Configure API key authorization: SharingAuth
configuration.api_key['SharingAuth'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['SharingAuth'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ModelApi(api_client)
    objid = 'objid_example' # str | 

    try:
        # View a model by its ID.
        api_response = api_instance.view_model(objid)
        print("The response of ModelApi->view_model:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ModelApi->view_model: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **objid** | **str**|  | 

### Return type

[**SuccRspViewModelsRsp**](SuccRspViewModelsRsp.md)

### Authorization

[SharingAuth](../README.md#SharingAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **view_shared_model**
> SuccRspViewModelsRsp view_shared_model(objid, share_id)

View share snapshot of a model

View the snapshot of a model which is created when creating the share.  The snapshot is assured to remain unchanged even when the model undergoes modifications. This guarantees that discussions regarding shared resources among users are grounded in a solid foundation.

### Example

* Api Key Authentication (SharingAuth):

```python
import openapi_client
from openapi_client.models.succ_rsp_view_models_rsp import SuccRspViewModelsRsp
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

# Configure API key authorization: SharingAuth
configuration.api_key['SharingAuth'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['SharingAuth'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ModelApi(api_client)
    objid = 'objid_example' # str | 
    share_id = 'share_id_example' # str | 

    try:
        # View share snapshot of a model
        api_response = api_instance.view_shared_model(objid, share_id)
        print("The response of ModelApi->view_shared_model:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ModelApi->view_shared_model: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **objid** | **str**|  | 
 **share_id** | **str**|  | 

### Return type

[**SuccRspViewModelsRsp**](SuccRspViewModelsRsp.md)

### Authorization

[SharingAuth](../README.md#SharingAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

