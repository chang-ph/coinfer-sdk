import { Folder } from '../models/Folder';
import { ModelFile } from '../models/ModelFile';
import { HttpFile } from '../http/http';

export class FolderChildrenInner {
    'name': string;
    'type'?: string;
    'children': Array<FolderChildrenInner>;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "string",
            "format": ""
        },
        {
            "name": "children",
            "baseName": "children",
            "type": "Array<FolderChildrenInner>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return FolderChildrenInner.attributeTypeMap;
    }

    public constructor() {
    }
}
