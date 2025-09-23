import { CreateCallbackRsp } from '../models/CreateCallbackRsp';
import { CreateDataRsp } from '../models/CreateDataRsp';
import { CreateEventRsp } from '../models/CreateEventRsp';
import { CreateRelationRsp } from '../models/CreateRelationRsp';
import { CreateWorkflowRsp } from '../models/CreateWorkflowRsp';
import { ListExperimentRsp } from '../models/ListExperimentRsp';
import { ListModelsRspItem } from '../models/ListModelsRspItem';
import { HttpFile } from '../http/http';

/**
 * @type UUUUc9932bea1f007b34d507c4c4c680b4a7ObjectsInner
 * Type
 * @export
 */
export type UUUUc9932bea1f007b34d507c4c4c680b4a7ObjectsInner = CreateCallbackRsp | CreateDataRsp | CreateEventRsp | CreateRelationRsp | CreateWorkflowRsp | ListExperimentRsp | ListModelsRspItem;

/**
* @type UUUUc9932bea1f007b34d507c4c4c680b4a7ObjectsInnerClass
* @export
*/
export class UUUUc9932bea1f007b34d507c4c4c680b4a7ObjectsInnerClass {
    static readonly discriminator: string | undefined = "objectType";

    static readonly mapping: {[index: string]: string} | undefined = {
        "callback": "CreateCallbackRsp",
        "data": "CreateDataRsp",
        "event": "CreateEventRsp",
        "experiment": "ListExperimentRsp",
        "model": "ListModelsRspItem",
        "relation": "CreateRelationRsp",
        "workflow": "CreateWorkflowRsp",
    };
}






