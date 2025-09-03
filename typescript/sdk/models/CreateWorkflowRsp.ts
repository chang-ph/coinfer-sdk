import { HttpFile } from '../http/http';

export class CreateWorkflowRsp {
    'objectType': CreateWorkflowRspObjectTypeEnum;
    'shortId': string;
    'name': string;
    'modelId': string;
    'modelName': string;
    'dataId'?: string | null;
    'dataName'?: string;
    'createdAt': Date;
    'updatedAt': Date;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "objectType",
            "baseName": "object_type",
            "type": "CreateWorkflowRspObjectTypeEnum",
            "format": ""
        },
        {
            "name": "shortId",
            "baseName": "short_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "modelId",
            "baseName": "model_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "modelName",
            "baseName": "model_name",
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
            "name": "dataName",
            "baseName": "data_name",
            "type": "string",
            "format": ""
        },
        {
            "name": "createdAt",
            "baseName": "created_at",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "updatedAt",
            "baseName": "updated_at",
            "type": "Date",
            "format": "date-time"
        }    ];

    static getAttributeTypeMap() {
        return CreateWorkflowRsp.attributeTypeMap;
    }

    public constructor() {
    }
}

export enum CreateWorkflowRspObjectTypeEnum {
    Workflow = 'workflow'
}

