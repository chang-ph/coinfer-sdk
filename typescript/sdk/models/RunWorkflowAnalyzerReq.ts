import { HttpFile } from '../http/http';

export class RunWorkflowAnalyzerReq {
    'objectType': RunWorkflowAnalyzerReqObjectTypeEnum;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "objectType",
            "baseName": "object_type",
            "type": "RunWorkflowAnalyzerReqObjectTypeEnum",
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

