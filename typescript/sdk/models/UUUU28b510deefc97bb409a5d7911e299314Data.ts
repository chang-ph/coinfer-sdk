import { ExperimentRsp } from '../models/ExperimentRsp';
import { ViewModelsRsp } from '../models/ViewModelsRsp';
import { WorkflowRunRsp } from '../models/WorkflowRunRsp';
import { HttpFile } from '../http/http';

/**
 * @type UUUU28b510deefc97bb409a5d7911e299314Data
 * Type
 * @export
 */
export type UUUU28b510deefc97bb409a5d7911e299314Data = ExperimentRsp | ViewModelsRsp | WorkflowRunRsp;

/**
* @type UUUU28b510deefc97bb409a5d7911e299314DataClass
* @export
*/
export class UUUU28b510deefc97bb409a5d7911e299314DataClass {
    static readonly discriminator: string | undefined = "objectType";

    static readonly mapping: {[index: string]: string} | undefined = {
        "experiment": "ExperimentRsp",
        "model": "ViewModelsRsp",
        "workflow.run": "WorkflowRunRsp",
    };
}


