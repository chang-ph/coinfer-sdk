import { CreateDataRsp } from '../models/CreateDataRsp';
import { CreateWorkflowRsp } from '../models/CreateWorkflowRsp';
import { ExperimentCloudwatchLogRsp } from '../models/ExperimentCloudwatchLogRsp';
import { ExperimentRsp } from '../models/ExperimentRsp';
import { ExperimentSampleDataRsp } from '../models/ExperimentSampleDataRsp';
import { GetExperimentRunInfoRsp } from '../models/GetExperimentRunInfoRsp';
import { ViewAnalyzerRsp } from '../models/ViewAnalyzerRsp';
import { ViewExperimentShareRsp } from '../models/ViewExperimentShareRsp';
import { ViewModelsRsp } from '../models/ViewModelsRsp';
import { HttpFile } from '../http/http';

/**
 * @type Data1
 * Type
 * @export
 */
export type Data1 = CreateDataRsp | CreateWorkflowRsp | ExperimentCloudwatchLogRsp | ExperimentRsp | ExperimentSampleDataRsp | GetExperimentRunInfoRsp | ViewAnalyzerRsp | ViewExperimentShareRsp | ViewModelsRsp;

/**
* @type Data1Class
* @export
*/
export class Data1Class {
    static readonly discriminator: string | undefined = "objectType";

    static readonly mapping: {[index: string]: string} | undefined = {
        "data": "CreateDataRsp",
        "experiment": "ExperimentRsp",
        "experiment.cloudwatch_log": "ExperimentCloudwatchLogRsp",
        "experiment.run_info": "GetExperimentRunInfoRsp",
        "experiment.sampledata": "ExperimentSampleDataRsp",
        "model": "ViewModelsRsp",
        "share": "ViewExperimentShareRsp",
        "workflow": "CreateWorkflowRsp",
        "workflow.analyzer": "ViewAnalyzerRsp",
    };
}








