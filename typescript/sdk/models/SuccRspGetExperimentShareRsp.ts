import { GetExperimentShareRsp } from '../models/GetExperimentShareRsp';
import { HttpFile } from '../http/http';

export class SuccRspGetExperimentShareRsp {
    'status': SuccRspGetExperimentShareRspStatusEnum;
    'data': GetExperimentShareRsp;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "status",
            "baseName": "status",
            "type": "SuccRspGetExperimentShareRspStatusEnum",
            "format": ""
        },
        {
            "name": "data",
            "baseName": "data",
            "type": "GetExperimentShareRsp",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return SuccRspGetExperimentShareRsp.attributeTypeMap;
    }

    public constructor() {
    }
}

export enum SuccRspGetExperimentShareRspStatusEnum {
    Ok = 'ok'
}

