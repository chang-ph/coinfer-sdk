// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { CreateObjectReq } from '../models/CreateObjectReq';
import { ErrRsp } from '../models/ErrRsp';
import { SuccRspSoftDeletedRsp } from '../models/SuccRspSoftDeletedRsp';
import { UUUU18d10abbf81f28b86769c427804ea587 } from '../models/UUUU18d10abbf81f28b86769c427804ea587';
import { UUUU3901522240c3ec762888a02c13900728 } from '../models/UUUU3901522240c3ec762888a02c13900728';
import { UUUU4be0e69353a8fb4b4ca5b5b1a94b3f66 } from '../models/UUUU4be0e69353a8fb4b4ca5b5b1a94b3f66';
import { UUUUe66fb9eb8c8e63948bf34d0b2349c841 } from '../models/UUUUe66fb9eb8c8e63948bf34d0b2349c841';
import { UpdateObject } from '../models/UpdateObject';

/**
 * no description
 */
export class ObjectApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Create new object.
     *
     * Create new object.  ### Example Create model: ``` POST /api/object {     \"payload\": {         \"object_type\": \"model\",         \"name\": \"model name\",         \"type\": \"local\",         \"content\": {             \"meta\": {\"entrance_file\": \"main.jl\"},             \"tree\": [],         }     } } ```  Create model from GitHub repo: ``` POST /api/object {     \"payload\": {         \"object_type\": \"model\",         \"repo\": \"vectorly-ai/simple-model\",         \"branch\": \"main\",         \"type\": \"repo\",     } } ```  Create model from GitHub gist: ``` POST /api/object {     \"payload\": {         \"object_type\": \"model\",         \"repo\": \"<the-gist-id>\",         \"type\": \"gist\",     } } ```  Create experiment: ``` POST /api/object {     \"payload\": {         \"object_type\": \"experiment\",         \"name\": \"experiment name\",         \"model_id\": \"M1234567\",     } } ```  Create share of experiment: ``` POST /api/object {     \"payload\": {         \"object_type\": \"share\",         \"objid\": \"X1234567\",         \"password\": \"the-pass\",     } } ```
     * @param createObjectReq 
     */
    public async createObject(createObjectReq: CreateObjectReq, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'createObjectReq' is not null or undefined
        if (createObjectReq === null || createObjectReq === undefined) {
            throw new RequiredError("ObjectApi", "createObject", "createObjectReq");
        }


        // Path Params
        const localVarPath = '/api/object';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(createObjectReq, "CreateObjectReq", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["GlobalAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Delete objects.
     *
     * Delete objects of certain IDs in batch.  ### Example  ``` DELETE /api/object?objids=M1234567&objids=X1234567 ```
     * @param objids list of object ids
     * @param deletedKey 
     */
    public async deleteObject(objids?: Array<string>, deletedKey?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;



        // Path Params
        const localVarPath = '/api/object';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.DELETE);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (objids !== undefined) {
            const serializedParams = ObjectSerializer.serialize(objids, "Array<string>", "");
            for (const serializedParam of serializedParams) {
                requestContext.appendQueryParam("objids", serializedParam);
            }
        }

        // Query Params
        if (deletedKey !== undefined) {
            requestContext.setQueryParam("deleted_key", ObjectSerializer.serialize(deletedKey, "string", ""));
        }


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["GlobalAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * List objects.
     *
     * ### List Objects  By default, the API returns only objects created by the current user, excluding sharing information for performance optimization.  When `shared_with_me` is enabled, the API returns objects owned by other users but shared with the current user, including their sharing details.  Enabling `shared_by_me` will include sharing information for objects that the current user has shared with others.  Setting `with_share_info` to true combines both scenarios: it returns objects shared by the current user as well as objects shared with the current user, complete with their respective sharing information. This effectively merges the functionality of both `shared_by_me` and `shared_with_me`.  ### Example  List models: ``` GET /api/object?object_type=model GET /api/object?object_type=model&shared_by_me=true GET /api/object?object_type=model&shared_with_me=true GET /api/object?object_type=model&with_share_info=true ```  List experiments: ``` GET /api/object?object_type=experiment GET /api/object?object_type=experiment&shared_by_me=true GET /api/object?object_type=experiment&shared_with_me=true GET /api/object?object_type=experiment&with_share_info=true ```
     * @param objectType 
     * @param pageNo page number
     * @param pageSize page size
     * @param withShareInfo Whether to return the related share info
     * @param sharedByMe Filter objects shared by the current user
     * @param sharedWithMe Filter objects shared with the current user
     * @param modelIds 
     * @param status 
     * @param runOn 
     * @param hasModel 
     * @param tags Filter by tags
     */
    public async listObject(objectType: 'model' | 'experiment' | 'share' | 'event' | 'callback' | 'relation' | 'data' | 'workflow' | '', pageNo?: number, pageSize?: number, withShareInfo?: boolean, sharedByMe?: boolean, sharedWithMe?: boolean, modelIds?: Array<string>, status?: 'NEW' | 'RUN' | 'FIN' | 'ERR' | '', runOn?: 'Lambda' | 'Fargate' | 'Local' | '', hasModel?: 'true' | 'false' | '', tags?: Array<'internal' | 'builtin' | 'reserved' | 'model' | 'code'>, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'objectType' is not null or undefined
        if (objectType === null || objectType === undefined) {
            throw new RequiredError("ObjectApi", "listObject", "objectType");
        }












        // Path Params
        const localVarPath = '/api/object';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (pageNo !== undefined) {
            requestContext.setQueryParam("page_no", ObjectSerializer.serialize(pageNo, "number", ""));
        }

        // Query Params
        if (pageSize !== undefined) {
            requestContext.setQueryParam("page_size", ObjectSerializer.serialize(pageSize, "number", ""));
        }

        // Query Params
        if (objectType !== undefined) {
            requestContext.setQueryParam("object_type", ObjectSerializer.serialize(objectType, "'model' | 'experiment' | 'share' | 'event' | 'callback' | 'relation' | 'data' | 'workflow' | ''", ""));
        }

        // Query Params
        if (withShareInfo !== undefined) {
            requestContext.setQueryParam("with_share_info", ObjectSerializer.serialize(withShareInfo, "boolean", ""));
        }

        // Query Params
        if (sharedByMe !== undefined) {
            requestContext.setQueryParam("shared_by_me", ObjectSerializer.serialize(sharedByMe, "boolean", ""));
        }

        // Query Params
        if (sharedWithMe !== undefined) {
            requestContext.setQueryParam("shared_with_me", ObjectSerializer.serialize(sharedWithMe, "boolean", ""));
        }

        // Query Params
        if (modelIds !== undefined) {
            const serializedParams = ObjectSerializer.serialize(modelIds, "Array<string>", "");
            for (const serializedParam of serializedParams) {
                requestContext.appendQueryParam("model_ids", serializedParam);
            }
        }

        // Query Params
        if (status !== undefined) {
            requestContext.setQueryParam("status", ObjectSerializer.serialize(status, "'NEW' | 'RUN' | 'FIN' | 'ERR' | ''", ""));
        }

        // Query Params
        if (runOn !== undefined) {
            requestContext.setQueryParam("run_on", ObjectSerializer.serialize(runOn, "'Lambda' | 'Fargate' | 'Local' | ''", ""));
        }

        // Query Params
        if (hasModel !== undefined) {
            requestContext.setQueryParam("has_model", ObjectSerializer.serialize(hasModel, "'true' | 'false' | ''", ""));
        }

        // Query Params
        if (tags !== undefined) {
            const serializedParams = ObjectSerializer.serialize(tags, "Array<'internal' | 'builtin' | 'reserved' | 'model' | 'code'>", "");
            for (const serializedParam of serializedParams) {
                requestContext.appendQueryParam("tags", serializedParam);
            }
        }


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["GlobalAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Update object.
     *
     * Update object of certain ID.  ### Example  Update model: ``` POST /api/object/M1234567  {     \"payload\": {         \"object_type\": \"model\",         \"name\": \"model name\",         \"content\": {             \"meta\": {\"entrance_file\": \"main.jl\"},             \"tree\": [],         }     } } ```  Update experiment: ``` POST /api/object/X1234567  {     \"payload\": {         \"object_type\": \"experiment\",         \"name\": \"experiment name\",     } } ```
     * @param objid 
     * @param updateObject 
     */
    public async updateObject(objid: string, updateObject: UpdateObject, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'objid' is not null or undefined
        if (objid === null || objid === undefined) {
            throw new RequiredError("ObjectApi", "updateObject", "objid");
        }


        // verify required parameter 'updateObject' is not null or undefined
        if (updateObject === null || updateObject === undefined) {
            throw new RequiredError("ObjectApi", "updateObject", "updateObject");
        }


        // Path Params
        const localVarPath = '/api/object/{objid}'
            .replace('{' + 'objid' + '}', encodeURIComponent(String(objid)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(updateObject, "UpdateObject", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["GlobalAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * View object.
     *
     * View object of certain ID.  ### Example  ``` GET /api/object/M1234567  # view model data GET /api/object/X1234567  # view experiment data GET /api/object/S1234566  # view share data ```
     * @param objid 
     * @param objectType 
     * @param shareId                  Only appicable to object_type &#x3D;&#x3D; model or object_type &#x3D;&#x3D; experiment                 If this field is empty, returns the latest version of the objects.                 otherwise returns the specified share snapshot
     * @param sampledata 
     * @param fmt 
     * @param nIteration 
     * @param cloudwatchLog 
     * @param batchId 
     * @param runId 
     * @param viewAnalyzer view analyzer result
     * @param plotFunc 
     * @param plotChain 
     * @param plotVar 
     */
    public async viewObject(objid: string, objectType?: 'model' | 'experiment' | 'share' | 'event' | 'callback' | 'relation' | 'data' | 'workflow' | '', shareId?: string, sampledata?: boolean, fmt?: 'csv' | 'grist' | 'arviz', nIteration?: number, cloudwatchLog?: boolean, batchId?: string, runId?: string, viewAnalyzer?: boolean, plotFunc?: string, plotChain?: string, plotVar?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'objid' is not null or undefined
        if (objid === null || objid === undefined) {
            throw new RequiredError("ObjectApi", "viewObject", "objid");
        }














        // Path Params
        const localVarPath = '/api/object/{objid}'
            .replace('{' + 'objid' + '}', encodeURIComponent(String(objid)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (objectType !== undefined) {
            requestContext.setQueryParam("object_type", ObjectSerializer.serialize(objectType, "'model' | 'experiment' | 'share' | 'event' | 'callback' | 'relation' | 'data' | 'workflow' | ''", ""));
        }

        // Query Params
        if (shareId !== undefined) {
            requestContext.setQueryParam("share_id", ObjectSerializer.serialize(shareId, "string", ""));
        }

        // Query Params
        if (sampledata !== undefined) {
            requestContext.setQueryParam("sampledata", ObjectSerializer.serialize(sampledata, "boolean", ""));
        }

        // Query Params
        if (fmt !== undefined) {
            requestContext.setQueryParam("fmt", ObjectSerializer.serialize(fmt, "'csv' | 'grist' | 'arviz'", ""));
        }

        // Query Params
        if (nIteration !== undefined) {
            requestContext.setQueryParam("n_iteration", ObjectSerializer.serialize(nIteration, "number", ""));
        }

        // Query Params
        if (cloudwatchLog !== undefined) {
            requestContext.setQueryParam("cloudwatch_log", ObjectSerializer.serialize(cloudwatchLog, "boolean", ""));
        }

        // Query Params
        if (batchId !== undefined) {
            requestContext.setQueryParam("batch_id", ObjectSerializer.serialize(batchId, "string", ""));
        }

        // Query Params
        if (runId !== undefined) {
            requestContext.setQueryParam("run_id", ObjectSerializer.serialize(runId, "string", ""));
        }

        // Query Params
        if (viewAnalyzer !== undefined) {
            requestContext.setQueryParam("view-analyzer", ObjectSerializer.serialize(viewAnalyzer, "boolean", ""));
        }

        // Query Params
        if (plotFunc !== undefined) {
            requestContext.setQueryParam("plot_func", ObjectSerializer.serialize(plotFunc, "string", ""));
        }

        // Query Params
        if (plotChain !== undefined) {
            requestContext.setQueryParam("plot_chain", ObjectSerializer.serialize(plotChain, "string", ""));
        }

        // Query Params
        if (plotVar !== undefined) {
            requestContext.setQueryParam("plot_var", ObjectSerializer.serialize(plotVar, "string", ""));
        }


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["GlobalAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        // Apply auth methods
        authMethod = _config.authMethods["SharingAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

}

export class ObjectApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createObject
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createObjectWithHttpInfo(response: ResponseContext): Promise<HttpInfo<UUUU4be0e69353a8fb4b4ca5b5b1a94b3f66 >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: UUUU4be0e69353a8fb4b4ca5b5b1a94b3f66 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "UUUU4be0e69353a8fb4b4ca5b5b1a94b3f66", ""
            ) as UUUU4be0e69353a8fb4b4ca5b5b1a94b3f66;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: ErrRsp = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ErrRsp", ""
            ) as ErrRsp;
            throw new ApiException<ErrRsp>(response.httpStatusCode, "Bad Request", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: UUUU4be0e69353a8fb4b4ca5b5b1a94b3f66 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "UUUU4be0e69353a8fb4b4ca5b5b1a94b3f66", ""
            ) as UUUU4be0e69353a8fb4b4ca5b5b1a94b3f66;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteObject
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async deleteObjectWithHttpInfo(response: ResponseContext): Promise<HttpInfo<SuccRspSoftDeletedRsp >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: SuccRspSoftDeletedRsp = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SuccRspSoftDeletedRsp", ""
            ) as SuccRspSoftDeletedRsp;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: ErrRsp = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ErrRsp", ""
            ) as ErrRsp;
            throw new ApiException<ErrRsp>(response.httpStatusCode, "Bad Request", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: SuccRspSoftDeletedRsp = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SuccRspSoftDeletedRsp", ""
            ) as SuccRspSoftDeletedRsp;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listObject
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async listObjectWithHttpInfo(response: ResponseContext): Promise<HttpInfo<UUUU18d10abbf81f28b86769c427804ea587 >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: UUUU18d10abbf81f28b86769c427804ea587 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "UUUU18d10abbf81f28b86769c427804ea587", ""
            ) as UUUU18d10abbf81f28b86769c427804ea587;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: ErrRsp = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ErrRsp", ""
            ) as ErrRsp;
            throw new ApiException<ErrRsp>(response.httpStatusCode, "Bad Request", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: UUUU18d10abbf81f28b86769c427804ea587 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "UUUU18d10abbf81f28b86769c427804ea587", ""
            ) as UUUU18d10abbf81f28b86769c427804ea587;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateObject
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async updateObjectWithHttpInfo(response: ResponseContext): Promise<HttpInfo<UUUUe66fb9eb8c8e63948bf34d0b2349c841 >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: UUUUe66fb9eb8c8e63948bf34d0b2349c841 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "UUUUe66fb9eb8c8e63948bf34d0b2349c841", ""
            ) as UUUUe66fb9eb8c8e63948bf34d0b2349c841;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: ErrRsp = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ErrRsp", ""
            ) as ErrRsp;
            throw new ApiException<ErrRsp>(response.httpStatusCode, "Bad Request", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: UUUUe66fb9eb8c8e63948bf34d0b2349c841 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "UUUUe66fb9eb8c8e63948bf34d0b2349c841", ""
            ) as UUUUe66fb9eb8c8e63948bf34d0b2349c841;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to viewObject
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async viewObjectWithHttpInfo(response: ResponseContext): Promise<HttpInfo<UUUU3901522240c3ec762888a02c13900728 >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: UUUU3901522240c3ec762888a02c13900728 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "UUUU3901522240c3ec762888a02c13900728", ""
            ) as UUUU3901522240c3ec762888a02c13900728;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: ErrRsp = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ErrRsp", ""
            ) as ErrRsp;
            throw new ApiException<ErrRsp>(response.httpStatusCode, "Bad Request", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: UUUU3901522240c3ec762888a02c13900728 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "UUUU3901522240c3ec762888a02c13900728", ""
            ) as UUUU3901522240c3ec762888a02c13900728;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
