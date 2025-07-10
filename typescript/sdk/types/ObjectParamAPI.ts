import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration} from '../configuration'

import { Auth0ConfigRsp } from '../models/Auth0ConfigRsp';
import { Auth0LoginRsp } from '../models/Auth0LoginRsp';
import { CloudFunctionKind } from '../models/CloudFunctionKind';
import { CloudFunctionLang } from '../models/CloudFunctionLang';
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
import { DeleteObject } from '../models/DeleteObject';
import { ErrRsp } from '../models/ErrRsp';
import { ExperimentCloudwatchLogRsp } from '../models/ExperimentCloudwatchLogRsp';
import { ExperimentRsp } from '../models/ExperimentRsp';
import { ExperimentSampleDataRsp } from '../models/ExperimentSampleDataRsp';
import { Folder } from '../models/Folder';
import { FolderChildrenInner } from '../models/FolderChildrenInner';
import { GetConfigRsp } from '../models/GetConfigRsp';
import { GetExperimentRunInfoRsp } from '../models/GetExperimentRunInfoRsp';
import { GetExperimentShareRsp } from '../models/GetExperimentShareRsp';
import { GetNotificationReq } from '../models/GetNotificationReq';
import { GetTokensRsp } from '../models/GetTokensRsp';
import { GistRsp } from '../models/GistRsp';
import { ListBranchRsp } from '../models/ListBranchRsp';
import { ListExperimentRsp } from '../models/ListExperimentRsp';
import { ListGistFilesRsp } from '../models/ListGistFilesRsp';
import { ListGitHubRepository } from '../models/ListGitHubRepository';
import { ListModelsRspItem } from '../models/ListModelsRspItem';
import { ListObjectTmp } from '../models/ListObjectTmp';
import { ListRepoFilesRsp } from '../models/ListRepoFilesRsp';
import { ListRepositoryRsp } from '../models/ListRepositoryRsp';
import { ListingRspDataNotificationDict } from '../models/ListingRspDataNotificationDict';
import { ListingRspDataUnionListExperimentRspListModelsRspItemCreateEventRspCreateCallbackRspCreateRelationRsp } from '../models/ListingRspDataUnionListExperimentRspListModelsRspItemCreateEventRspCreateCallbackRspCreateRelationRsp';
import { ListingRspDataUnionListExperimentRspListModelsRspItemCreateEventRspCreateCallbackRspCreateRelationRspObjectsInner } from '../models/ListingRspDataUnionListExperimentRspListModelsRspItemCreateEventRspCreateCallbackRspCreateRelationRspObjectsInner';
import { MarkNotificationReadReq } from '../models/MarkNotificationReadReq';
import { MetaModel } from '../models/MetaModel';
import { ModelContent } from '../models/ModelContent';
import { ModelFile } from '../models/ModelFile';
import { ModelMeta } from '../models/ModelMeta';
import { ModelMetaInRsp } from '../models/ModelMetaInRsp';
import { ModelTreeNode } from '../models/ModelTreeNode';
import { ModifyCurrentUser } from '../models/ModifyCurrentUser';
import { ModifyToken } from '../models/ModifyToken';
import { NotificationDict } from '../models/NotificationDict';
import { Payload } from '../models/Payload';
import { Payload1 } from '../models/Payload1';
import { ShareInfoModel } from '../models/ShareInfoModel';
import { SoftDeletedRsp } from '../models/SoftDeletedRsp';
import { SuccRspAnnotatedUnionExperimentRspListModelsRspItemCreateExperimentShareRspCreateEventRspCreateCallbackRspCreateRelationRspFieldInfoAnnotationNoneTypeRequiredTrueDiscriminatorObjectType } from '../models/SuccRspAnnotatedUnionExperimentRspListModelsRspItemCreateExperimentShareRspCreateEventRspCreateCallbackRspCreateRelationRspFieldInfoAnnotationNoneTypeRequiredTrueDiscriminatorObjectType';
import { SuccRspAnnotatedUnionExperimentRspViewModelsRspViewExperimentShareRspExperimentSampleDataRspExperimentCloudwatchLogRspGetExperimentRunInfoRspFieldInfoAnnotationNoneTypeRequiredTrueDiscriminatorObjectType } from '../models/SuccRspAnnotatedUnionExperimentRspViewModelsRspViewExperimentShareRspExperimentSampleDataRspExperimentCloudwatchLogRspGetExperimentRunInfoRspFieldInfoAnnotationNoneTypeRequiredTrueDiscriminatorObjectType';
import { SuccRspAny } from '../models/SuccRspAny';
import { SuccRspAuth0ConfigRsp } from '../models/SuccRspAuth0ConfigRsp';
import { SuccRspAuth0LoginRsp } from '../models/SuccRspAuth0LoginRsp';
import { SuccRspCode2TokenRsp } from '../models/SuccRspCode2TokenRsp';
import { SuccRspGetConfigRsp } from '../models/SuccRspGetConfigRsp';
import { SuccRspGetExperimentShareRsp } from '../models/SuccRspGetExperimentShareRsp';
import { SuccRspGetTokensRsp } from '../models/SuccRspGetTokensRsp';
import { SuccRspListBranchRsp } from '../models/SuccRspListBranchRsp';
import { SuccRspListGetTokensRsp } from '../models/SuccRspListGetTokensRsp';
import { SuccRspListGistFilesRsp } from '../models/SuccRspListGistFilesRsp';
import { SuccRspListRepoFilesRsp } from '../models/SuccRspListRepoFilesRsp';
import { SuccRspListRepositoryRsp } from '../models/SuccRspListRepositoryRsp';
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
import { ViewModelShareInfo } from '../models/ViewModelShareInfo';
import { ViewModelsRsp } from '../models/ViewModelsRsp';
import { ViewObject } from '../models/ViewObject';
import { ViewObjectTmp } from '../models/ViewObjectTmp';

