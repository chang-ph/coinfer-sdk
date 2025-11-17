import { HttpFile } from '../http/http';

export class ModelRunScriptRsp {
    'objectType': ModelRunScriptRspObjectTypeEnum;
    'data': any | null;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "objectType",
            "baseName": "object_type",
            "type": "ModelRunScriptRspObjectTypeEnum",
            "format": ""
        },
        {
            "name": "data",
            "baseName": "data",
            "type": "any",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ModelRunScriptRsp.attributeTypeMap;
    }

    public constructor() {
    }
}

export enum ModelRunScriptRspObjectTypeEnum {
    ModelRunResponse = 'model.run_response'
}

