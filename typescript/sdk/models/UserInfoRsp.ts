import { HttpFile } from '../http/http';

export class UserInfoRsp {
    'id': number;
    'username': string;
    '_super': boolean;
    'roles': Array<string>;
    'isGithubUser': boolean;

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
            "name": "username",
            "baseName": "username",
            "type": "string",
            "format": ""
        },
        {
            "name": "_super",
            "baseName": "super",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "roles",
            "baseName": "roles",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "isGithubUser",
            "baseName": "is_github_user",
            "type": "boolean",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return UserInfoRsp.attributeTypeMap;
    }

    public constructor() {
    }
}
