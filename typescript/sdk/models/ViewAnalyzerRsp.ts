import { HttpFile } from '../http/http';

export class ViewAnalyzerRsp {
    'objectType': ViewAnalyzerRspObjectTypeEnum;
    'url': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "objectType",
            "baseName": "object_type",
            "type": "ViewAnalyzerRspObjectTypeEnum",
            "format": ""
        },
        {
            "name": "url",
            "baseName": "url",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ViewAnalyzerRsp.attributeTypeMap;
    }

    public constructor() {
    }
}

export enum ViewAnalyzerRspObjectTypeEnum {
    WorkflowAnalyzer = 'workflow.analyzer'
}

