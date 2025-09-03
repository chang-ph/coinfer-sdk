# Payload


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**object_type** | **str** |  | 
**type** | **str** | The type of input code. It can be:  * local: the code is provided directly in &#x60;content&#x60; field as Unified Model Format. * url: the code is provided by a URL and specified by param &#x60;source_url&#x60;. | [optional] [default to 'local']
**env** | **str** |  | [optional] 
**name** | **str** | workflow name | 
**content** | [**ModelContent**](ModelContent.md) |  | [optional] 
**is_demo** | **bool** |  | [optional] [default to False]
**tag** | [**CloudFunctionKind**](CloudFunctionKind.md) |  | [optional] 
**single_instance** | **bool** | Only allow one instance of this callback to run at a time. | [optional] [default to True]
**lang** | **str** |  | 
**entrance_file** | **str** |  | [optional] [default to '']
**lambda_image** | **bool** | Whether to build lambda image for this CloudFunction | [optional] [default to False]
**source_url** | **str** | Source URL from where to import the model | [optional] [default to '']
**model_id** | **str** | model ID | 
**input_id** | **str** |  | [optional] [default to '']
**xp_meta** | **object** |  | [optional] 
**meta** | **object** |  | [optional] 
**run_on** | **str** |  | [optional] [default to 'Lambda']
**data_file_type** | **str** |  | [optional] 
**data_files** | **List[str]** | File data in text format | [optional] 
**data_uris** | **List[str]** | File data URI | [optional] 
**objid** | **str** |  | 
**password** | **str** |  | [optional] [default to '']
**target_user** | **str** |  | [optional] [default to '']
**code** | **str** | code location specification. Can be: 1. GitHub gist: gist:&lt;gist-id&gt;:&lt;entrance-file&gt; 2. GitHub repo: repo:&lt;repo-owner&gt;/&lt;repo-name&gt;:&lt;entrance-file&gt; | 
**object1_id** | **str** |  | 
**object2_id** | **str** |  | 
**description** | **str** | Data description | [optional] [default to '']
**base64_encoded** | **bool** | Whether the data in &#x60;data_file&#x60; is base64 encoded | [optional] [default to False]
**data** | **str** | File data in text format | [optional] [default to '']
**data_uri** | **str** | File data URI | [optional] [default to '']
**data_id** | **str** | data ID | [optional] [default to '']

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


