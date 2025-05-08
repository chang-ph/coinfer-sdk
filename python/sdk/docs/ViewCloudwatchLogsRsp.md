# ViewCloudwatchLogsRsp


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**logs** | **List[List[object]]** |  | 

## Example

```python
from openapi_client.models.view_cloudwatch_logs_rsp import ViewCloudwatchLogsRsp

# TODO update the JSON string below
json = "{}"
# create an instance of ViewCloudwatchLogsRsp from a JSON string
view_cloudwatch_logs_rsp_instance = ViewCloudwatchLogsRsp.from_json(json)
# print the JSON string representation of the object
print(ViewCloudwatchLogsRsp.to_json())

# convert the object into a dict
view_cloudwatch_logs_rsp_dict = view_cloudwatch_logs_rsp_instance.to_dict()
# create an instance of ViewCloudwatchLogsRsp from a dict
view_cloudwatch_logs_rsp_from_dict = ViewCloudwatchLogsRsp.from_dict(view_cloudwatch_logs_rsp_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


