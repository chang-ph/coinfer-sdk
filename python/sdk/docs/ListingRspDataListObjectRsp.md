# ListingRspDataListObjectRsp


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**total** | **int** |  | 
**page** | **int** |  | 
**count_per_page** | **int** |  | 
**objects** | [**List[ListObjectRsp]**](ListObjectRsp.md) |  | 

## Example

```python
from openapi_client.models.listing_rsp_data_list_object_rsp import ListingRspDataListObjectRsp

# TODO update the JSON string below
json = "{}"
# create an instance of ListingRspDataListObjectRsp from a JSON string
listing_rsp_data_list_object_rsp_instance = ListingRspDataListObjectRsp.from_json(json)
# print the JSON string representation of the object
print(ListingRspDataListObjectRsp.to_json())

# convert the object into a dict
listing_rsp_data_list_object_rsp_dict = listing_rsp_data_list_object_rsp_instance.to_dict()
# create an instance of ListingRspDataListObjectRsp from a dict
listing_rsp_data_list_object_rsp_from_dict = ListingRspDataListObjectRsp.from_dict(listing_rsp_data_list_object_rsp_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


