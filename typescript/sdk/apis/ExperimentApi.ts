// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { ErrRsp } from '../models/ErrRsp';
import { SuccRspAny } from '../models/SuccRspAny';
import { SuccRspViewCloudwatchLogsRsp } from '../models/SuccRspViewCloudwatchLogsRsp';

/**
 * no description
 */
export class ExperimentApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * [DEPRECATED] Get a link of the notebook in Colab
     *
     * DEPRECATED: Use /sys/colab instead.  Create notebook which can be used to load and visualize the experiment result. Save it to Github and returns a link which can be used to open this notebook in Google Colab
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
     * [DEPRECATED] Get Cloudwatch logs
     *
     * DEPRECATED: Use `/api/object/[experiment_id]?object_type=experiment.cloudwatch` instead.  As logs may contain sensetive info, this api can only be used by admin
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
