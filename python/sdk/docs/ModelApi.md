# openapi_client.ModelApi

All URIs are relative to *https://api.coinfer.ai*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_config**](ModelApi.md#get_config) | **GET** /turing/config | Get configuration about how to run a model.
[**list_branch**](ModelApi.md#list_branch) | **GET** /turing/github/branch | List branches.
[**list_repository**](ModelApi.md#list_repository) | **GET** /turing/github/repository | List repositories and gists.


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

