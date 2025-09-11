import { CreateCallbackRsp } from '../models/CreateCallbackRsp';
import { CreateDataRsp } from '../models/CreateDataRsp';
import { CreateEventRsp } from '../models/CreateEventRsp';
import { CreateRelationRsp } from '../models/CreateRelationRsp';
import { CreateWorkflowRsp } from '../models/CreateWorkflowRsp';
import { ListExperimentRsp } from '../models/ListExperimentRsp';
import { ListModelsRspItem } from '../models/ListModelsRspItem';
import { ModelMetaInRsp } from '../models/ModelMetaInRsp';
import { ShareInfoModel } from '../models/ShareInfoModel';
import { HttpFile } from '../http/http';

export class UUUU256545f429a0ce36bfec4159b7df9cf4ObjectsInner {
    'shortId': string;
    'name': string;
    'modelId': string;
    'status': string;
    'meta': ModelMetaInRsp;
    'nChains': number;
    'nVariables': number;
    'nSamples': number;
    'sampleUpdateTime': Date;
    'runOn': string;
    'shareInfo'?: Array<ShareInfoModel>;
    'modelName': string;
    'workflowId'?: string;
    'workflowName'?: string;
    'objectType': UUUU256545f429a0ce36bfec4159b7df9cf4ObjectsInnerObjectTypeEnum;
    'id': number;
    'content'?: any | null;
    'tags': Array<string>;
    'lambdaImageUrl'?: string;
    'lambdaImageName'?: string;
    'createdAt': Date;
    'lang': string;
    'code': string;
    'token': string;
    'userId': number;
    'object1Id': string;
    'object2Id': string;
    'description': string;
    'updatedAt': Date;
    'path'?: string;
    'fmt'?: string;
    'dataId'?: string;
    'dataName'?: string;
    'experimentId'?: string;
    'experimentName'?: string;
    'analyzerId'?: string;
    'analyzerName'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
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
        },
        {
            "name": "objectType",
            "baseName": "object_type",
            "type": "UUUU256545f429a0ce36bfec4159b7df9cf4ObjectsInnerObjectTypeEnum",
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
        },
        {
            "name": "createdAt",
            "baseName": "created_at",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "lang",
            "baseName": "lang",
            "type": "string",
            "format": ""
        },
        {
            "name": "code",
            "baseName": "code",
            "type": "string",
            "format": ""
        },
        {
            "name": "token",
            "baseName": "token",
            "type": "string",
            "format": ""
        },
        {
            "name": "userId",
            "baseName": "user_id",
            "type": "number",
            "format": ""
        },
        {
            "name": "object1Id",
            "baseName": "object1_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "object2Id",
            "baseName": "object2_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string",
            "format": ""
        },
        {
            "name": "updatedAt",
            "baseName": "updated_at",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "path",
            "baseName": "path",
            "type": "string",
            "format": ""
        },
        {
            "name": "fmt",
            "baseName": "fmt",
            "type": "string",
            "format": ""
        },
        {
            "name": "dataId",
            "baseName": "data_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "dataName",
            "baseName": "data_name",
            "type": "string",
            "format": ""
        },
        {
            "name": "experimentId",
            "baseName": "experiment_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "experimentName",
            "baseName": "experiment_name",
            "type": "string",
            "format": ""
        },
        {
            "name": "analyzerId",
            "baseName": "analyzer_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "analyzerName",
            "baseName": "analyzer_name",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return UUUU256545f429a0ce36bfec4159b7df9cf4ObjectsInner.attributeTypeMap;
    }

    public constructor() {
    }
}

export enum UUUU256545f429a0ce36bfec4159b7df9cf4ObjectsInnerObjectTypeEnum {
    Workflow = 'workflow'
}

