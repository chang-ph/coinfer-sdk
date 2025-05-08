# ModelTreeNode


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** |  | 
**type** | **str** |  | 
**content** | **str** |  | [optional] [default to '']
**children** | [**List[ModelTreeNode]**](ModelTreeNode.md) |  | [optional] [default to []]

## Example

```python
from openapi_client.models.model_tree_node import ModelTreeNode

# TODO update the JSON string below
json = "{}"
# create an instance of ModelTreeNode from a JSON string
model_tree_node_instance = ModelTreeNode.from_json(json)
# print the JSON string representation of the object
print(ModelTreeNode.to_json())

# convert the object into a dict
model_tree_node_dict = model_tree_node_instance.to_dict()
# create an instance of ModelTreeNode from a dict
model_tree_node_from_dict = ModelTreeNode.from_dict(model_tree_node_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


