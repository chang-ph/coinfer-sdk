import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration} from '../configuration'
import { Observable, of, from } from '../rxjsStub';
import {mergeMap, map} from  '../rxjsStub';
import { Auth0ConfigRsp } from '../models/Auth0ConfigRsp';
import { Auth0LoginRsp } from '../models/Auth0LoginRsp';
import { CloudFunctionKind } from '../models/CloudFunctionKind';
import { CloudFunctionLang } from '../models/CloudFunctionLang';
import { CloudFunctionTag } from '../models/CloudFunctionTag';
import { Code2TokenRsp } from '../models/Code2TokenRsp';
import { CreateCallbackReq } from '../models/CreateCallbackReq';
import { CreateCallbackRsp } from '../models/CreateCallbackRsp';
import { CreateEventReq } from '../models/CreateEventReq';
import { CreateEventRsp } from '../models/CreateEventRsp';
import { CreateExperiment } from '../models/CreateExperiment';
import { CreateExperimentShare } from '../models/CreateExperimentShare';
import { CreateExperimentShareRsp } from '../models/CreateExperimentShareRsp';
import { CreateModel } from '../models/CreateModel';
import { CreateNSampleStatReq } from '../models/CreateNSampleStatReq';
import { CreateObjectReq } from '../models/CreateObjectReq';
import { CreateProtobufMessageReq } from '../models/CreateProtobufMessageReq';
import { CreateRelationReq } from '../models/CreateRelationReq';
import { CreateRelationRsp } from '../models/CreateRelationRsp';
import { CreateTextMessageReq } from '../models/CreateTextMessageReq';
import { CreateToken } from '../models/CreateToken';
import { Data } from '../models/Data';
import { Data1 } from '../models/Data1';
import { Data2 } from '../models/Data2';
import { DataTyping } from '../models/DataTyping';
import { DeleteLinkedAccountReq } from '../models/DeleteLinkedAccountReq';
import { DeleteObject } from '../models/DeleteObject';
import { DeleteTokenReq } from '../models/DeleteTokenReq';
import { DemoListItem } from '../models/DemoListItem';
import { DemoListRsp } from '../models/DemoListRsp';
import { ErrRsp } from '../models/ErrRsp';
import { ExperimentCloudwatchLogRsp } from '../models/ExperimentCloudwatchLogRsp';
import { ExperimentPlotRsp } from '../models/ExperimentPlotRsp';
import { ExperimentRsp } from '../models/ExperimentRsp';
import { ExperimentSampleDataRsp } from '../models/ExperimentSampleDataRsp';
import { GetConfigRsp } from '../models/GetConfigRsp';
import { GetExperimentRunInfoRsp } from '../models/GetExperimentRunInfoRsp';
import { GetExperimentShareRsp } from '../models/GetExperimentShareRsp';
import { GetNotificationReq } from '../models/GetNotificationReq';
import { GetTokensRsp } from '../models/GetTokensRsp';
import { LinkedAccountSchema } from '../models/LinkedAccountSchema';
import { ListExperimentRsp } from '../models/ListExperimentRsp';
import { ListLinkedAccountRsp } from '../models/ListLinkedAccountRsp';
import { ListModelsRspItem } from '../models/ListModelsRspItem';
import { ListObjectTmp } from '../models/ListObjectTmp';
import { ListingRspDataNotificationDict } from '../models/ListingRspDataNotificationDict';
import { ListingRspDataUnionListExperimentRspListModelsRspItemCreateEventRspCreateCallbackRspCreateRelationRsp } from '../models/ListingRspDataUnionListExperimentRspListModelsRspItemCreateEventRspCreateCallbackRspCreateRelationRsp';
import { ListingRspDataUnionListExperimentRspListModelsRspItemCreateEventRspCreateCallbackRspCreateRelationRspObjectsInner } from '../models/ListingRspDataUnionListExperimentRspListModelsRspItemCreateEventRspCreateCallbackRspCreateRelationRspObjectsInner';
import { MarkNotificationReadReq } from '../models/MarkNotificationReadReq';
import { MetaModel } from '../models/MetaModel';
import { ModelContent } from '../models/ModelContent';
import { ModelMeta } from '../models/ModelMeta';
import { ModelMetaInRsp } from '../models/ModelMetaInRsp';
import { ModelTreeNode } from '../models/ModelTreeNode';
import { ModifyCurrentUser } from '../models/ModifyCurrentUser';
import { ModifyToken } from '../models/ModifyToken';
import { NotificationDict } from '../models/NotificationDict';
import { Payload } from '../models/Payload';
import { Payload1 } from '../models/Payload1';
import { RunCloudFunctionScript } from '../models/RunCloudFunctionScript';
import { ShareInfoModel } from '../models/ShareInfoModel';
import { SoftDeletedRsp } from '../models/SoftDeletedRsp';
import { SuccRspAnnotatedUnionExperimentRspListModelsRspItemCreateExperimentShareRspCreateEventRspCreateCallbackRspCreateRelationRspFieldInfoAnnotationNoneTypeRequiredTrueDiscriminatorObjectType } from '../models/SuccRspAnnotatedUnionExperimentRspListModelsRspItemCreateExperimentShareRspCreateEventRspCreateCallbackRspCreateRelationRspFieldInfoAnnotationNoneTypeRequiredTrueDiscriminatorObjectType';
import { SuccRspAnnotatedUnionExperimentRspViewModelsRspViewExperimentShareRspExperimentSampleDataRspExperimentCloudwatchLogRspGetExperimentRunInfoRspExperimentPlotRspFieldInfoAnnotationNoneTypeRequiredTrueDiscriminatorObjectType } from '../models/SuccRspAnnotatedUnionExperimentRspViewModelsRspViewExperimentShareRspExperimentSampleDataRspExperimentCloudwatchLogRspGetExperimentRunInfoRspExperimentPlotRspFieldInfoAnnotationNoneTypeRequiredTrueDiscriminatorObjectType';
import { SuccRspAuth0ConfigRsp } from '../models/SuccRspAuth0ConfigRsp';
import { SuccRspAuth0LoginRsp } from '../models/SuccRspAuth0LoginRsp';
import { SuccRspCode2TokenRsp } from '../models/SuccRspCode2TokenRsp';
import { SuccRspDemoListRsp } from '../models/SuccRspDemoListRsp';
import { SuccRspGetConfigRsp } from '../models/SuccRspGetConfigRsp';
import { SuccRspGetExperimentShareRsp } from '../models/SuccRspGetExperimentShareRsp';
import { SuccRspGetTokensRsp } from '../models/SuccRspGetTokensRsp';
import { SuccRspListGetTokensRsp } from '../models/SuccRspListGetTokensRsp';
import { SuccRspListLinkedAccountRsp } from '../models/SuccRspListLinkedAccountRsp';
import { SuccRspListingRspDataNotificationDict } from '../models/SuccRspListingRspDataNotificationDict';
import { SuccRspListingRspDataUnionListExperimentRspListModelsRspItemCreateEventRspCreateCallbackRspCreateRelationRsp } from '../models/SuccRspListingRspDataUnionListExperimentRspListModelsRspItemCreateEventRspCreateCallbackRspCreateRelationRsp';
import { SuccRspNoneType } from '../models/SuccRspNoneType';
import { SuccRspSoftDeletedRsp } from '../models/SuccRspSoftDeletedRsp';
import { SuccRspUnionExperimentRspViewModelsRspNoneType } from '../models/SuccRspUnionExperimentRspViewModelsRspNoneType';
import { SuccRspUserInfoRsp } from '../models/SuccRspUserInfoRsp';
import { SuccRspUserLoginRsp } from '../models/SuccRspUserLoginRsp';
import { UpdateEventReq } from '../models/UpdateEventReq';
import { UpdateExperiment } from '../models/UpdateExperiment';
import { UpdateModel } from '../models/UpdateModel';
import { UpdateObject } from '../models/UpdateObject';
import { UserInfoRsp } from '../models/UserInfoRsp';
import { UserLogin } from '../models/UserLogin';
import { UserLoginRsp } from '../models/UserLoginRsp';
import { ViewExperimentShareRsp } from '../models/ViewExperimentShareRsp';
import { ViewModelsRsp } from '../models/ViewModelsRsp';
import { ViewObject } from '../models/ViewObject';
import { ViewObjectTmp } from '../models/ViewObjectTmp';

