# CreateModel


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**object_type** | **str** |  | 
**repo** | **str** | repo in the form of repo_owner/repo_name or gist id in case of importing from gist | [optional] [default to '']
**branch** | **str** | branch name or gist description in case of importing from gist | [optional] [default to '']
**type** | **str** | The type of input code. It can be:  * repo: the code is stored in a github repository and specified by param &#x60;repo&#x60; and &#x60;branch&#x60;. * gist: the code is stored in a github gist and specified by param &#x60;repo&#x60; and &#x60;branch&#x60;. * local: the code is provided directly in &#x60;content&#x60; field as Unified Model Format. * codelambda: the code is provided directly in &#x60;code&#x60; field as str. The backend will generate a lambda instance for it. | [optional] [default to 'local']
**code** | **str** | Plain code. Type must be codelambda | [optional] [default to '']
**model_name** | **str** | [deprecated] model name | [optional] [default to '']
**env** | **str** |  | [optional] 
**name** | **str** | model name | [optional] [default to '']
**content** | [**ModelContent**](ModelContent.md) |  | [optional] 
**is_demo** | **bool** |  | [optional] [default to False]
**kind** | [**CloudFunctionKind**](CloudFunctionKind.md) |  | [optional] 
**single_instance** | **bool** | Only allow one instance to run as cloud function at a time. | [optional] [default to True]
**lang** | [**CloudFunctionLang**](CloudFunctionLang.md) |  | [optional] 
**entrance_file** | **str** |  | [optional] [default to '']

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


