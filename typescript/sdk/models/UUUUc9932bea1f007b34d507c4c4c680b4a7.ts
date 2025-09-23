import { UUUUc9932bea1f007b34d507c4c4c680b4a7ObjectsInner } from '../models/UUUUc9932bea1f007b34d507c4c4c680b4a7ObjectsInner';
import { HttpFile } from '../http/http';

export class UUUUc9932bea1f007b34d507c4c4c680b4a7 {
    'total': number;
    'page': number;
    'countPerPage': number;
    'objects': Array<UUUUc9932bea1f007b34d507c4c4c680b4a7ObjectsInner>;

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
            "type": "Array<UUUUc9932bea1f007b34d507c4c4c680b4a7ObjectsInner>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return UUUUc9932bea1f007b34d507c4c4c680b4a7.attributeTypeMap;
    }

    public constructor() {
    }
}
