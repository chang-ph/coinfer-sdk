import { CreateCallbackReq } from '../models/CreateCallbackReq';
import { CreateDataReq } from '../models/CreateDataReq';
import { CreateEventReq } from '../models/CreateEventReq';
import { CreateExperiment } from '../models/CreateExperiment';
import { CreateExperimentShare } from '../models/CreateExperimentShare';
import { CreateModel } from '../models/CreateModel';
import { CreateRelationReq } from '../models/CreateRelationReq';
import { HttpFile } from '../http/http';

/**
 * @type Payload
 * Type
 * @export
 */
export type Payload = CreateCallbackReq | CreateDataReq | CreateEventReq | CreateExperiment | CreateExperimentShare | CreateModel | CreateRelationReq;

/**
* @type PayloadClass
* @export
*/
export class PayloadClass {
    static readonly discriminator: string | undefined = "objectType";

    static readonly mapping: {[index: string]: string} | undefined = {
        "callback": "CreateCallbackReq",
        "data": "CreateDataReq",
        "event": "CreateEventReq",
        "experiment": "CreateExperiment",
        "model": "CreateModel",
        "relation": "CreateRelationReq",
        "share": "CreateExperimentShare",
    };
}






