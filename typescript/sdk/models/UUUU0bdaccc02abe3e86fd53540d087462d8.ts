import { Data1 } from '../models/Data1';
import { HttpFile } from '../http/http';

export class UUUU0bdaccc02abe3e86fd53540d087462d8 {
    'status': UUUU0bdaccc02abe3e86fd53540d087462d8StatusEnum;
    'data': Data1;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "status",
            "baseName": "status",
            "type": "UUUU0bdaccc02abe3e86fd53540d087462d8StatusEnum",
            "format": ""
        },
        {
            "name": "data",
            "baseName": "data",
            "type": "Data1",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return UUUU0bdaccc02abe3e86fd53540d087462d8.attributeTypeMap;
    }

    public constructor() {
    }
}

export enum UUUU0bdaccc02abe3e86fd53540d087462d8StatusEnum {
    Ok = 'ok'
}

