import { HttpFile } from '../http/http';

export class PlotReq {
    'coinferAuthToken'?: string;
    'coinferSharePassword'?: string;
    'experimentId': string;
    'plotFunc': string;
    'plotChain': string;
    'plotVar': string;
    'nIteration'?: number;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "coinferAuthToken",
            "baseName": "coinfer_auth_token",
            "type": "string",
            "format": ""
        },
        {
            "name": "coinferSharePassword",
            "baseName": "coinfer_share_password",
            "type": "string",
            "format": ""
        },
        {
            "name": "experimentId",
            "baseName": "experiment_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "plotFunc",
            "baseName": "plot_func",
            "type": "string",
            "format": ""
        },
        {
            "name": "plotChain",
            "baseName": "plot_chain",
            "type": "string",
            "format": ""
        },
        {
            "name": "plotVar",
            "baseName": "plot_var",
            "type": "string",
            "format": ""
        },
        {
            "name": "nIteration",
            "baseName": "n_iteration",
            "type": "number",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return PlotReq.attributeTypeMap;
    }

    public constructor() {
    }
}
