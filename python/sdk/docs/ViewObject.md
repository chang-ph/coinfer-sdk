# ViewObject


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**object_type** | **str** |  | [optional] [default to '']
**share_id** | **str** |                  Only appicable to object_type &#x3D;&#x3D; model or object_type &#x3D;&#x3D; experiment                 If this field is empty, returns the latest version of the objects.                 otherwise returns the specified share snapshot | [optional] [default to '']
**sampledata** | **bool** |  | [optional] [default to False]
**fmt** | **str** |  | [optional] [default to 'csv']
**n_iteration** | **int** |  | [optional] 
**cloudwatch_log** | **bool** |  | [optional] [default to False]
**batch_id** | **str** |  | [optional] [default to '']
**run_id** | **str** |  | [optional] [default to '']
**plot** | **bool** | get arviz plot | [optional] [default to False]

## Example

```python
from openapi_client.models.view_object import ViewObject

# TODO update the JSON string below
json = "{}"
# create an instance of ViewObject from a JSON string
view_object_instance = ViewObject.from_json(json)
# print the JSON string representation of the object
print(ViewObject.to_json())

# convert the object into a dict
view_object_dict = view_object_instance.to_dict()
# create an instance of ViewObject from a dict
view_object_from_dict = ViewObject.from_dict(view_object_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


