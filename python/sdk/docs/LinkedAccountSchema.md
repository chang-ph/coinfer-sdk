# LinkedAccountSchema


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account** | **str** |  | 
**type** | **str** |  | 

## Example

```python
from openapi_client.models.linked_account_schema import LinkedAccountSchema

# TODO update the JSON string below
json = "{}"
# create an instance of LinkedAccountSchema from a JSON string
linked_account_schema_instance = LinkedAccountSchema.from_json(json)
# print the JSON string representation of the object
print(LinkedAccountSchema.to_json())

# convert the object into a dict
linked_account_schema_dict = linked_account_schema_instance.to_dict()
# create an instance of LinkedAccountSchema from a dict
linked_account_schema_from_dict = LinkedAccountSchema.from_dict(linked_account_schema_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


