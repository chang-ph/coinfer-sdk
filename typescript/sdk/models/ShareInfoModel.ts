import { HttpFile } from '../http/http';

export class ShareInfoModel {
    'id': number;
    'password': string;
    'userId': string;
    'shortId': string;
    'toUserId'?: string | null;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "number",
            "format": ""
        },
        {
            "name": "password",
            "baseName": "password",
            "type": "string",
            "format": ""
        },
        {
            "name": "userId",
            "baseName": "user_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "shortId",
            "baseName": "short_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "toUserId",
            "baseName": "to_user_id",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ShareInfoModel.attributeTypeMap;
    }

    public constructor() {
    }
}
