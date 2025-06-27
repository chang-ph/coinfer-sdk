import { HttpFile } from '../http/http';

export class ModelTreeNode {
    'name': string;
    'type': ModelTreeNodeTypeEnum;
    'content'?: string;
    'children'?: Array<ModelTreeNode>;

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
            "type": "ModelTreeNodeTypeEnum",
            "format": ""
        },
        {
            "name": "content",
            "baseName": "content",
            "type": "string",
            "format": ""
        },
        {
            "name": "children",
            "baseName": "children",
            "type": "Array<ModelTreeNode>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ModelTreeNode.attributeTypeMap;
    }

    public constructor() {
    }
}

export enum ModelTreeNodeTypeEnum {
    File = 'file',
    Folder = 'folder'
}

