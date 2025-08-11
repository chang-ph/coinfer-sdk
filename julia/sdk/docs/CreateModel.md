# CreateModel


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**object_type** | **String** |  | [default to nothing]
**type** | **String** | The type of input code. It can be:  * local: the code is provided directly in &#x60;content&#x60; field as Unified Model Format. * url: the code is provided by a URL and specified by param &#x60;source_url&#x60;. | [optional] [default to "local"]
**env** | **String** |  | [optional] [default to nothing]
**name** | **String** | model name | [optional] [default to ""]
**content** | [***ModelContent**](ModelContent.md) |  | [optional] [default to nothing]
**is_demo** | **Bool** |  | [optional] [default to false]
**tag** | [***CloudFunctionKind**](CloudFunctionKind.md) |  | [optional] [default to nothing]
**single_instance** | **Bool** | Only allow one instance to run as cloud function at a time. | [optional] [default to true]
**lang** | [***CloudFunctionLang**](CloudFunctionLang.md) |  | [optional] [default to nothing]
**entrance_file** | **String** |  | [optional] [default to ""]
**lambda_image** | **Bool** | Whether to build lambda image for this CloudFunction | [optional] [default to false]
**source_url** | **String** | Source URL from where to import the model | [optional] [default to ""]


[[Back to Model list]](../README.md#models) [[Back to API list]](../README.md#api-endpoints) [[Back to README]](../README.md)


