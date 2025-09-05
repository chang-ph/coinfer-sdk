import { CreateDataRsp } from '../models/CreateDataRsp';
import { CreateWorkflowRsp } from '../models/CreateWorkflowRsp';
import { ExperimentCloudwatchLogRsp } from '../models/ExperimentCloudwatchLogRsp';
import { ExperimentPlotRsp } from '../models/ExperimentPlotRsp';
import { ExperimentRsp } from '../models/ExperimentRsp';
import { ExperimentSampleDataRsp } from '../models/ExperimentSampleDataRsp';
import { GetExperimentRunInfoRsp } from '../models/GetExperimentRunInfoRsp';
import { ViewExperimentShareRsp } from '../models/ViewExperimentShareRsp';
import { ViewModelsRsp } from '../models/ViewModelsRsp';
import { HttpFile } from '../http/http';

/**
 * @type Data2
 * Type
 * @export
 */
export type Data2 = CreateDataRsp | CreateWorkflowRsp | ExperimentCloudwatchLogRsp | ExperimentPlotRsp | ExperimentRsp | ExperimentSampleDataRsp | GetExperimentRunInfoRsp | ViewExperimentShareRsp | ViewModelsRsp;

/**
* @type Data2Class
* @export
*/
export class Data2Class {
    static readonly discriminator: string | undefined = "objectType";

    static readonly mapping: {[index: string]: string} | undefined = {
        "data": "CreateDataRsp",
        "experiment": "ExperimentRsp",
        "experiment.cloudwatch_log": "ExperimentCloudwatchLogRsp",
        "experiment.plot": "ExperimentPlotRsp",
        "experiment.run_info": "GetExperimentRunInfoRsp",
        "experiment.sampledata": "ExperimentSampleDataRsp",
        "model": "ViewModelsRsp",
        "share": "ViewExperimentShareRsp",
        "workflow": "CreateWorkflowRsp",
    };
}








