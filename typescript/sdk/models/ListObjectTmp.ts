import { HttpFile } from '../http/http';

export class ListObjectTmp {
    /**
    * page number
    */
    'pageNo'?: number;
    /**
    * page size
    */
    'pageSize'?: number;
    'objectType': ListObjectTmpObjectTypeEnum;
    /**
    * Whether to return the related share info
    */
    'withShareInfo'?: boolean;
    /**
    * Filter objects shared by the current user
    */
    'sharedByMe'?: boolean;
    /**
    * Filter objects shared with the current user
    */
    'sharedWithMe'?: boolean;
    'modelIds'?: Array<string>;
    'status'?: ListObjectTmpStatusEnum;
    'runOn'?: ListObjectTmpRunOnEnum;
    'hasModel'?: ListObjectTmpHasModelEnum;
    /**
    * Filter by tags
    */
    'tags'?: Array<ListObjectTmpTagsEnum>;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "pageNo",
            "baseName": "page_no",
            "type": "number",
            "format": ""
        },
        {
            "name": "pageSize",
            "baseName": "page_size",
            "type": "number",
            "format": ""
        },
        {
            "name": "objectType",
            "baseName": "object_type",
            "type": "ListObjectTmpObjectTypeEnum",
            "format": ""
        },
        {
            "name": "withShareInfo",
            "baseName": "with_share_info",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "sharedByMe",
            "baseName": "shared_by_me",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "sharedWithMe",
            "baseName": "shared_with_me",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "modelIds",
            "baseName": "model_ids",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "ListObjectTmpStatusEnum",
            "format": ""
        },
        {
            "name": "runOn",
            "baseName": "run_on",
            "type": "ListObjectTmpRunOnEnum",
            "format": ""
        },
        {
            "name": "hasModel",
            "baseName": "has_model",
            "type": "ListObjectTmpHasModelEnum",
            "format": ""
        },
        {
            "name": "tags",
            "baseName": "tags",
            "type": "Array<ListObjectTmpTagsEnum>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ListObjectTmp.attributeTypeMap;
    }

    public constructor() {
    }
}

export enum ListObjectTmpObjectTypeEnum {
    Model = 'model',
    Experiment = 'experiment',
    Share = 'share',
    Event = 'event',
    Callback = 'callback',
    Relation = 'relation',
    Artifact = 'artifact',
    Empty = ''
}
export enum ListObjectTmpStatusEnum {
    New = 'NEW',
    Run = 'RUN',
    Fin = 'FIN',
    Err = 'ERR',
    Empty = ''
}
export enum ListObjectTmpRunOnEnum {
    Lambda = 'Lambda',
    Fargate = 'Fargate',
    Local = 'Local',
    Empty = ''
}
export enum ListObjectTmpHasModelEnum {
    True = 'true',
    False = 'false',
    Empty = ''
}
export enum ListObjectTmpTagsEnum {
    Internal = 'internal',
    Builtin = 'builtin',
    Reserved = 'reserved',
    Model = 'model',
    Code = 'code'
}

