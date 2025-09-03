import { HttpFile } from '../http/http';

export class DataTyping {
    'iteration': { [key: string]: Array<any>; };
    'vars': { [key: string]: { [key: string]: Array<any>; }; };

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "iteration",
            "baseName": "iteration",
            "type": "{ [key: string]: Array<any>; }",
            "format": ""
        },
        {
            "name": "vars",
            "baseName": "vars",
            "type": "{ [key: string]: { [key: string]: Array<any>; }; }",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return DataTyping.attributeTypeMap;
    }

    public constructor() {
    }
}
