# DownloadWorkflowReq


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**objid** | **str** |  | 
**is_cloud** | **bool** |  | [optional] [default to False]

## Example

```python
from openapi_client.models.download_workflow_req import DownloadWorkflowReq

# TODO update the JSON string below
json = "{}"
# create an instance of DownloadWorkflowReq from a JSON string
download_workflow_req_instance = DownloadWorkflowReq.from_json(json)
# print the JSON string representation of the object
print(DownloadWorkflowReq.to_json())

# convert the object into a dict
download_workflow_req_dict = download_workflow_req_instance.to_dict()
# create an instance of DownloadWorkflowReq from a dict
download_workflow_req_from_dict = DownloadWorkflowReq.from_dict(download_workflow_req_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


