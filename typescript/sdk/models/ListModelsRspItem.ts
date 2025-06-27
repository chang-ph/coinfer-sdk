import { ModelMetaInRsp } from '../models/ModelMetaInRsp';
import { ShareInfoModel } from '../models/ShareInfoModel';
import { HttpFile } from '../http/http';

export class ListModelsRspItem {
    'objectType': ListModelsRspItemObjectTypeEnum;
    'id': number;
    'shortId': string;
    'name': string;
    'env': string | null;
    'shareInfo'?: Array<ShareInfoModel> | null;
    'content'?: any | null;
    'meta': ModelMetaInRsp;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "objectType",
            "baseName": "object_type",
            "type": "ListModelsRspItemObjectTypeEnum",
            "format": ""
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "number",
            "format": ""
        },
        {
            "name": "shortId",
            "baseName": "short_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "env",
            "baseName": "env",
            "type": "string",
            "format": ""
        },
        {
            "name": "shareInfo",
            "baseName": "share_info",
            "type": "Array<ShareInfoModel>",
            "format": ""
        },
        {
            "name": "content",
            "baseName": "content",
            "type": "any",
            "format": ""
        },
        {
            "name": "meta",
            "baseName": "meta",
            "type": "ModelMetaInRsp",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ListModelsRspItem.attributeTypeMap;
    }

    public constructor() {
    }
}

export enum ListModelsRspItemObjectTypeEnum {
    Model = 'model'
}

