# CreateModelShare


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**password** | **str** |  | [optional] [default to '']
**target_user** | **str** |  | [optional] [default to '']

## Example

```python
from openapi_client.models.create_model_share import CreateModelShare

# TODO update the JSON string below
json = "{}"
# create an instance of CreateModelShare from a JSON string
create_model_share_instance = CreateModelShare.from_json(json)
# print the JSON string representation of the object
print(CreateModelShare.to_json())

# convert the object into a dict
create_model_share_dict = create_model_share_instance.to_dict()
# create an instance of CreateModelShare from a dict
create_model_share_from_dict = CreateModelShare.from_dict(create_model_share_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


