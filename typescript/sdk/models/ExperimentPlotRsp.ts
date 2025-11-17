import { HttpFile } from '../http/http';

export class ExperimentPlotRsp {
    'objectType': ExperimentPlotRspObjectTypeEnum;
    'data': any | null;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "objectType",
            "baseName": "object_type",
            "type": "ExperimentPlotRspObjectTypeEnum",
            "format": ""
        },
        {
            "name": "data",
            "baseName": "data",
            "type": "any",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ExperimentPlotRsp.attributeTypeMap;
    }

    public constructor() {
    }
}

export enum ExperimentPlotRspObjectTypeEnum {
    ExperimentPlot = 'experiment.plot'
}

