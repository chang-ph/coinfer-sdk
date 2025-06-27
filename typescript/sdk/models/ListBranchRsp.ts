import { HttpFile } from '../http/http';

export class ListBranchRsp {
    'branches': Array<string>;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "branches",
            "baseName": "branches",
            "type": "Array<string>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ListBranchRsp.attributeTypeMap;
    }

    public constructor() {
    }
}
