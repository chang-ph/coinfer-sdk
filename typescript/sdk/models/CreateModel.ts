import { CloudFunctionKind } from '../models/CloudFunctionKind';
import { CloudFunctionLang } from '../models/CloudFunctionLang';
import { ModelContent } from '../models/ModelContent';
import { HttpFile } from '../http/http';

export class CreateModel {
    'objectType': CreateModelObjectTypeEnum;
    /**
    * The type of input code. It can be:  * local: the code is provided directly in `content` field as Unified Model Format. * url: the code is provided by a URL and specified by param `source_url`.
    */
    'type'?: CreateModelTypeEnum;
    'env'?: string | null;
    /**
    * model name
    */
    'name'?: string;
    'content'?: ModelContent | null;
    /**
    * Model tags
    */
    'tags'?: Array<CloudFunctionKind>;
    /**
    * Only allow one instance to run as cloud function at a time.
    */
    'singleInstance'?: boolean;
    'lang'?: CloudFunctionLang;
    'entranceFile'?: string;
    /**
    * Whether to build lambda image for this CloudFunction
    */
    'lambdaImage'?: boolean;
    /**
    * Source URL from where to import the model
    */
    'sourceUrl'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "objectType",
            "baseName": "object_type",
            "type": "CreateModelObjectTypeEnum",
            "format": ""
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "CreateModelTypeEnum",
            "format": ""
        },
        {
            "name": "env",
            "baseName": "env",
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
            "type": "ModelContent",
            "format": ""
        },
        {
            "name": "tags",
            "baseName": "tags",
            "type": "Array<CloudFunctionKind>",
            "format": ""
        },
        {
            "name": "singleInstance",
            "baseName": "single_instance",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "lang",
            "baseName": "lang",
            "type": "CloudFunctionLang",
            "format": ""
        },
        {
            "name": "entranceFile",
            "baseName": "entrance_file",
            "type": "string",
            "format": ""
        },
        {
            "name": "lambdaImage",
            "baseName": "lambda_image",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "sourceUrl",
            "baseName": "source_url",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return CreateModel.attributeTypeMap;
    }

    public constructor() {
    }
}

export enum CreateModelObjectTypeEnum {
    Model = 'model'
}
export enum CreateModelTypeEnum {
    Local = 'local',
    Url = 'url'
}

