import { ListingRspDataUnionListExperimentRspListModelsRspItemCreateEventRspCreateCallbackRspCreateRelationRspCreateArtifactRspObjectsInner } from '../models/ListingRspDataUnionListExperimentRspListModelsRspItemCreateEventRspCreateCallbackRspCreateRelationRspCreateArtifactRspObjectsInner';
import { HttpFile } from '../http/http';

export class ListingRspDataUnionListExperimentRspListModelsRspItemCreateEventRspCreateCallbackRspCreateRelationRspCreateArtifactRsp {
    'total': number;
    'page': number;
    'countPerPage': number;
    'objects': Array<ListingRspDataUnionListExperimentRspListModelsRspItemCreateEventRspCreateCallbackRspCreateRelationRspCreateArtifactRspObjectsInner>;

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
            "type": "Array<ListingRspDataUnionListExperimentRspListModelsRspItemCreateEventRspCreateCallbackRspCreateRelationRspCreateArtifactRspObjectsInner>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ListingRspDataUnionListExperimentRspListModelsRspItemCreateEventRspCreateCallbackRspCreateRelationRspCreateArtifactRsp.attributeTypeMap;
    }

    public constructor() {
    }
}
