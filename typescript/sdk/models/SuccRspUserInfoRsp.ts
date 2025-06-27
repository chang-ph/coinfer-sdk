import { UserInfoRsp } from '../models/UserInfoRsp';
import { HttpFile } from '../http/http';

export class SuccRspUserInfoRsp {
    'status': SuccRspUserInfoRspStatusEnum;
    'data': UserInfoRsp;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "status",
            "baseName": "status",
            "type": "SuccRspUserInfoRspStatusEnum",
            "format": ""
        },
        {
            "name": "data",
            "baseName": "data",
            "type": "UserInfoRsp",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return SuccRspUserInfoRsp.attributeTypeMap;
    }

    public constructor() {
    }
}

export enum SuccRspUserInfoRspStatusEnum {
    Ok = 'ok'
}