import { ObservableAuthorizationApi } from "./ObservableAPI";
import { AuthorizationApiRequestFactory, AuthorizationApiResponseProcessor} from "../apis/AuthorizationApi";

export interface AuthorizationApiAccessTokenRequest {
}

export interface AuthorizationApiAuth0ConfigRequest {
}

export interface AuthorizationApiAuth0LoginRequest {
}

export interface AuthorizationApiCode2tokenRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof AuthorizationApicode2token
     */
    code: string
}

export interface AuthorizationApiCreateTokenRequest {
    /**
     * 
     * @type CreateToken
     * @memberof AuthorizationApicreateToken
     */
    createToken?: CreateToken
}

export interface AuthorizationApiDeleteTokenRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof AuthorizationApideleteToken
     */
    tokenId: string
}

export interface AuthorizationApiGetTokensRequest {
}

export interface AuthorizationApiModifyCurrentUserRequest {
    /**
     * 
     * @type ModifyCurrentUser
     * @memberof AuthorizationApimodifyCurrentUser
     */
    modifyCurrentUser: ModifyCurrentUser
}

export interface AuthorizationApiModifyTokenRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof AuthorizationApimodifyToken
     */
    tokenId: string
    /**
     * 
     * @type ModifyToken
     * @memberof AuthorizationApimodifyToken
     */
    modifyToken: ModifyToken
}

export interface AuthorizationApiUserInfoRequest {
}

export interface AuthorizationApiUserLoginRequest {
    /**
     * 
     * @type UserLogin
     * @memberof AuthorizationApiuserLogin
     */
    userLogin: UserLogin
}

export interface AuthorizationApiUserLogoutRequest {
}

export class ObjectAuthorizationApi {
    private api: ObservableAuthorizationApi

