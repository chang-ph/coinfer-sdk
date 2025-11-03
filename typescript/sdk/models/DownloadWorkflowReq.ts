import { HttpFile } from '../http/http';

export class DownloadWorkflowReq {
    'objid': string;
    'isCloud'?: boolean;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "objid",
            "baseName": "objid",
            "type": "string",
            "format": ""
        },
        {
            "name": "isCloud",
            "baseName": "is_cloud",
            "type": "boolean",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return DownloadWorkflowReq.attributeTypeMap;
    }

    public constructor() {
    }
}
