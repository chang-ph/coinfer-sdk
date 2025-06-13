# Payload2


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**object_type** | **str** |  | 
**batch_id** | **str** |  | 
**run_id** | **str** |  | 
**chain_name** | **str** |  | 
**n_sample** | **int** |  | 
**stat** | **Dict[str, List[object]]** |  | 
**content** | [**ModelContent**](ModelContent.md) |  | [optional] 
**name** | **str** |  | [optional] 
**version** | **str** |  | [optional] 
**description** | **str** |  | [optional] 
**status** | **str** |  | [optional] 
**action** | **str** |  | [optional] 
**meta** | **Dict[str, object]** |  | [optional] 
**params** | **str** |  | [optional] [default to '']
**engine** | **str** |  | [optional] [default to 'lambda']
**lock_key** | **str** |  | [optional] [default to '']
**datas** | **List[Dict[str, object]]** | list of messages | 
**logs** | [**List[DataTyping]**](DataTyping.md) |  | 

## Example

```python
from openapi_client.models.payload2 import Payload2

# TODO update the JSON string below
json = "{}"
# create an instance of Payload2 from a JSON string
payload2_instance = Payload2.from_json(json)
# print the JSON string representation of the object
print(Payload2.to_json())

# convert the object into a dict
payload2_dict = payload2_instance.to_dict()
# create an instance of Payload2 from a dict
payload2_from_dict = Payload2.from_dict(payload2_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


