import { HttpFile } from '../http/http';

export class ErrRsp {
    'status': ErrRspStatusEnum;
    'code': string;
    'message': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "status",
            "baseName": "status",
            "type": "ErrRspStatusEnum",
            "format": ""
        },
        {
            "name": "code",
            "baseName": "code",
            "type": "string",
            "format": ""
        },
        {
            "name": "message",
            "baseName": "message",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ErrRsp.attributeTypeMap;
    }

    public constructor() {
    }
}

export enum ErrRspStatusEnum {
    Error = 'error'
}

