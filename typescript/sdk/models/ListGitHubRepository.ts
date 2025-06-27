import { HttpFile } from '../http/http';

export class ListGitHubRepository {
    /**
    * page number
    */
    'pageNo'?: number;
    /**
    * page size
    */
    'pageSize'?: number;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "pageNo",
            "baseName": "page_no",
            "type": "number",
            "format": ""
        },
        {
            "name": "pageSize",
            "baseName": "page_size",
            "type": "number",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ListGitHubRepository.attributeTypeMap;
    }

    public constructor() {
    }
}
