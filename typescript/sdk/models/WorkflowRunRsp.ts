import { HttpFile } from '../http/http';

export class WorkflowRunRsp {
    'objectType': WorkflowRunRspObjectTypeEnum;
    'experimentId': string;
    'experimentName': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "objectType",
            "baseName": "object_type",
            "type": "WorkflowRunRspObjectTypeEnum",
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
        }    ];

    static getAttributeTypeMap() {
        return WorkflowRunRsp.attributeTypeMap;
    }

    public constructor() {
    }
}

export enum WorkflowRunRspObjectTypeEnum {
    WorkflowRun = 'workflow.run'
}

