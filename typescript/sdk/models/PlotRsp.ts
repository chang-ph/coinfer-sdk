import { HttpFile } from '../http/http';

export class PlotRsp {
    'plotData': any | null;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "plotData",
            "baseName": "plot_data",
            "type": "any",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return PlotRsp.attributeTypeMap;
    }

    public constructor() {
    }
}
