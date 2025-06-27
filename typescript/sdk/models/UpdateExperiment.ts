import { HttpFile } from '../http/http';

export class UpdateExperiment {
    'objectType': UpdateExperimentObjectTypeEnum;
    'action'?: string | null;
    'meta'?: { [key: string]: any; };
    'status'?: string | null;
    'nChains'?: number;
    'nVariables'?: number;
    'nSamples'?: number;
    'sampleUpdateTime'?: Date | null;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "objectType",
            "baseName": "object_type",
            "type": "UpdateExperimentObjectTypeEnum",
            "format": ""
        },
        {
            "name": "action",
            "baseName": "action",
            "type": "string",
            "format": ""
        },
        {
            "name": "meta",
            "baseName": "meta",
            "type": "{ [key: string]: any; }",
            "format": ""
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "string",
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
        }    ];

    static getAttributeTypeMap() {
        return UpdateExperiment.attributeTypeMap;
    }

    public constructor() {
    }
}

export enum UpdateExperimentObjectTypeEnum {
    Experiment = 'experiment'
}

