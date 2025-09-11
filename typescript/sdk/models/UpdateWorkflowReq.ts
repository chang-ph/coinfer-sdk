import { HttpFile } from '../http/http';

export class UpdateWorkflowReq {
    'objectType': UpdateWorkflowReqObjectTypeEnum;
    'name'?: string | null;
    'description'?: string | null;
    'dataId'?: string | null;
    'experimentId'?: string | null;
    'analyzerId'?: string | null;
    'analyzerResult'?: string | null;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "objectType",
            "baseName": "object_type",
            "type": "UpdateWorkflowReqObjectTypeEnum",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string",
            "format": ""
        },
        {
            "name": "dataId",
            "baseName": "data_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "experimentId",
            "baseName": "experiment_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "analyzerId",
            "baseName": "analyzer_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "analyzerResult",
            "baseName": "analyzer_result",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return UpdateWorkflowReq.attributeTypeMap;
    }

    public constructor() {
    }
}

export enum UpdateWorkflowReqObjectTypeEnum {
    Workflow = 'workflow'
}

