# ModelMeta


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**project_file** | **str** |  | [optional] [default to 'Project.toml']
**entrance_file** | **str** |  | [optional] [default to 'main.jl']
**entrance_func** | **str** |  | [optional] [default to 'model']
**manifest** | **str** |  | [optional] [default to 'Manifest.toml']

## Example

```python
from openapi_client.models.model_meta import ModelMeta

# TODO update the JSON string below
json = "{}"
# create an instance of ModelMeta from a JSON string
model_meta_instance = ModelMeta.from_json(json)
# print the JSON string representation of the object
print(ModelMeta.to_json())

# convert the object into a dict
model_meta_dict = model_meta_instance.to_dict()
# create an instance of ModelMeta from a dict
model_meta_from_dict = ModelMeta.from_dict(model_meta_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


