import { HttpFile } from '../http/http';

export class ViewModelShareInfo {
    'id': number;
    '_public': boolean;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "number",
            "format": ""
        },
        {
            "name": "_public",
            "baseName": "public",
            "type": "boolean",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ViewModelShareInfo.attributeTypeMap;
    }

    public constructor() {
    }
}
