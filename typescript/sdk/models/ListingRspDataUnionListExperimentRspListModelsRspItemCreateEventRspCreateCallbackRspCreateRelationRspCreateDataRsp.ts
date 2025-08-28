import { ListingRspDataUnionListExperimentRspListModelsRspItemCreateEventRspCreateCallbackRspCreateRelationRspCreateDataRspObjectsInner } from '../models/ListingRspDataUnionListExperimentRspListModelsRspItemCreateEventRspCreateCallbackRspCreateRelationRspCreateDataRspObjectsInner';
import { HttpFile } from '../http/http';

export class ListingRspDataUnionListExperimentRspListModelsRspItemCreateEventRspCreateCallbackRspCreateRelationRspCreateDataRsp {
    'total': number;
    'page': number;
    'countPerPage': number;
    'objects': Array<ListingRspDataUnionListExperimentRspListModelsRspItemCreateEventRspCreateCallbackRspCreateRelationRspCreateDataRspObjectsInner>;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "total",
            "baseName": "total",
            "type": "number",
            "format": ""
        },
        {
            "name": "page",
            "baseName": "page",
            "type": "number",
            "format": ""
        },
        {
            "name": "countPerPage",
            "baseName": "count_per_page",
            "type": "number",
            "format": ""
        },
        {
            "name": "objects",
            "baseName": "objects",
            "type": "Array<ListingRspDataUnionListExperimentRspListModelsRspItemCreateEventRspCreateCallbackRspCreateRelationRspCreateDataRspObjectsInner>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ListingRspDataUnionListExperimentRspListModelsRspItemCreateEventRspCreateCallbackRspCreateRelationRspCreateDataRsp.attributeTypeMap;
    }

    public constructor() {
    }
}
