import { UUUU28b510deefc97bb409a5d7911e299314Data } from '../models/UUUU28b510deefc97bb409a5d7911e299314Data';
import { HttpFile } from '../http/http';

export class UUUU28b510deefc97bb409a5d7911e299314 {
    'status': UUUU28b510deefc97bb409a5d7911e299314StatusEnum;
    'data': UUUU28b510deefc97bb409a5d7911e299314Data | null;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "status",
            "baseName": "status",
            "type": "UUUU28b510deefc97bb409a5d7911e299314StatusEnum",
            "format": ""
        },
        {
            "name": "data",
            "baseName": "data",
            "type": "UUUU28b510deefc97bb409a5d7911e299314Data",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return UUUU28b510deefc97bb409a5d7911e299314.attributeTypeMap;
    }

    public constructor() {
    }
}

export enum UUUU28b510deefc97bb409a5d7911e299314StatusEnum {
    Ok = 'ok'
}

