import { CreateNSampleStatReq } from '../models/CreateNSampleStatReq';
import { CreateProtobufMessageReq } from '../models/CreateProtobufMessageReq';
import { CreateTextMessageReq } from '../models/CreateTextMessageReq';
import { RunCloudFunctionScript } from '../models/RunCloudFunctionScript';
import { RunWorkflowReq } from '../models/RunWorkflowReq';
import { UpdateEventReq } from '../models/UpdateEventReq';
import { UpdateExperiment } from '../models/UpdateExperiment';
import { UpdateModel } from '../models/UpdateModel';
import { HttpFile } from '../http/http';

/**
 * @type Payload1
 * Type
 * @export
 */
export type Payload1 = CreateNSampleStatReq | CreateProtobufMessageReq | CreateTextMessageReq | RunCloudFunctionScript | RunWorkflowReq | UpdateEventReq | UpdateExperiment | UpdateModel;

/**
* @type Payload1Class
* @export
*/
export class Payload1Class {
    static readonly discriminator: string | undefined = "objectType";

    static readonly mapping: {[index: string]: string} | undefined = {
        "event": "UpdateEventReq",
        "experiment": "UpdateExperiment",
        "experiment.nsample_stat": "CreateNSampleStatReq",
        "experiment.protobuf_message": "CreateProtobufMessageReq",
        "experiment.text_message": "CreateTextMessageReq",
        "model": "UpdateModel",
        "model.run_script": "RunCloudFunctionScript",
        "workflow.run": "RunWorkflowReq",
    };
}







