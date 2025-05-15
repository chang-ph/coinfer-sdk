# .AuthorizationApi

All URIs are relative to *https://api.coinfer.ai*

Method | HTTP request | Description
------------- | ------------- | -------------
[**auth0Config**](AuthorizationApi.md#auth0Config) | **GET** /base/auth0-config | Get Auth0 login configuration
[**auth0Login**](AuthorizationApi.md#auth0Login) | **POST** /base/auth0-login | Login with Auth0.
[**createToken**](AuthorizationApi.md#createToken) | **POST** /base/user/tokens | Create a new authorization token.
[**deleteToken**](AuthorizationApi.md#deleteToken) | **DELETE** /base/user/token/{token_id} | Delete a token by its ID.
[**getTokens**](AuthorizationApi.md#getTokens) | **GET** /base/user/tokens | List all of current user\&#39;s tokens.
[**modifyCurrentUser**](AuthorizationApi.md#modifyCurrentUser) | **PUT** /base/user | Update information of current user.
[**modifyToken**](AuthorizationApi.md#modifyToken) | **PUT** /base/user/token/{token_id} | Update a token by its ID.
[**update**](AuthorizationApi.md#update) | **POST** /base/update | Update current user or a token
[**userInfo**](AuthorizationApi.md#userInfo) | **GET** /base/user | Get information of current user.
[**userLogin**](AuthorizationApi.md#userLogin) | **POST** /base/login | Login with password.
[**userLogout**](AuthorizationApi.md#userLogout) | **POST** /base/logout | Logout the system.


# **auth0Config**
> SuccRspAuth0ConfigRsp auth0Config()

Returns the configurations need by the frontend to implement Auth0 login. By using an API to provide this information, we avoid hardcoding them in the frontend code.  This API doen\'t need authorization as it is usually called before login.

### Example


```typescript
import { createConfiguration, AuthorizationApi } from 'coinfer-ts';

const configuration = createConfiguration();
const apiInstance = new AuthorizationApi(configuration);

const request = {};

const data = await apiInstance.auth0Config(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters
This endpoint does not need any parameter.


### Return type

**SuccRspAuth0ConfigRsp**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **auth0Login**
> SuccRspAuth0LoginRsp auth0Login()

This API should be called after the user finishes the Auth0 authorization. So the frontend should be able to obtain an Auth0 token at that point. The API should be called with this token in the `Authorization` header, in the format like `Authorization: Bearer <token>`.  The API will call an Auth0 API to query user information with the token. If it successfully gets it, it means the token is valid. Then the API will either:  1. Retrieve the user object within our system 2. Create a new user within our system  depending on whether a user with the same identity exists in our system.  If everything is okay, the API will return a token which can then be used as an identification to call other APIs. The return format is intentionally designed to keep the same as password login API.

### Example


```typescript
import { createConfiguration, AuthorizationApi } from 'coinfer-ts';

const configuration = createConfiguration();
const apiInstance = new AuthorizationApi(configuration);

const request = {};

const data = await apiInstance.auth0Login(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters
This endpoint does not need any parameter.


### Return type

**SuccRspAuth0LoginRsp**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **createToken**
> SuccRspGetTokensRsp createToken()

This is where the user explicitly creates a new token. The token can be used to call other APIs in the name of the user.

### Example


```typescript
import { createConfiguration, AuthorizationApi } from 'coinfer-ts';
import type { AuthorizationApiCreateTokenRequest } from 'coinfer-ts';

const configuration = createConfiguration();
const apiInstance = new AuthorizationApi(configuration);

const request: AuthorizationApiCreateTokenRequest = {
  
  createToken: {
    name: "",
    desc: "",
    expire: new Date('1970-01-01T00:00:00.00Z'),
  },
};

const data = await apiInstance.createToken(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createToken** | **CreateToken**|  |


### Return type

**SuccRspGetTokensRsp**

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

# **deleteToken**
> SuccRspNoneType deleteToken()

Delete(invalidate) a token.

### Example


```typescript
import { createConfiguration, AuthorizationApi } from 'coinfer-ts';
import type { AuthorizationApiDeleteTokenRequest } from 'coinfer-ts';

const configuration = createConfiguration();
const apiInstance = new AuthorizationApi(configuration);

const request: AuthorizationApiDeleteTokenRequest = {
  
  tokenId: "token_id_example",
};

const data = await apiInstance.deleteToken(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tokenId** | [**string**] |  | defaults to undefined


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

# **getTokens**
> SuccRspListGetTokensRsp getTokens()

Get the tokens created by the current user.  In our system, there are two kinds of tokens:  1. Tokens created explicitly by user. 2. Tokens created implicitly when a user logs in.  This API only returns the former. The latter should be seen as implementation detail and be invisible to the user.

### Example


```typescript
import { createConfiguration, AuthorizationApi } from 'coinfer-ts';

const configuration = createConfiguration();
const apiInstance = new AuthorizationApi(configuration);

const request = {};

const data = await apiInstance.getTokens(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters
This endpoint does not need any parameter.


### Return type

**SuccRspListGetTokensRsp**

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

# **modifyCurrentUser**
> SuccRspUserInfoRsp modifyCurrentUser(modifyCurrentUser)

Modify the property of the current logined user. Currently only login password is supported.

### Example


```typescript
import { createConfiguration, AuthorizationApi } from 'coinfer-ts';
import type { AuthorizationApiModifyCurrentUserRequest } from 'coinfer-ts';

const configuration = createConfiguration();
const apiInstance = new AuthorizationApi(configuration);

const request: AuthorizationApiModifyCurrentUserRequest = {
  
  modifyCurrentUser: {
    newPassword: "newPassword_example",
    password: "password_example",
  },
};

const data = await apiInstance.modifyCurrentUser(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **modifyCurrentUser** | **ModifyCurrentUser**|  |


### Return type

**SuccRspUserInfoRsp**

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

# **modifyToken**
> SuccRspGetTokensRsp modifyToken(modifyToken)

Modify various property of a token.

### Example


```typescript
import { createConfiguration, AuthorizationApi } from 'coinfer-ts';
import type { AuthorizationApiModifyTokenRequest } from 'coinfer-ts';

const configuration = createConfiguration();
const apiInstance = new AuthorizationApi(configuration);

const request: AuthorizationApiModifyTokenRequest = {
  
  tokenId: "token_id_example",
  
  modifyToken: {
    name: "name_example",
    desc: "desc_example",
    expire: new Date('1970-01-01T00:00:00.00Z'),
  },
};

const data = await apiInstance.modifyToken(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **modifyToken** | **ModifyToken**|  |
 **tokenId** | [**string**] |  | defaults to undefined


### Return type

**SuccRspGetTokensRsp**

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

# **update**
> SuccRspUnionUserInfoRspGetTokensRsp update(updateBase)

This API is multi-functional. It can: 1. update the data of the current user 2. update the data of a specific token  Because of this, it support different set of parameters, discrimated by the \"type\" field:  ```js {\"payload\": {\"type\": \"update_user\", ...}} // or {\"payload\": {\"type\": \"update_token\", ...}} ```

### Example


```typescript
import { createConfiguration, AuthorizationApi } from 'coinfer-ts';
import type { AuthorizationApiUpdateRequest } from 'coinfer-ts';

const configuration = createConfiguration();
const apiInstance = new AuthorizationApi(configuration);

const request: AuthorizationApiUpdateRequest = {
  
  updateBase: {
    payload: null,
  },
};

const data = await apiInstance.update(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateBase** | **UpdateBase**|  |


### Return type

**SuccRspUnionUserInfoRspGetTokensRsp**

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

# **userInfo**
> SuccRspUserInfoRsp userInfo()

Returns the information of the current logined user.

### Example


```typescript
import { createConfiguration, AuthorizationApi } from 'coinfer-ts';

const configuration = createConfiguration();
const apiInstance = new AuthorizationApi(configuration);

const request = {};

const data = await apiInstance.userInfo(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters
This endpoint does not need any parameter.


### Return type

**SuccRspUserInfoRsp**

### Authorization

[GlobalAuth](README.md#GlobalAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**400** | Bad Request |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **userLogin**
> SuccRspUserLoginRsp userLogin(userLogin)

Login in with user name and password.  On success, the return value of the API will be a token which can then be used as an identification to call other APIs.

### Example


```typescript
import { createConfiguration, AuthorizationApi } from 'coinfer-ts';
import type { AuthorizationApiUserLoginRequest } from 'coinfer-ts';

const configuration = createConfiguration();
const apiInstance = new AuthorizationApi(configuration);

const request: AuthorizationApiUserLoginRequest = {
  
  userLogin: {
    username: "username_example",
    password: "password_example",
  },
};

const data = await apiInstance.userLogin(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userLogin** | **UserLogin**|  |


### Return type

**SuccRspUserLoginRsp**

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

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **userLogout**
> SuccRspNoneType userLogout()

Log out of the system.

### Example


```typescript
import { createConfiguration, AuthorizationApi } from 'coinfer-ts';

const configuration = createConfiguration();
const apiInstance = new AuthorizationApi(configuration);

const request = {};

const data = await apiInstance.userLogout(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters
This endpoint does not need any parameter.


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


