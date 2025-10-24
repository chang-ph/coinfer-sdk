import { HttpFile } from '../http/http';

export class CreateWorkflowRsp {
    'objectType': CreateWorkflowRspObjectTypeEnum;
    'shortId': string;
    'name': string;
    'modelId': string;
    'modelName': string;
    'dataId'?: string | null;
    'dataName'?: string | null;
    'dataFmt'?: string | null;
    'experimentId'?: string | null;
    'experimentName'?: string | null;
    'analyzerId'?: string | null;
    'analyzerName'?: string | null;
    'createdAt': Date;
    'updatedAt': Date;
    'startupScript'?: string | null;
    'settings'?: string | null;
    'dataScript'?: string | null;
    'parsedDataId'?: string | null;

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
            "name": "dataFmt",
            "baseName": "data_fmt",
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
            "name": "experimentName",
            "baseName": "experiment_name",
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
            "name": "analyzerName",
            "baseName": "analyzer_name",
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
        },
        {
            "name": "startupScript",
            "baseName": "startup_script",
            "type": "string",
            "format": ""
        },
        {
            "name": "settings",
            "baseName": "settings",
            "type": "string",
            "format": ""
        },
        {
            "name": "dataScript",
            "baseName": "data_script",
            "type": "string",
            "format": ""
        },
        {
            "name": "parsedDataId",
            "baseName": "parsed_data_id",
            "type": "string",
            "format": ""
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

