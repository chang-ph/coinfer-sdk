import { HttpFile } from '../http/http';

export class GetNotificationReq {
    /**
    * page number
    */
    'pageNo'?: number;
    /**
    * page size
    */
    'pageSize'?: number;
    /**
    * Filter the notification message by read status
    */
    'status': GetNotificationReqStatusEnum;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "pageNo",
            "baseName": "page_no",
            "type": "number",
            "format": ""
        },
        {
            "name": "pageSize",
            "baseName": "page_size",
            "type": "number",
            "format": ""
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "GetNotificationReqStatusEnum",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return GetNotificationReq.attributeTypeMap;
    }

    public constructor() {
    }
}

export enum GetNotificationReqStatusEnum {
    All = 'all',
    Read = 'read',
    Unread = 'unread'
}

