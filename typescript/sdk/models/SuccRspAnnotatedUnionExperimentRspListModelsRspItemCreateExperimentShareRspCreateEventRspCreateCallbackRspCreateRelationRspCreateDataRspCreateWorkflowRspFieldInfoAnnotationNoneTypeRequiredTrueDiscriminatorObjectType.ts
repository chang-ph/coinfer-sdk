import { Data } from '../models/Data';
import { HttpFile } from '../http/http';

export class SuccRspAnnotatedUnionExperimentRspListModelsRspItemCreateExperimentShareRspCreateEventRspCreateCallbackRspCreateRelationRspCreateDataRspCreateWorkflowRspFieldInfoAnnotationNoneTypeRequiredTrueDiscriminatorObjectType {
    'status': SuccRspAnnotatedUnionExperimentRspListModelsRspItemCreateExperimentShareRspCreateEventRspCreateCallbackRspCreateRelationRspCreateDataRspCreateWorkflowRspFieldInfoAnnotationNoneTypeRequiredTrueDiscriminatorObjectTypeStatusEnum;
    'data': Data;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "status",
            "baseName": "status",
            "type": "SuccRspAnnotatedUnionExperimentRspListModelsRspItemCreateExperimentShareRspCreateEventRspCreateCallbackRspCreateRelationRspCreateDataRspCreateWorkflowRspFieldInfoAnnotationNoneTypeRequiredTrueDiscriminatorObjectTypeStatusEnum",
            "format": ""
        },
        {
            "name": "data",
            "baseName": "data",
            "type": "Data",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return SuccRspAnnotatedUnionExperimentRspListModelsRspItemCreateExperimentShareRspCreateEventRspCreateCallbackRspCreateRelationRspCreateDataRspCreateWorkflowRspFieldInfoAnnotationNoneTypeRequiredTrueDiscriminatorObjectType.attributeTypeMap;
    }

    public constructor() {
    }
}

export enum SuccRspAnnotatedUnionExperimentRspListModelsRspItemCreateExperimentShareRspCreateEventRspCreateCallbackRspCreateRelationRspCreateDataRspCreateWorkflowRspFieldInfoAnnotationNoneTypeRequiredTrueDiscriminatorObjectTypeStatusEnum {
    Ok = 'ok'
}

