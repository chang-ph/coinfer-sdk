import { DemoListRsp } from '../models/DemoListRsp';
import { HttpFile } from '../http/http';

export class SuccRspDemoListRsp {
    'status': SuccRspDemoListRspStatusEnum;
    'data': DemoListRsp;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "status",
            "baseName": "status",
            "type": "SuccRspDemoListRspStatusEnum",
            "format": ""
        },
        {
            "name": "data",
            "baseName": "data",
            "type": "DemoListRsp",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return SuccRspDemoListRsp.attributeTypeMap;
    }

    public constructor() {
    }
}

export enum SuccRspDemoListRspStatusEnum {
    Ok = 'ok'
}

