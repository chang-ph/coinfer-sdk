import { HttpFile } from '../http/http';

export class RunCommandReq {
    /**
    * Target object to perform the action on
    */
    'target': string;
    /**
    * Action to perform
    */
    'action': string;
    /**
    * Parameters for the command
    */
    'parameters'?: { [key: string]: any; };
    /**
    * Whether to get the response from the command (Sync run)
    */
    'getResponse'?: boolean;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "target",
            "baseName": "target",
            "type": "string",
            "format": ""
        },
        {
            "name": "action",
            "baseName": "action",
            "type": "string",
            "format": ""
        },
        {
            "name": "parameters",
            "baseName": "parameters",
            "type": "{ [key: string]: any; }",
            "format": ""
        },
        {
            "name": "getResponse",
            "baseName": "get_response",
            "type": "boolean",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return RunCommandReq.attributeTypeMap;
    }

    public constructor() {
    }
}
