import { HttpFile } from '../http/http';

export class GetConfigRsp {
    'runModelUrl': string;
    'maxUploadSampleSize': number;
    'maxUploadSampleFile': number;
    'uploadFileTypes': string;
    'googleClientId': string;
    'googleAppId': string;
    'arvizPlottingEndpoint': string | null;
    'defaultModel': string;
    'defaultData': string;
    'defaultAnalyzer': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "runModelUrl",
            "baseName": "run_model_url",
            "type": "string",
            "format": ""
        },
        {
            "name": "maxUploadSampleSize",
            "baseName": "max_upload_sample_size",
            "type": "number",
            "format": ""
        },
        {
            "name": "maxUploadSampleFile",
            "baseName": "max_upload_sample_file",
            "type": "number",
            "format": ""
        },
        {
            "name": "uploadFileTypes",
            "baseName": "upload_file_types",
            "type": "string",
            "format": ""
        },
        {
            "name": "googleClientId",
            "baseName": "google_client_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "googleAppId",
            "baseName": "google_app_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "arvizPlottingEndpoint",
            "baseName": "arviz_plotting_endpoint",
            "type": "string",
            "format": ""
        },
        {
            "name": "defaultModel",
            "baseName": "default_model",
            "type": "string",
            "format": ""
        },
        {
            "name": "defaultData",
            "baseName": "default_data",
            "type": "string",
            "format": ""
        },
        {
            "name": "defaultAnalyzer",
            "baseName": "default_analyzer",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return GetConfigRsp.attributeTypeMap;
    }

    public constructor() {
    }
}
