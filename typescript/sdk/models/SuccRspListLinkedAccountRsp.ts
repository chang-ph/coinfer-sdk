import { ListLinkedAccountRsp } from '../models/ListLinkedAccountRsp';
import { HttpFile } from '../http/http';

export class SuccRspListLinkedAccountRsp {
    'status': SuccRspListLinkedAccountRspStatusEnum;
    'data': ListLinkedAccountRsp;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "status",
            "baseName": "status",
            "type": "SuccRspListLinkedAccountRspStatusEnum",
            "format": ""
        },
        {
            "name": "data",
            "baseName": "data",
            "type": "ListLinkedAccountRsp",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return SuccRspListLinkedAccountRsp.attributeTypeMap;
    }

    public constructor() {
    }
}

export enum SuccRspListLinkedAccountRspStatusEnum {
    Ok = 'ok'
}

