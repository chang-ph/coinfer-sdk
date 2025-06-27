import { UserLoginRsp } from '../models/UserLoginRsp';
import { HttpFile } from '../http/http';

export class SuccRspUserLoginRsp {
    'status': SuccRspUserLoginRspStatusEnum;
    'data': UserLoginRsp;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "status",
            "baseName": "status",
            "type": "SuccRspUserLoginRspStatusEnum",
            "format": ""
        },
        {
            "name": "data",
            "baseName": "data",
            "type": "UserLoginRsp",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return SuccRspUserLoginRsp.attributeTypeMap;
    }

    public constructor() {
    }
}

export enum SuccRspUserLoginRspStatusEnum {
    Ok = 'ok'
}

