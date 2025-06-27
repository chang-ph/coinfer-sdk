import { HttpFile } from '../http/http';

export class CreateRelationReq {
    'objectType': CreateRelationReqObjectTypeEnum;
    'object1Id': string;
    'object2Id': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "objectType",
            "baseName": "object_type",
            "type": "CreateRelationReqObjectTypeEnum",
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
        }    ];

    static getAttributeTypeMap() {
        return CreateRelationReq.attributeTypeMap;
    }

    public constructor() {
    }
}

export enum CreateRelationReqObjectTypeEnum {
    Relation = 'relation'
}

