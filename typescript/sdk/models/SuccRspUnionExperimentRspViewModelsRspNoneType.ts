import { Data } from '../models/Data';
import { HttpFile } from '../http/http';

export class SuccRspUnionExperimentRspViewModelsRspNoneType {
    'status': SuccRspUnionExperimentRspViewModelsRspNoneTypeStatusEnum;
    'data': Data | null;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "status",
            "baseName": "status",
            "type": "SuccRspUnionExperimentRspViewModelsRspNoneTypeStatusEnum",
            "format": ""
        },
        {
            "name": "data",
            "baseName": "data",
            "type": "Data",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return SuccRspUnionExperimentRspViewModelsRspNoneType.attributeTypeMap;
    }

    public constructor() {
    }
}

export enum SuccRspUnionExperimentRspViewModelsRspNoneTypeStatusEnum {
    Ok = 'ok'
}

