import { HttpFile } from '../http/http';

export class DataTyping {
    'chainName': string;
    'iteration': number;
    'data'?: Array<{ [key: string]: any; }>;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "chainName",
            "baseName": "chain_name",
            "type": "string",
            "format": ""
        },
        {
            "name": "iteration",
            "baseName": "iteration",
            "type": "number",
            "format": ""
        },
        {
            "name": "data",
            "baseName": "data",
            "type": "Array<{ [key: string]: any; }>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return DataTyping.attributeTypeMap;
    }

    public constructor() {
    }
}
