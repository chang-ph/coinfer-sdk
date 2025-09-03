# DataTyping


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**iteration** | **Dict[str, List[object]]** |  | 
**vars** | **Dict[str, Dict[str, List[object]]]** |  | 

## Example

```python
from openapi_client.models.data_typing import DataTyping

# TODO update the JSON string below
json = "{}"
# create an instance of DataTyping from a JSON string
data_typing_instance = DataTyping.from_json(json)
# print the JSON string representation of the object
print(DataTyping.to_json())

# convert the object into a dict
data_typing_dict = data_typing_instance.to_dict()
# create an instance of DataTyping from a dict
data_typing_from_dict = DataTyping.from_dict(data_typing_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


