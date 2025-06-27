import { ModelContent } from '../models/ModelContent';
import { HttpFile } from '../http/http';

export class UpdateModel {
    'content'?: ModelContent | null;
    'name'?: string | null;
    'version'?: string | null;
    'description'?: string | null;
    'status'?: string | null;
    'objectType': UpdateModelObjectTypeEnum;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "content",
            "baseName": "content",
            "type": "ModelContent",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "version",
            "baseName": "version",
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
            "name": "status",
            "baseName": "status",
            "type": "string",
            "format": ""
        },
        {
            "name": "objectType",
            "baseName": "object_type",
            "type": "UpdateModelObjectTypeEnum",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return UpdateModel.attributeTypeMap;
    }

    public constructor() {
    }
}

export enum UpdateModelObjectTypeEnum {
    Model = 'model'
}