    public constructor(configuration: Configuration, requestFactory?: AuthorizationApiRequestFactory, responseProcessor?: AuthorizationApiResponseProcessor) {
        this.api = new ObservableAuthorizationApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get access token.
     * Access Token
     * @param param the request object
     */
    public accessTokenWithHttpInfo(param: AuthorizationApiAccessTokenRequest = {}, options?: Configuration): Promise<HttpInfo<SuccRspCode2TokenRsp>> {
        return this.api.accessTokenWithHttpInfo( options).toPromise();
    }

    /**
     * Get access token.
     * Access Token
     * @param param the request object
     */
    public accessToken(param: AuthorizationApiAccessTokenRequest = {}, options?: Configuration): Promise<SuccRspCode2TokenRsp> {
        return this.api.accessToken( options).toPromise();
    }

    /**
     * Returns the configurations need by the frontend to implement Auth0 login. By using an API to provide this information, we avoid hardcoding them in the frontend code.  This API doen\'t need authorization as it is usually called before login.
     * Get Auth0 login configuration
     * @param param the request object
     */
    public auth0ConfigWithHttpInfo(param: AuthorizationApiAuth0ConfigRequest = {}, options?: Configuration): Promise<HttpInfo<SuccRspAuth0ConfigRsp>> {
        return this.api.auth0ConfigWithHttpInfo( options).toPromise();
    }

    /**
     * Returns the configurations need by the frontend to implement Auth0 login. By using an API to provide this information, we avoid hardcoding them in the frontend code.  This API doen\'t need authorization as it is usually called before login.
     * Get Auth0 login configuration
     * @param param the request object
     */
    public auth0Config(param: AuthorizationApiAuth0ConfigRequest = {}, options?: Configuration): Promise<SuccRspAuth0ConfigRsp> {
        return this.api.auth0Config( options).toPromise();
    }

    /**
     * This API should be called after the user finishes the Auth0 authorization. So the frontend should be able to obtain an Auth0 token at that point. The API should be called with this token in the `Authorization` header, in the format like `Authorization: Bearer <token>`.  The API will call an Auth0 API to query user information with the token. If it successfully gets it, it means the token is valid. Then the API will either:  1. Retrieve the user object within our system 2. Create a new user within our system  depending on whether a user with the same identity exists in our system.  If everything is okay, the API will return a token which can then be used as an identification to call other APIs. The return format is intentionally designed to keep the same as password login API.
     * Login with Auth0.
     * @param param the request object
     */
    public auth0LoginWithHttpInfo(param: AuthorizationApiAuth0LoginRequest = {}, options?: Configuration): Promise<HttpInfo<SuccRspAuth0LoginRsp>> {
        return this.api.auth0LoginWithHttpInfo( options).toPromise();
    }

    /**
     * This API should be called after the user finishes the Auth0 authorization. So the frontend should be able to obtain an Auth0 token at that point. The API should be called with this token in the `Authorization` header, in the format like `Authorization: Bearer <token>`.  The API will call an Auth0 API to query user information with the token. If it successfully gets it, it means the token is valid. Then the API will either:  1. Retrieve the user object within our system 2. Create a new user within our system  depending on whether a user with the same identity exists in our system.  If everything is okay, the API will return a token which can then be used as an identification to call other APIs. The return format is intentionally designed to keep the same as password login API.
     * Login with Auth0.
     * @param param the request object
     */
    public auth0Login(param: AuthorizationApiAuth0LoginRequest = {}, options?: Configuration): Promise<SuccRspAuth0LoginRsp> {
        return this.api.auth0Login( options).toPromise();
    }

    /**
     * Exchange code for access token.
     * Code2Token
     * @param param the request object
     */
    public code2tokenWithHttpInfo(param: AuthorizationApiCode2tokenRequest, options?: Configuration): Promise<HttpInfo<SuccRspCode2TokenRsp>> {
        return this.api.code2tokenWithHttpInfo(param.code,  options).toPromise();
    }

    /**
     * Exchange code for access token.
     * Code2Token
     * @param param the request object
     */
    public code2token(param: AuthorizationApiCode2tokenRequest, options?: Configuration): Promise<SuccRspCode2TokenRsp> {
        return this.api.code2token(param.code,  options).toPromise();
    }

    /**
     * This is where the user explicitly creates a new token. The token can be used to call other APIs in the name of the user.
     * Create a new authorization token.
     * @param param the request object
     */
    public createTokenWithHttpInfo(param: AuthorizationApiCreateTokenRequest = {}, options?: Configuration): Promise<HttpInfo<SuccRspGetTokensRsp>> {
        return this.api.createTokenWithHttpInfo(param.createToken,  options).toPromise();
    }

    /**
     * This is where the user explicitly creates a new token. The token can be used to call other APIs in the name of the user.
     * Create a new authorization token.
     * @param param the request object
     */
    public createToken(param: AuthorizationApiCreateTokenRequest = {}, options?: Configuration): Promise<SuccRspGetTokensRsp> {
        return this.api.createToken(param.createToken,  options).toPromise();
    }

    /**
     * Delete(invalidate) a token.
     * Delete a token by its ID.
     * @param param the request object
     */
    public deleteTokenWithHttpInfo(param: AuthorizationApiDeleteTokenRequest, options?: Configuration): Promise<HttpInfo<SuccRspNoneType>> {
        return this.api.deleteTokenWithHttpInfo(param.tokenId,  options).toPromise();
    }

    /**
     * Delete(invalidate) a token.
     * Delete a token by its ID.
     * @param param the request object
     */
    public deleteToken(param: AuthorizationApiDeleteTokenRequest, options?: Configuration): Promise<SuccRspNoneType> {
        return this.api.deleteToken(param.tokenId,  options).toPromise();
    }

    /**
     * Get the tokens created by the current user.  In our system, there are two kinds of tokens:  1. Tokens created explicitly by user. 2. Tokens created implicitly when a user logs in.  This API only returns the former. The latter should be seen as implementation detail and be invisible to the user.
     * List all of current user\'s tokens.
     * @param param the request object
     */
    public getTokensWithHttpInfo(param: AuthorizationApiGetTokensRequest = {}, options?: Configuration): Promise<HttpInfo<SuccRspListGetTokensRsp>> {
        return this.api.getTokensWithHttpInfo( options).toPromise();
    }

    /**
     * Get the tokens created by the current user.  In our system, there are two kinds of tokens:  1. Tokens created explicitly by user. 2. Tokens created implicitly when a user logs in.  This API only returns the former. The latter should be seen as implementation detail and be invisible to the user.
     * List all of current user\'s tokens.
     * @param param the request object
     */
    public getTokens(param: AuthorizationApiGetTokensRequest = {}, options?: Configuration): Promise<SuccRspListGetTokensRsp> {
        return this.api.getTokens( options).toPromise();
    }

    /**
     * Modify the property of the current logined user. Currently only login password is supported.
     * Update information of current user.
     * @param param the request object
     */
    public modifyCurrentUserWithHttpInfo(param: AuthorizationApiModifyCurrentUserRequest, options?: Configuration): Promise<HttpInfo<SuccRspUserInfoRsp>> {
        return this.api.modifyCurrentUserWithHttpInfo(param.modifyCurrentUser,  options).toPromise();
    }

    /**
     * Modify the property of the current logined user. Currently only login password is supported.
     * Update information of current user.
     * @param param the request object
     */
    public modifyCurrentUser(param: AuthorizationApiModifyCurrentUserRequest, options?: Configuration): Promise<SuccRspUserInfoRsp> {
        return this.api.modifyCurrentUser(param.modifyCurrentUser,  options).toPromise();
    }

    /**
     * Modify various property of a token.
     * Update a token by its ID.
     * @param param the request object
     */
    public modifyTokenWithHttpInfo(param: AuthorizationApiModifyTokenRequest, options?: Configuration): Promise<HttpInfo<SuccRspGetTokensRsp>> {
        return this.api.modifyTokenWithHttpInfo(param.tokenId, param.modifyToken,  options).toPromise();
    }

    /**
     * Modify various property of a token.
     * Update a token by its ID.
     * @param param the request object
     */
    public modifyToken(param: AuthorizationApiModifyTokenRequest, options?: Configuration): Promise<SuccRspGetTokensRsp> {
        return this.api.modifyToken(param.tokenId, param.modifyToken,  options).toPromise();
    }

    /**
     * Returns the information of the current logined user.
     * Get information of current user.
     * @param param the request object
     */
    public userInfoWithHttpInfo(param: AuthorizationApiUserInfoRequest = {}, options?: Configuration): Promise<HttpInfo<SuccRspUserInfoRsp>> {
        return this.api.userInfoWithHttpInfo( options).toPromise();
    }

    /**
     * Returns the information of the current logined user.
     * Get information of current user.
     * @param param the request object
     */
    public userInfo(param: AuthorizationApiUserInfoRequest = {}, options?: Configuration): Promise<SuccRspUserInfoRsp> {
        return this.api.userInfo( options).toPromise();
    }

    /**
     * Login in with user name and password.  On success, the return value of the API will be a token which can then be used as an identification to call other APIs.
     * Login with password.
     * @param param the request object
     */
    public userLoginWithHttpInfo(param: AuthorizationApiUserLoginRequest, options?: Configuration): Promise<HttpInfo<SuccRspUserLoginRsp>> {
        return this.api.userLoginWithHttpInfo(param.userLogin,  options).toPromise();
    }

    /**
     * Login in with user name and password.  On success, the return value of the API will be a token which can then be used as an identification to call other APIs.
     * Login with password.
     * @param param the request object
     */
    public userLogin(param: AuthorizationApiUserLoginRequest, options?: Configuration): Promise<SuccRspUserLoginRsp> {
        return this.api.userLogin(param.userLogin,  options).toPromise();
    }

    /**
     * Log out of the system.
     * Logout the system.
     * @param param the request object
     */
    public userLogoutWithHttpInfo(param: AuthorizationApiUserLogoutRequest = {}, options?: Configuration): Promise<HttpInfo<SuccRspNoneType>> {
        return this.api.userLogoutWithHttpInfo( options).toPromise();
    }

    /**
     * Log out of the system.
     * Logout the system.
     * @param param the request object
     */
    public userLogout(param: AuthorizationApiUserLogoutRequest = {}, options?: Configuration): Promise<SuccRspNoneType> {
        return this.api.userLogout( options).toPromise();
    }

}

import { ObservableNotificationApi } from "./ObservableAPI";
import { NotificationApiRequestFactory, NotificationApiResponseProcessor} from "../apis/NotificationApi";

export interface NotificationApiGetNotificationRequest {
    /**
     * Filter the notification message by read status
     * Defaults to: undefined
     * @type &#39;all&#39; | &#39;read&#39; | &#39;unread&#39;
     * @memberof NotificationApigetNotification
     */
    status: 'all' | 'read' | 'unread'
    /**
     * page number
     * Defaults to: 1
     * @type number
     * @memberof NotificationApigetNotification
     */
    pageNo?: number
    /**
     * page size
     * Maximum: 1000
     * Defaults to: 100
     * @type number
     * @memberof NotificationApigetNotification
     */
    pageSize?: number
}

export interface NotificationApiMarkNotificationReadRequest {
    /**
     * 
     * @type MarkNotificationReadReq
     * @memberof NotificationApimarkNotificationRead
     */
    markNotificationReadReq: MarkNotificationReadReq
}

export class ObjectNotificationApi {
    private api: ObservableNotificationApi

