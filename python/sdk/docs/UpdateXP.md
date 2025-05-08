# UpdateXP


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**action** | **str** |  | [optional] 
**meta** | **Dict[str, object]** |  | [optional] 
**name** | **str** |  | [optional] 
**version** | **str** |  | [optional] 
**description** | **str** |  | [optional] 
**status** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.update_xp import UpdateXP

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateXP from a JSON string
update_xp_instance = UpdateXP.from_json(json)
# print the JSON string representation of the object
print(UpdateXP.to_json())

# convert the object into a dict
update_xp_dict = update_xp_instance.to_dict()
# create an instance of UpdateXP from a dict
update_xp_from_dict = UpdateXP.from_dict(update_xp_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


