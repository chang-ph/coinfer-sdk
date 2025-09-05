import { Data1 } from '../models/Data1';
import { HttpFile } from '../http/http';

export class UUUU4be0e69353a8fb4b4ca5b5b1a94b3f66 {
    'status': UUUU4be0e69353a8fb4b4ca5b5b1a94b3f66StatusEnum;
    'data': Data1;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "status",
            "baseName": "status",
            "type": "UUUU4be0e69353a8fb4b4ca5b5b1a94b3f66StatusEnum",
            "format": ""
        },
        {
            "name": "data",
            "baseName": "data",
            "type": "Data1",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return UUUU4be0e69353a8fb4b4ca5b5b1a94b3f66.attributeTypeMap;
    }

    public constructor() {
    }
}

export enum UUUU4be0e69353a8fb4b4ca5b5b1a94b3f66StatusEnum {
    Ok = 'ok'
}

