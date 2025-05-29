# AuthorizationApi

All URIs are relative to *https://api.coinfer.ai*

Method | HTTP request | Description
------------- | ------------- | -------------
[**auth0_config**](AuthorizationApi.md#auth0_config) | **GET** /base/auth0-config | Get Auth0 login configuration
[**auth0_login**](AuthorizationApi.md#auth0_login) | **POST** /base/auth0-login | Login with Auth0.
[**create_token**](AuthorizationApi.md#create_token) | **POST** /base/user/tokens | Create a new authorization token.
[**delete_token**](AuthorizationApi.md#delete_token) | **DELETE** /base/user/token/{token_id} | Delete a token by its ID.
[**get_tokens**](AuthorizationApi.md#get_tokens) | **GET** /base/user/tokens | List all of current user&#39;s tokens.
[**modify_current_user**](AuthorizationApi.md#modify_current_user) | **PUT** /base/user | Update information of current user.
[**modify_token**](AuthorizationApi.md#modify_token) | **PUT** /base/user/token/{token_id} | Update a token by its ID.
[**user_info**](AuthorizationApi.md#user_info) | **GET** /base/user | Get information of current user.
[**user_login**](AuthorizationApi.md#user_login) | **POST** /base/login | Login with password.
[**user_logout**](AuthorizationApi.md#user_logout) | **POST** /base/logout | Logout the system.


# **auth0_config**
> auth0_config(_api::AuthorizationApi; _mediaType=nothing) -> SuccRspAuth0ConfigRsp, OpenAPI.Clients.ApiResponse <br/>
> auth0_config(_api::AuthorizationApi, response_stream::Channel; _mediaType=nothing) -> Channel{ SuccRspAuth0ConfigRsp }, OpenAPI.Clients.ApiResponse

Get Auth0 login configuration

Returns the configurations need by the frontend to implement Auth0 login. By using an API to provide this information, we avoid hardcoding them in the frontend code.  This API doen't need authorization as it is usually called before login.

### Required Parameters
This endpoint does not need any parameter.

### Return type

[**SuccRspAuth0ConfigRsp**](SuccRspAuth0ConfigRsp.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

# **auth0_login**
> auth0_login(_api::AuthorizationApi; _mediaType=nothing) -> SuccRspAuth0LoginRsp, OpenAPI.Clients.ApiResponse <br/>
> auth0_login(_api::AuthorizationApi, response_stream::Channel; _mediaType=nothing) -> Channel{ SuccRspAuth0LoginRsp }, OpenAPI.Clients.ApiResponse

Login with Auth0.

This API should be called after the user finishes the Auth0 authorization. So the frontend should be able to obtain an Auth0 token at that point. The API should be called with this token in the `Authorization` header, in the format like `Authorization: Bearer <token>`.  The API will call an Auth0 API to query user information with the token. If it successfully gets it, it means the token is valid. Then the API will either:  1. Retrieve the user object within our system 2. Create a new user within our system  depending on whether a user with the same identity exists in our system.  If everything is okay, the API will return a token which can then be used as an identification to call other APIs. The return format is intentionally designed to keep the same as password login API.

### Required Parameters
This endpoint does not need any parameter.

### Return type

[**SuccRspAuth0LoginRsp**](SuccRspAuth0LoginRsp.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

# **create_token**
> create_token(_api::AuthorizationApi; create_token_param=nothing, _mediaType=nothing) -> SuccRspGetTokensRsp, OpenAPI.Clients.ApiResponse <br/>
> create_token(_api::AuthorizationApi, response_stream::Channel; create_token_param=nothing, _mediaType=nothing) -> Channel{ SuccRspGetTokensRsp }, OpenAPI.Clients.ApiResponse

Create a new authorization token.

This is where the user explicitly creates a new token. The token can be used to call other APIs in the name of the user.

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **_api** | **AuthorizationApi** | API context | 

### Optional Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **create_token_param** | [**CreateToken**](CreateToken.md) |  | 

### Return type

[**SuccRspGetTokensRsp**](SuccRspGetTokensRsp.md)

### Authorization

[GlobalAuth](../README.md#GlobalAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

# **delete_token**
> delete_token(_api::AuthorizationApi, token_id::String; _mediaType=nothing) -> SuccRspNoneType, OpenAPI.Clients.ApiResponse <br/>
> delete_token(_api::AuthorizationApi, response_stream::Channel, token_id::String; _mediaType=nothing) -> Channel{ SuccRspNoneType }, OpenAPI.Clients.ApiResponse

Delete a token by its ID.

Delete(invalidate) a token.

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **_api** | **AuthorizationApi** | API context | 
**token_id** | **String** |  |

### Return type

[**SuccRspNoneType**](SuccRspNoneType.md)

### Authorization

[GlobalAuth](../README.md#GlobalAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

# **get_tokens**
> get_tokens(_api::AuthorizationApi; _mediaType=nothing) -> SuccRspListGetTokensRsp, OpenAPI.Clients.ApiResponse <br/>
> get_tokens(_api::AuthorizationApi, response_stream::Channel; _mediaType=nothing) -> Channel{ SuccRspListGetTokensRsp }, OpenAPI.Clients.ApiResponse

List all of current user's tokens.

Get the tokens created by the current user.  In our system, there are two kinds of tokens:  1. Tokens created explicitly by user. 2. Tokens created implicitly when a user logs in.  This API only returns the former. The latter should be seen as implementation detail and be invisible to the user.

### Required Parameters
This endpoint does not need any parameter.

### Return type

[**SuccRspListGetTokensRsp**](SuccRspListGetTokensRsp.md)

### Authorization

[GlobalAuth](../README.md#GlobalAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

# **modify_current_user**
> modify_current_user(_api::AuthorizationApi, modify_current_user_param::ModifyCurrentUser; _mediaType=nothing) -> SuccRspUserInfoRsp, OpenAPI.Clients.ApiResponse <br/>
> modify_current_user(_api::AuthorizationApi, response_stream::Channel, modify_current_user_param::ModifyCurrentUser; _mediaType=nothing) -> Channel{ SuccRspUserInfoRsp }, OpenAPI.Clients.ApiResponse

Update information of current user.

Modify the property of the current logined user. Currently only login password is supported.

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **_api** | **AuthorizationApi** | API context | 
**modify_current_user_param** | [**ModifyCurrentUser**](ModifyCurrentUser.md) |  |

### Return type

[**SuccRspUserInfoRsp**](SuccRspUserInfoRsp.md)

### Authorization

[GlobalAuth](../README.md#GlobalAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

# **modify_token**
> modify_token(_api::AuthorizationApi, token_id::String, modify_token_param::ModifyToken; _mediaType=nothing) -> SuccRspGetTokensRsp, OpenAPI.Clients.ApiResponse <br/>
> modify_token(_api::AuthorizationApi, response_stream::Channel, token_id::String, modify_token_param::ModifyToken; _mediaType=nothing) -> Channel{ SuccRspGetTokensRsp }, OpenAPI.Clients.ApiResponse

Update a token by its ID.

Modify various property of a token.

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **_api** | **AuthorizationApi** | API context | 
**token_id** | **String** |  |
**modify_token_param** | [**ModifyToken**](ModifyToken.md) |  |

### Return type

[**SuccRspGetTokensRsp**](SuccRspGetTokensRsp.md)

### Authorization

[GlobalAuth](../README.md#GlobalAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

# **user_info**
> user_info(_api::AuthorizationApi; _mediaType=nothing) -> SuccRspUserInfoRsp, OpenAPI.Clients.ApiResponse <br/>
> user_info(_api::AuthorizationApi, response_stream::Channel; _mediaType=nothing) -> Channel{ SuccRspUserInfoRsp }, OpenAPI.Clients.ApiResponse

Get information of current user.

Returns the information of the current logined user.

### Required Parameters
This endpoint does not need any parameter.

### Return type

[**SuccRspUserInfoRsp**](SuccRspUserInfoRsp.md)

### Authorization

[GlobalAuth](../README.md#GlobalAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

# **user_login**
> user_login(_api::AuthorizationApi, user_login_param::UserLogin; _mediaType=nothing) -> SuccRspUserLoginRsp, OpenAPI.Clients.ApiResponse <br/>
> user_login(_api::AuthorizationApi, response_stream::Channel, user_login_param::UserLogin; _mediaType=nothing) -> Channel{ SuccRspUserLoginRsp }, OpenAPI.Clients.ApiResponse

Login with password.

Login in with user name and password.  On success, the return value of the API will be a token which can then be used as an identification to call other APIs.

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **_api** | **AuthorizationApi** | API context | 
**user_login_param** | [**UserLogin**](UserLogin.md) |  |

### Return type

[**SuccRspUserLoginRsp**](SuccRspUserLoginRsp.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

# **user_logout**
> user_logout(_api::AuthorizationApi; _mediaType=nothing) -> SuccRspNoneType, OpenAPI.Clients.ApiResponse <br/>
> user_logout(_api::AuthorizationApi, response_stream::Channel; _mediaType=nothing) -> Channel{ SuccRspNoneType }, OpenAPI.Clients.ApiResponse

Logout the system.

Log out of the system.

### Required Parameters
This endpoint does not need any parameter.

### Return type

[**SuccRspNoneType**](SuccRspNoneType.md)

### Authorization

[GlobalAuth](../README.md#GlobalAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

