import { CreateCallbackRsp } from '../models/CreateCallbackRsp';
import { CreateDataRsp } from '../models/CreateDataRsp';
import { CreateEventRsp } from '../models/CreateEventRsp';
import { CreateExperimentShareRsp } from '../models/CreateExperimentShareRsp';
import { CreateRelationRsp } from '../models/CreateRelationRsp';
import { CreateWorkflowRsp } from '../models/CreateWorkflowRsp';
import { ExperimentRsp } from '../models/ExperimentRsp';
import { ListModelsRspItem } from '../models/ListModelsRspItem';
import { HttpFile } from '../http/http';

/**
 * @type Data1
 * Type
 * @export
 */
export type Data1 = CreateCallbackRsp | CreateDataRsp | CreateEventRsp | CreateExperimentShareRsp | CreateRelationRsp | CreateWorkflowRsp | ExperimentRsp | ListModelsRspItem;

/**
* @type Data1Class
* @export
*/
export class Data1Class {
    static readonly discriminator: string | undefined = "objectType";

    static readonly mapping: {[index: string]: string} | undefined = {
        "callback": "CreateCallbackRsp",
        "data": "CreateDataRsp",
        "event": "CreateEventRsp",
        "experiment": "ExperimentRsp",
        "model": "ListModelsRspItem",
        "relation": "CreateRelationRsp",
        "share": "CreateExperimentShareRsp",
        "workflow": "CreateWorkflowRsp",
    };
}







