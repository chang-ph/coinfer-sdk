import { SoftDeletedRsp } from '../models/SoftDeletedRsp';
import { HttpFile } from '../http/http';

export class SuccRspSoftDeletedRsp {
    'status': SuccRspSoftDeletedRspStatusEnum;
    'data': SoftDeletedRsp;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "status",
            "baseName": "status",
            "type": "SuccRspSoftDeletedRspStatusEnum",
            "format": ""
        },
        {
            "name": "data",
            "baseName": "data",
            "type": "SoftDeletedRsp",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return SuccRspSoftDeletedRsp.attributeTypeMap;
    }

    public constructor() {
    }
}

export enum SuccRspSoftDeletedRspStatusEnum {
    Ok = 'ok'
}

