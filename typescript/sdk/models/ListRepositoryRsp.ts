import { GistRsp } from '../models/GistRsp';
import { HttpFile } from '../http/http';

export class ListRepositoryRsp {
    'repos': Array<string>;
    'gists': Array<GistRsp>;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "repos",
            "baseName": "repos",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "gists",
            "baseName": "gists",
            "type": "Array<GistRsp>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ListRepositoryRsp.attributeTypeMap;
    }

    public constructor() {
    }
}
