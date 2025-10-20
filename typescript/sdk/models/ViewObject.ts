import { HttpFile } from '../http/http';

export class ViewObject {
    'objectType'?: ViewObjectObjectTypeEnum;
    /**
    *                  Only appicable to object_type == model or object_type == experiment                 If this field is empty, returns the latest version of the objects.                 otherwise returns the specified share snapshot
    */
    'shareId'?: string;
    'sampledata'?: boolean;
    'fmt'?: ViewObjectFmtEnum;
    'nIteration'?: number | null;
    'cloudwatchLog'?: boolean;
    'batchId'?: string;
    'runId'?: string;
    /**
    * view analyzer result
    */
    'viewAnalyzer'?: boolean;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "objectType",
            "baseName": "object_type",
            "type": "ViewObjectObjectTypeEnum",
            "format": ""
        },
        {
            "name": "shareId",
            "baseName": "share_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "sampledata",
            "baseName": "sampledata",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "fmt",
            "baseName": "fmt",
            "type": "ViewObjectFmtEnum",
            "format": ""
        },
        {
            "name": "nIteration",
            "baseName": "n_iteration",
            "type": "number",
            "format": ""
        },
        {
            "name": "cloudwatchLog",
            "baseName": "cloudwatch_log",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "batchId",
            "baseName": "batch_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "runId",
            "baseName": "run_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "viewAnalyzer",
            "baseName": "view-analyzer",
            "type": "boolean",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ViewObject.attributeTypeMap;
    }

    public constructor() {
    }
}

export enum ViewObjectObjectTypeEnum {
    Model = 'model',
    Experiment = 'experiment',
    Share = 'share',
    Event = 'event',
    Callback = 'callback',
    Relation = 'relation',
    Data = 'data',
    Workflow = 'workflow',
    Empty = ''
}
export enum ViewObjectFmtEnum {
    Csv = 'csv',
    Grist = 'grist',
    Arviz = 'arviz'
}

