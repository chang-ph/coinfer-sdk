// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { SuccRspAny } from '../models/SuccRspAny';

/**
 * no description
 */
export class DownloadApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Download resources.
     *
     * @param objid 
     * @param isCloud is the downloaded package used to run workflow in cloud environment?
     * @param fmt download format, tar.gz or zip
     */
    public async download(objid: string, isCloud?: boolean, fmt?: 'tar.gz' | 'zip', _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'objid' is not null or undefined
        if (objid === null || objid === undefined) {
            throw new RequiredError("DownloadApi", "download", "objid");
        }




        // Path Params
        const localVarPath = '/download/{objid}'
            .replace('{' + 'objid' + '}', encodeURIComponent(String(objid)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (isCloud !== undefined) {
            requestContext.setQueryParam("is_cloud", ObjectSerializer.serialize(isCloud, "boolean", ""));
        }

        // Query Params
        if (fmt !== undefined) {
            requestContext.setQueryParam("fmt", ObjectSerializer.serialize(fmt, "'tar.gz' | 'zip'", ""));
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

}

export class DownloadApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to download
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async downloadWithHttpInfo(response: ResponseContext): Promise<HttpInfo<SuccRspAny >> {
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

}
