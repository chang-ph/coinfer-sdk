import { HttpFile } from '../http/http';

export class DownloadReq {
    /**
    * is the downloaded pakcage used to run workflow in cloud envirioment?
    */
    'isCloud'?: boolean;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "isCloud",
            "baseName": "is_cloud",
            "type": "boolean",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return DownloadReq.attributeTypeMap;
    }

    public constructor() {
    }
}
