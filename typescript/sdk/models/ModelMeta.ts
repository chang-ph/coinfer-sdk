import { HttpFile } from '../http/http';

export class ModelMeta {
    'projectFile'?: string;
    'entranceFile'?: string;
    'entranceFunc'?: string;
    'manifest'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "projectFile",
            "baseName": "project_file",
            "type": "string",
            "format": ""
        },
        {
            "name": "entranceFile",
            "baseName": "entrance_file",
            "type": "string",
            "format": ""
        },
        {
            "name": "entranceFunc",
            "baseName": "entrance_func",
            "type": "string",
            "format": ""
        },
        {
            "name": "manifest",
            "baseName": "manifest",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ModelMeta.attributeTypeMap;
    }

    public constructor() {
    }
}
