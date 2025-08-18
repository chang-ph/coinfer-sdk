import { HttpFile } from '../http/http';

export class UpdateEventReq {
    'objectType': UpdateEventReqObjectTypeEnum;
    'params'?: string;
    'engine'?: UpdateEventReqEngineEnum;
    /**
    * lock key provided by user. It is combined with the cloudfunction_id to form the real lock key when running cloudfunction triggered by this event.  Sometimes, users may want CloudFunctions to run exclusively, but not just one instance globally. For example, when running a CloudFunction specific to an experiment, users may want only one instance of that CloudFunction to run simultaneously for that experiment. In this case, users can specify the lock_key as the experiment_id.
    */
    'lockKey'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "objectType",
            "baseName": "object_type",
            "type": "UpdateEventReqObjectTypeEnum",
            "format": ""
        },
        {
            "name": "params",
            "baseName": "params",
            "type": "string",
            "format": ""
        },
        {
            "name": "engine",
            "baseName": "engine",
            "type": "UpdateEventReqEngineEnum",
            "format": ""
        },
        {
            "name": "lockKey",
            "baseName": "lock_key",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return UpdateEventReq.attributeTypeMap;
    }

    public constructor() {
    }
}

export enum UpdateEventReqObjectTypeEnum {
    Event = 'event'
}
export enum UpdateEventReqEngineEnum {
    Lambda = 'lambda',
    Fargate = 'fargate'
}

