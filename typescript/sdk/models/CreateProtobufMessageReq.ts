import { DataTyping } from '../models/DataTyping';
import { HttpFile } from '../http/http';

export class CreateProtobufMessageReq {
    'objectType': CreateProtobufMessageReqObjectTypeEnum;
    'batchId': string;
    'runId': string;
    'logs': DataTyping;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "objectType",
            "baseName": "object_type",
            "type": "CreateProtobufMessageReqObjectTypeEnum",
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
            "name": "logs",
            "baseName": "logs",
            "type": "DataTyping",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return CreateProtobufMessageReq.attributeTypeMap;
    }

    public constructor() {
    }
}

export enum CreateProtobufMessageReqObjectTypeEnum {
    ExperimentProtobufMessage = 'experiment.protobuf_message'
}

