import { HttpFile } from '../http/http';

export class SuccRspNoneType {
    'status': SuccRspNoneTypeStatusEnum;
    'data': any | null;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "status",
            "baseName": "status",
            "type": "SuccRspNoneTypeStatusEnum",
            "format": ""
        },
        {
            "name": "data",
            "baseName": "data",
            "type": "any",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return SuccRspNoneType.attributeTypeMap;
    }

    public constructor() {
    }
}

export enum SuccRspNoneTypeStatusEnum {
    Ok = 'ok'
}

