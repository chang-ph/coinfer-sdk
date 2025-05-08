# SuccRspViewCloudwatchLogsRsp


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **str** |  | 
**data** | [**ViewCloudwatchLogsRsp**](ViewCloudwatchLogsRsp.md) |  | 

## Example

```python
from openapi_client.models.succ_rsp_view_cloudwatch_logs_rsp import SuccRspViewCloudwatchLogsRsp

# TODO update the JSON string below
json = "{}"
# create an instance of SuccRspViewCloudwatchLogsRsp from a JSON string
succ_rsp_view_cloudwatch_logs_rsp_instance = SuccRspViewCloudwatchLogsRsp.from_json(json)
# print the JSON string representation of the object
print(SuccRspViewCloudwatchLogsRsp.to_json())

# convert the object into a dict
succ_rsp_view_cloudwatch_logs_rsp_dict = succ_rsp_view_cloudwatch_logs_rsp_instance.to_dict()
# create an instance of SuccRspViewCloudwatchLogsRsp from a dict
succ_rsp_view_cloudwatch_logs_rsp_from_dict = SuccRspViewCloudwatchLogsRsp.from_dict(succ_rsp_view_cloudwatch_logs_rsp_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


