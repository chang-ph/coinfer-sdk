import { HttpFile } from '../http/http';

/**
* All possible tags for cloudfunctions  Including: CloudFunctionManagedTag and CloudFunctionKind
*/
export enum CloudFunctionTag {
    Internal = 'internal',
    Builtin = 'builtin',
    Reserved = 'reserved',
    Model = 'model',
    Code = 'code'
}
