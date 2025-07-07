import { Code2TokenRsp } from '../models/Code2TokenRsp';
import { HttpFile } from '../http/http';

export class SuccRspCode2TokenRsp {
    'status': SuccRspCode2TokenRspStatusEnum;
    'data': Code2TokenRsp;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "status",
            "baseName": "status",
            "type": "SuccRspCode2TokenRspStatusEnum",
            "format": ""
        },
        {
            "name": "data",
            "baseName": "data",
            "type": "Code2TokenRsp",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return SuccRspCode2TokenRsp.attributeTypeMap;
    }

    public constructor() {
    }
}

export enum SuccRspCode2TokenRspStatusEnum {
    Ok = 'ok'
}

