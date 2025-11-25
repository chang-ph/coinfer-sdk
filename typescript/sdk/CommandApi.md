# .CommandApi

All URIs are relative to *https://api.coinfer.ai*

Method | HTTP request | Description
------------- | ------------- | -------------
[**runCommand**](CommandApi.md#runCommand) | **POST** /command | Run command


# **runCommand**
> SuccRspAny runCommand(runCommandReq)


### Example


```typescript
import { createConfiguration, CommandApi } from 'coinfer-ts';
import type { CommandApiRunCommandRequest } from 'coinfer-ts';

const configuration = createConfiguration();
const apiInstance = new CommandApi(configuration);

const request: CommandApiRunCommandRequest = {
  
  runCommandReq: {
    target: "target_example",
    action: "action_example",
    parameters: {},
    getResponse: false,
  },
};

const data = await apiInstance.runCommand(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **runCommandReq** | **RunCommandReq**|  |


### Return type

**SuccRspAny**

### Authorization

[GlobalAuth](README.md#GlobalAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


