import { HttpFile } from '../http/http';

export class CreateTextMessageReq {
    'objectType': CreateTextMessageReqObjectTypeEnum;
    /**
    * list of messages
    */
    'datas': Array<{ [key: string]: any; }>;
    'batchId': string;
    'runId': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "objectType",
            "baseName": "object_type",
            "type": "CreateTextMessageReqObjectTypeEnum",
            "format": ""
        },
        {
            "name": "datas",
            "baseName": "datas",
            "type": "Array<{ [key: string]: any; }>",
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
        }    ];

    static getAttributeTypeMap() {
        return CreateTextMessageReq.attributeTypeMap;
    }

    public constructor() {
    }
}

export enum CreateTextMessageReqObjectTypeEnum {
    ExperimentTextMessage = 'experiment.text_message'
}

