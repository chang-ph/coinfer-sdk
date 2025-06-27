import { Payload } from '../models/Payload';
import { HttpFile } from '../http/http';

export class CreateObjectReq {
    'payload': Payload;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "payload",
            "baseName": "payload",
            "type": "Payload",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return CreateObjectReq.attributeTypeMap;
    }

    public constructor() {
    }
}
