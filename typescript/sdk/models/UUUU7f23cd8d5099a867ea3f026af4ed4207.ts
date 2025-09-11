import { Data1 } from '../models/Data1';
import { HttpFile } from '../http/http';

export class UUUU7f23cd8d5099a867ea3f026af4ed4207 {
    'status': UUUU7f23cd8d5099a867ea3f026af4ed4207StatusEnum;
    'data': Data1;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "status",
            "baseName": "status",
            "type": "UUUU7f23cd8d5099a867ea3f026af4ed4207StatusEnum",
            "format": ""
        },
        {
            "name": "data",
            "baseName": "data",
            "type": "Data1",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return UUUU7f23cd8d5099a867ea3f026af4ed4207.attributeTypeMap;
    }

    public constructor() {
    }
}

export enum UUUU7f23cd8d5099a867ea3f026af4ed4207StatusEnum {
    Ok = 'ok'
}

