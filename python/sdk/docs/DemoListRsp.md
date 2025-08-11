# DemoListRsp


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**models** | **Dict[str, List[DemoListItem]]** |  | 
**mcmc** | **Dict[str, List[DemoListItem]]** |  | 

## Example

```python
from openapi_client.models.demo_list_rsp import DemoListRsp

# TODO update the JSON string below
json = "{}"
# create an instance of DemoListRsp from a JSON string
demo_list_rsp_instance = DemoListRsp.from_json(json)
# print the JSON string representation of the object
print(DemoListRsp.to_json())

# convert the object into a dict
demo_list_rsp_dict = demo_list_rsp_instance.to_dict()
# create an instance of DemoListRsp from a dict
demo_list_rsp_from_dict = DemoListRsp.from_dict(demo_list_rsp_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


