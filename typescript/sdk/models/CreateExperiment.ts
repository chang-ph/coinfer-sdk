import { HttpFile } from '../http/http';

export class CreateExperiment {
    'objectType': CreateExperimentObjectTypeEnum;
    'modelId'?: string;
    'workflowId'?: string;
    'inputId'?: string;
    'xpMeta'?: any | null;
    'meta'?: any | null;
    'name'?: string;
    'runOn'?: CreateExperimentRunOnEnum;
    'dataFileType'?: CreateExperimentDataFileTypeEnum | null;
    /**
    * File data in text format
    */
    'dataFiles'?: Array<string>;
    /**
    * File data URI
    */
    'dataUris'?: Array<string>;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "objectType",
            "baseName": "object_type",
            "type": "CreateExperimentObjectTypeEnum",
            "format": ""
        },
        {
            "name": "modelId",
            "baseName": "model_id",
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
            "name": "inputId",
            "baseName": "input_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "xpMeta",
            "baseName": "xp_meta",
            "type": "any",
            "format": ""
        },
        {
            "name": "meta",
            "baseName": "meta",
            "type": "any",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "runOn",
            "baseName": "run_on",
            "type": "CreateExperimentRunOnEnum",
            "format": ""
        },
        {
            "name": "dataFileType",
            "baseName": "data_file_type",
            "type": "CreateExperimentDataFileTypeEnum",
            "format": ""
        },
        {
            "name": "dataFiles",
            "baseName": "data_files",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "dataUris",
            "baseName": "data_uris",
            "type": "Array<string>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return CreateExperiment.attributeTypeMap;
    }

    public constructor() {
    }
}

export enum CreateExperimentObjectTypeEnum {
    Experiment = 'experiment'
}
export enum CreateExperimentRunOnEnum {
    Lambda = 'Lambda',
    Fargate = 'Fargate',
    Local = 'Local'
}
export enum CreateExperimentDataFileTypeEnum {
    TuringCsv = 'turing csv',
    StanCsv = 'stan csv',
    ArvizNetcdf = 'arviz netcdf'
}

