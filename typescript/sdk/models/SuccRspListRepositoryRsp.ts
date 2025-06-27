import { ListRepositoryRsp } from '../models/ListRepositoryRsp';
import { HttpFile } from '../http/http';

export class SuccRspListRepositoryRsp {
    'status': SuccRspListRepositoryRspStatusEnum;
    'data': ListRepositoryRsp;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "status",
            "baseName": "status",
            "type": "SuccRspListRepositoryRspStatusEnum",
            "format": ""
        },
        {
            "name": "data",
            "baseName": "data",
            "type": "ListRepositoryRsp",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return SuccRspListRepositoryRsp.attributeTypeMap;
    }

    public constructor() {
    }
}

export enum SuccRspListRepositoryRspStatusEnum {
    Ok = 'ok'
}

