import { HttpFile } from '../http/http';

export class RunCloudFunctionScript {
    'objectType': RunCloudFunctionScriptObjectTypeEnum;
    'params'?: string;
    'engine'?: RunCloudFunctionScriptEngineEnum;
    'lockKey'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "objectType",
            "baseName": "object_type",
            "type": "RunCloudFunctionScriptObjectTypeEnum",
            "format": ""
        },
        {
            "name": "params",
            "baseName": "params",
            "type": "string",
            "format": ""
        },
        {
            "name": "engine",
            "baseName": "engine",
            "type": "RunCloudFunctionScriptEngineEnum",
            "format": ""
        },
        {
            "name": "lockKey",
            "baseName": "lock_key",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return RunCloudFunctionScript.attributeTypeMap;
    }

    public constructor() {
    }
}

export enum RunCloudFunctionScriptObjectTypeEnum {
    ModelRunScript = 'model.run_script'
}
export enum RunCloudFunctionScriptEngineEnum {
    Lambda = 'lambda',
    Fargate = 'fargate'
}

