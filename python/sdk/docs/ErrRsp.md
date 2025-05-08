# ErrRsp


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **str** |  | 
**code** | **str** |  | 
**message** | **str** |  | 

## Example

```python
from openapi_client.models.err_rsp import ErrRsp

# TODO update the JSON string below
json = "{}"
# create an instance of ErrRsp from a JSON string
err_rsp_instance = ErrRsp.from_json(json)
# print the JSON string representation of the object
print(ErrRsp.to_json())

# convert the object into a dict
err_rsp_dict = err_rsp_instance.to_dict()
# create an instance of ErrRsp from a dict
err_rsp_from_dict = ErrRsp.from_dict(err_rsp_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


