import { HttpFile } from '../http/http';

export class UpdateDataReq {
    'objectType': UpdateDataReqObjectTypeEnum;
    'name'?: string | null;
    'description'?: string | null;
    /**
    * Whether the data in `data` is base64 encoded
    */
    'base64Encoded'?: boolean;
    'data'?: string | null;
    'dataUri'?: string | null;

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
        },
        {
            "name": "base64Encoded",
            "baseName": "base64_encoded",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "data",
            "baseName": "data",
            "type": "string",
            "format": ""
        },
        {
            "name": "dataUri",
            "baseName": "data_uri",
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

