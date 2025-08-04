# CreateModel


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**object_type** | **str** |  | 
**type** | **str** | The type of input code. It can be:  * local: the code is provided directly in &#x60;content&#x60; field as Unified Model Format. * url: the code is provided by a URL and specified by param &#x60;source_url&#x60;. | [optional] [default to 'local']
**model_name** | **str** | [deprecated] model name | [optional] [default to '']
**env** | **str** |  | [optional] 
**name** | **str** | model name | [optional] [default to '']
**content** | [**ModelContent**](ModelContent.md) |  | [optional] 
**is_demo** | **bool** |  | [optional] [default to False]
**kind** | [**CloudFunctionKind**](CloudFunctionKind.md) |  | [optional] 
**single_instance** | **bool** | Only allow one instance to run as cloud function at a time. | [optional] [default to True]
**lang** | [**CloudFunctionLang**](CloudFunctionLang.md) |  | [optional] 
**entrance_file** | **str** |  | [optional] [default to '']
**lambda_image** | **bool** | Whether to build lambda image for this CloudFunction | [optional] [default to False]
**source_url** | **str** | Source URL from where to import the model | [optional] [default to '']

## Example

```python
from openapi_client.models.create_model import CreateModel

# TODO update the JSON string below
json = "{}"
# create an instance of CreateModel from a JSON string
create_model_instance = CreateModel.from_json(json)
# print the JSON string representation of the object
print(CreateModel.to_json())

# convert the object into a dict
create_model_dict = create_model_instance.to_dict()
# create an instance of CreateModel from a dict
create_model_from_dict = CreateModel.from_dict(create_model_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


