import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration} from '../configuration'
import { Observable, of, from } from '../rxjsStub';
import {mergeMap, map} from  '../rxjsStub';
import { Auth0ConfigRsp } from '../models/Auth0ConfigRsp';
import { Auth0LoginRsp } from '../models/Auth0LoginRsp';
import { CloudFunctionKind } from '../models/CloudFunctionKind';
import { CloudFunctionLang } from '../models/CloudFunctionLang';
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
import { DeleteObject } from '../models/DeleteObject';
import { ErrRsp } from '../models/ErrRsp';
import { ExperimentCloudwatchLogRsp } from '../models/ExperimentCloudwatchLogRsp';
import { ExperimentRsp } from '../models/ExperimentRsp';
import { ExperimentSampleDataRsp } from '../models/ExperimentSampleDataRsp';
import { GetConfigRsp } from '../models/GetConfigRsp';
import { GetExperimentRunInfoRsp } from '../models/GetExperimentRunInfoRsp';
import { GetExperimentShareRsp } from '../models/GetExperimentShareRsp';
import { GetNotificationReq } from '../models/GetNotificationReq';
import { GetTokensRsp } from '../models/GetTokensRsp';
import { GistRsp } from '../models/GistRsp';
import { ListBranchRsp } from '../models/ListBranchRsp';
import { ListEvent } from '../models/ListEvent';
import { ListExperiment } from '../models/ListExperiment';
import { ListExperimentRsp } from '../models/ListExperimentRsp';
import { ListGitHubRepository } from '../models/ListGitHubRepository';
import { ListModel } from '../models/ListModel';
import { ListModelsRspItem } from '../models/ListModelsRspItem';
import { ListObjectTmp } from '../models/ListObjectTmp';
import { ListRelation } from '../models/ListRelation';
import { ListRepositoryRsp } from '../models/ListRepositoryRsp';
import { ListShare } from '../models/ListShare';
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
import { Payload2 } from '../models/Payload2';
import { ShareInfoModel } from '../models/ShareInfoModel';
import { SuccRspAnnotatedUnionExperimentRspListModelsRspItemCreateExperimentShareRspCreateEventRspCreateCallbackRspCreateRelationRspFieldInfoAnnotationNoneTypeRequiredTrueDiscriminatorObjectType } from '../models/SuccRspAnnotatedUnionExperimentRspListModelsRspItemCreateExperimentShareRspCreateEventRspCreateCallbackRspCreateRelationRspFieldInfoAnnotationNoneTypeRequiredTrueDiscriminatorObjectType';
import { SuccRspAnnotatedUnionExperimentRspViewModelsRspViewExperimentShareRspExperimentSampleDataRspExperimentCloudwatchLogRspGetExperimentRunInfoRspFieldInfoAnnotationNoneTypeRequiredTrueDiscriminatorObjectType } from '../models/SuccRspAnnotatedUnionExperimentRspViewModelsRspViewExperimentShareRspExperimentSampleDataRspExperimentCloudwatchLogRspGetExperimentRunInfoRspFieldInfoAnnotationNoneTypeRequiredTrueDiscriminatorObjectType';
import { SuccRspAny } from '../models/SuccRspAny';
import { SuccRspAuth0ConfigRsp } from '../models/SuccRspAuth0ConfigRsp';
import { SuccRspAuth0LoginRsp } from '../models/SuccRspAuth0LoginRsp';
import { SuccRspGetConfigRsp } from '../models/SuccRspGetConfigRsp';
import { SuccRspGetExperimentShareRsp } from '../models/SuccRspGetExperimentShareRsp';
import { SuccRspGetTokensRsp } from '../models/SuccRspGetTokensRsp';
import { SuccRspListBranchRsp } from '../models/SuccRspListBranchRsp';
import { SuccRspListGetTokensRsp } from '../models/SuccRspListGetTokensRsp';
import { SuccRspListRepositoryRsp } from '../models/SuccRspListRepositoryRsp';
import { SuccRspListingRspDataNotificationDict } from '../models/SuccRspListingRspDataNotificationDict';
import { SuccRspListingRspDataUnionListExperimentRspListModelsRspItemCreateEventRspCreateCallbackRspCreateRelationRsp } from '../models/SuccRspListingRspDataUnionListExperimentRspListModelsRspItemCreateEventRspCreateCallbackRspCreateRelationRsp';
import { SuccRspNoneType } from '../models/SuccRspNoneType';
import { SuccRspUnionExperimentRspViewModelsRspNoneType } from '../models/SuccRspUnionExperimentRspViewModelsRspNoneType';
import { SuccRspUserInfoRsp } from '../models/SuccRspUserInfoRsp';
import { SuccRspUserLoginRsp } from '../models/SuccRspUserLoginRsp';
import { SuccRspViewCloudwatchLogsRsp } from '../models/SuccRspViewCloudwatchLogsRsp';
import { UpdateEventReq } from '../models/UpdateEventReq';
import { UpdateExperiment } from '../models/UpdateExperiment';
import { UpdateModel } from '../models/UpdateModel';
import { UpdateObject } from '../models/UpdateObject';
import { UserInfoRsp } from '../models/UserInfoRsp';
import { UserLogin } from '../models/UserLogin';
import { UserLoginRsp } from '../models/UserLoginRsp';
import { ViewCloudwatchLogsRsp } from '../models/ViewCloudwatchLogsRsp';
import { ViewExperimentShareRsp } from '../models/ViewExperimentShareRsp';
import { ViewModelShareInfo } from '../models/ViewModelShareInfo';
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
     * Delete(invalidate) a token.
     * Delete a token by its ID.
     * @param tokenId
     */
    public deleteTokenWithHttpInfo(tokenId: string, _options?: Configuration): Observable<HttpInfo<SuccRspNoneType>> {
        const requestContextPromise = this.requestFactory.deleteToken(tokenId, _options);

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
     * Delete(invalidate) a token.
     * Delete a token by its ID.
     * @param tokenId
     */
    public deleteToken(tokenId: string, _options?: Configuration): Observable<SuccRspNoneType> {
        return this.deleteTokenWithHttpInfo(tokenId, _options).pipe(map((apiResponse: HttpInfo<SuccRspNoneType>) => apiResponse.data));
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

import { ExperimentApiRequestFactory, ExperimentApiResponseProcessor} from "../apis/ExperimentApi";
export class ObservableExperimentApi {
    private requestFactory: ExperimentApiRequestFactory;
    private responseProcessor: ExperimentApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: ExperimentApiRequestFactory,
        responseProcessor?: ExperimentApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ExperimentApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ExperimentApiResponseProcessor();
    }

    /**
     * DEPRECATED: Use /sys/colab instead.  Create notebook which can be used to load and visualize the experiment result. Save it to Github and returns a link which can be used to open this notebook in Google Colab
     * [DEPRECATED] Get a link of the notebook in Colab
     * @param expid
     */
    public experimentNotebookColabWithHttpInfo(expid: string, _options?: Configuration): Observable<HttpInfo<SuccRspAny>> {
        const requestContextPromise = this.requestFactory.experimentNotebookColab(expid, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.experimentNotebookColabWithHttpInfo(rsp)));
            }));
    }

    /**
     * DEPRECATED: Use /sys/colab instead.  Create notebook which can be used to load and visualize the experiment result. Save it to Github and returns a link which can be used to open this notebook in Google Colab
     * [DEPRECATED] Get a link of the notebook in Colab
     * @param expid
     */
    public experimentNotebookColab(expid: string, _options?: Configuration): Observable<SuccRspAny> {
        return this.experimentNotebookColabWithHttpInfo(expid, _options).pipe(map((apiResponse: HttpInfo<SuccRspAny>) => apiResponse.data));
    }

    /**
     * DEPRECATED: Use `/api/object/[experiment_id]?object_type=experiment.cloudwatch` instead.  As logs may contain sensetive info, this api can only be used by admin
     * [DEPRECATED] Get Cloudwatch logs
     * @param objid
     */
    public viewXpCloudwatchLogsWithHttpInfo(objid: string, _options?: Configuration): Observable<HttpInfo<SuccRspViewCloudwatchLogsRsp>> {
        const requestContextPromise = this.requestFactory.viewXpCloudwatchLogs(objid, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.viewXpCloudwatchLogsWithHttpInfo(rsp)));
            }));
    }

    /**
     * DEPRECATED: Use `/api/object/[experiment_id]?object_type=experiment.cloudwatch` instead.  As logs may contain sensetive info, this api can only be used by admin
     * [DEPRECATED] Get Cloudwatch logs
     * @param objid
     */
    public viewXpCloudwatchLogs(objid: string, _options?: Configuration): Observable<SuccRspViewCloudwatchLogsRsp> {
        return this.viewXpCloudwatchLogsWithHttpInfo(objid, _options).pipe(map((apiResponse: HttpInfo<SuccRspViewCloudwatchLogsRsp>) => apiResponse.data));
    }

}

