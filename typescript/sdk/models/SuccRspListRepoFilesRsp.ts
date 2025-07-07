import { ListRepoFilesRsp } from '../models/ListRepoFilesRsp';
import { HttpFile } from '../http/http';

export class SuccRspListRepoFilesRsp {
    'status': SuccRspListRepoFilesRspStatusEnum;
    'data': ListRepoFilesRsp;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "status",
            "baseName": "status",
            "type": "SuccRspListRepoFilesRspStatusEnum",
            "format": ""
        },
        {
            "name": "data",
            "baseName": "data",
            "type": "ListRepoFilesRsp",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return SuccRspListRepoFilesRsp.attributeTypeMap;
    }

    public constructor() {
    }
}

export enum SuccRspListRepoFilesRspStatusEnum {
    Ok = 'ok'
}

