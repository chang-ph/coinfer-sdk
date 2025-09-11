# Payload1


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
**lambda_image** | **bool** |  | [optional] 
**tags** | **List[str]** |  | [optional] 
**params** | **str** | params for analyzer | [optional] [default to '{}']
**engine** | **str** |  | [optional] [default to 'fargate']
**lock_key** | **str** | lock key | [optional] [default to '']
**action** | **str** |  | [optional] 
**meta** | **Dict[str, object]** |  | [optional] 
**n_chains** | **int** |  | [optional] [default to 0]
**n_variables** | **int** |  | [optional] [default to 0]
**n_samples** | **int** |  | [optional] [default to 0]
**sample_update_time** | **datetime** |  | [optional] 
**datas** | **List[Dict[str, object]]** | list of messages | 
**logs** | [**DataTyping**](DataTyping.md) |  | 
**data_id** | **str** |  | [optional] 
**experiment_id** | **str** |  | [optional] 
**analyzer_id** | **str** |  | [optional] 
**analyzer_result** | **str** |  | [optional] 
**experiment_name** | **str** | experiment name | 
**iteration** | **int** | iteration number | [optional] [default to 1000]
**parallel** | **int** | parallel number | [optional] [default to 1]
**chains** | **int** | chains number | [optional] [default to 1]
**parallel_algorithm** | **str** |  | [optional] [default to 'Serial']

## Example

```python
from openapi_client.models.payload1 import Payload1

# TODO update the JSON string below
json = "{}"
# create an instance of Payload1 from a JSON string
payload1_instance = Payload1.from_json(json)
# print the JSON string representation of the object
print(Payload1.to_json())

# convert the object into a dict
payload1_dict = payload1_instance.to_dict()
# create an instance of Payload1 from a dict
payload1_from_dict = Payload1.from_dict(payload1_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


