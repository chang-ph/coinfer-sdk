import { HttpFile } from '../http/http';

export class Code2TokenRsp {
    'accessToken': string | null;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "accessToken",
            "baseName": "access_token",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return Code2TokenRsp.attributeTypeMap;
    }

    public constructor() {
    }
}
