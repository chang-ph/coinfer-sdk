import { HttpFile } from '../http/http';

export class ViewExperimentShareRsp {
    'objectType': ViewExperimentShareRspObjectTypeEnum;
    'requirePassword': boolean;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "objectType",
            "baseName": "object_type",
            "type": "ViewExperimentShareRspObjectTypeEnum",
            "format": ""
        },
        {
            "name": "requirePassword",
            "baseName": "require_password",
            "type": "boolean",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ViewExperimentShareRsp.attributeTypeMap;
    }

    public constructor() {
    }
}

export enum ViewExperimentShareRspObjectTypeEnum {
    Share = 'share'
}

