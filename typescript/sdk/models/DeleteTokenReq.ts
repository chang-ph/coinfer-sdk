import { HttpFile } from '../http/http';

export class DeleteTokenReq {
    'deletedKey'?: string;
    /**
    * list of tokens to be deleted
    */
    'tokens'?: Array<string>;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "deletedKey",
            "baseName": "deleted_key",
            "type": "string",
            "format": ""
        },
        {
            "name": "tokens",
            "baseName": "tokens",
            "type": "Array<string>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return DeleteTokenReq.attributeTypeMap;
    }

    public constructor() {
    }
}
