import { ModelMeta } from '../models/ModelMeta';
import { ModelTreeNode } from '../models/ModelTreeNode';
import { HttpFile } from '../http/http';

export class ModelContent {
    'meta'?: ModelMeta;
    'tree'?: Array<ModelTreeNode>;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "meta",
            "baseName": "meta",
            "type": "ModelMeta",
            "format": ""
        },
        {
            "name": "tree",
            "baseName": "tree",
            "type": "Array<ModelTreeNode>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ModelContent.attributeTypeMap;
    }

    public constructor() {
    }
}
