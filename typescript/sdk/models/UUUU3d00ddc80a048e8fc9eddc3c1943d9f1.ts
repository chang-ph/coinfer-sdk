import { UUUU256545f429a0ce36bfec4159b7df9cf4 } from '../models/UUUU256545f429a0ce36bfec4159b7df9cf4';
import { HttpFile } from '../http/http';

export class UUUU3d00ddc80a048e8fc9eddc3c1943d9f1 {
    'status': UUUU3d00ddc80a048e8fc9eddc3c1943d9f1StatusEnum;
    'data': UUUU256545f429a0ce36bfec4159b7df9cf4;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "status",
            "baseName": "status",
            "type": "UUUU3d00ddc80a048e8fc9eddc3c1943d9f1StatusEnum",
            "format": ""
        },
        {
            "name": "data",
            "baseName": "data",
            "type": "UUUU256545f429a0ce36bfec4159b7df9cf4",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return UUUU3d00ddc80a048e8fc9eddc3c1943d9f1.attributeTypeMap;
    }

    public constructor() {
    }
}

export enum UUUU3d00ddc80a048e8fc9eddc3c1943d9f1StatusEnum {
    Ok = 'ok'
}

