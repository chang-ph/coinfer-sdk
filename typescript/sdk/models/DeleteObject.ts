import { HttpFile } from '../http/http';

export class DeleteObject {
    'objids': Array<string>;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "objids",
            "baseName": "objids",
            "type": "Array<string>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return DeleteObject.attributeTypeMap;
    }

    public constructor() {
    }
}
