import { ExperimentCloudwatchLogRsp } from '../models/ExperimentCloudwatchLogRsp';
import { ExperimentRsp } from '../models/ExperimentRsp';
import { ExperimentSampleDataRsp } from '../models/ExperimentSampleDataRsp';
import { GetExperimentRunInfoRsp } from '../models/GetExperimentRunInfoRsp';
import { ViewExperimentShareRsp } from '../models/ViewExperimentShareRsp';
import { ViewModelsRsp } from '../models/ViewModelsRsp';
import { HttpFile } from '../http/http';

/**
 * @type Data1
 * Type
 * @export
 */
export type Data1 = ExperimentCloudwatchLogRsp | ExperimentRsp | ExperimentSampleDataRsp | GetExperimentRunInfoRsp | ViewExperimentShareRsp | ViewModelsRsp;

/**
* @type Data1Class
* @export
*/
export class Data1Class {
    static readonly discriminator: string | undefined = "objectType";

    static readonly mapping: {[index: string]: string} | undefined = {
        "experiment": "ExperimentRsp",
        "experiment.cloudwatch_log": "ExperimentCloudwatchLogRsp",
        "experiment.run_info": "GetExperimentRunInfoRsp",
        "experiment.sampledata": "ExperimentSampleDataRsp",
        "model": "ViewModelsRsp",
        "share": "ViewExperimentShareRsp",
    };
}





