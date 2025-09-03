import { ListingRspDataUnionListExperimentRspListModelsRspItemCreateEventRspCreateCallbackRspCreateRelationRspCreateDataRspCreateWorkflowRsp } from '../models/ListingRspDataUnionListExperimentRspListModelsRspItemCreateEventRspCreateCallbackRspCreateRelationRspCreateDataRspCreateWorkflowRsp';
import { HttpFile } from '../http/http';

export class SuccRspListingRspDataUnionListExperimentRspListModelsRspItemCreateEventRspCreateCallbackRspCreateRelationRspCreateDataRspCreateWorkflowRsp {
    'status': SuccRspListingRspDataUnionListExperimentRspListModelsRspItemCreateEventRspCreateCallbackRspCreateRelationRspCreateDataRspCreateWorkflowRspStatusEnum;
    'data': ListingRspDataUnionListExperimentRspListModelsRspItemCreateEventRspCreateCallbackRspCreateRelationRspCreateDataRspCreateWorkflowRsp;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "status",
            "baseName": "status",
            "type": "SuccRspListingRspDataUnionListExperimentRspListModelsRspItemCreateEventRspCreateCallbackRspCreateRelationRspCreateDataRspCreateWorkflowRspStatusEnum",
            "format": ""
        },
        {
            "name": "data",
            "baseName": "data",
            "type": "ListingRspDataUnionListExperimentRspListModelsRspItemCreateEventRspCreateCallbackRspCreateRelationRspCreateDataRspCreateWorkflowRsp",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return SuccRspListingRspDataUnionListExperimentRspListModelsRspItemCreateEventRspCreateCallbackRspCreateRelationRspCreateDataRspCreateWorkflowRsp.attributeTypeMap;
    }

    public constructor() {
    }
}

export enum SuccRspListingRspDataUnionListExperimentRspListModelsRspItemCreateEventRspCreateCallbackRspCreateRelationRspCreateDataRspCreateWorkflowRspStatusEnum {
    Ok = 'ok'
}

