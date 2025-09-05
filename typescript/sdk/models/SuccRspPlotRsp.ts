import { PlotRsp } from '../models/PlotRsp';
import { HttpFile } from '../http/http';

export class SuccRspPlotRsp {
    'status': SuccRspPlotRspStatusEnum;
    'data': PlotRsp;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "status",
            "baseName": "status",
            "type": "SuccRspPlotRspStatusEnum",
            "format": ""
        },
        {
            "name": "data",
            "baseName": "data",
            "type": "PlotRsp",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return SuccRspPlotRsp.attributeTypeMap;
    }

    public constructor() {
    }
}

export enum SuccRspPlotRspStatusEnum {
    Ok = 'ok'
}

