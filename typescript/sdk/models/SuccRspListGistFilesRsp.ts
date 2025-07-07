import { ListGistFilesRsp } from '../models/ListGistFilesRsp';
import { HttpFile } from '../http/http';

export class SuccRspListGistFilesRsp {
    'status': SuccRspListGistFilesRspStatusEnum;
    'data': ListGistFilesRsp;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "status",
            "baseName": "status",
            "type": "SuccRspListGistFilesRspStatusEnum",
            "format": ""
        },
        {
            "name": "data",
            "baseName": "data",
            "type": "ListGistFilesRsp",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return SuccRspListGistFilesRsp.attributeTypeMap;
    }

    public constructor() {
    }
}

export enum SuccRspListGistFilesRspStatusEnum {
    Ok = 'ok'
}

