import { HttpFile } from '../http/http';

export class CreateEventReq {
    'objectType': CreateEventReqObjectTypeEnum;
    'name': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "objectType",
            "baseName": "object_type",
            "type": "CreateEventReqObjectTypeEnum",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return CreateEventReq.attributeTypeMap;
    }

    public constructor() {
    }
}

export enum CreateEventReqObjectTypeEnum {
    Event = 'event'
}

