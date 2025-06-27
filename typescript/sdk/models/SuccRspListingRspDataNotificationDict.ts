import { ListingRspDataNotificationDict } from '../models/ListingRspDataNotificationDict';
import { HttpFile } from '../http/http';

export class SuccRspListingRspDataNotificationDict {
    'status': SuccRspListingRspDataNotificationDictStatusEnum;
    'data': ListingRspDataNotificationDict;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "status",
            "baseName": "status",
            "type": "SuccRspListingRspDataNotificationDictStatusEnum",
            "format": ""
        },
        {
            "name": "data",
            "baseName": "data",
            "type": "ListingRspDataNotificationDict",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return SuccRspListingRspDataNotificationDict.attributeTypeMap;
    }

    public constructor() {
    }
}

export enum SuccRspListingRspDataNotificationDictStatusEnum {
    Ok = 'ok'
}