import { AuthorizationApiRequestFactory, AuthorizationApiResponseProcessor} from "../apis/AuthorizationApi";
export class ObservableAuthorizationApi {
    private requestFactory: AuthorizationApiRequestFactory;
    private responseProcessor: AuthorizationApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: AuthorizationApiRequestFactory,
        responseProcessor?: AuthorizationApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new AuthorizationApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new AuthorizationApiResponseProcessor();
    }

    /**
     * Get access token.
     * Access Token
     */
    public accessTokenWithHttpInfo(_options?: Configuration): Observable<HttpInfo<SuccRspCode2TokenRsp>> {
        const requestContextPromise = this.requestFactory.accessToken(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.accessTokenWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get access token.
     * Access Token
     */
    public accessToken(_options?: Configuration): Observable<SuccRspCode2TokenRsp> {
        return this.accessTokenWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<SuccRspCode2TokenRsp>) => apiResponse.data));
    }

    /**
     * Returns the configurations need by the frontend to implement Auth0 login. By using an API to provide this information, we avoid hardcoding them in the frontend code.  This API doen\'t need authorization as it is usually called before login.
     * Get Auth0 login configuration
     */
    public auth0ConfigWithHttpInfo(_options?: Configuration): Observable<HttpInfo<SuccRspAuth0ConfigRsp>> {
        const requestContextPromise = this.requestFactory.auth0Config(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.auth0ConfigWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns the configurations need by the frontend to implement Auth0 login. By using an API to provide this information, we avoid hardcoding them in the frontend code.  This API doen\'t need authorization as it is usually called before login.
     * Get Auth0 login configuration
     */
    public auth0Config(_options?: Configuration): Observable<SuccRspAuth0ConfigRsp> {
        return this.auth0ConfigWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<SuccRspAuth0ConfigRsp>) => apiResponse.data));
    }

    /**
     * This API should be called after the user finishes the Auth0 authorization. So the frontend should be able to obtain an Auth0 token at that point. The API should be called with this token in the `Authorization` header, in the format like `Authorization: Bearer <token>`.  The API will call an Auth0 API to query user information with the token. If it successfully gets it, it means the token is valid. Then the API will either:  1. Retrieve the user object within our system 2. Create a new user within our system  depending on whether a user with the same identity exists in our system.  If everything is okay, the API will return a token which can then be used as an identification to call other APIs. The return format is intentionally designed to keep the same as password login API.
     * Login with Auth0.
     */
    public auth0LoginWithHttpInfo(_options?: Configuration): Observable<HttpInfo<SuccRspAuth0LoginRsp>> {
        const requestContextPromise = this.requestFactory.auth0Login(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.auth0LoginWithHttpInfo(rsp)));
            }));
    }

    /**
     * This API should be called after the user finishes the Auth0 authorization. So the frontend should be able to obtain an Auth0 token at that point. The API should be called with this token in the `Authorization` header, in the format like `Authorization: Bearer <token>`.  The API will call an Auth0 API to query user information with the token. If it successfully gets it, it means the token is valid. Then the API will either:  1. Retrieve the user object within our system 2. Create a new user within our system  depending on whether a user with the same identity exists in our system.  If everything is okay, the API will return a token which can then be used as an identification to call other APIs. The return format is intentionally designed to keep the same as password login API.
     * Login with Auth0.
     */
    public auth0Login(_options?: Configuration): Observable<SuccRspAuth0LoginRsp> {
        return this.auth0LoginWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<SuccRspAuth0LoginRsp>) => apiResponse.data));
    }

    /**
     * Exchange code for access token.
     * Code2Token
     * @param code
     */
    public code2tokenWithHttpInfo(code: string, _options?: Configuration): Observable<HttpInfo<SuccRspCode2TokenRsp>> {
        const requestContextPromise = this.requestFactory.code2token(code, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.code2tokenWithHttpInfo(rsp)));
            }));
    }

    /**
     * Exchange code for access token.
     * Code2Token
     * @param code
     */
    public code2token(code: string, _options?: Configuration): Observable<SuccRspCode2TokenRsp> {
        return this.code2tokenWithHttpInfo(code, _options).pipe(map((apiResponse: HttpInfo<SuccRspCode2TokenRsp>) => apiResponse.data));
    }

    /**
     * This is where the user explicitly creates a new token. The token can be used to call other APIs in the name of the user.
     * Create a new authorization token.
     * @param [createToken]
     */
    public createTokenWithHttpInfo(createToken?: CreateToken, _options?: Configuration): Observable<HttpInfo<SuccRspGetTokensRsp>> {
        const requestContextPromise = this.requestFactory.createToken(createToken, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createTokenWithHttpInfo(rsp)));
            }));
    }

    /**
     * This is where the user explicitly creates a new token. The token can be used to call other APIs in the name of the user.
     * Create a new authorization token.
     * @param [createToken]
     */
    public createToken(createToken?: CreateToken, _options?: Configuration): Observable<SuccRspGetTokensRsp> {
        return this.createTokenWithHttpInfo(createToken, _options).pipe(map((apiResponse: HttpInfo<SuccRspGetTokensRsp>) => apiResponse.data));
    }

    /**
     * Delete linked accounts.
     * Delete Linked Account
     * @param [deletedKey]
     * @param [accounts] account list. List item in format &#x60;&lt;account_type&gt;:&lt;account&gt;&#x60;
     */
    public deleteLinkedAccountWithHttpInfo(deletedKey?: string, accounts?: Array<string>, _options?: Configuration): Observable<HttpInfo<SuccRspSoftDeletedRsp>> {
        const requestContextPromise = this.requestFactory.deleteLinkedAccount(deletedKey, accounts, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteLinkedAccountWithHttpInfo(rsp)));
            }));
    }

    /**
     * Delete linked accounts.
     * Delete Linked Account
     * @param [deletedKey]
     * @param [accounts] account list. List item in format &#x60;&lt;account_type&gt;:&lt;account&gt;&#x60;
     */
    public deleteLinkedAccount(deletedKey?: string, accounts?: Array<string>, _options?: Configuration): Observable<SuccRspSoftDeletedRsp> {
        return this.deleteLinkedAccountWithHttpInfo(deletedKey, accounts, _options).pipe(map((apiResponse: HttpInfo<SuccRspSoftDeletedRsp>) => apiResponse.data));
    }

    /**
     * Delete(invalidate) tokens by their IDs.
     * Delete Token
     * @param [deletedKey]
     * @param [tokens] list of tokens to be deleted
     */
    public deleteTokenWithHttpInfo(deletedKey?: string, tokens?: Array<string>, _options?: Configuration): Observable<HttpInfo<SuccRspSoftDeletedRsp>> {
        const requestContextPromise = this.requestFactory.deleteToken(deletedKey, tokens, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteTokenWithHttpInfo(rsp)));
            }));
    }

    /**
     * Delete(invalidate) tokens by their IDs.
     * Delete Token
     * @param [deletedKey]
     * @param [tokens] list of tokens to be deleted
     */
    public deleteToken(deletedKey?: string, tokens?: Array<string>, _options?: Configuration): Observable<SuccRspSoftDeletedRsp> {
        return this.deleteTokenWithHttpInfo(deletedKey, tokens, _options).pipe(map((apiResponse: HttpInfo<SuccRspSoftDeletedRsp>) => apiResponse.data));
    }

    /**
     * Get the tokens created by the current user.  In our system, there are two kinds of tokens:  1. Tokens created explicitly by user. 2. Tokens created implicitly when a user logs in.  This API only returns the former. The latter should be seen as implementation detail and be invisible to the user.
     * List all of current user\'s tokens.
     */
    public getTokensWithHttpInfo(_options?: Configuration): Observable<HttpInfo<SuccRspListGetTokensRsp>> {
        const requestContextPromise = this.requestFactory.getTokens(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getTokensWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get the tokens created by the current user.  In our system, there are two kinds of tokens:  1. Tokens created explicitly by user. 2. Tokens created implicitly when a user logs in.  This API only returns the former. The latter should be seen as implementation detail and be invisible to the user.
     * List all of current user\'s tokens.
     */
    public getTokens(_options?: Configuration): Observable<SuccRspListGetTokensRsp> {
        return this.getTokensWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<SuccRspListGetTokensRsp>) => apiResponse.data));
    }

    /**
     * Get list of linked account.
     * List Linked Account
     */
    public listLinkedAccountWithHttpInfo(_options?: Configuration): Observable<HttpInfo<SuccRspListLinkedAccountRsp>> {
        const requestContextPromise = this.requestFactory.listLinkedAccount(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listLinkedAccountWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get list of linked account.
     * List Linked Account
     */
    public listLinkedAccount(_options?: Configuration): Observable<SuccRspListLinkedAccountRsp> {
        return this.listLinkedAccountWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<SuccRspListLinkedAccountRsp>) => apiResponse.data));
    }

    /**
     * Modify the property of the current logined user. Currently only login password is supported.
     * Update information of current user.
     * @param modifyCurrentUser
     */
    public modifyCurrentUserWithHttpInfo(modifyCurrentUser: ModifyCurrentUser, _options?: Configuration): Observable<HttpInfo<SuccRspUserInfoRsp>> {
        const requestContextPromise = this.requestFactory.modifyCurrentUser(modifyCurrentUser, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.modifyCurrentUserWithHttpInfo(rsp)));
            }));
    }

    /**
     * Modify the property of the current logined user. Currently only login password is supported.
     * Update information of current user.
     * @param modifyCurrentUser
     */
    public modifyCurrentUser(modifyCurrentUser: ModifyCurrentUser, _options?: Configuration): Observable<SuccRspUserInfoRsp> {
        return this.modifyCurrentUserWithHttpInfo(modifyCurrentUser, _options).pipe(map((apiResponse: HttpInfo<SuccRspUserInfoRsp>) => apiResponse.data));
    }

    /**
     * Modify various property of a token.
     * Update a token by its ID.
     * @param tokenId
     * @param modifyToken
     */
    public modifyTokenWithHttpInfo(tokenId: string, modifyToken: ModifyToken, _options?: Configuration): Observable<HttpInfo<SuccRspGetTokensRsp>> {
        const requestContextPromise = this.requestFactory.modifyToken(tokenId, modifyToken, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.modifyTokenWithHttpInfo(rsp)));
            }));
    }

    /**
     * Modify various property of a token.
     * Update a token by its ID.
     * @param tokenId
     * @param modifyToken
     */
    public modifyToken(tokenId: string, modifyToken: ModifyToken, _options?: Configuration): Observable<SuccRspGetTokensRsp> {
        return this.modifyTokenWithHttpInfo(tokenId, modifyToken, _options).pipe(map((apiResponse: HttpInfo<SuccRspGetTokensRsp>) => apiResponse.data));
    }

    /**
     * Returns the information of the current logined user.
     * Get information of current user.
     */
    public userInfoWithHttpInfo(_options?: Configuration): Observable<HttpInfo<SuccRspUserInfoRsp>> {
        const requestContextPromise = this.requestFactory.userInfo(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.userInfoWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns the information of the current logined user.
     * Get information of current user.
     */
    public userInfo(_options?: Configuration): Observable<SuccRspUserInfoRsp> {
        return this.userInfoWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<SuccRspUserInfoRsp>) => apiResponse.data));
    }

    /**
     * Login in with user name and password.  On success, the return value of the API will be a token which can then be used as an identification to call other APIs.
     * Login with password.
     * @param userLogin
     */
    public userLoginWithHttpInfo(userLogin: UserLogin, _options?: Configuration): Observable<HttpInfo<SuccRspUserLoginRsp>> {
        const requestContextPromise = this.requestFactory.userLogin(userLogin, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.userLoginWithHttpInfo(rsp)));
            }));
    }

    /**
     * Login in with user name and password.  On success, the return value of the API will be a token which can then be used as an identification to call other APIs.
     * Login with password.
     * @param userLogin
     */
    public userLogin(userLogin: UserLogin, _options?: Configuration): Observable<SuccRspUserLoginRsp> {
        return this.userLoginWithHttpInfo(userLogin, _options).pipe(map((apiResponse: HttpInfo<SuccRspUserLoginRsp>) => apiResponse.data));
    }

    /**
     * Log out of the system.
     * Logout the system.
     */
    public userLogoutWithHttpInfo(_options?: Configuration): Observable<HttpInfo<SuccRspNoneType>> {
        const requestContextPromise = this.requestFactory.userLogout(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.userLogoutWithHttpInfo(rsp)));
            }));
    }

    /**
     * Log out of the system.
     * Logout the system.
     */
    public userLogout(_options?: Configuration): Observable<SuccRspNoneType> {
        return this.userLogoutWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<SuccRspNoneType>) => apiResponse.data));
    }

}

