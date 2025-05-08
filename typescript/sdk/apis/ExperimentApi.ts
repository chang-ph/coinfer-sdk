// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { ErrRsp } from '../models/ErrRsp';
import { ListingRspListObjectRsp } from '../models/ListingRspListObjectRsp';
import { SuccRspAny } from '../models/SuccRspAny';
import { SuccRspGetSampleDataRsp } from '../models/SuccRspGetSampleDataRsp';
import { SuccRspNoneType } from '../models/SuccRspNoneType';
import { SuccRspViewCloudwatchLogsRsp } from '../models/SuccRspViewCloudwatchLogsRsp';
import { UpdateXP } from '../models/UpdateXP';

/**
 * no description
 */
export class ExperimentApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Delete experiments in batch.
     *
     * Delete experiments in batch.  There are two ways to specify the experiments to be deleted: 1. By experiment IDs. In this case all experiments with the specified IDs will be deleted. 2. By model IDs. In this case all experiments with the specified model IDs will be deleted.
     * @param objids 
     * @param modelIds 
     */
    public async batchDeleteExperiment(objids?: Array<string>, modelIds?: Array<string>, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;



        // Path Params
        const localVarPath = '/mcmc/object';

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
        if (modelIds !== undefined) {
            const serializedParams = ObjectSerializer.serialize(modelIds, "Array<string>", "");
            for (const serializedParam of serializedParams) {
                requestContext.appendQueryParam("model_ids", serializedParam);
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
     * Create an experiment.
     *
     * The API allows you to create a new experiment.
     */
    public async createObjectV1(_options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // Path Params
        const localVarPath = '/mcmc/object';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
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
     * Delete a data object by its ID.
     *
     * NOTE: the \'D\' prefix in URL is part of the ID.
     * @param objid 
     */
    public async deleteData(objid: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'objid' is not null or undefined
        if (objid === null || objid === undefined) {
            throw new RequiredError("ExperimentApi", "deleteData", "objid");
        }


        // Path Params
        const localVarPath = '/mcmc/object/D{objid}'
            .replace('{' + 'objid' + '}', encodeURIComponent(String(objid)));

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
     * Download a notebook which can be used to load and visualize the experiment result
     *
     * @param expid 
     */
    public async experimentNotebook(expid: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'expid' is not null or undefined
        if (expid === null || expid === undefined) {
            throw new RequiredError("ExperimentApi", "experimentNotebook", "expid");
        }


        // Path Params
        const localVarPath = '/mcmc/experiment/{expid}/notebook'
            .replace('{' + 'expid' + '}', encodeURIComponent(String(expid)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
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
     * Get a link of the notebook in Colab
     *
     * Create notebook which can be used to load and visualize the experiment result. Save it to Github and returns a link which can be used to open this notebook in Google Colab
     * @param expid 
     */
    public async experimentNotebookColab(expid: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'expid' is not null or undefined
        if (expid === null || expid === undefined) {
            throw new RequiredError("ExperimentApi", "experimentNotebookColab", "expid");
        }


        // Path Params
        const localVarPath = '/mcmc/experiment/{expid}/notebook/colab'
            .replace('{' + 'expid' + '}', encodeURIComponent(String(expid)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
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
     * Get sample data
     *
     * It takes time for the system to build the sample data file.  If the sample data file not ready yet, the API will return with the `progress` field set to `generating` and the sample data file is then generating in the background by the system. You may need to call this API later to see if the sample data is ready.  If it is ready, the API will return with the `progress` field set to `done` and the `url` field is the presigned URL of the sample data file.
     * @param experimentId 
     * @param fmt 
     */
    public async getSampleData(experimentId: string, fmt: 'csv' | 'grist', _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'experimentId' is not null or undefined
        if (experimentId === null || experimentId === undefined) {
            throw new RequiredError("ExperimentApi", "getSampleData", "experimentId");
        }


        // verify required parameter 'fmt' is not null or undefined
        if (fmt === null || fmt === undefined) {
            throw new RequiredError("ExperimentApi", "getSampleData", "fmt");
        }


        // Path Params
        const localVarPath = '/mcmc/experiment/{experiment_id}/sampledata/{fmt}'
            .replace('{' + 'experiment_id' + '}', encodeURIComponent(String(experimentId)))
            .replace('{' + 'fmt' + '}', encodeURIComponent(String(fmt)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        let authMethod: SecurityAuthentication | undefined;
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

    /**
     * List experiments or data.
     *
     * ### List Experiment  By default, the API returns only experiments created by the current user, excluding sharing information for performance optimization.  When `shared_with_me` is enabled, the API returns experiments owned by other users but shared with the current user, including their sharing details.  Enabling `shared_by_me` will include sharing information for experiments that the current user has shared with others.  Setting `with_share_info` to true combines both scenarios: it returns experiments shared by the current user as well as experiments shared with the current user, complete with their respective sharing information. This effectively merges the functionality of both `shared_by_me` and `shared_with_me`.
     * @param pageNo 
     * @param pageSize 
     * @param withShareInfo Whether to return the related share info
     * @param sharedByMe Filter experiments shared by the current user
     * @param sharedWithMe Filter experiments shared with the current user
     * @param objectType 
     * @param status 
     * @param runOn 
     * @param hasModel 
     */
    public async listObjects(pageNo?: number, pageSize?: number, withShareInfo?: boolean, sharedByMe?: boolean, sharedWithMe?: boolean, objectType?: 'data' | 'experiment', status?: 'NEW' | 'RUN' | 'FIN' | 'ERR' | '', runOn?: 'Lambda' | 'Fargate' | 'Local' | '', hasModel?: 'true' | 'false' | '', _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;










        // Path Params
        const localVarPath = '/mcmc/object';

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
        if (objectType !== undefined) {
            requestContext.setQueryParam("object_type", ObjectSerializer.serialize(objectType, "'data' | 'experiment'", ""));
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
     * Update a data object by its ID.
     *
     * NOTE: the \'D\' prefix in URL is part of the ID.
     * @param objid 
     * @param fmt 
     * @param file 
     * @param use 
     */
    public async updateData(objid: string, fmt: string, file: HttpFile, use?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'objid' is not null or undefined
        if (objid === null || objid === undefined) {
            throw new RequiredError("ExperimentApi", "updateData", "objid");
        }


        // verify required parameter 'fmt' is not null or undefined
        if (fmt === null || fmt === undefined) {
            throw new RequiredError("ExperimentApi", "updateData", "fmt");
        }


        // verify required parameter 'file' is not null or undefined
        if (file === null || file === undefined) {
            throw new RequiredError("ExperimentApi", "updateData", "file");
        }



        // Path Params
        const localVarPath = '/mcmc/object/D{objid}'
            .replace('{' + 'objid' + '}', encodeURIComponent(String(objid)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Form Params
        const useForm = canConsumeForm([
            'multipart/form-data',
        ]);

        let localVarFormParams
        if (useForm) {
            localVarFormParams = new FormData();
        } else {
            localVarFormParams = new URLSearchParams();
        }

        if (use !== undefined) {
             // TODO: replace .append with .set
             localVarFormParams.append('use', use as any);
        }
        if (fmt !== undefined) {
             // TODO: replace .append with .set
             localVarFormParams.append('fmt', fmt as any);
        }
        if (file !== undefined) {
             // TODO: replace .append with .set
             if (localVarFormParams instanceof FormData) {
                 localVarFormParams.append('file', file, file.name);
             }
        }

        requestContext.setBody(localVarFormParams);

        if(!useForm) {
            const contentType = ObjectSerializer.getPreferredMediaType([
                "multipart/form-data"
            ]);
            requestContext.setHeaderParam("Content-Type", contentType);
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
     * Update an experiment by its ID.
     *
     * NOTE: the \'D\' prefix in URL is part of the ID.  NOTE: The status of experiment is manipulated by the system. So normally you should not call this API to update the status.
     * @param objid 
     * @param updateXP 
     */
    public async updateExperiment(objid: string, updateXP: UpdateXP, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'objid' is not null or undefined
        if (objid === null || objid === undefined) {
            throw new RequiredError("ExperimentApi", "updateExperiment", "objid");
        }


        // verify required parameter 'updateXP' is not null or undefined
        if (updateXP === null || updateXP === undefined) {
            throw new RequiredError("ExperimentApi", "updateExperiment", "updateXP");
        }


        // Path Params
        const localVarPath = '/mcmc/object/X{objid}'
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
            ObjectSerializer.serialize(updateXP, "UpdateXP", ""),
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
     * View a data object by its ID.
     *
     * NOTE: the \'D\' prefix in URL is part of the ID.
     * @param objid 
     */
    public async viewData(objid: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'objid' is not null or undefined
        if (objid === null || objid === undefined) {
            throw new RequiredError("ExperimentApi", "viewData", "objid");
        }


        // Path Params
        const localVarPath = '/mcmc/object/D{objid}'
            .replace('{' + 'objid' + '}', encodeURIComponent(String(objid)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
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
     * View an experiment by its ID.
     *
     * NOTE: the \'D\' prefix in URL is part of the ID.  This API is primarily designed for experiment owners to view their experiments, requiring a valid access token for authentication.  For shared experiments, access is granted based on the sharing configuration: 1. Password-protected sharing: Requires the share password for access, eg. `X-Share-Password` in the header 2. Public sharing: Allows access without any password 3. User-specific sharing: Permits access for designated users without requiring a password
     * @param objid 
     * @param o 
     * @param log 
     */
    public async viewExperiment(objid: string, o?: string, log?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'objid' is not null or undefined
        if (objid === null || objid === undefined) {
            throw new RequiredError("ExperimentApi", "viewExperiment", "objid");
        }




        // Path Params
        const localVarPath = '/mcmc/object/X{objid}'
            .replace('{' + 'objid' + '}', encodeURIComponent(String(objid)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (o !== undefined) {
            requestContext.setQueryParam("o", ObjectSerializer.serialize(o, "string", ""));
        }

        // Query Params
        if (log !== undefined) {
            requestContext.setQueryParam("log", ObjectSerializer.serialize(log, "string", ""));
        }


        let authMethod: SecurityAuthentication | undefined;
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

    /**
     * Get Cloudwatch logs
     *
     * As logs may contain sensetive info, this api can only be used by admin
     * @param objid 
     */
    public async viewXpCloudwatchLogs(objid: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'objid' is not null or undefined
        if (objid === null || objid === undefined) {
            throw new RequiredError("ExperimentApi", "viewXpCloudwatchLogs", "objid");
        }


        // Path Params
        const localVarPath = '/mcmc/object/{objid}/cloudwatch-logs'
            .replace('{' + 'objid' + '}', encodeURIComponent(String(objid)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
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

}

export class ExperimentApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to batchDeleteExperiment
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async batchDeleteExperimentWithHttpInfo(response: ResponseContext): Promise<HttpInfo<SuccRspNoneType >> {
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
     * @params response Response returned by the server for a request to createObjectV1
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createObjectV1WithHttpInfo(response: ResponseContext): Promise<HttpInfo<SuccRspAny >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: SuccRspAny = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SuccRspAny", ""
            ) as SuccRspAny;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: SuccRspAny = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SuccRspAny", ""
            ) as SuccRspAny;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteData
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async deleteDataWithHttpInfo(response: ResponseContext): Promise<HttpInfo<SuccRspNoneType >> {
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
     * @params response Response returned by the server for a request to experimentNotebook
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async experimentNotebookWithHttpInfo(response: ResponseContext): Promise<HttpInfo<SuccRspAny >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: SuccRspAny = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SuccRspAny", ""
            ) as SuccRspAny;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: SuccRspAny = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SuccRspAny", ""
            ) as SuccRspAny;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to experimentNotebookColab
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async experimentNotebookColabWithHttpInfo(response: ResponseContext): Promise<HttpInfo<SuccRspAny >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: SuccRspAny = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SuccRspAny", ""
            ) as SuccRspAny;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: SuccRspAny = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SuccRspAny", ""
            ) as SuccRspAny;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getSampleData
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getSampleDataWithHttpInfo(response: ResponseContext): Promise<HttpInfo<SuccRspGetSampleDataRsp >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: SuccRspGetSampleDataRsp = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SuccRspGetSampleDataRsp", ""
            ) as SuccRspGetSampleDataRsp;
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
            const body: SuccRspGetSampleDataRsp = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SuccRspGetSampleDataRsp", ""
            ) as SuccRspGetSampleDataRsp;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listObjects
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async listObjectsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ListingRspListObjectRsp >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ListingRspListObjectRsp = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ListingRspListObjectRsp", ""
            ) as ListingRspListObjectRsp;
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
            const body: ListingRspListObjectRsp = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ListingRspListObjectRsp", ""
            ) as ListingRspListObjectRsp;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateData
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async updateDataWithHttpInfo(response: ResponseContext): Promise<HttpInfo<SuccRspAny >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: SuccRspAny = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SuccRspAny", ""
            ) as SuccRspAny;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: SuccRspAny = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SuccRspAny", ""
            ) as SuccRspAny;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateExperiment
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async updateExperimentWithHttpInfo(response: ResponseContext): Promise<HttpInfo<SuccRspAny >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: SuccRspAny = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SuccRspAny", ""
            ) as SuccRspAny;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: SuccRspAny = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SuccRspAny", ""
            ) as SuccRspAny;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to viewData
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async viewDataWithHttpInfo(response: ResponseContext): Promise<HttpInfo<SuccRspAny >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: SuccRspAny = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SuccRspAny", ""
            ) as SuccRspAny;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: SuccRspAny = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SuccRspAny", ""
            ) as SuccRspAny;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to viewExperiment
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async viewExperimentWithHttpInfo(response: ResponseContext): Promise<HttpInfo<SuccRspAny >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: SuccRspAny = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SuccRspAny", ""
            ) as SuccRspAny;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: SuccRspAny = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SuccRspAny", ""
            ) as SuccRspAny;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to viewXpCloudwatchLogs
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async viewXpCloudwatchLogsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<SuccRspViewCloudwatchLogsRsp >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: SuccRspViewCloudwatchLogsRsp = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SuccRspViewCloudwatchLogsRsp", ""
            ) as SuccRspViewCloudwatchLogsRsp;
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
            const body: SuccRspViewCloudwatchLogsRsp = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SuccRspViewCloudwatchLogsRsp", ""
            ) as SuccRspViewCloudwatchLogsRsp;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
