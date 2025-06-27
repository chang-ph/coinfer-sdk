import { GetTokensRsp } from '../models/GetTokensRsp';
import { HttpFile } from '../http/http';

export class SuccRspGetTokensRsp {
    'status': SuccRspGetTokensRspStatusEnum;
    'data': GetTokensRsp;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "status",
            "baseName": "status",
            "type": "SuccRspGetTokensRspStatusEnum",
            "format": ""
        },
        {
            "name": "data",
            "baseName": "data",
            "type": "GetTokensRsp",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return SuccRspGetTokensRsp.attributeTypeMap;
    }

    public constructor() {
    }
}

export enum SuccRspGetTokensRspStatusEnum {
    Ok = 'ok'
}

