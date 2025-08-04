import { DemoListItem } from '../models/DemoListItem';
import { HttpFile } from '../http/http';

export class DemoListRsp {
    'rethinkingModels': Array<DemoListItem>;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "rethinkingModels",
            "baseName": "rethinking_models",
            "type": "Array<DemoListItem>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return DemoListRsp.attributeTypeMap;
    }

    public constructor() {
    }
}