import { NotificationApiRequestFactory, NotificationApiResponseProcessor} from "../apis/NotificationApi";
export class ObservableNotificationApi {
    private requestFactory: NotificationApiRequestFactory;
    private responseProcessor: NotificationApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: NotificationApiRequestFactory,
        responseProcessor?: NotificationApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new NotificationApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new NotificationApiResponseProcessor();
    }

    /**
     * Get notification messages targeting the current user.
     * Get notification messsages
     * @param status Filter the notification message by read status
     * @param [pageNo] page number
     * @param [pageSize] page size
     */
    public getNotificationWithHttpInfo(status: 'all' | 'read' | 'unread', pageNo?: number, pageSize?: number, _options?: Configuration): Observable<HttpInfo<SuccRspListingRspDataNotificationDict>> {
        const requestContextPromise = this.requestFactory.getNotification(status, pageNo, pageSize, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getNotificationWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get notification messages targeting the current user.
     * Get notification messsages
     * @param status Filter the notification message by read status
     * @param [pageNo] page number
     * @param [pageSize] page size
     */
    public getNotification(status: 'all' | 'read' | 'unread', pageNo?: number, pageSize?: number, _options?: Configuration): Observable<SuccRspListingRspDataNotificationDict> {
        return this.getNotificationWithHttpInfo(status, pageNo, pageSize, _options).pipe(map((apiResponse: HttpInfo<SuccRspListingRspDataNotificationDict>) => apiResponse.data));
    }

    /**
     * Mark some notification as having been read by user. Listing messages support filtering by read mark.
     * Mark notification messsage as already read
     * @param markNotificationReadReq
     */
    public markNotificationReadWithHttpInfo(markNotificationReadReq: MarkNotificationReadReq, _options?: Configuration): Observable<HttpInfo<SuccRspNoneType>> {
        const requestContextPromise = this.requestFactory.markNotificationRead(markNotificationReadReq, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.markNotificationReadWithHttpInfo(rsp)));
            }));
    }

    /**
     * Mark some notification as having been read by user. Listing messages support filtering by read mark.
     * Mark notification messsage as already read
     * @param markNotificationReadReq
     */
    public markNotificationRead(markNotificationReadReq: MarkNotificationReadReq, _options?: Configuration): Observable<SuccRspNoneType> {
        return this.markNotificationReadWithHttpInfo(markNotificationReadReq, _options).pipe(map((apiResponse: HttpInfo<SuccRspNoneType>) => apiResponse.data));
    }

}

