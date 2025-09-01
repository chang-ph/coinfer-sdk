import { Data1 } from '../models/Data1';
import { HttpFile } from '../http/http';

export class SuccRspAnnotatedUnionExperimentRspViewModelsRspViewExperimentShareRspExperimentSampleDataRspExperimentCloudwatchLogRspGetExperimentRunInfoRspExperimentPlotRspCreateDataRspFieldInfoAnnotationNoneTypeRequiredTrueDiscriminatorObjectType {
    'status': SuccRspAnnotatedUnionExperimentRspViewModelsRspViewExperimentShareRspExperimentSampleDataRspExperimentCloudwatchLogRspGetExperimentRunInfoRspExperimentPlotRspCreateDataRspFieldInfoAnnotationNoneTypeRequiredTrueDiscriminatorObjectTypeStatusEnum;
    'data': Data1;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "status",
            "baseName": "status",
            "type": "SuccRspAnnotatedUnionExperimentRspViewModelsRspViewExperimentShareRspExperimentSampleDataRspExperimentCloudwatchLogRspGetExperimentRunInfoRspExperimentPlotRspCreateDataRspFieldInfoAnnotationNoneTypeRequiredTrueDiscriminatorObjectTypeStatusEnum",
            "format": ""
        },
        {
            "name": "data",
            "baseName": "data",
            "type": "Data1",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return SuccRspAnnotatedUnionExperimentRspViewModelsRspViewExperimentShareRspExperimentSampleDataRspExperimentCloudwatchLogRspGetExperimentRunInfoRspExperimentPlotRspCreateDataRspFieldInfoAnnotationNoneTypeRequiredTrueDiscriminatorObjectType.attributeTypeMap;
    }

    public constructor() {
    }
}

export enum SuccRspAnnotatedUnionExperimentRspViewModelsRspViewExperimentShareRspExperimentSampleDataRspExperimentCloudwatchLogRspGetExperimentRunInfoRspExperimentPlotRspCreateDataRspFieldInfoAnnotationNoneTypeRequiredTrueDiscriminatorObjectTypeStatusEnum {
    Ok = 'ok'
}

