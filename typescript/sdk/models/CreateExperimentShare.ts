import { HttpFile } from '../http/http';

export class CreateExperimentShare {
    'objectType': CreateExperimentShareObjectTypeEnum;
    'objid': string;
    'password'?: string;
    'targetUser'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "objectType",
            "baseName": "object_type",
            "type": "CreateExperimentShareObjectTypeEnum",
            "format": ""
        },
        {
            "name": "objid",
            "baseName": "objid",
            "type": "string",
            "format": ""
        },
        {
            "name": "password",
            "baseName": "password",
            "type": "string",
            "format": ""
        },
        {
            "name": "targetUser",
            "baseName": "target_user",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return CreateExperimentShare.attributeTypeMap;
    }

    public constructor() {
    }
}

export enum CreateExperimentShareObjectTypeEnum {
    Share = 'share'
}

