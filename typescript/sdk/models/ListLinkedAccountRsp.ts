import { LinkedAccountSchema } from '../models/LinkedAccountSchema';
import { HttpFile } from '../http/http';

export class ListLinkedAccountRsp {
    'linkedAccounts': Array<LinkedAccountSchema>;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "linkedAccounts",
            "baseName": "linked_accounts",
            "type": "Array<LinkedAccountSchema>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ListLinkedAccountRsp.attributeTypeMap;
    }

    public constructor() {
    }
}
