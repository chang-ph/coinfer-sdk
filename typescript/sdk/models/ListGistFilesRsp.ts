import { HttpFile } from '../http/http';

export class ListGistFilesRsp {
    'files': Array<string>;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "files",
            "baseName": "files",
            "type": "Array<string>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ListGistFilesRsp.attributeTypeMap;
    }

    public constructor() {
    }
}
