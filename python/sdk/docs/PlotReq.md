# PlotReq


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**coinfer_auth_token** | **str** |  | [optional] [default to '']
**coinfer_share_password** | **str** |  | [optional] [default to '']
**experiment_id** | **str** |  | 
**plot_func** | **str** |  | 
**plot_chain** | **str** |  | 
**plot_var** | **str** |  | 
**n_iteration** | **int** |  | [optional] [default to 0]

## Example

```python
from openapi_client.models.plot_req import PlotReq

# TODO update the JSON string below
json = "{}"
# create an instance of PlotReq from a JSON string
plot_req_instance = PlotReq.from_json(json)
# print the JSON string representation of the object
print(PlotReq.to_json())

# convert the object into a dict
plot_req_dict = plot_req_instance.to_dict()
# create an instance of PlotReq from a dict
plot_req_from_dict = PlotReq.from_dict(plot_req_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


