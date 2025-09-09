import { HttpFile } from '../http/http';

export class UpdateDataReq {
    'objectType': UpdateDataReqObjectTypeEnum;
    'name'?: string | null;
    'description'?: string | null;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "objectType",
            "baseName": "object_type",
            "type": "UpdateDataReqObjectTypeEnum",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return UpdateDataReq.attributeTypeMap;
    }

    public constructor() {
    }
}

export enum UpdateDataReqObjectTypeEnum {
    Data = 'data'
}

