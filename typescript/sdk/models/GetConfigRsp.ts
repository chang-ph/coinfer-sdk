import { HttpFile } from '../http/http';

export class GetConfigRsp {
    'runModelUrl': string;
    'maxUploadSampleSize': number;
    'maxUploadSampleFile': number;
    'uploadFileTypes': string;

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
        }    ];

    static getAttributeTypeMap() {
        return GetConfigRsp.attributeTypeMap;
    }

    public constructor() {
    }
}
