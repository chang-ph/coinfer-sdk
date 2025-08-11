import { HttpFile } from '../http/http';

/**
* Categories (types) of cloud functions, e.g., MODEL or CODE. These categories are also used as tags elsewhere in the system.
*/
export enum CloudFunctionKind {
    Model = 'model',
    Code = 'code'
}
