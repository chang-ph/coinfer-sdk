# Payload


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**object_type** | **str** |  | 
**repo** | **str** | repo in the form of repo_owner/repo_name or gist id in case of importing from gist | [optional] [default to '']
**branch** | **str** | branch name or gist description in case of importing from gist | [optional] [default to '']
**type** | **str** | The type of input code. It can be:  * repo: the code is stored in a github repository and specified by param &#x60;repo&#x60; and &#x60;branch&#x60;. * gist: the code is stored in a github gist and specified by param &#x60;repo&#x60; and &#x60;branch&#x60;. * local: the code is provided directly in &#x60;content&#x60; field as Unified Model Format. | [optional] [default to 'local']
**model_name** | **str** | [deprecated] model name | [optional] [default to '']
**env** | **str** |  | [optional] 
**name** | **str** |  | 
**content** | [**ModelContent**](ModelContent.md) |  | [optional] 
**is_demo** | **bool** |  | [optional] [default to False]
**kind** | [**CloudFunctionKind**](CloudFunctionKind.md) |  | [optional] 
**single_instance** | **bool** | Only allow one instance of this callback to run at a time. | [optional] [default to True]
**lang** | **str** |  | 
**entrance_file** | **str** |  | [optional] [default to '']
**lambda_image** | **bool** | Whether to build lambda image for this CloudFunction | [optional] [default to False]
**model_id** | **str** |  | [optional] [default to '']
**xp_meta** | **object** |  | [optional] 
**meta** | **object** |  | [optional] 
**data_file_type** | **str** |  | [optional] 
**data_files** | **List[str]** | File data in text format | [optional] 
**data_uris** | **List[str]** | File data URI | [optional] 
**objid** | **str** |  | 
**password** | **str** |  | [optional] [default to '']
**target_user** | **str** |  | [optional] [default to '']
**code** | **str** | code location specification. Can be: 1. GitHub gist: gist:&lt;gist-id&gt;:&lt;entrance-file&gt; 2. GitHub repo: repo:&lt;repo-owner&gt;/&lt;repo-name&gt;:&lt;entrance-file&gt; | 
**object1_id** | **str** |  | 
**object2_id** | **str** |  | 

## Example

```python
from openapi_client.models.payload import Payload

# TODO update the JSON string below
json = "{}"
# create an instance of Payload from a JSON string
payload_instance = Payload.from_json(json)
# print the JSON string representation of the object
print(Payload.to_json())

# convert the object into a dict
payload_dict = payload_instance.to_dict()
# create an instance of Payload from a dict
payload_from_dict = Payload.from_dict(payload_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


