import { DemoListItem } from '../models/DemoListItem';
import { HttpFile } from '../http/http';

export class DemoListRsp {
    'models': { [key: string]: Array<DemoListItem>; };
    'MCMC': { [key: string]: Array<DemoListItem>; };

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "models",
            "baseName": "models",
            "type": "{ [key: string]: Array<DemoListItem>; }",
            "format": ""
        },
        {
            "name": "MCMC",
            "baseName": "MCMC",
            "type": "{ [key: string]: Array<DemoListItem>; }",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return DemoListRsp.attributeTypeMap;
    }

    public constructor() {
    }
}
