import { HttpFile } from '../http/http';

export class RunWorkflowReq {
    'objectType': RunWorkflowReqObjectTypeEnum;
    /**
    * experiment name
    */
    'experimentName': string;
    /**
    * iteration number
    */
    'iteration'?: number;
    /**
    * parallel number
    */
    'parallel'?: number;
    'engine'?: RunWorkflowReqEngineEnum;
    /**
    * chains number
    */
    'chains'?: number;
    'parallelAlgorithm'?: RunWorkflowReqParallelAlgorithmEnum;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "objectType",
            "baseName": "object_type",
            "type": "RunWorkflowReqObjectTypeEnum",
            "format": ""
        },
        {
            "name": "experimentName",
            "baseName": "experiment_name",
            "type": "string",
            "format": ""
        },
        {
            "name": "iteration",
            "baseName": "iteration",
            "type": "number",
            "format": ""
        },
        {
            "name": "parallel",
            "baseName": "parallel",
            "type": "number",
            "format": ""
        },
        {
            "name": "engine",
            "baseName": "engine",
            "type": "RunWorkflowReqEngineEnum",
            "format": ""
        },
        {
            "name": "chains",
            "baseName": "chains",
            "type": "number",
            "format": ""
        },
        {
            "name": "parallelAlgorithm",
            "baseName": "parallel_algorithm",
            "type": "RunWorkflowReqParallelAlgorithmEnum",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return RunWorkflowReq.attributeTypeMap;
    }

    public constructor() {
    }
}

export enum RunWorkflowReqObjectTypeEnum {
    WorkflowRun = 'workflow.run'
}
export enum RunWorkflowReqEngineEnum {
    Lambda = 'lambda',
    Fargate = 'fargate'
}
export enum RunWorkflowReqParallelAlgorithmEnum {
    Serial = 'Serial',
    Threaded = 'Threaded',
    Distributed = 'Distributed'
}

