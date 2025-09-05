# openapi_client.AuthorizationApi

All URIs are relative to *https://api.coinfer.ai*

Method | HTTP request | Description
------------- | ------------- | -------------
[**access_token**](AuthorizationApi.md#access_token) | **GET** /base/access_token | Access Token
[**auth0_config**](AuthorizationApi.md#auth0_config) | **GET** /base/auth0-config | Get Auth0 login configuration
[**auth0_login**](AuthorizationApi.md#auth0_login) | **POST** /base/auth0-login | Login with Auth0.
[**code2token**](AuthorizationApi.md#code2token) | **POST** /base/code2token | Code2Token
[**create_token**](AuthorizationApi.md#create_token) | **POST** /base/user/tokens | Create a new authorization token.
[**delete_linked_account**](AuthorizationApi.md#delete_linked_account) | **DELETE** /base/linked-account | Delete Linked Account
[**delete_token**](AuthorizationApi.md#delete_token) | **DELETE** /base/user/tokens | Delete Token
[**get_tokens**](AuthorizationApi.md#get_tokens) | **GET** /base/user/tokens | List all of current user&#39;s tokens.
[**list_linked_account**](AuthorizationApi.md#list_linked_account) | **GET** /base/linked-account | List Linked Account
[**modify_current_user**](AuthorizationApi.md#modify_current_user) | **PUT** /base/user | Update information of current user.
[**modify_token**](AuthorizationApi.md#modify_token) | **PUT** /base/user/token/{token_id} | Update a token by its ID.
[**user_info**](AuthorizationApi.md#user_info) | **GET** /base/user | Get information of current user.
[**user_login**](AuthorizationApi.md#user_login) | **POST** /base/login | Login with password.
[**user_logout**](AuthorizationApi.md#user_logout) | **POST** /base/logout | Logout the system.


# **access_token**
> SuccRspCode2TokenRsp access_token()

Access Token

Get access token.

### Example

* Bearer Authentication (GlobalAuth):

```python
import openapi_client
from openapi_client.models.succ_rsp_code2_token_rsp import SuccRspCode2TokenRsp
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
    api_instance = openapi_client.AuthorizationApi(api_client)

    try:
        # Access Token
        api_response = api_instance.access_token()
        print("The response of AuthorizationApi->access_token:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AuthorizationApi->access_token: %s\n" % e)
```


### Parameters

This endpoint does not need any parameter.

### Return type

[**SuccRspCode2TokenRsp**](SuccRspCode2TokenRsp.md)

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

# **auth0_config**
> SuccRspAuth0ConfigRsp auth0_config()

Get Auth0 login configuration

Returns the configurations need by the frontend to implement Auth0 login. By using an API to provide this information, we avoid hardcoding them in the frontend code.  This API doesn't need authorization as it is usually called before login.

### Example


```python
import openapi_client
from openapi_client.models.succ_rsp_auth0_config_rsp import SuccRspAuth0ConfigRsp
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.coinfer.ai
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.coinfer.ai"
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AuthorizationApi(api_client)

    try:
        # Get Auth0 login configuration
        api_response = api_instance.auth0_config()
        print("The response of AuthorizationApi->auth0_config:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AuthorizationApi->auth0_config: %s\n" % e)
```


### Parameters

This endpoint does not need any parameter.

### Return type

[**SuccRspAuth0ConfigRsp**](SuccRspAuth0ConfigRsp.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **auth0_login**
> SuccRspAuth0LoginRsp auth0_login()

Login with Auth0.

This API should be called after the user finishes the Auth0 authorization. So the frontend should be able to obtain an Auth0 token at that point. The API should be called with this token in the `Authorization` header, in the format like `Authorization: Bearer <token>`.  The API will call an Auth0 API to query user information with the token. If it successfully gets it, it means the token is valid. Then the API will either:  1. Retrieve the user object within our system 2. Create a new user within our system  depending on whether a user with the same identity exists in our system.  If everything is okay, the API will return a token which can then be used as an identification to call other APIs. The return format is intentionally designed to keep the same as password login API.

### Example


```python
import openapi_client
from openapi_client.models.succ_rsp_auth0_login_rsp import SuccRspAuth0LoginRsp
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.coinfer.ai
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.coinfer.ai"
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AuthorizationApi(api_client)

    try:
        # Login with Auth0.
        api_response = api_instance.auth0_login()
        print("The response of AuthorizationApi->auth0_login:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AuthorizationApi->auth0_login: %s\n" % e)
```


### Parameters

This endpoint does not need any parameter.

### Return type

[**SuccRspAuth0LoginRsp**](SuccRspAuth0LoginRsp.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **code2token**
> SuccRspCode2TokenRsp code2token(code)

Code2Token

Exchange code for access token.

### Example

* Bearer Authentication (GlobalAuth):

```python
import openapi_client
from openapi_client.models.succ_rsp_code2_token_rsp import SuccRspCode2TokenRsp
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
    api_instance = openapi_client.AuthorizationApi(api_client)
    code = 'code_example' # str | 

    try:
        # Code2Token
        api_response = api_instance.code2token(code)
        print("The response of AuthorizationApi->code2token:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AuthorizationApi->code2token: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **code** | **str**|  | 

### Return type

[**SuccRspCode2TokenRsp**](SuccRspCode2TokenRsp.md)

### Authorization

[GlobalAuth](../README.md#GlobalAuth)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **create_token**
> SuccRspGetTokensRsp create_token(create_token=create_token)

Create a new authorization token.

This is where the user explicitly creates a new token. The token can be used to call other APIs in the name of the user.

### Example

* Bearer Authentication (GlobalAuth):

```python
import openapi_client
from openapi_client.models.create_token import CreateToken
from openapi_client.models.succ_rsp_get_tokens_rsp import SuccRspGetTokensRsp
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
    api_instance = openapi_client.AuthorizationApi(api_client)
    create_token = openapi_client.CreateToken() # CreateToken |  (optional)

    try:
        # Create a new authorization token.
        api_response = api_instance.create_token(create_token=create_token)
        print("The response of AuthorizationApi->create_token:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AuthorizationApi->create_token: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **create_token** | [**CreateToken**](CreateToken.md)|  | [optional] 

### Return type

[**SuccRspGetTokensRsp**](SuccRspGetTokensRsp.md)

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

# **delete_linked_account**
> SuccRspSoftDeletedRsp delete_linked_account(deleted_key=deleted_key, accounts=accounts)

Delete Linked Account

Delete linked accounts.

### Example

* Bearer Authentication (GlobalAuth):

```python
import openapi_client
from openapi_client.models.succ_rsp_soft_deleted_rsp import SuccRspSoftDeletedRsp
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
    api_instance = openapi_client.AuthorizationApi(api_client)
    deleted_key = '' # str |  (optional) (default to '')
    accounts = ['accounts_example'] # List[str] | account list. List item in format `<account_type>:<account>` (optional)

    try:
        # Delete Linked Account
        api_response = api_instance.delete_linked_account(deleted_key=deleted_key, accounts=accounts)
        print("The response of AuthorizationApi->delete_linked_account:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AuthorizationApi->delete_linked_account: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deleted_key** | **str**|  | [optional] [default to &#39;&#39;]
 **accounts** | [**List[str]**](str.md)| account list. List item in format &#x60;&lt;account_type&gt;:&lt;account&gt;&#x60; | [optional] 

### Return type

[**SuccRspSoftDeletedRsp**](SuccRspSoftDeletedRsp.md)

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

# **delete_token**
> SuccRspSoftDeletedRsp delete_token(deleted_key=deleted_key, tokens=tokens)

Delete Token

Delete(invalidate) tokens by their IDs.

### Example

* Bearer Authentication (GlobalAuth):

```python
import openapi_client
from openapi_client.models.succ_rsp_soft_deleted_rsp import SuccRspSoftDeletedRsp
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
    api_instance = openapi_client.AuthorizationApi(api_client)
    deleted_key = '' # str |  (optional) (default to '')
    tokens = ['tokens_example'] # List[str] | list of tokens to be deleted (optional)

    try:
        # Delete Token
        api_response = api_instance.delete_token(deleted_key=deleted_key, tokens=tokens)
        print("The response of AuthorizationApi->delete_token:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AuthorizationApi->delete_token: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deleted_key** | **str**|  | [optional] [default to &#39;&#39;]
 **tokens** | [**List[str]**](str.md)| list of tokens to be deleted | [optional] 

### Return type

[**SuccRspSoftDeletedRsp**](SuccRspSoftDeletedRsp.md)

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

# **get_tokens**
> SuccRspListGetTokensRsp get_tokens()

List all of current user's tokens.

Get the tokens created by the current user.  In our system, there are two kinds of tokens:  1. Tokens created explicitly by user. 2. Tokens created implicitly when a user logs in.  This API only returns the former. The latter should be seen as implementation detail and be invisible to the user.

### Example

* Bearer Authentication (GlobalAuth):

```python
import openapi_client
from openapi_client.models.succ_rsp_list_get_tokens_rsp import SuccRspListGetTokensRsp
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
    api_instance = openapi_client.AuthorizationApi(api_client)

    try:
        # List all of current user's tokens.
        api_response = api_instance.get_tokens()
        print("The response of AuthorizationApi->get_tokens:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AuthorizationApi->get_tokens: %s\n" % e)
```


### Parameters

This endpoint does not need any parameter.

### Return type

[**SuccRspListGetTokensRsp**](SuccRspListGetTokensRsp.md)

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

# **list_linked_account**
> SuccRspListLinkedAccountRsp list_linked_account()

List Linked Account

Get list of linked account.

### Example

* Bearer Authentication (GlobalAuth):

```python
import openapi_client
from openapi_client.models.succ_rsp_list_linked_account_rsp import SuccRspListLinkedAccountRsp
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
    api_instance = openapi_client.AuthorizationApi(api_client)

    try:
        # List Linked Account
        api_response = api_instance.list_linked_account()
        print("The response of AuthorizationApi->list_linked_account:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AuthorizationApi->list_linked_account: %s\n" % e)
```


### Parameters

This endpoint does not need any parameter.

### Return type

[**SuccRspListLinkedAccountRsp**](SuccRspListLinkedAccountRsp.md)

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

# **modify_current_user**
> SuccRspUserInfoRsp modify_current_user(modify_current_user)

Update information of current user.

Modify the property of the current logined user. Currently only login password is supported.

### Example

* Bearer Authentication (GlobalAuth):

```python
import openapi_client
from openapi_client.models.modify_current_user import ModifyCurrentUser
from openapi_client.models.succ_rsp_user_info_rsp import SuccRspUserInfoRsp
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
    api_instance = openapi_client.AuthorizationApi(api_client)
    modify_current_user = openapi_client.ModifyCurrentUser() # ModifyCurrentUser | 

    try:
        # Update information of current user.
        api_response = api_instance.modify_current_user(modify_current_user)
        print("The response of AuthorizationApi->modify_current_user:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AuthorizationApi->modify_current_user: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **modify_current_user** | [**ModifyCurrentUser**](ModifyCurrentUser.md)|  | 

### Return type

[**SuccRspUserInfoRsp**](SuccRspUserInfoRsp.md)

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

# **modify_token**
> SuccRspGetTokensRsp modify_token(token_id, modify_token)

Update a token by its ID.

Modify various property of a token.

### Example

* Bearer Authentication (GlobalAuth):

```python
import openapi_client
from openapi_client.models.modify_token import ModifyToken
from openapi_client.models.succ_rsp_get_tokens_rsp import SuccRspGetTokensRsp
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
    api_instance = openapi_client.AuthorizationApi(api_client)
    token_id = 'token_id_example' # str | 
    modify_token = openapi_client.ModifyToken() # ModifyToken | 

    try:
        # Update a token by its ID.
        api_response = api_instance.modify_token(token_id, modify_token)
        print("The response of AuthorizationApi->modify_token:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AuthorizationApi->modify_token: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token_id** | **str**|  | 
 **modify_token** | [**ModifyToken**](ModifyToken.md)|  | 

### Return type

[**SuccRspGetTokensRsp**](SuccRspGetTokensRsp.md)

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

# **user_info**
> SuccRspUserInfoRsp user_info()

Get information of current user.

Returns the information of the current logined user.

### Example

* Bearer Authentication (GlobalAuth):

```python
import openapi_client
from openapi_client.models.succ_rsp_user_info_rsp import SuccRspUserInfoRsp
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
    api_instance = openapi_client.AuthorizationApi(api_client)

    try:
        # Get information of current user.
        api_response = api_instance.user_info()
        print("The response of AuthorizationApi->user_info:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AuthorizationApi->user_info: %s\n" % e)
```


### Parameters

This endpoint does not need any parameter.

### Return type

[**SuccRspUserInfoRsp**](SuccRspUserInfoRsp.md)

### Authorization

[GlobalAuth](../README.md#GlobalAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**400** | Bad Request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **user_login**
> SuccRspUserLoginRsp user_login(user_login)

Login with password.

Login in with user name and password.  On success, the return value of the API will be a token which can then be used as an identification to call other APIs.

### Example


```python
import openapi_client
from openapi_client.models.succ_rsp_user_login_rsp import SuccRspUserLoginRsp
from openapi_client.models.user_login import UserLogin
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.coinfer.ai
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.coinfer.ai"
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AuthorizationApi(api_client)
    user_login = openapi_client.UserLogin() # UserLogin | 

    try:
        # Login with password.
        api_response = api_instance.user_login(user_login)
        print("The response of AuthorizationApi->user_login:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AuthorizationApi->user_login: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user_login** | [**UserLogin**](UserLogin.md)|  | 

### Return type

[**SuccRspUserLoginRsp**](SuccRspUserLoginRsp.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **user_logout**
> SuccRspNoneType user_logout()

Logout the system.

Log out of the system.

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
    api_instance = openapi_client.AuthorizationApi(api_client)

    try:
        # Logout the system.
        api_response = api_instance.user_logout()
        print("The response of AuthorizationApi->user_logout:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AuthorizationApi->user_logout: %s\n" % e)
```


### Parameters

This endpoint does not need any parameter.

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

