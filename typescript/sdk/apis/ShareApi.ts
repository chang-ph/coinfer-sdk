// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { ErrRsp } from '../models/ErrRsp';
import { SuccRspGetExperimentShareRsp } from '../models/SuccRspGetExperimentShareRsp';

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

}
