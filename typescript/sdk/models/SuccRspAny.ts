import { HttpFile } from '../http/http';

export class SuccRspAny {
    'status': SuccRspAnyStatusEnum;
    'data': any | null;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "status",
            "baseName": "status",
            "type": "SuccRspAnyStatusEnum",
            "format": ""
        },
        {
            "name": "data",
            "baseName": "data",
            "type": "any",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return SuccRspAny.attributeTypeMap;
    }

    public constructor() {
    }
}

export enum SuccRspAnyStatusEnum {
    Ok = 'ok'
}

