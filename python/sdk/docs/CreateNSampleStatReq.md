# CreateNSampleStatReq


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**object_type** | **str** |  | 
**batch_id** | **str** |  | 
**run_id** | **str** |  | 
**chain_name** | **str** |  | 
**n_sample** | **int** |  | 
**stat** | **Dict[str, List[object]]** |  | 

## Example

```python
from openapi_client.models.create_n_sample_stat_req import CreateNSampleStatReq

# TODO update the JSON string below
json = "{}"
# create an instance of CreateNSampleStatReq from a JSON string
create_n_sample_stat_req_instance = CreateNSampleStatReq.from_json(json)
# print the JSON string representation of the object
print(CreateNSampleStatReq.to_json())

# convert the object into a dict
create_n_sample_stat_req_dict = create_n_sample_stat_req_instance.to_dict()
# create an instance of CreateNSampleStatReq from a dict
create_n_sample_stat_req_from_dict = CreateNSampleStatReq.from_dict(create_n_sample_stat_req_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


