import { HttpFile } from '../http/http';

export class RunWorkflowAnalyzerReq {
    'objectType': RunWorkflowAnalyzerReqObjectTypeEnum;
    /**
    * params for analyzer
    */
    'params'?: string;
    /**
    * lock key
    */
    'lockKey'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "objectType",
            "baseName": "object_type",
            "type": "RunWorkflowAnalyzerReqObjectTypeEnum",
            "format": ""
        },
        {
            "name": "params",
            "baseName": "params",
            "type": "string",
            "format": ""
        },
        {
            "name": "lockKey",
            "baseName": "lock_key",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return RunWorkflowAnalyzerReq.attributeTypeMap;
    }

    public constructor() {
    }
}

export enum RunWorkflowAnalyzerReqObjectTypeEnum {
    WorkflowRunAnalyzer = 'workflow.run_analyzer'
}

