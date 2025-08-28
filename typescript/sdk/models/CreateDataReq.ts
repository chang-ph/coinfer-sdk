import { HttpFile } from '../http/http';

export class CreateDataReq {
    'objectType': CreateDataReqObjectTypeEnum;
    /**
    * Data name
    */
    'name': string;
    /**
    * Data description
    */
    'description'?: string;
    /**
    * Whether the data in `data_file` is base64 encoded
    */
    'base64Encoded'?: boolean;
    /**
    * File data in text format
    */
    'data'?: string;
    /**
    * File data URI
    */
    'dataUri'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "objectType",
            "baseName": "object_type",
            "type": "CreateDataReqObjectTypeEnum",
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
        return CreateDataReq.attributeTypeMap;
    }

    public constructor() {
    }
}

export enum CreateDataReqObjectTypeEnum {
    Data = 'data'
}