import { ObjectApiRequestFactory, ObjectApiResponseProcessor} from "../apis/ObjectApi";
export class ObservableObjectApi {
    private requestFactory: ObjectApiRequestFactory;
    private responseProcessor: ObjectApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: ObjectApiRequestFactory,
        responseProcessor?: ObjectApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ObjectApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ObjectApiResponseProcessor();
    }

    /**
     * Create new object.  ### Example Create model: ``` POST /api/object {     \"payload\": {         \"object_type\": \"model\",         \"name\": \"model name\",         \"type\": \"local\",         \"content\": {             \"meta\": {\"entrance_file\": \"main.jl\"},             \"tree\": [],         }     } } ```  Create model from GitHub repo: ``` POST /api/object {     \"payload\": {         \"object_type\": \"model\",         \"repo\": \"vectorly-ai/simple-model\",         \"branch\": \"main\",         \"type\": \"repo\",     } } ```  Create model from GitHub gist: ``` POST /api/object {     \"payload\": {         \"object_type\": \"model\",         \"repo\": \"<the-gist-id>\",         \"type\": \"gist\",     } } ```  Create experiment: ``` POST /api/object {     \"payload\": {         \"object_type\": \"experiment\",         \"name\": \"experiment name\",         \"model_id\": \"M1234567\",     } } ```  Create share of experiment: ``` POST /api/object {     \"payload\": {         \"object_type\": \"share\",         \"objid\": \"X1234567\",         \"password\": \"the-pass\",     } } ```
     * Create new object.
     * @param createObjectReq
     */
    public createObjectWithHttpInfo(createObjectReq: CreateObjectReq, _options?: Configuration): Observable<HttpInfo<SuccRspAnnotatedUnionExperimentRspListModelsRspItemCreateExperimentShareRspCreateEventRspCreateCallbackRspCreateRelationRspFieldInfoAnnotationNoneTypeRequiredTrueDiscriminatorObjectType>> {
        const requestContextPromise = this.requestFactory.createObject(createObjectReq, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createObjectWithHttpInfo(rsp)));
            }));
    }

    /**
     * Create new object.  ### Example Create model: ``` POST /api/object {     \"payload\": {         \"object_type\": \"model\",         \"name\": \"model name\",         \"type\": \"local\",         \"content\": {             \"meta\": {\"entrance_file\": \"main.jl\"},             \"tree\": [],         }     } } ```  Create model from GitHub repo: ``` POST /api/object {     \"payload\": {         \"object_type\": \"model\",         \"repo\": \"vectorly-ai/simple-model\",         \"branch\": \"main\",         \"type\": \"repo\",     } } ```  Create model from GitHub gist: ``` POST /api/object {     \"payload\": {         \"object_type\": \"model\",         \"repo\": \"<the-gist-id>\",         \"type\": \"gist\",     } } ```  Create experiment: ``` POST /api/object {     \"payload\": {         \"object_type\": \"experiment\",         \"name\": \"experiment name\",         \"model_id\": \"M1234567\",     } } ```  Create share of experiment: ``` POST /api/object {     \"payload\": {         \"object_type\": \"share\",         \"objid\": \"X1234567\",         \"password\": \"the-pass\",     } } ```
     * Create new object.
     * @param createObjectReq
     */
    public createObject(createObjectReq: CreateObjectReq, _options?: Configuration): Observable<SuccRspAnnotatedUnionExperimentRspListModelsRspItemCreateExperimentShareRspCreateEventRspCreateCallbackRspCreateRelationRspFieldInfoAnnotationNoneTypeRequiredTrueDiscriminatorObjectType> {
        return this.createObjectWithHttpInfo(createObjectReq, _options).pipe(map((apiResponse: HttpInfo<SuccRspAnnotatedUnionExperimentRspListModelsRspItemCreateExperimentShareRspCreateEventRspCreateCallbackRspCreateRelationRspFieldInfoAnnotationNoneTypeRequiredTrueDiscriminatorObjectType>) => apiResponse.data));
    }

    /**
     * Delete objects of certain IDs in batch.  ### Example  ``` DELETE /api/object?objids=M1234567&objids=X1234567 ```
     * Delete objects.
     * @param [objids] list of object ids
     * @param [deletedKey]
     */
    public deleteObjectWithHttpInfo(objids?: Array<string>, deletedKey?: string, _options?: Configuration): Observable<HttpInfo<SuccRspSoftDeletedRsp>> {
        const requestContextPromise = this.requestFactory.deleteObject(objids, deletedKey, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteObjectWithHttpInfo(rsp)));
            }));
    }

    /**
     * Delete objects of certain IDs in batch.  ### Example  ``` DELETE /api/object?objids=M1234567&objids=X1234567 ```
     * Delete objects.
     * @param [objids] list of object ids
     * @param [deletedKey]
     */
    public deleteObject(objids?: Array<string>, deletedKey?: string, _options?: Configuration): Observable<SuccRspSoftDeletedRsp> {
        return this.deleteObjectWithHttpInfo(objids, deletedKey, _options).pipe(map((apiResponse: HttpInfo<SuccRspSoftDeletedRsp>) => apiResponse.data));
    }

    /**
     * ### List Objects  By default, the API returns only objects created by the current user, excluding sharing information for performance optimization.  When `shared_with_me` is enabled, the API returns objects owned by other users but shared with the current user, including their sharing details.  Enabling `shared_by_me` will include sharing information for objects that the current user has shared with others.  Setting `with_share_info` to true combines both scenarios: it returns objects shared by the current user as well as objects shared with the current user, complete with their respective sharing information. This effectively merges the functionality of both `shared_by_me` and `shared_with_me`.  ### Example  List models: ``` GET /api/object?object_type=model GET /api/object?object_type=model&shared_by_me=true GET /api/object?object_type=model&shared_with_me=true GET /api/object?object_type=model&with_share_info=true ```  List experiments: ``` GET /api/object?object_type=experiment GET /api/object?object_type=experiment&shared_by_me=true GET /api/object?object_type=experiment&shared_with_me=true GET /api/object?object_type=experiment&with_share_info=true ```
     * List objects.
     * @param objectType
     * @param [pageNo] page number
     * @param [pageSize] page size
     * @param [withShareInfo] Whether to return the related share info
     * @param [sharedByMe] Filter objects shared by the current user
     * @param [sharedWithMe] Filter objects shared with the current user
     * @param [modelIds]
     * @param [status]
     * @param [runOn]
     * @param [hasModel]
     * @param [tags] Filter by tags
     */
    public listObjectWithHttpInfo(objectType: 'model' | 'experiment' | 'share' | 'event' | 'callback' | 'relation' | '', pageNo?: number, pageSize?: number, withShareInfo?: boolean, sharedByMe?: boolean, sharedWithMe?: boolean, modelIds?: Array<string>, status?: 'NEW' | 'RUN' | 'FIN' | 'ERR' | '', runOn?: 'Lambda' | 'Fargate' | 'Local' | '', hasModel?: 'true' | 'false' | '', tags?: Array<'internal' | 'builtin' | 'reserved' | 'model' | 'code'>, _options?: Configuration): Observable<HttpInfo<SuccRspListingRspDataUnionListExperimentRspListModelsRspItemCreateEventRspCreateCallbackRspCreateRelationRsp>> {
        const requestContextPromise = this.requestFactory.listObject(objectType, pageNo, pageSize, withShareInfo, sharedByMe, sharedWithMe, modelIds, status, runOn, hasModel, tags, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listObjectWithHttpInfo(rsp)));
            }));
    }

    /**
     * ### List Objects  By default, the API returns only objects created by the current user, excluding sharing information for performance optimization.  When `shared_with_me` is enabled, the API returns objects owned by other users but shared with the current user, including their sharing details.  Enabling `shared_by_me` will include sharing information for objects that the current user has shared with others.  Setting `with_share_info` to true combines both scenarios: it returns objects shared by the current user as well as objects shared with the current user, complete with their respective sharing information. This effectively merges the functionality of both `shared_by_me` and `shared_with_me`.  ### Example  List models: ``` GET /api/object?object_type=model GET /api/object?object_type=model&shared_by_me=true GET /api/object?object_type=model&shared_with_me=true GET /api/object?object_type=model&with_share_info=true ```  List experiments: ``` GET /api/object?object_type=experiment GET /api/object?object_type=experiment&shared_by_me=true GET /api/object?object_type=experiment&shared_with_me=true GET /api/object?object_type=experiment&with_share_info=true ```
     * List objects.
     * @param objectType
     * @param [pageNo] page number
     * @param [pageSize] page size
     * @param [withShareInfo] Whether to return the related share info
     * @param [sharedByMe] Filter objects shared by the current user
     * @param [sharedWithMe] Filter objects shared with the current user
     * @param [modelIds]
     * @param [status]
     * @param [runOn]
     * @param [hasModel]
     * @param [tags] Filter by tags
     */
    public listObject(objectType: 'model' | 'experiment' | 'share' | 'event' | 'callback' | 'relation' | '', pageNo?: number, pageSize?: number, withShareInfo?: boolean, sharedByMe?: boolean, sharedWithMe?: boolean, modelIds?: Array<string>, status?: 'NEW' | 'RUN' | 'FIN' | 'ERR' | '', runOn?: 'Lambda' | 'Fargate' | 'Local' | '', hasModel?: 'true' | 'false' | '', tags?: Array<'internal' | 'builtin' | 'reserved' | 'model' | 'code'>, _options?: Configuration): Observable<SuccRspListingRspDataUnionListExperimentRspListModelsRspItemCreateEventRspCreateCallbackRspCreateRelationRsp> {
        return this.listObjectWithHttpInfo(objectType, pageNo, pageSize, withShareInfo, sharedByMe, sharedWithMe, modelIds, status, runOn, hasModel, tags, _options).pipe(map((apiResponse: HttpInfo<SuccRspListingRspDataUnionListExperimentRspListModelsRspItemCreateEventRspCreateCallbackRspCreateRelationRsp>) => apiResponse.data));
    }

    /**
     * Update object of certain ID.  ### Example  Update model: ``` POST /api/object/M1234567  {     \"payload\": {         \"object_type\": \"model\",         \"name\": \"model name\",         \"content\": {             \"meta\": {\"entrance_file\": \"main.jl\"},             \"tree\": [],         }     } } ```  Update experiment: ``` POST /api/object/X1234567  {     \"payload\": {         \"object_type\": \"experiment\",         \"name\": \"experiment name\",     } } ```
     * Update object.
     * @param objid
     * @param updateObject
     */
    public updateObjectWithHttpInfo(objid: string, updateObject: UpdateObject, _options?: Configuration): Observable<HttpInfo<SuccRspUnionExperimentRspViewModelsRspNoneType>> {
        const requestContextPromise = this.requestFactory.updateObject(objid, updateObject, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateObjectWithHttpInfo(rsp)));
            }));
    }

    /**
     * Update object of certain ID.  ### Example  Update model: ``` POST /api/object/M1234567  {     \"payload\": {         \"object_type\": \"model\",         \"name\": \"model name\",         \"content\": {             \"meta\": {\"entrance_file\": \"main.jl\"},             \"tree\": [],         }     } } ```  Update experiment: ``` POST /api/object/X1234567  {     \"payload\": {         \"object_type\": \"experiment\",         \"name\": \"experiment name\",     } } ```
     * Update object.
     * @param objid
     * @param updateObject
     */
    public updateObject(objid: string, updateObject: UpdateObject, _options?: Configuration): Observable<SuccRspUnionExperimentRspViewModelsRspNoneType> {
        return this.updateObjectWithHttpInfo(objid, updateObject, _options).pipe(map((apiResponse: HttpInfo<SuccRspUnionExperimentRspViewModelsRspNoneType>) => apiResponse.data));
    }

    /**
     * View object of certain ID.  ### Example  ``` GET /api/object/M1234567  # view model data GET /api/object/X1234567  # view experiment data GET /api/object/S1234566  # view share data ```
     * View object.
     * @param objid
     * @param [objectType]
     * @param [shareId]                  Only appicable to object_type &#x3D;&#x3D; model or object_type &#x3D;&#x3D; experiment                 If this field is empty, returns the latest version of the objects.                 otherwise returns the specified share snapshot
     * @param [sampledata]
     * @param [fmt]
     * @param [nIteration] Number of iterations to sample
     * @param [cloudwatchLog]
     * @param [batchId]
     * @param [runId]
     * @param [plot] get arviz plot
     */
    public viewObjectWithHttpInfo(objid: string, objectType?: 'model' | 'experiment' | 'share' | 'event' | 'callback' | 'relation' | '', shareId?: string, sampledata?: boolean, fmt?: 'csv' | 'grist' | 'arviz', nIteration?: number, cloudwatchLog?: boolean, batchId?: string, runId?: string, plot?: boolean, _options?: Configuration): Observable<HttpInfo<SuccRspAnnotatedUnionExperimentRspViewModelsRspViewExperimentShareRspExperimentSampleDataRspExperimentCloudwatchLogRspGetExperimentRunInfoRspExperimentPlotRspFieldInfoAnnotationNoneTypeRequiredTrueDiscriminatorObjectType>> {
        const requestContextPromise = this.requestFactory.viewObject(objid, objectType, shareId, sampledata, fmt, nIteration, cloudwatchLog, batchId, runId, plot, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.viewObjectWithHttpInfo(rsp)));
            }));
    }

    /**
     * View object of certain ID.  ### Example  ``` GET /api/object/M1234567  # view model data GET /api/object/X1234567  # view experiment data GET /api/object/S1234566  # view share data ```
     * View object.
     * @param objid
     * @param [objectType]
     * @param [shareId]                  Only appicable to object_type &#x3D;&#x3D; model or object_type &#x3D;&#x3D; experiment                 If this field is empty, returns the latest version of the objects.                 otherwise returns the specified share snapshot
     * @param [sampledata]
     * @param [fmt]
     * @param [nIteration] Number of iterations to sample
     * @param [cloudwatchLog]
     * @param [batchId]
     * @param [runId]
     * @param [plot] get arviz plot
     */
    public viewObject(objid: string, objectType?: 'model' | 'experiment' | 'share' | 'event' | 'callback' | 'relation' | '', shareId?: string, sampledata?: boolean, fmt?: 'csv' | 'grist' | 'arviz', nIteration?: number, cloudwatchLog?: boolean, batchId?: string, runId?: string, plot?: boolean, _options?: Configuration): Observable<SuccRspAnnotatedUnionExperimentRspViewModelsRspViewExperimentShareRspExperimentSampleDataRspExperimentCloudwatchLogRspGetExperimentRunInfoRspExperimentPlotRspFieldInfoAnnotationNoneTypeRequiredTrueDiscriminatorObjectType> {
        return this.viewObjectWithHttpInfo(objid, objectType, shareId, sampledata, fmt, nIteration, cloudwatchLog, batchId, runId, plot, _options).pipe(map((apiResponse: HttpInfo<SuccRspAnnotatedUnionExperimentRspViewModelsRspViewExperimentShareRspExperimentSampleDataRspExperimentCloudwatchLogRspGetExperimentRunInfoRspExperimentPlotRspFieldInfoAnnotationNoneTypeRequiredTrueDiscriminatorObjectType>) => apiResponse.data));
    }

}

