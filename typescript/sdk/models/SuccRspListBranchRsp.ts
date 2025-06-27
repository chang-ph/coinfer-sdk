import { ListBranchRsp } from '../models/ListBranchRsp';
import { HttpFile } from '../http/http';

export class SuccRspListBranchRsp {
    'status': SuccRspListBranchRspStatusEnum;
    'data': ListBranchRsp;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "status",
            "baseName": "status",
            "type": "SuccRspListBranchRspStatusEnum",
            "format": ""
        },
        {
            "name": "data",
            "baseName": "data",
            "type": "ListBranchRsp",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return SuccRspListBranchRsp.attributeTypeMap;
    }

    public constructor() {
    }
}

export enum SuccRspListBranchRspStatusEnum {
    Ok = 'ok'
}

