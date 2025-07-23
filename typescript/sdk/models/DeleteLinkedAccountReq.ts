import { HttpFile } from '../http/http';

export class DeleteLinkedAccountReq {
    'deletedKey'?: string;
    /**
    * account list. List item in format `<account_type>:<account>`
    */
    'accounts'?: Array<string>;

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
            "name": "accounts",
            "baseName": "accounts",
            "type": "Array<string>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return DeleteLinkedAccountReq.attributeTypeMap;
    }

    public constructor() {
    }
}