import { ShareApiRequestFactory, ShareApiResponseProcessor} from "../apis/ShareApi";
export class ObservableShareApi {
    private requestFactory: ShareApiRequestFactory;
    private responseProcessor: ShareApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: ShareApiRequestFactory,
        responseProcessor?: ShareApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ShareApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ShareApiResponseProcessor();
    }

    /**
     * Get sharing information of an experiment.
     * @param shareId
     */
    public getExperimentShareWithHttpInfo(shareId: string, _options?: Configuration): Observable<HttpInfo<SuccRspGetExperimentShareRsp>> {
        const requestContextPromise = this.requestFactory.getExperimentShare(shareId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getExperimentShareWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get sharing information of an experiment.
     * @param shareId
     */
    public getExperimentShare(shareId: string, _options?: Configuration): Observable<SuccRspGetExperimentShareRsp> {
        return this.getExperimentShareWithHttpInfo(shareId, _options).pipe(map((apiResponse: HttpInfo<SuccRspGetExperimentShareRsp>) => apiResponse.data));
    }

}

import { SystemApiRequestFactory, SystemApiResponseProcessor} from "../apis/SystemApi";
export class ObservableSystemApi {
    private requestFactory: SystemApiRequestFactory;
    private responseProcessor: SystemApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: SystemApiRequestFactory,
        responseProcessor?: SystemApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new SystemApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new SystemApiResponseProcessor();
    }

    /**
     * This API is used to get the configuration about how to run a model. Currently the configuration includes the URL of the proxy lambda function which is used to run the model.
     * Get configuration about how to run a model.
     */
    public configWithHttpInfo(_options?: Configuration): Observable<HttpInfo<SuccRspGetConfigRsp>> {
        const requestContextPromise = this.requestFactory.config(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.configWithHttpInfo(rsp)));
            }));
    }

    /**
     * This API is used to get the configuration about how to run a model. Currently the configuration includes the URL of the proxy lambda function which is used to run the model.
     * Get configuration about how to run a model.
     */
    public config(_options?: Configuration): Observable<SuccRspGetConfigRsp> {
        return this.configWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<SuccRspGetConfigRsp>) => apiResponse.data));
    }

    /**
     * List gallery data.
     */
    public repositoryWithHttpInfo(_options?: Configuration): Observable<HttpInfo<SuccRspDemoListRsp>> {
        const requestContextPromise = this.requestFactory.repository(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.repositoryWithHttpInfo(rsp)));
            }));
    }

    /**
     * List gallery data.
     */
    public repository(_options?: Configuration): Observable<SuccRspDemoListRsp> {
        return this.repositoryWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<SuccRspDemoListRsp>) => apiResponse.data));
    }

}
