import { CreateCallbackRsp } from '../models/CreateCallbackRsp';
import { CreateDataRsp } from '../models/CreateDataRsp';
import { CreateEventRsp } from '../models/CreateEventRsp';
import { CreateExperimentShareRsp } from '../models/CreateExperimentShareRsp';
import { CreateRelationRsp } from '../models/CreateRelationRsp';
import { ExperimentRsp } from '../models/ExperimentRsp';
import { ListModelsRspItem } from '../models/ListModelsRspItem';
import { HttpFile } from '../http/http';

/**
 * @type Data
 * Type
 * @export
 */
export type Data = CreateCallbackRsp | CreateDataRsp | CreateEventRsp | CreateExperimentShareRsp | CreateRelationRsp | ExperimentRsp | ListModelsRspItem;

/**
* @type DataClass
* @export
*/
export class DataClass {
    static readonly discriminator: string | undefined = "objectType";

    static readonly mapping: {[index: string]: string} | undefined = {
        "callback": "CreateCallbackRsp",
        "data": "CreateDataRsp",
        "event": "CreateEventRsp",
        "experiment": "ExperimentRsp",
        "model": "ListModelsRspItem",
        "relation": "CreateRelationRsp",
        "share": "CreateExperimentShareRsp",
    };
}






