import { HttpFile } from '../http/http';

export class SaveAnalyzerResultReq {
    'objectType': SaveAnalyzerResultReqObjectTypeEnum;
    'returnCode': number;
    'errlines': Array<string>;
    'result': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "objectType",
            "baseName": "object_type",
            "type": "SaveAnalyzerResultReqObjectTypeEnum",
            "format": ""
        },
        {
            "name": "returnCode",
            "baseName": "return_code",
            "type": "number",
            "format": ""
        },
        {
            "name": "errlines",
            "baseName": "errlines",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "result",
            "baseName": "result",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return SaveAnalyzerResultReq.attributeTypeMap;
    }

    public constructor() {
    }
}

export enum SaveAnalyzerResultReqObjectTypeEnum {
    WorkflowAnalyzerResult = 'workflow.analyzer_result'
}