    public constructor(configuration: Configuration, requestFactory?: NotificationApiRequestFactory, responseProcessor?: NotificationApiResponseProcessor) {
        this.api = new ObservableNotificationApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get notification messages targeting the current user.
     * Get notification messsages
     * @param param the request object
     */
    public getNotificationWithHttpInfo(param: NotificationApiGetNotificationRequest, options?: Configuration): Promise<HttpInfo<SuccRspListingRspDataNotificationDict>> {
        return this.api.getNotificationWithHttpInfo(param.status, param.pageNo, param.pageSize,  options).toPromise();
    }

    /**
     * Get notification messages targeting the current user.
     * Get notification messsages
     * @param param the request object
     */
    public getNotification(param: NotificationApiGetNotificationRequest, options?: Configuration): Promise<SuccRspListingRspDataNotificationDict> {
        return this.api.getNotification(param.status, param.pageNo, param.pageSize,  options).toPromise();
    }

    /**
     * Mark some notification as having been read by user. Listing messages support filtering by read mark.
     * Mark notification messsage as already read
     * @param param the request object
     */
    public markNotificationReadWithHttpInfo(param: NotificationApiMarkNotificationReadRequest, options?: Configuration): Promise<HttpInfo<SuccRspNoneType>> {
        return this.api.markNotificationReadWithHttpInfo(param.markNotificationReadReq,  options).toPromise();
    }

    /**
     * Mark some notification as having been read by user. Listing messages support filtering by read mark.
     * Mark notification messsage as already read
     * @param param the request object
     */
    public markNotificationRead(param: NotificationApiMarkNotificationReadRequest, options?: Configuration): Promise<SuccRspNoneType> {
        return this.api.markNotificationRead(param.markNotificationReadReq,  options).toPromise();
    }

}

import { ObservableObjectApi } from "./ObservableAPI";
import { ObjectApiRequestFactory, ObjectApiResponseProcessor} from "../apis/ObjectApi";

export interface ObjectApiCreateObjectRequest {
    /**
     * 
     * @type CreateObjectReq
     * @memberof ObjectApicreateObject
     */
    createObjectReq: CreateObjectReq
}

export interface ObjectApiDeleteObjectRequest {
    /**
     * list of object ids
     * Defaults to: undefined
     * @type Array&lt;string&gt;
     * @memberof ObjectApideleteObject
     */
    objids?: Array<string>
    /**
     * 
     * Defaults to: &#39;&#39;
     * @type string
     * @memberof ObjectApideleteObject
     */
    deletedKey?: string
}

export interface ObjectApiListObjectRequest {
    /**
     * 
     * Defaults to: undefined
     * @type &#39;model&#39; | &#39;experiment&#39; | &#39;share&#39; | &#39;event&#39; | &#39;callback&#39; | &#39;relation&#39; | &#39;&#39;
     * @memberof ObjectApilistObject
     */
    objectType: 'model' | 'experiment' | 'share' | 'event' | 'callback' | 'relation' | ''
    /**
     * page number
     * Defaults to: 1
     * @type number
     * @memberof ObjectApilistObject
     */
    pageNo?: number
    /**
     * page size
     * Maximum: 1000
     * Defaults to: 100
     * @type number
     * @memberof ObjectApilistObject
     */
    pageSize?: number
    /**
     * Whether to return the related share info
     * Defaults to: false
     * @type boolean
     * @memberof ObjectApilistObject
     */
    withShareInfo?: boolean
    /**
     * Filter objects shared by the current user
     * Defaults to: false
     * @type boolean
     * @memberof ObjectApilistObject
     */
    sharedByMe?: boolean
    /**
     * Filter objects shared with the current user
     * Defaults to: false
     * @type boolean
     * @memberof ObjectApilistObject
     */
    sharedWithMe?: boolean
    /**
     * 
     * Defaults to: undefined
     * @type Array&lt;string&gt;
     * @memberof ObjectApilistObject
     */
    modelIds?: Array<string>
    /**
     * 
     * Defaults to: &#39;&#39;
     * @type &#39;NEW&#39; | &#39;RUN&#39; | &#39;FIN&#39; | &#39;ERR&#39; | &#39;&#39;
     * @memberof ObjectApilistObject
     */
    status?: 'NEW' | 'RUN' | 'FIN' | 'ERR' | ''
    /**
     * 
     * Defaults to: &#39;&#39;
     * @type &#39;Lambda&#39; | &#39;Fargate&#39; | &#39;Local&#39; | &#39;&#39;
     * @memberof ObjectApilistObject
     */
    runOn?: 'Lambda' | 'Fargate' | 'Local' | ''
    /**
     * 
     * Defaults to: &#39;&#39;
     * @type &#39;true&#39; | &#39;false&#39; | &#39;&#39;
     * @memberof ObjectApilistObject
     */
    hasModel?: 'true' | 'false' | ''
    /**
     * Filter by kind
     * Defaults to: undefined
     * @type string
     * @memberof ObjectApilistObject
     */
    kind?: string
}

export interface ObjectApiUpdateObjectRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof ObjectApiupdateObject
     */
    objid: string
    /**
     * 
     * @type UpdateObject
     * @memberof ObjectApiupdateObject
     */
    updateObject: UpdateObject
}

export interface ObjectApiViewObjectRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof ObjectApiviewObject
     */
    objid: string
    /**
     * 
     * Defaults to: &#39;&#39;
     * @type &#39;model&#39; | &#39;experiment&#39; | &#39;share&#39; | &#39;event&#39; | &#39;callback&#39; | &#39;relation&#39; | &#39;&#39;
     * @memberof ObjectApiviewObject
     */
    objectType?: 'model' | 'experiment' | 'share' | 'event' | 'callback' | 'relation' | ''
    /**
     *                  Only appicable to object_type &#x3D;&#x3D; model or object_type &#x3D;&#x3D; experiment                 If this field is empty, returns the latest version of the objects.                 otherwise returns the specified share snapshot
     * Defaults to: &#39;&#39;
     * @type string
     * @memberof ObjectApiviewObject
     */
    shareId?: string
    /**
     * 
     * Defaults to: false
     * @type boolean
     * @memberof ObjectApiviewObject
     */
    sampledata?: boolean
    /**
     * 
     * Defaults to: &#39;csv&#39;
     * @type &#39;csv&#39; | &#39;grist&#39;
     * @memberof ObjectApiviewObject
     */
    fmt?: 'csv' | 'grist'
    /**
     * 
     * Defaults to: false
     * @type boolean
     * @memberof ObjectApiviewObject
     */
    cloudwatchLog?: boolean
    /**
     * 
     * Defaults to: &#39;&#39;
     * @type string
     * @memberof ObjectApiviewObject
     */
    batchId?: string
    /**
     * 
     * Defaults to: &#39;&#39;
     * @type string
     * @memberof ObjectApiviewObject
     */
    runId?: string
}

