import { HttpFile } from '../http/http';

export class ExperimentPlotRsp {
    'objectType': ExperimentPlotRspObjectTypeEnum;
    'url': string;

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
            "name": "url",
            "baseName": "url",
            "type": "string",
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

