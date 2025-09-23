import { MetaModel } from '../models/MetaModel';
import { ShareInfoModel } from '../models/ShareInfoModel';
import { HttpFile } from '../http/http';

export class ListExperimentRsp {
    'objectType': ListExperimentRspObjectTypeEnum;
    'shortId': string;
    'name': string;
    'modelId'?: string | null;
    'status': string;
    'meta'?: MetaModel | null;
    'nChains': number;
    'nVariables': number;
    'nSamples': number;
    'sampleUpdateTime': Date;
    'runOn': string;
    'shareInfo'?: Array<ShareInfoModel> | null;
    'modelName': string;
    'workflowId'?: string;
    'workflowName'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "objectType",
            "baseName": "object_type",
            "type": "ListExperimentRspObjectTypeEnum",
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
            "type": "MetaModel",
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
            "name": "workflowId",
            "baseName": "workflow_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "workflowName",
            "baseName": "workflow_name",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ListExperimentRsp.attributeTypeMap;
    }

    public constructor() {
    }
}

export enum ListExperimentRspObjectTypeEnum {
    Experiment = 'experiment'
}