export class ObjectObjectApi {
    private api: ObservableObjectApi

    public constructor(configuration: Configuration, requestFactory?: ObjectApiRequestFactory, responseProcessor?: ObjectApiResponseProcessor) {
        this.api = new ObservableObjectApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create new object.  ### Example Create model: ``` POST /api/object {     \"payload\": {         \"object_type\": \"model\",         \"name\": \"model name\",         \"type\": \"local\",         \"content\": {             \"meta\": {\"entrance_file\": \"main.jl\"},             \"tree\": [],         }     } } ```  Create model from GitHub repo: ``` POST /api/object {     \"payload\": {         \"object_type\": \"model\",         \"repo\": \"vectorly-ai/simple-model\",         \"branch\": \"main\",         \"type\": \"repo\",     } } ```  Create model from GitHub gist: ``` POST /api/object {     \"payload\": {         \"object_type\": \"model\",         \"repo\": \"<the-gist-id>\",         \"type\": \"gist\",     } } ```  Create experiment: ``` POST /api/object {     \"payload\": {         \"object_type\": \"experiment\",         \"name\": \"experiment name\",         \"model_id\": \"M1234567\",     } } ```  Create share of experiment: ``` POST /api/object {     \"payload\": {         \"object_type\": \"share\",         \"objid\": \"X1234567\",         \"password\": \"the-pass\",     } } ```
     * Create new object.
     * @param param the request object
     */
    public createObjectWithHttpInfo(param: ObjectApiCreateObjectRequest, options?: Configuration): Promise<HttpInfo<SuccRspAnnotatedUnionExperimentRspListModelsRspItemCreateExperimentShareRspCreateEventRspCreateCallbackRspCreateRelationRspFieldInfoAnnotationNoneTypeRequiredTrueDiscriminatorObjectType>> {
        return this.api.createObjectWithHttpInfo(param.createObjectReq,  options).toPromise();
    }

    /**
     * Create new object.  ### Example Create model: ``` POST /api/object {     \"payload\": {         \"object_type\": \"model\",         \"name\": \"model name\",         \"type\": \"local\",         \"content\": {             \"meta\": {\"entrance_file\": \"main.jl\"},             \"tree\": [],         }     } } ```  Create model from GitHub repo: ``` POST /api/object {     \"payload\": {         \"object_type\": \"model\",         \"repo\": \"vectorly-ai/simple-model\",         \"branch\": \"main\",         \"type\": \"repo\",     } } ```  Create model from GitHub gist: ``` POST /api/object {     \"payload\": {         \"object_type\": \"model\",         \"repo\": \"<the-gist-id>\",         \"type\": \"gist\",     } } ```  Create experiment: ``` POST /api/object {     \"payload\": {         \"object_type\": \"experiment\",         \"name\": \"experiment name\",         \"model_id\": \"M1234567\",     } } ```  Create share of experiment: ``` POST /api/object {     \"payload\": {         \"object_type\": \"share\",         \"objid\": \"X1234567\",         \"password\": \"the-pass\",     } } ```
     * Create new object.
     * @param param the request object
     */
    public createObject(param: ObjectApiCreateObjectRequest, options?: Configuration): Promise<SuccRspAnnotatedUnionExperimentRspListModelsRspItemCreateExperimentShareRspCreateEventRspCreateCallbackRspCreateRelationRspFieldInfoAnnotationNoneTypeRequiredTrueDiscriminatorObjectType> {
        return this.api.createObject(param.createObjectReq,  options).toPromise();
    }

    /**
     * Delete objects of certain IDs in batch.  ### Example  ``` DELETE /api/object?objids=M1234567&objids=X1234567 ```
     * Delete objects.
     * @param param the request object
     */
    public deleteObjectWithHttpInfo(param: ObjectApiDeleteObjectRequest = {}, options?: Configuration): Promise<HttpInfo<SuccRspSoftDeletedRsp>> {
        return this.api.deleteObjectWithHttpInfo(param.objids, param.deletedKey,  options).toPromise();
    }

    /**
     * Delete objects of certain IDs in batch.  ### Example  ``` DELETE /api/object?objids=M1234567&objids=X1234567 ```
     * Delete objects.
     * @param param the request object
     */
    public deleteObject(param: ObjectApiDeleteObjectRequest = {}, options?: Configuration): Promise<SuccRspSoftDeletedRsp> {
        return this.api.deleteObject(param.objids, param.deletedKey,  options).toPromise();
    }

    /**
     * ### List Objects  By default, the API returns only objects created by the current user, excluding sharing information for performance optimization.  When `shared_with_me` is enabled, the API returns objects owned by other users but shared with the current user, including their sharing details.  Enabling `shared_by_me` will include sharing information for objects that the current user has shared with others.  Setting `with_share_info` to true combines both scenarios: it returns objects shared by the current user as well as objects shared with the current user, complete with their respective sharing information. This effectively merges the functionality of both `shared_by_me` and `shared_with_me`.  ### Example  List models: ``` GET /api/object?object_type=model GET /api/object?object_type=model&shared_by_me=true GET /api/object?object_type=model&shared_with_me=true GET /api/object?object_type=model&with_share_info=true ```  List experiments: ``` GET /api/object?object_type=experiment GET /api/object?object_type=experiment&shared_by_me=true GET /api/object?object_type=experiment&shared_with_me=true GET /api/object?object_type=experiment&with_share_info=true ```
     * List objects.
     * @param param the request object
     */
    public listObjectWithHttpInfo(param: ObjectApiListObjectRequest, options?: Configuration): Promise<HttpInfo<SuccRspListingRspDataUnionListExperimentRspListModelsRspItemCreateEventRspCreateCallbackRspCreateRelationRsp>> {
        return this.api.listObjectWithHttpInfo(param.objectType, param.pageNo, param.pageSize, param.withShareInfo, param.sharedByMe, param.sharedWithMe, param.modelIds, param.status, param.runOn, param.hasModel, param.kind,  options).toPromise();
    }

    /**
     * ### List Objects  By default, the API returns only objects created by the current user, excluding sharing information for performance optimization.  When `shared_with_me` is enabled, the API returns objects owned by other users but shared with the current user, including their sharing details.  Enabling `shared_by_me` will include sharing information for objects that the current user has shared with others.  Setting `with_share_info` to true combines both scenarios: it returns objects shared by the current user as well as objects shared with the current user, complete with their respective sharing information. This effectively merges the functionality of both `shared_by_me` and `shared_with_me`.  ### Example  List models: ``` GET /api/object?object_type=model GET /api/object?object_type=model&shared_by_me=true GET /api/object?object_type=model&shared_with_me=true GET /api/object?object_type=model&with_share_info=true ```  List experiments: ``` GET /api/object?object_type=experiment GET /api/object?object_type=experiment&shared_by_me=true GET /api/object?object_type=experiment&shared_with_me=true GET /api/object?object_type=experiment&with_share_info=true ```
     * List objects.
     * @param param the request object
     */
    public listObject(param: ObjectApiListObjectRequest, options?: Configuration): Promise<SuccRspListingRspDataUnionListExperimentRspListModelsRspItemCreateEventRspCreateCallbackRspCreateRelationRsp> {
        return this.api.listObject(param.objectType, param.pageNo, param.pageSize, param.withShareInfo, param.sharedByMe, param.sharedWithMe, param.modelIds, param.status, param.runOn, param.hasModel, param.kind,  options).toPromise();
    }

    /**
     * Update object of certain ID.  ### Example  Update model: ``` POST /api/object/M1234567  {     \"payload\": {         \"object_type\": \"model\",         \"name\": \"model name\",         \"content\": {             \"meta\": {\"entrance_file\": \"main.jl\"},             \"tree\": [],         }     } } ```  Update experiment: ``` POST /api/object/X1234567  {     \"payload\": {         \"object_type\": \"experiment\",         \"name\": \"experiment name\",     } } ```
     * Update object.
     * @param param the request object
     */
    public updateObjectWithHttpInfo(param: ObjectApiUpdateObjectRequest, options?: Configuration): Promise<HttpInfo<SuccRspUnionExperimentRspViewModelsRspNoneType>> {
        return this.api.updateObjectWithHttpInfo(param.objid, param.updateObject,  options).toPromise();
    }

    /**
     * Update object of certain ID.  ### Example  Update model: ``` POST /api/object/M1234567  {     \"payload\": {         \"object_type\": \"model\",         \"name\": \"model name\",         \"content\": {             \"meta\": {\"entrance_file\": \"main.jl\"},             \"tree\": [],         }     } } ```  Update experiment: ``` POST /api/object/X1234567  {     \"payload\": {         \"object_type\": \"experiment\",         \"name\": \"experiment name\",     } } ```
     * Update object.
     * @param param the request object
     */
    public updateObject(param: ObjectApiUpdateObjectRequest, options?: Configuration): Promise<SuccRspUnionExperimentRspViewModelsRspNoneType> {
        return this.api.updateObject(param.objid, param.updateObject,  options).toPromise();
    }

    /**
     * View object of certain ID.  ### Example  ``` GET /api/object/M1234567  # view model data GET /api/object/X1234567  # view experiment data GET /api/object/S1234566  # view share data ```
     * View object.
     * @param param the request object
     */
    public viewObjectWithHttpInfo(param: ObjectApiViewObjectRequest, options?: Configuration): Promise<HttpInfo<SuccRspAnnotatedUnionExperimentRspViewModelsRspViewExperimentShareRspExperimentSampleDataRspExperimentCloudwatchLogRspGetExperimentRunInfoRspFieldInfoAnnotationNoneTypeRequiredTrueDiscriminatorObjectType>> {
        return this.api.viewObjectWithHttpInfo(param.objid, param.objectType, param.shareId, param.sampledata, param.fmt, param.cloudwatchLog, param.batchId, param.runId,  options).toPromise();
    }

    /**
     * View object of certain ID.  ### Example  ``` GET /api/object/M1234567  # view model data GET /api/object/X1234567  # view experiment data GET /api/object/S1234566  # view share data ```
     * View object.
     * @param param the request object
     */
    public viewObject(param: ObjectApiViewObjectRequest, options?: Configuration): Promise<SuccRspAnnotatedUnionExperimentRspViewModelsRspViewExperimentShareRspExperimentSampleDataRspExperimentCloudwatchLogRspGetExperimentRunInfoRspFieldInfoAnnotationNoneTypeRequiredTrueDiscriminatorObjectType> {
        return this.api.viewObject(param.objid, param.objectType, param.shareId, param.sampledata, param.fmt, param.cloudwatchLog, param.batchId, param.runId,  options).toPromise();
    }

}

import { ObservableShareApi } from "./ObservableAPI";
import { ShareApiRequestFactory, ShareApiResponseProcessor} from "../apis/ShareApi";

export interface ShareApiGetExperimentShareRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof ShareApigetExperimentShare
     */
    shareId: string
}

