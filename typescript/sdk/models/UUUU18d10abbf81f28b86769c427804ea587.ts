import { UUUUc9932bea1f007b34d507c4c4c680b4a7 } from '../models/UUUUc9932bea1f007b34d507c4c4c680b4a7';
import { HttpFile } from '../http/http';

export class UUUU18d10abbf81f28b86769c427804ea587 {
    'status': UUUU18d10abbf81f28b86769c427804ea587StatusEnum;
    'data': UUUUc9932bea1f007b34d507c4c4c680b4a7;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "status",
            "baseName": "status",
            "type": "UUUU18d10abbf81f28b86769c427804ea587StatusEnum",
            "format": ""
        },
        {
            "name": "data",
            "baseName": "data",
            "type": "UUUUc9932bea1f007b34d507c4c4c680b4a7",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return UUUU18d10abbf81f28b86769c427804ea587.attributeTypeMap;
    }

    public constructor() {
    }
}

export enum UUUU18d10abbf81f28b86769c427804ea587StatusEnum {
    Ok = 'ok'
}

