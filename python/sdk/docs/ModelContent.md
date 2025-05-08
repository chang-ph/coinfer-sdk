# ModelContent


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**meta** | [**ModelMeta**](ModelMeta.md) |  | [optional] 
**tree** | [**List[ModelTreeNode]**](ModelTreeNode.md) |  | [optional] 

## Example

```python
from openapi_client.models.model_content import ModelContent

# TODO update the JSON string below
json = "{}"
# create an instance of ModelContent from a JSON string
model_content_instance = ModelContent.from_json(json)
# print the JSON string representation of the object
print(ModelContent.to_json())

# convert the object into a dict
model_content_dict = model_content_instance.to_dict()
# create an instance of ModelContent from a dict
model_content_from_dict = ModelContent.from_dict(model_content_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