export class ObjectShareApi {
    private api: ObservableShareApi

    public constructor(configuration: Configuration, requestFactory?: ShareApiRequestFactory, responseProcessor?: ShareApiResponseProcessor) {
        this.api = new ObservableShareApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get sharing information of an experiment.
     * @param param the request object
     */
    public getExperimentShareWithHttpInfo(param: ShareApiGetExperimentShareRequest, options?: Configuration): Promise<HttpInfo<SuccRspGetExperimentShareRsp>> {
        return this.api.getExperimentShareWithHttpInfo(param.shareId,  options).toPromise();
    }

    /**
     * Get sharing information of an experiment.
     * @param param the request object
     */
    public getExperimentShare(param: ShareApiGetExperimentShareRequest, options?: Configuration): Promise<SuccRspGetExperimentShareRsp> {
        return this.api.getExperimentShare(param.shareId,  options).toPromise();
    }

}

import { ObservableSystemApi } from "./ObservableAPI";
import { SystemApiRequestFactory, SystemApiResponseProcessor} from "../apis/SystemApi";

export interface SystemApiBranchRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof SystemApibranch
     */
    repo: string
}

export interface SystemApiColabRequest {
}

export interface SystemApiConfigRequest {
}

export interface SystemApiGistFilesRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof SystemApigistFiles
     */
    gistId: string
}

