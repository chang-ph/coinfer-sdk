import { HttpFile } from '../http/http';

export class RunWorkflowReq {
    'objectType': RunWorkflowReqObjectTypeEnum;
    'startupScript'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "objectType",
            "baseName": "object_type",
            "type": "RunWorkflowReqObjectTypeEnum",
            "format": ""
        },
        {
            "name": "startupScript",
            "baseName": "startup_script",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return RunWorkflowReq.attributeTypeMap;
    }

    public constructor() {
    }
}

export enum RunWorkflowReqObjectTypeEnum {
    WorkflowRun = 'workflow.run'
}

