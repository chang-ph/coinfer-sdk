# DownloadReq


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**is_cloud** | **bool** | is the downloaded pakcage used to run workflow in cloud envirioment? | [optional] [default to False]

## Example

```python
from openapi_client.models.download_req import DownloadReq

# TODO update the JSON string below
json = "{}"
# create an instance of DownloadReq from a JSON string
download_req_instance = DownloadReq.from_json(json)
# print the JSON string representation of the object
print(DownloadReq.to_json())

# convert the object into a dict
download_req_dict = download_req_instance.to_dict()
# create an instance of DownloadReq from a dict
download_req_from_dict = DownloadReq.from_dict(download_req_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


