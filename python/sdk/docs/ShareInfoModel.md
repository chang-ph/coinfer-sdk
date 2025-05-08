# ShareInfoModel


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** |  | 
**password** | **str** |  | 
**user_id** | **str** |  | 
**short_id** | **str** |  | 
**to_user_id** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.share_info_model import ShareInfoModel

# TODO update the JSON string below
json = "{}"
# create an instance of ShareInfoModel from a JSON string
share_info_model_instance = ShareInfoModel.from_json(json)
# print the JSON string representation of the object
print(ShareInfoModel.to_json())

# convert the object into a dict
share_info_model_dict = share_info_model_instance.to_dict()
# create an instance of ShareInfoModel from a dict
share_info_model_from_dict = ShareInfoModel.from_dict(share_info_model_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


