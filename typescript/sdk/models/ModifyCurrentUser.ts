import { HttpFile } from '../http/http';

export class ModifyCurrentUser {
    'newPassword'?: string | null;
    'password'?: string | null;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "newPassword",
            "baseName": "new_password",
            "type": "string",
            "format": ""
        },
        {
            "name": "password",
            "baseName": "password",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ModifyCurrentUser.attributeTypeMap;
    }

    public constructor() {
    }
}
