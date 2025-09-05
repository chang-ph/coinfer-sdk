import { ExperimentRsp } from '../models/ExperimentRsp';
import { ModelMetaInRsp } from '../models/ModelMetaInRsp';
import { ShareInfoModel } from '../models/ShareInfoModel';
import { ViewModelsRsp } from '../models/ViewModelsRsp';
import { HttpFile } from '../http/http';

export class Data {
    'objectType': DataObjectTypeEnum;
    'shortId': string;
    'name': string;
    'modelId'?: string;
    'status'?: string;
    'meta': ModelMetaInRsp;
    'nChains'?: number;
    'nVariables'?: number;
    'nSamples'?: number;
    'sampleUpdateTime'?: Date;
    'runOn'?: string;
    'input'?: string;
    'output'?: string;
    'shareInfo'?: Array<ShareInfoModel>;
    'modelName': string;
    'id': number;
    'content'?: any | null;
    'tags': Array<string>;
    'lambdaImageUrl'?: string;
    'lambdaImageName'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "objectType",
            "baseName": "object_type",
            "type": "DataObjectTypeEnum",
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
            "name": "modelId",
            "baseName": "model_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "string",
            "format": ""
        },
        {
            "name": "meta",
            "baseName": "meta",
            "type": "ModelMetaInRsp",
            "format": ""
        },
        {
            "name": "nChains",
            "baseName": "n_chains",
            "type": "number",
            "format": ""
        },
        {
            "name": "nVariables",
            "baseName": "n_variables",
            "type": "number",
            "format": ""
        },
        {
            "name": "nSamples",
            "baseName": "n_samples",
            "type": "number",
            "format": ""
        },
        {
            "name": "sampleUpdateTime",
            "baseName": "sample_update_time",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "runOn",
            "baseName": "run_on",
            "type": "string",
            "format": ""
        },
        {
            "name": "input",
            "baseName": "input",
            "type": "string",
            "format": ""
        },
        {
            "name": "output",
            "baseName": "output",
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
            "name": "modelName",
            "baseName": "model_name",
            "type": "string",
            "format": ""
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "number",
            "format": ""
        },
        {
            "name": "content",
            "baseName": "content",
            "type": "any",
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
        return Data.attributeTypeMap;
    }

    public constructor() {
    }
}

export enum DataObjectTypeEnum {
    Model = 'model'
}

