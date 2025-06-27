import { HttpFile } from '../http/http';

export class MarkNotificationReadReq {
    'notificationIds'?: Array<number>;
    /**
    * the target status to be set
    */
    'status': MarkNotificationReadReqStatusEnum;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "notificationIds",
            "baseName": "notification_ids",
            "type": "Array<number>",
            "format": ""
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "MarkNotificationReadReqStatusEnum",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return MarkNotificationReadReq.attributeTypeMap;
    }

    public constructor() {
    }
}

export enum MarkNotificationReadReqStatusEnum {
    Read = 'read',
    Unread = 'unread'
}