export interface SystemApiRepoFilesRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof SystemApirepoFiles
     */
    repo: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof SystemApirepoFiles
     */
    ref: string
}

export interface SystemApiRepositoryRequest {
    /**
     * page number
     * Defaults to: 1
     * @type number
     * @memberof SystemApirepository
     */
    pageNo?: number
    /**
     * page size
     * Maximum: 1000
     * Defaults to: 100
     * @type number
     * @memberof SystemApirepository
     */
    pageSize?: number
}

export class ObjectSystemApi {
    private api: ObservableSystemApi

    public constructor(configuration: Configuration, requestFactory?: SystemApiRequestFactory, responseProcessor?: SystemApiResponseProcessor) {
        this.api = new ObservableSystemApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * List branches of the specified repository.
     * List branches.
     * @param param the request object
     */
    public branchWithHttpInfo(param: SystemApiBranchRequest, options?: Configuration): Promise<HttpInfo<SuccRspListBranchRsp>> {
        return this.api.branchWithHttpInfo(param.repo,  options).toPromise();
    }

    /**
     * List branches of the specified repository.
     * List branches.
     * @param param the request object
     */
    public branch(param: SystemApiBranchRequest, options?: Configuration): Promise<SuccRspListBranchRsp> {
        return this.api.branch(param.repo,  options).toPromise();
    }

    /**
     * Create notebook which can be used to load and visualize the experiment result. Save it to Github and returns a link which can be used to open this notebook in Google Colab
     * Get a link of the notebook in Colab
     * @param param the request object
     */
    public colabWithHttpInfo(param: SystemApiColabRequest = {}, options?: Configuration): Promise<HttpInfo<SuccRspAny>> {
        return this.api.colabWithHttpInfo( options).toPromise();
    }

    /**
     * Create notebook which can be used to load and visualize the experiment result. Save it to Github and returns a link which can be used to open this notebook in Google Colab
     * Get a link of the notebook in Colab
     * @param param the request object
     */
    public colab(param: SystemApiColabRequest = {}, options?: Configuration): Promise<SuccRspAny> {
        return this.api.colab( options).toPromise();
    }

    /**
     * This API is used to get the configuration about how to run a model. Currently the configuration includes the URL of the proxy lambda function which is used to run the model.
     * Get configuration about how to run a model.
     * @param param the request object
     */
    public configWithHttpInfo(param: SystemApiConfigRequest = {}, options?: Configuration): Promise<HttpInfo<SuccRspGetConfigRsp>> {
        return this.api.configWithHttpInfo( options).toPromise();
    }

    /**
     * This API is used to get the configuration about how to run a model. Currently the configuration includes the URL of the proxy lambda function which is used to run the model.
     * Get configuration about how to run a model.
     * @param param the request object
     */
    public config(param: SystemApiConfigRequest = {}, options?: Configuration): Promise<SuccRspGetConfigRsp> {
        return this.api.config( options).toPromise();
    }

    /**
     * List files of gist.
     * Gist Files
     * @param param the request object
     */
    public gistFilesWithHttpInfo(param: SystemApiGistFilesRequest, options?: Configuration): Promise<HttpInfo<SuccRspListGistFilesRsp>> {
        return this.api.gistFilesWithHttpInfo(param.gistId,  options).toPromise();
    }

    /**
     * List files of gist.
     * Gist Files
     * @param param the request object
     */
    public gistFiles(param: SystemApiGistFilesRequest, options?: Configuration): Promise<SuccRspListGistFilesRsp> {
        return this.api.gistFiles(param.gistId,  options).toPromise();
    }

    /**
     * List files of repository.
     * Repo Files
     * @param param the request object
     */
    public repoFilesWithHttpInfo(param: SystemApiRepoFilesRequest, options?: Configuration): Promise<HttpInfo<SuccRspListRepoFilesRsp>> {
        return this.api.repoFilesWithHttpInfo(param.repo, param.ref,  options).toPromise();
    }

    /**
     * List files of repository.
     * Repo Files
     * @param param the request object
     */
    public repoFiles(param: SystemApiRepoFilesRequest, options?: Configuration): Promise<SuccRspListRepoFilesRsp> {
        return this.api.repoFiles(param.repo, param.ref,  options).toPromise();
    }

    /**
     * List repositories and gists of the current (GitHub) user.  Of course this API can only be used when the user is login using the GitHub account.  The return value contains two parts: 1. List of repositories names. 2. List of gists. As the description field can\'t uniquely identify a gist, the id field is also returned. In practice, the description field should be showed to user for them to select the gist, the ID field should be used to specify a gist.
     * List repositories and gists.
     * @param param the request object
     */
    public repositoryWithHttpInfo(param: SystemApiRepositoryRequest = {}, options?: Configuration): Promise<HttpInfo<SuccRspListRepositoryRsp>> {
        return this.api.repositoryWithHttpInfo(param.pageNo, param.pageSize,  options).toPromise();
    }

    /**
     * List repositories and gists of the current (GitHub) user.  Of course this API can only be used when the user is login using the GitHub account.  The return value contains two parts: 1. List of repositories names. 2. List of gists. As the description field can\'t uniquely identify a gist, the id field is also returned. In practice, the description field should be showed to user for them to select the gist, the ID field should be used to specify a gist.
     * List repositories and gists.
     * @param param the request object
     */
    public repository(param: SystemApiRepositoryRequest = {}, options?: Configuration): Promise<SuccRspListRepositoryRsp> {
        return this.api.repository(param.pageNo, param.pageSize,  options).toPromise();
    }

}
