import { HttpFile } from '../http/http';

export class UserLoginRsp {
    'tokens': Array<string>;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "tokens",
            "baseName": "tokens",
            "type": "Array<string>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return UserLoginRsp.attributeTypeMap;
    }

    public constructor() {
    }
}
