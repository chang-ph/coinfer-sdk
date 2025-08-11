import { ModelMetaInRsp } from '../models/ModelMetaInRsp';
import { HttpFile } from '../http/http';

export class ViewModelsRsp {
    'objectType': ViewModelsRspObjectTypeEnum;
    'id': number;
    'shortId': string;
    'name': string;
    'content'?: any | null;
    'meta': ModelMetaInRsp;
    'tags': Array<string>;
    'lambdaImageUrl'?: string | null;
    'lambdaImageName'?: string | null;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "objectType",
            "baseName": "object_type",
            "type": "ViewModelsRspObjectTypeEnum",
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
        },
        {
            "name": "tags",
            "baseName": "tags",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "lambdaImageUrl",
            "baseName": "lambda_image_url",
            "type": "string",
            "format": ""
        },
        {
            "name": "lambdaImageName",
            "baseName": "lambda_image_name",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ViewModelsRsp.attributeTypeMap;
    }

    public constructor() {
    }
}

export enum ViewModelsRspObjectTypeEnum {
    Model = 'model'
}

