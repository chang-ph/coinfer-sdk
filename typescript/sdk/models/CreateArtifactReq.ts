import { HttpFile } from '../http/http';

export class CreateArtifactReq {
    'objectType': CreateArtifactReqObjectTypeEnum;
    /**
    * Artifact name
    */
    'name': string;
    /**
    * Artifact description
    */
    'description'?: string;
    /**
    * Whether the data in `data_file` is base64 encoded
    */
    'isBase64'?: boolean;
    /**
    * File data in text format
    */
    'dataFile'?: string;
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
            "type": "CreateArtifactReqObjectTypeEnum",
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
            "name": "isBase64",
            "baseName": "is_base64",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "dataFile",
            "baseName": "data_file",
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
        return CreateArtifactReq.attributeTypeMap;
    }

    public constructor() {
    }
}

export enum CreateArtifactReqObjectTypeEnum {
    Artifact = 'artifact'
}

