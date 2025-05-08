// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { CreateExperimentShare } from '../models/CreateExperimentShare';
import { CreateModelShare } from '../models/CreateModelShare';
import { ErrRsp } from '../models/ErrRsp';
import { SuccRspCreateExperimentShareRsp } from '../models/SuccRspCreateExperimentShareRsp';
import { SuccRspCreateModelShareRsp } from '../models/SuccRspCreateModelShareRsp';
import { SuccRspGetExperimentShareRsp } from '../models/SuccRspGetExperimentShareRsp';
import { SuccRspGetModelShareRsp } from '../models/SuccRspGetModelShareRsp';
import { SuccRspNoneType } from '../models/SuccRspNoneType';

/**
 * no description
 */
export class ShareApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Get sharing information of an experiment.
     *
     * @param shareId 
     */
    public async coinferApisNoAuthApiGetExperimentShare(shareId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'shareId' is not null or undefined
        if (shareId === null || shareId === undefined) {
            throw new RequiredError("ShareApi", "coinferApisNoAuthApiGetExperimentShare", "shareId");
        }


        // Path Params
        const localVarPath = '/api/object/share/{share_id}'
            .replace('{' + 'share_id' + '}', encodeURIComponent(String(shareId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Share an experiment.
     *
     * Share an experiment specified by experiment ID.  Currently we support three types of sharing:  1. Public sharing: The experiment is shared publicly. Create a public share by not specifying `target_user` and share password in the request body.  2. User-specific sharing: The experiment is shared with a specific user. Create a user-specific share by specifying `target_user` in the request body. The `target_user` should be in the format of `name(@id)`. This is exactly the format what the user info API returns.  3. Password-protected sharing: The experiment is shared with a password. Create a password-protected share by specifying `password` in the request body.
     * @param expId 
     * @param createExperimentShare 
     */
    public async createExperimentShare(expId: string, createExperimentShare: CreateExperimentShare, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'expId' is not null or undefined
        if (expId === null || expId === undefined) {
            throw new RequiredError("ShareApi", "createExperimentShare", "expId");
        }


        // verify required parameter 'createExperimentShare' is not null or undefined
        if (createExperimentShare === null || createExperimentShare === undefined) {
            throw new RequiredError("ShareApi", "createExperimentShare", "createExperimentShare");
        }


        // Path Params
        const localVarPath = '/mcmc/experiment/{exp_id}/share'
            .replace('{' + 'exp_id' + '}', encodeURIComponent(String(expId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(createExperimentShare, "CreateExperimentShare", ""),
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
     * Share a model specified by model ID.
     *
     * Share a model specified by model ID.  Currently we support three types of sharing:  1. Public sharing: The model is shared publicly. Create a public share by not specifying `target_user` and share password in the request body.  2. User-specific sharing: The model is shared with a specific user. Create a user-specific share by specifying `target_user` in the request body. The `target_user` should be in the format of `name(@id)`. This is exactly the format what the user info API returns.  3. Password-protected sharing: The model is shared with a password. Create a password-protected share by specifying `password` in the request body.
     * @param modelId 
     * @param createModelShare 
     */
    public async createModelShare(modelId: string, createModelShare: CreateModelShare, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'modelId' is not null or undefined
        if (modelId === null || modelId === undefined) {
            throw new RequiredError("ShareApi", "createModelShare", "modelId");
        }


        // verify required parameter 'createModelShare' is not null or undefined
        if (createModelShare === null || createModelShare === undefined) {
            throw new RequiredError("ShareApi", "createModelShare", "createModelShare");
        }


        // Path Params
        const localVarPath = '/turing/model/{model_id}/share'
            .replace('{' + 'model_id' + '}', encodeURIComponent(String(modelId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(createModelShare, "CreateModelShare", ""),
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
     * Delete experiment shares.
     *
     * Deletion in batch is supported by passing \"-\" separated share ids in the path param.
     * @param shareId \&quot;-\&quot;separated share ids
     */
    public async deleteExperimentShare(shareId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'shareId' is not null or undefined
        if (shareId === null || shareId === undefined) {
            throw new RequiredError("ShareApi", "deleteExperimentShare", "shareId");
        }


        // Path Params
        const localVarPath = '/mcmc/experiment/share/{share_id}'
            .replace('{' + 'share_id' + '}', encodeURIComponent(String(shareId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.DELETE);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


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
     * Delete model shares.
     *
     *      
     * @param shareId \&quot;-\&quot;separated share ids
     */
    public async deleteModelShare(shareId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'shareId' is not null or undefined
        if (shareId === null || shareId === undefined) {
            throw new RequiredError("ShareApi", "deleteModelShare", "shareId");
        }


        // Path Params
        const localVarPath = '/turing/model/share/{share_id}'
            .replace('{' + 'share_id' + '}', encodeURIComponent(String(shareId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.DELETE);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


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
     * Get sharing information of an experiment.
     *
     * Returns very basic sharing info without any authorization. Currently it only returns one field `require_password`, which is used when opening a share URL. If `require_password` is true, then a password input box is open. Else the page should be directly displayed.
     * @param shareId 
     */
    public async getExperimentShare(shareId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'shareId' is not null or undefined
        if (shareId === null || shareId === undefined) {
            throw new RequiredError("ShareApi", "getExperimentShare", "shareId");
        }


        // Path Params
        const localVarPath = '/mcmc/experiment/share/{share_id}'
            .replace('{' + 'share_id' + '}', encodeURIComponent(String(shareId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Get basic share information of a model sharing.
     *
     * Returns very basic share information without authorization. Currently it only returns one field `require_password`, which is used when opening a share URL. If `require_password` is true, then a password input box is open. Else the page should be directly displayed.
     * @param shareId 
     */
    public async getModelShare(shareId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'shareId' is not null or undefined
        if (shareId === null || shareId === undefined) {
            throw new RequiredError("ShareApi", "getModelShare", "shareId");
        }


        // Path Params
        const localVarPath = '/turing/model/share/{share_id}'
            .replace('{' + 'share_id' + '}', encodeURIComponent(String(shareId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

}

export class ShareApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to coinferApisNoAuthApiGetExperimentShare
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async coinferApisNoAuthApiGetExperimentShareWithHttpInfo(response: ResponseContext): Promise<HttpInfo<SuccRspGetExperimentShareRsp >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: SuccRspGetExperimentShareRsp = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SuccRspGetExperimentShareRsp", ""
            ) as SuccRspGetExperimentShareRsp;
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
            const body: SuccRspGetExperimentShareRsp = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SuccRspGetExperimentShareRsp", ""
            ) as SuccRspGetExperimentShareRsp;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createExperimentShare
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createExperimentShareWithHttpInfo(response: ResponseContext): Promise<HttpInfo<SuccRspCreateExperimentShareRsp >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: SuccRspCreateExperimentShareRsp = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SuccRspCreateExperimentShareRsp", ""
            ) as SuccRspCreateExperimentShareRsp;
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
            const body: SuccRspCreateExperimentShareRsp = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SuccRspCreateExperimentShareRsp", ""
            ) as SuccRspCreateExperimentShareRsp;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createModelShare
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createModelShareWithHttpInfo(response: ResponseContext): Promise<HttpInfo<SuccRspCreateModelShareRsp >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: SuccRspCreateModelShareRsp = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SuccRspCreateModelShareRsp", ""
            ) as SuccRspCreateModelShareRsp;
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
            const body: SuccRspCreateModelShareRsp = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SuccRspCreateModelShareRsp", ""
            ) as SuccRspCreateModelShareRsp;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteExperimentShare
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async deleteExperimentShareWithHttpInfo(response: ResponseContext): Promise<HttpInfo<SuccRspNoneType >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: SuccRspNoneType = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SuccRspNoneType", ""
            ) as SuccRspNoneType;
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
            const body: SuccRspNoneType = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SuccRspNoneType", ""
            ) as SuccRspNoneType;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteModelShare
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async deleteModelShareWithHttpInfo(response: ResponseContext): Promise<HttpInfo<SuccRspNoneType >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: SuccRspNoneType = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SuccRspNoneType", ""
            ) as SuccRspNoneType;
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
            const body: SuccRspNoneType = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SuccRspNoneType", ""
            ) as SuccRspNoneType;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getExperimentShare
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getExperimentShareWithHttpInfo(response: ResponseContext): Promise<HttpInfo<SuccRspGetExperimentShareRsp >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: SuccRspGetExperimentShareRsp = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SuccRspGetExperimentShareRsp", ""
            ) as SuccRspGetExperimentShareRsp;
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
            const body: SuccRspGetExperimentShareRsp = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SuccRspGetExperimentShareRsp", ""
            ) as SuccRspGetExperimentShareRsp;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getModelShare
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getModelShareWithHttpInfo(response: ResponseContext): Promise<HttpInfo<SuccRspGetModelShareRsp >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: SuccRspGetModelShareRsp = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SuccRspGetModelShareRsp", ""
            ) as SuccRspGetModelShareRsp;
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
            const body: SuccRspGetModelShareRsp = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SuccRspGetModelShareRsp", ""
            ) as SuccRspGetModelShareRsp;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
