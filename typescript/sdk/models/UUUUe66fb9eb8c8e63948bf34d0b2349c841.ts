import { UUUUe66fb9eb8c8e63948bf34d0b2349c841Data } from '../models/UUUUe66fb9eb8c8e63948bf34d0b2349c841Data';
import { HttpFile } from '../http/http';

export class UUUUe66fb9eb8c8e63948bf34d0b2349c841 {
    'status': UUUUe66fb9eb8c8e63948bf34d0b2349c841StatusEnum;
    'data': UUUUe66fb9eb8c8e63948bf34d0b2349c841Data | null;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "status",
            "baseName": "status",
            "type": "UUUUe66fb9eb8c8e63948bf34d0b2349c841StatusEnum",
            "format": ""
        },
        {
            "name": "data",
            "baseName": "data",
            "type": "UUUUe66fb9eb8c8e63948bf34d0b2349c841Data",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return UUUUe66fb9eb8c8e63948bf34d0b2349c841.attributeTypeMap;
    }

    public constructor() {
    }
}

export enum UUUUe66fb9eb8c8e63948bf34d0b2349c841StatusEnum {
    Ok = 'ok'
}

