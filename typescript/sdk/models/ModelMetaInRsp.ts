import { HttpFile } from '../http/http';

export class ModelMetaInRsp {
    'github'?: string | null;
    'commitId'?: string | null;
    'originUrl'?: string | null;
    'fixedVersionUrl'?: string | null;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "github",
            "baseName": "github",
            "type": "string",
            "format": ""
        },
        {
            "name": "commitId",
            "baseName": "commit_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "originUrl",
            "baseName": "origin_url",
            "type": "string",
            "format": ""
        },
        {
            "name": "fixedVersionUrl",
            "baseName": "fixed_version_url",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ModelMetaInRsp.attributeTypeMap;
    }

    public constructor() {
    }
}
