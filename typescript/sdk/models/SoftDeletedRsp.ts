import { HttpFile } from '../http/http';

export class SoftDeletedRsp {
    'deletedKey': string | null;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "deletedKey",
            "baseName": "deleted_key",
            "type": "string",
            "format": "uuid"
        }    ];

    static getAttributeTypeMap() {
        return SoftDeletedRsp.attributeTypeMap;
    }

    public constructor() {
    }
}
