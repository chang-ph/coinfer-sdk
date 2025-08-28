import { Data } from '../models/Data';
import { HttpFile } from '../http/http';

export class SuccRspAnnotatedUnionExperimentRspListModelsRspItemCreateExperimentShareRspCreateEventRspCreateCallbackRspCreateRelationRspCreateDataRspFieldInfoAnnotationNoneTypeRequiredTrueDiscriminatorObjectType {
    'status': SuccRspAnnotatedUnionExperimentRspListModelsRspItemCreateExperimentShareRspCreateEventRspCreateCallbackRspCreateRelationRspCreateDataRspFieldInfoAnnotationNoneTypeRequiredTrueDiscriminatorObjectTypeStatusEnum;
    'data': Data;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "status",
            "baseName": "status",
            "type": "SuccRspAnnotatedUnionExperimentRspListModelsRspItemCreateExperimentShareRspCreateEventRspCreateCallbackRspCreateRelationRspCreateDataRspFieldInfoAnnotationNoneTypeRequiredTrueDiscriminatorObjectTypeStatusEnum",
            "format": ""
        },
        {
            "name": "data",
            "baseName": "data",
            "type": "Data",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return SuccRspAnnotatedUnionExperimentRspListModelsRspItemCreateExperimentShareRspCreateEventRspCreateCallbackRspCreateRelationRspCreateDataRspFieldInfoAnnotationNoneTypeRequiredTrueDiscriminatorObjectType.attributeTypeMap;
    }

    public constructor() {
    }
}

export enum SuccRspAnnotatedUnionExperimentRspListModelsRspItemCreateExperimentShareRspCreateEventRspCreateCallbackRspCreateRelationRspCreateDataRspFieldInfoAnnotationNoneTypeRequiredTrueDiscriminatorObjectTypeStatusEnum {
    Ok = 'ok'
}

