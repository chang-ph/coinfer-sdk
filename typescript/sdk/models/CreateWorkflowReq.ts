import { HttpFile } from '../http/http';

export class CreateWorkflowReq {
    'objectType': CreateWorkflowReqObjectTypeEnum;
    /**
    * workflow name
    */
    'name'?: string;
    /**
    * model ID
    */
    'modelId'?: string;
    /**
    * data ID
    */
    'dataId'?: string;
    /**
    * URI of model in Gallery
    */
    'uri'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "objectType",
            "baseName": "object_type",
            "type": "CreateWorkflowReqObjectTypeEnum",
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
            "name": "dataId",
            "baseName": "data_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "uri",
            "baseName": "uri",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return CreateWorkflowReq.attributeTypeMap;
    }

    public constructor() {
    }
}

export enum CreateWorkflowReqObjectTypeEnum {
    Workflow = 'workflow'
}

