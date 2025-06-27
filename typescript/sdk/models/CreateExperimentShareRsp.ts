import { HttpFile } from '../http/http';

export class CreateExperimentShareRsp {
    'objectType': CreateExperimentShareRspObjectTypeEnum;
    'id': number;
    'userId': number;
    'shortId': string;
    'experimentId': string;
    'experimentName': string;
    'password': string;
    'createdAt': Date;
    'fromUser'?: string | null;
    'toUser'?: string | null;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "objectType",
            "baseName": "object_type",
            "type": "CreateExperimentShareRspObjectTypeEnum",
            "format": ""
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "number",
            "format": ""
        },
        {
            "name": "userId",
            "baseName": "user_id",
            "type": "number",
            "format": ""
        },
        {
            "name": "shortId",
            "baseName": "short_id",
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
            "name": "password",
            "baseName": "password",
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
            "name": "fromUser",
            "baseName": "from_user",
            "type": "string",
            "format": ""
        },
        {
            "name": "toUser",
            "baseName": "to_user",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return CreateExperimentShareRsp.attributeTypeMap;
    }

    public constructor() {
    }
}

export enum CreateExperimentShareRspObjectTypeEnum {
    Share = 'share'
}

