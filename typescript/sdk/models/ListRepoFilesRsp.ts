import { Folder } from '../models/Folder';
import { HttpFile } from '../http/http';

export class ListRepoFilesRsp {
    'tree': Array<Folder>;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "tree",
            "baseName": "tree",
            "type": "Array<Folder>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ListRepoFilesRsp.attributeTypeMap;
    }

    public constructor() {
    }
}
