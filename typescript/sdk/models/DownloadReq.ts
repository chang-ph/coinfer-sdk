import { HttpFile } from '../http/http';

export class DownloadReq {
    /**
    * is the downloaded package used to run workflow in cloud environment?
    */
    'isCloud'?: boolean;
    /**
    * download format, tar.gz or zip
    */
    'fmt'?: DownloadReqFmtEnum;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "isCloud",
            "baseName": "is_cloud",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "fmt",
            "baseName": "fmt",
            "type": "DownloadReqFmtEnum",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return DownloadReq.attributeTypeMap;
    }

    public constructor() {
    }
}

export enum DownloadReqFmtEnum {
    TarGz = 'tar.gz',
    Zip = 'zip'
}

