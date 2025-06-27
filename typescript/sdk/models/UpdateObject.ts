import { Payload1 } from '../models/Payload1';
import { HttpFile } from '../http/http';

export class UpdateObject {
    'payload': Payload1;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "payload",
            "baseName": "payload",
            "type": "Payload1",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return UpdateObject.attributeTypeMap;
    }

    public constructor() {
    }
}
