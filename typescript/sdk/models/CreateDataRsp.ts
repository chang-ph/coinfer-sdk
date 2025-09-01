import { HttpFile } from '../http/http';

export class CreateDataRsp {
    'objectType': CreateDataRspObjectTypeEnum;
    'name': string;
    'description': string;
    'shortId': string;
    'createdAt': Date;
    'updatedAt': Date;
    'path'?: string;
    'fmt'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "objectType",
            "baseName": "object_type",
            "type": "CreateDataRspObjectTypeEnum",
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
        },
        {
            "name": "shortId",
            "baseName": "short_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "createdAt",
            "baseName": "created_at",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "updatedAt",
            "baseName": "updated_at",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "path",
            "baseName": "path",
            "type": "string",
            "format": ""
        },
        {
            "name": "fmt",
            "baseName": "fmt",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return CreateDataRsp.attributeTypeMap;
    }

    public constructor() {
    }
}

export enum CreateDataRspObjectTypeEnum {
    Data = 'data'
}

