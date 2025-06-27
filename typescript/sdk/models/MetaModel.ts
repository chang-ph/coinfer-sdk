import { HttpFile } from '../http/http';

export class MetaModel {
    'action'?: string;
    'iterationCount'?: number | null;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "action",
            "baseName": "action",
            "type": "string",
            "format": ""
        },
        {
            "name": "iterationCount",
            "baseName": "iteration_count",
            "type": "number",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return MetaModel.attributeTypeMap;
    }

    public constructor() {
    }
}
