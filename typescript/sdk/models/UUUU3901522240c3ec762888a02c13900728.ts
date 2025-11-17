import { Data1 } from '../models/Data1';
import { HttpFile } from '../http/http';

export class UUUU3901522240c3ec762888a02c13900728 {
    'status': UUUU3901522240c3ec762888a02c13900728StatusEnum;
    'data': Data1;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "status",
            "baseName": "status",
            "type": "UUUU3901522240c3ec762888a02c13900728StatusEnum",
            "format": ""
        },
        {
            "name": "data",
            "baseName": "data",
            "type": "Data1",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return UUUU3901522240c3ec762888a02c13900728.attributeTypeMap;
    }

    public constructor() {
    }
}

export enum UUUU3901522240c3ec762888a02c13900728StatusEnum {
    Ok = 'ok'
}

