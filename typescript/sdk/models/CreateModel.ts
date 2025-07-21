import { CloudFunctionKind } from '../models/CloudFunctionKind';
import { CloudFunctionLang } from '../models/CloudFunctionLang';
import { ModelContent } from '../models/ModelContent';
import { HttpFile } from '../http/http';

export class CreateModel {
    'objectType': CreateModelObjectTypeEnum;
    /**
    * repo in the form of repo_owner/repo_name or gist id in case of importing from gist
    */
    'repo'?: string;
    /**
    * branch name or gist description in case of importing from gist
    */
    'branch'?: string;
    /**
    * The type of input code. It can be:  * repo: the code is stored in a github repository and specified by param `repo` and `branch`. * gist: the code is stored in a github gist and specified by param `repo` and `branch`. * local: the code is provided directly in `content` field as Unified Model Format. * codelambda: the code is provided directly in `code` field as str. The backend will generate a lambda instance for it.
    */
    'type'?: CreateModelTypeEnum;
    /**
    * Plain code. Type must be codelambda
    */
    'code'?: string;
    /**
    * [deprecated] model name
    */
    'modelName'?: string;
    'env'?: string | null;
    /**
    * model name
    */
    'name'?: string;
    'content'?: ModelContent | null;
    'isDemo'?: boolean;
    'kind'?: CloudFunctionKind;
    /**
    * Only allow one instance to run as cloud function at a time.
    */
    'singleInstance'?: boolean;
    'lang'?: CloudFunctionLang;
    'entranceFile'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "objectType",
            "baseName": "object_type",
            "type": "CreateModelObjectTypeEnum",
            "format": ""
        },
        {
            "name": "repo",
            "baseName": "repo",
            "type": "string",
            "format": ""
        },
        {
            "name": "branch",
            "baseName": "branch",
            "type": "string",
            "format": ""
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "CreateModelTypeEnum",
            "format": ""
        },
        {
            "name": "code",
            "baseName": "code",
            "type": "string",
            "format": ""
        },
        {
            "name": "modelName",
            "baseName": "model_name",
            "type": "string",
            "format": ""
        },
        {
            "name": "env",
            "baseName": "env",
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
            "name": "content",
            "baseName": "content",
            "type": "ModelContent",
            "format": ""
        },
        {
            "name": "isDemo",
            "baseName": "is_demo",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "kind",
            "baseName": "kind",
            "type": "CloudFunctionKind",
            "format": ""
        },
        {
            "name": "singleInstance",
            "baseName": "single_instance",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "lang",
            "baseName": "lang",
            "type": "CloudFunctionLang",
            "format": ""
        },
        {
            "name": "entranceFile",
            "baseName": "entrance_file",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return CreateModel.attributeTypeMap;
    }

    public constructor() {
    }
}

export enum CreateModelObjectTypeEnum {
    Model = 'model'
}
export enum CreateModelTypeEnum {
    Repo = 'repo',
    Gist = 'gist',
    Local = 'local',
    Codelambda = 'codelambda'
}

