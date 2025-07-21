# CreateModel


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**object_type** | **String** |  | [default to nothing]
**repo** | **String** | repo in the form of repo_owner/repo_name or gist id in case of importing from gist | [optional] [default to ""]
**branch** | **String** | branch name or gist description in case of importing from gist | [optional] [default to ""]
**type** | **String** | The type of input code. It can be:  * repo: the code is stored in a github repository and specified by param &#x60;repo&#x60; and &#x60;branch&#x60;. * gist: the code is stored in a github gist and specified by param &#x60;repo&#x60; and &#x60;branch&#x60;. * local: the code is provided directly in &#x60;content&#x60; field as Unified Model Format. * codelambda: the code is provided directly in &#x60;code&#x60; field as str. The backend will generate a lambda instance for it. | [optional] [default to "local"]
**code** | **String** | Plain code. Type must be codelambda | [optional] [default to ""]
**model_name** | **String** | [deprecated] model name | [optional] [default to ""]
**env** | **String** |  | [optional] [default to nothing]
**name** | **String** | model name | [optional] [default to ""]
**content** | [***ModelContent**](ModelContent.md) |  | [optional] [default to nothing]
**is_demo** | **Bool** |  | [optional] [default to false]
**kind** | [***CloudFunctionKind**](CloudFunctionKind.md) |  | [optional] [default to nothing]
**single_instance** | **Bool** | Only allow one instance to run as cloud function at a time. | [optional] [default to true]
**lang** | [***CloudFunctionLang**](CloudFunctionLang.md) |  | [optional] [default to nothing]
**entrance_file** | **String** |  | [optional] [default to ""]


[[Back to Model list]](../README.md#models) [[Back to API list]](../README.md#api-endpoints) [[Back to README]](../README.md)