import { ModelApiRequestFactory, ModelApiResponseProcessor} from "../apis/ModelApi";
export class ObservableModelApi {
    private requestFactory: ModelApiRequestFactory;
    private responseProcessor: ModelApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: ModelApiRequestFactory,
        responseProcessor?: ModelApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ModelApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ModelApiResponseProcessor();
    }

    /**
     * DEPRECATED: Use `/sys/config` instead.  This API is used to get the configuration about how to run a model. Currently the configuration includes the URL of the proxy lambda function which is used to run the model.
     * [DEPRECATED] Get configuration about how to run a model.
     */
    public getConfigWithHttpInfo(_options?: Configuration): Observable<HttpInfo<SuccRspGetConfigRsp>> {
        const requestContextPromise = this.requestFactory.getConfig(_options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getConfigWithHttpInfo(rsp)));
            }));
    }

    /**
     * DEPRECATED: Use `/sys/config` instead.  This API is used to get the configuration about how to run a model. Currently the configuration includes the URL of the proxy lambda function which is used to run the model.
     * [DEPRECATED] Get configuration about how to run a model.
     */
    public getConfig(_options?: Configuration): Observable<SuccRspGetConfigRsp> {
        return this.getConfigWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<SuccRspGetConfigRsp>) => apiResponse.data));
    }

    /**
     * DEPRECATED: Use `/sys/github/branch` instead.  List branches of the specified repository.
     * [DEPRECATED] List branches.
     * @param repo
     */
    public listBranchWithHttpInfo(repo: string, _options?: Configuration): Observable<HttpInfo<SuccRspListBranchRsp>> {
        const requestContextPromise = this.requestFactory.listBranch(repo, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listBranchWithHttpInfo(rsp)));
            }));
    }

    /**
     * DEPRECATED: Use `/sys/github/branch` instead.  List branches of the specified repository.
     * [DEPRECATED] List branches.
     * @param repo
     */
    public listBranch(repo: string, _options?: Configuration): Observable<SuccRspListBranchRsp> {
        return this.listBranchWithHttpInfo(repo, _options).pipe(map((apiResponse: HttpInfo<SuccRspListBranchRsp>) => apiResponse.data));
    }

    /**
     * DEPRECATED: Use `/sys/github/repository` instead.  List repositories and gists of the current (GitHub) user.  Of course this API can only be used when the user is login using the GitHub account.  The return value contains two parts: 1. List of repositories names. 2. List of gists. As the description field can\'t uniquely identify a gist, the id field is also returned. In practice, the description field should be showed to user for them to select the gist, the ID field should be used to specify a gist.
     * [DEPRECATED] List repositories and gists.
     * @param [pageNo] page number
     * @param [pageSize] page size
     */
    public listRepositoryWithHttpInfo(pageNo?: number, pageSize?: number, _options?: Configuration): Observable<HttpInfo<SuccRspListRepositoryRsp>> {
        const requestContextPromise = this.requestFactory.listRepository(pageNo, pageSize, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listRepositoryWithHttpInfo(rsp)));
            }));
    }

    /**
     * DEPRECATED: Use `/sys/github/repository` instead.  List repositories and gists of the current (GitHub) user.  Of course this API can only be used when the user is login using the GitHub account.  The return value contains two parts: 1. List of repositories names. 2. List of gists. As the description field can\'t uniquely identify a gist, the id field is also returned. In practice, the description field should be showed to user for them to select the gist, the ID field should be used to specify a gist.
     * [DEPRECATED] List repositories and gists.
     * @param [pageNo] page number
     * @param [pageSize] page size
     */
    public listRepository(pageNo?: number, pageSize?: number, _options?: Configuration): Observable<SuccRspListRepositoryRsp> {
        return this.listRepositoryWithHttpInfo(pageNo, pageSize, _options).pipe(map((apiResponse: HttpInfo<SuccRspListRepositoryRsp>) => apiResponse.data));
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
     * @param objids
     */
    public deleteObjectWithHttpInfo(objids: Array<string>, _options?: Configuration): Observable<HttpInfo<SuccRspNoneType>> {
        const requestContextPromise = this.requestFactory.deleteObject(objids, _options);

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
     * @param objids
     */
    public deleteObject(objids: Array<string>, _options?: Configuration): Observable<SuccRspNoneType> {
        return this.deleteObjectWithHttpInfo(objids, _options).pipe(map((apiResponse: HttpInfo<SuccRspNoneType>) => apiResponse.data));
    }

    /**
     * ### List Objects  By default, the API returns only objects created by the current user, excluding sharing information for performance optimization.  When `shared_with_me` is enabled, the API returns objects owned by other users but shared with the current user, including their sharing details.  Enabling `shared_by_me` will include sharing information for objects that the current user has shared with others.  Setting `with_share_info` to true combines both scenarios: it returns objects shared by the current user as well as objects shared with the current user, complete with their respective sharing information. This effectively merges the functionality of both `shared_by_me` and `shared_with_me`.  ### Example  List models: ``` GET /api/object?object_type=model GET /api/object?object_type=model&shared_by_me=true GET /api/object?object_type=model&shared_with_me=true GET /api/object?object_type=model&with_share_info=true ```  List experiments: ``` GET /api/object?object_type=experiment GET /api/object?object_type=experiment&shared_by_me=true GET /api/object?object_type=experiment&shared_with_me=true GET /api/object?object_type=experiment&with_share_info=true ```
     * List objects.
     * @param payload
     */
    public listObjectWithHttpInfo(payload: Payload, _options?: Configuration): Observable<HttpInfo<SuccRspListingRspDataUnionListExperimentRspListModelsRspItemCreateEventRspCreateCallbackRspCreateRelationRsp>> {
        const requestContextPromise = this.requestFactory.listObject(payload, _options);

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
     * @param payload
     */
    public listObject(payload: Payload, _options?: Configuration): Observable<SuccRspListingRspDataUnionListExperimentRspListModelsRspItemCreateEventRspCreateCallbackRspCreateRelationRsp> {
        return this.listObjectWithHttpInfo(payload, _options).pipe(map((apiResponse: HttpInfo<SuccRspListingRspDataUnionListExperimentRspListModelsRspItemCreateEventRspCreateCallbackRspCreateRelationRsp>) => apiResponse.data));
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
     * @param [cloudwatchLog]
     * @param [batchId]
     * @param [runId]
     */
    public viewObjectWithHttpInfo(objid: string, objectType?: 'model' | 'experiment' | 'share' | 'event' | 'callback' | 'relation' | '', shareId?: string, sampledata?: boolean, fmt?: 'csv' | 'grist', cloudwatchLog?: boolean, batchId?: string, runId?: string, _options?: Configuration): Observable<HttpInfo<SuccRspAnnotatedUnionExperimentRspViewModelsRspViewExperimentShareRspExperimentSampleDataRspExperimentCloudwatchLogRspGetExperimentRunInfoRspFieldInfoAnnotationNoneTypeRequiredTrueDiscriminatorObjectType>> {
        const requestContextPromise = this.requestFactory.viewObject(objid, objectType, shareId, sampledata, fmt, cloudwatchLog, batchId, runId, _options);

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
     * @param [cloudwatchLog]
     * @param [batchId]
     * @param [runId]
     */
    public viewObject(objid: string, objectType?: 'model' | 'experiment' | 'share' | 'event' | 'callback' | 'relation' | '', shareId?: string, sampledata?: boolean, fmt?: 'csv' | 'grist', cloudwatchLog?: boolean, batchId?: string, runId?: string, _options?: Configuration): Observable<SuccRspAnnotatedUnionExperimentRspViewModelsRspViewExperimentShareRspExperimentSampleDataRspExperimentCloudwatchLogRspGetExperimentRunInfoRspFieldInfoAnnotationNoneTypeRequiredTrueDiscriminatorObjectType> {
        return this.viewObjectWithHttpInfo(objid, objectType, shareId, sampledata, fmt, cloudwatchLog, batchId, runId, _options).pipe(map((apiResponse: HttpInfo<SuccRspAnnotatedUnionExperimentRspViewModelsRspViewExperimentShareRspExperimentSampleDataRspExperimentCloudwatchLogRspGetExperimentRunInfoRspFieldInfoAnnotationNoneTypeRequiredTrueDiscriminatorObjectType>) => apiResponse.data));
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
     * List branches of the specified repository.
     * List branches.
     * @param repo
     */
    public branchWithHttpInfo(repo: string, _options?: Configuration): Observable<HttpInfo<SuccRspListBranchRsp>> {
        const requestContextPromise = this.requestFactory.branch(repo, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.branchWithHttpInfo(rsp)));
            }));
    }

    /**
     * List branches of the specified repository.
     * List branches.
     * @param repo
     */
    public branch(repo: string, _options?: Configuration): Observable<SuccRspListBranchRsp> {
        return this.branchWithHttpInfo(repo, _options).pipe(map((apiResponse: HttpInfo<SuccRspListBranchRsp>) => apiResponse.data));
    }

    /**
     * Create notebook which can be used to load and visualize the experiment result. Save it to Github and returns a link which can be used to open this notebook in Google Colab
     * Get a link of the notebook in Colab
     */
    public colabWithHttpInfo(_options?: Configuration): Observable<HttpInfo<SuccRspAny>> {
        const requestContextPromise = this.requestFactory.colab(_options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.colabWithHttpInfo(rsp)));
            }));
    }

    /**
     * Create notebook which can be used to load and visualize the experiment result. Save it to Github and returns a link which can be used to open this notebook in Google Colab
     * Get a link of the notebook in Colab
     */
    public colab(_options?: Configuration): Observable<SuccRspAny> {
        return this.colabWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<SuccRspAny>) => apiResponse.data));
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
     * List repositories and gists of the current (GitHub) user.  Of course this API can only be used when the user is login using the GitHub account.  The return value contains two parts: 1. List of repositories names. 2. List of gists. As the description field can\'t uniquely identify a gist, the id field is also returned. In practice, the description field should be showed to user for them to select the gist, the ID field should be used to specify a gist.
     * List repositories and gists.
     * @param [pageNo] page number
     * @param [pageSize] page size
     */
    public repositoryWithHttpInfo(pageNo?: number, pageSize?: number, _options?: Configuration): Observable<HttpInfo<SuccRspListRepositoryRsp>> {
        const requestContextPromise = this.requestFactory.repository(pageNo, pageSize, _options);

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
     * List repositories and gists of the current (GitHub) user.  Of course this API can only be used when the user is login using the GitHub account.  The return value contains two parts: 1. List of repositories names. 2. List of gists. As the description field can\'t uniquely identify a gist, the id field is also returned. In practice, the description field should be showed to user for them to select the gist, the ID field should be used to specify a gist.
     * List repositories and gists.
     * @param [pageNo] page number
     * @param [pageSize] page size
     */
    public repository(pageNo?: number, pageSize?: number, _options?: Configuration): Observable<SuccRspListRepositoryRsp> {
        return this.repositoryWithHttpInfo(pageNo, pageSize, _options).pipe(map((apiResponse: HttpInfo<SuccRspListRepositoryRsp>) => apiResponse.data));
    }

}
