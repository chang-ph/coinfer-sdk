import { UUUU256545f429a0ce36bfec4159b7df9cf4ObjectsInner } from '../models/UUUU256545f429a0ce36bfec4159b7df9cf4ObjectsInner';
import { HttpFile } from '../http/http';

export class UUUU256545f429a0ce36bfec4159b7df9cf4 {
    'total': number;
    'page': number;
    'countPerPage': number;
    'objects': Array<UUUU256545f429a0ce36bfec4159b7df9cf4ObjectsInner>;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "total",
            "baseName": "total",
            "type": "number",
            "format": ""
        },
        {
            "name": "page",
            "baseName": "page",
            "type": "number",
            "format": ""
        },
        {
            "name": "countPerPage",
            "baseName": "count_per_page",
            "type": "number",
            "format": ""
        },
        {
            "name": "objects",
            "baseName": "objects",
            "type": "Array<UUUU256545f429a0ce36bfec4159b7df9cf4ObjectsInner>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return UUUU256545f429a0ce36bfec4159b7df9cf4.attributeTypeMap;
    }

    public constructor() {
    }
}
