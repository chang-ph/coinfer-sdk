import { HttpFile } from '../http/http';

export class ExperimentCloudwatchLogRsp {
    'objectType': ExperimentCloudwatchLogRspObjectTypeEnum;
    'logs': Array<Array<any>>;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "objectType",
            "baseName": "object_type",
            "type": "ExperimentCloudwatchLogRspObjectTypeEnum",
            "format": ""
        },
        {
            "name": "logs",
            "baseName": "logs",
            "type": "Array<Array<any>>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ExperimentCloudwatchLogRsp.attributeTypeMap;
    }

    public constructor() {
    }
}

export enum ExperimentCloudwatchLogRspObjectTypeEnum {
    ExperimentCloudwatchLog = 'experiment.cloudwatch_log'
}

