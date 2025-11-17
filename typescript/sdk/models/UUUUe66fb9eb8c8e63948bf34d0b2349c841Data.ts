import { ExperimentRsp } from '../models/ExperimentRsp';
import { ModelRunScriptRsp } from '../models/ModelRunScriptRsp';
import { ViewModelsRsp } from '../models/ViewModelsRsp';
import { WorkflowRunRsp } from '../models/WorkflowRunRsp';
import { HttpFile } from '../http/http';

/**
 * @type UUUUe66fb9eb8c8e63948bf34d0b2349c841Data
 * Type
 * @export
 */
export type UUUUe66fb9eb8c8e63948bf34d0b2349c841Data = ExperimentRsp | ModelRunScriptRsp | ViewModelsRsp | WorkflowRunRsp;

/**
* @type UUUUe66fb9eb8c8e63948bf34d0b2349c841DataClass
* @export
*/
export class UUUUe66fb9eb8c8e63948bf34d0b2349c841DataClass {
    static readonly discriminator: string | undefined = "objectType";

    static readonly mapping: {[index: string]: string} | undefined = {
        "experiment": "ExperimentRsp",
        "model": "ViewModelsRsp",
        "model.run_response": "ModelRunScriptRsp",
        "workflow.run": "WorkflowRunRsp",
    };
}



