import { HttpFile } from '../http/http';

export class GetExperimentRunInfoRsp {
    'objectType': GetExperimentRunInfoRspObjectTypeEnum;
    'status': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "objectType",
            "baseName": "object_type",
            "type": "GetExperimentRunInfoRspObjectTypeEnum",
            "format": ""
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return GetExperimentRunInfoRsp.attributeTypeMap;
    }

    public constructor() {
    }
}

export enum GetExperimentRunInfoRspObjectTypeEnum {
    ExperimentRunInfo = 'experiment.run_info'
}

