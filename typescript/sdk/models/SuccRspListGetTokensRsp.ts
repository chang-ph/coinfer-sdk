import { GetTokensRsp } from '../models/GetTokensRsp';
import { HttpFile } from '../http/http';

export class SuccRspListGetTokensRsp {
    'status': SuccRspListGetTokensRspStatusEnum;
    'data': Array<GetTokensRsp>;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "status",
            "baseName": "status",
            "type": "SuccRspListGetTokensRspStatusEnum",
            "format": ""
        },
        {
            "name": "data",
            "baseName": "data",
            "type": "Array<GetTokensRsp>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return SuccRspListGetTokensRsp.attributeTypeMap;
    }

    public constructor() {
    }
}

export enum SuccRspListGetTokensRspStatusEnum {
    Ok = 'ok'
}

