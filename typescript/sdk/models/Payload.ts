import { CreateCallbackReq } from '../models/CreateCallbackReq';
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
export type Payload = CreateCallbackReq | CreateEventReq | CreateExperiment | CreateExperimentShare | CreateModel | CreateRelationReq;

/**
* @type PayloadClass
* @export
*/
export class PayloadClass {
    static readonly discriminator: string | undefined = "objectType";

    static readonly mapping: {[index: string]: string} | undefined = {
        "callback": "CreateCallbackReq",
        "event": "CreateEventReq",
        "experiment": "CreateExperiment",
        "model": "CreateModel",
        "relation": "CreateRelationReq",
        "share": "CreateExperimentShare",
    };
}





