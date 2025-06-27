import { HttpFile } from '../http/http';

export class GetExperimentShareRsp {
    'requirePassword': boolean;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "requirePassword",
            "baseName": "require_password",
            "type": "boolean",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return GetExperimentShareRsp.attributeTypeMap;
    }

    public constructor() {
    }
}
