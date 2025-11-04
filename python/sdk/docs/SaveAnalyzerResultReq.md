# SaveAnalyzerResultReq


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**object_type** | **str** |  | 
**return_code** | **int** |  | 
**errlines** | **List[str]** |  | 
**output_data** | **str** |  | 
**result** | **str** |  | 

## Example

```python
from openapi_client.models.save_analyzer_result_req import SaveAnalyzerResultReq

# TODO update the JSON string below
json = "{}"
# create an instance of SaveAnalyzerResultReq from a JSON string
save_analyzer_result_req_instance = SaveAnalyzerResultReq.from_json(json)
# print the JSON string representation of the object
print(SaveAnalyzerResultReq.to_json())

# convert the object into a dict
save_analyzer_result_req_dict = save_analyzer_result_req_instance.to_dict()
# create an instance of SaveAnalyzerResultReq from a dict
save_analyzer_result_req_from_dict = SaveAnalyzerResultReq.from_dict(save_analyzer_result_req_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


