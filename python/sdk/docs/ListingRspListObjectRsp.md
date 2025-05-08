# ListingRspListObjectRsp


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **str** |  | 
**data** | [**ListingRspDataListObjectRsp**](ListingRspDataListObjectRsp.md) |  | 

## Example

```python
from openapi_client.models.listing_rsp_list_object_rsp import ListingRspListObjectRsp

# TODO update the JSON string below
json = "{}"
# create an instance of ListingRspListObjectRsp from a JSON string
listing_rsp_list_object_rsp_instance = ListingRspListObjectRsp.from_json(json)
# print the JSON string representation of the object
print(ListingRspListObjectRsp.to_json())

# convert the object into a dict
listing_rsp_list_object_rsp_dict = listing_rsp_list_object_rsp_instance.to_dict()
# create an instance of ListingRspListObjectRsp from a dict
listing_rsp_list_object_rsp_from_dict = ListingRspListObjectRsp.from_dict(listing_rsp_list_object_rsp_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


