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
import { DeleteLinkedAccountReq } from '../models/DeleteLinkedAccountReq';
import { DeleteObject } from '../models/DeleteObject';
import { DeleteTokenReq } from '../models/DeleteTokenReq';
import { DemoListItem } from '../models/DemoListItem';
import { DemoListRsp } from '../models/DemoListRsp';
import { ErrRsp } from '../models/ErrRsp';
import { ExperimentCloudwatchLogRsp } from '../models/ExperimentCloudwatchLogRsp';
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
import { SuccRspAnnotatedUnionExperimentRspViewModelsRspViewExperimentShareRspExperimentSampleDataRspExperimentCloudwatchLogRspGetExperimentRunInfoRspFieldInfoAnnotationNoneTypeRequiredTrueDiscriminatorObjectType } from '../models/SuccRspAnnotatedUnionExperimentRspViewModelsRspViewExperimentShareRspExperimentSampleDataRspExperimentCloudwatchLogRspGetExperimentRunInfoRspFieldInfoAnnotationNoneTypeRequiredTrueDiscriminatorObjectType';
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
import { ViewModelShareInfo } from '../models/ViewModelShareInfo';
import { ViewModelsRsp } from '../models/ViewModelsRsp';
import { ViewObject } from '../models/ViewObject';
import { ViewObjectTmp } from '../models/ViewObjectTmp';
import { ObservableAuthorizationApi } from './ObservableAPI';

import { AuthorizationApiRequestFactory, AuthorizationApiResponseProcessor} from "../apis/AuthorizationApi";
export class PromiseAuthorizationApi {
    private api: ObservableAuthorizationApi

    public constructor(
        configuration: Configuration,
        requestFactory?: AuthorizationApiRequestFactory,
        responseProcessor?: AuthorizationApiResponseProcessor
    ) {
        this.api = new ObservableAuthorizationApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get access token.
     * Access Token
     */
    public accessTokenWithHttpInfo(_options?: Configuration): Promise<HttpInfo<SuccRspCode2TokenRsp>> {
        const result = this.api.accessTokenWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     * Get access token.
     * Access Token
     */
    public accessToken(_options?: Configuration): Promise<SuccRspCode2TokenRsp> {
        const result = this.api.accessToken(_options);
        return result.toPromise();
    }

    /**
     * Returns the configurations need by the frontend to implement Auth0 login. By using an API to provide this information, we avoid hardcoding them in the frontend code.  This API doen\'t need authorization as it is usually called before login.
     * Get Auth0 login configuration
     */
    public auth0ConfigWithHttpInfo(_options?: Configuration): Promise<HttpInfo<SuccRspAuth0ConfigRsp>> {
        const result = this.api.auth0ConfigWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     * Returns the configurations need by the frontend to implement Auth0 login. By using an API to provide this information, we avoid hardcoding them in the frontend code.  This API doen\'t need authorization as it is usually called before login.
     * Get Auth0 login configuration
     */
    public auth0Config(_options?: Configuration): Promise<SuccRspAuth0ConfigRsp> {
        const result = this.api.auth0Config(_options);
        return result.toPromise();
    }

    /**
     * This API should be called after the user finishes the Auth0 authorization. So the frontend should be able to obtain an Auth0 token at that point. The API should be called with this token in the `Authorization` header, in the format like `Authorization: Bearer <token>`.  The API will call an Auth0 API to query user information with the token. If it successfully gets it, it means the token is valid. Then the API will either:  1. Retrieve the user object within our system 2. Create a new user within our system  depending on whether a user with the same identity exists in our system.  If everything is okay, the API will return a token which can then be used as an identification to call other APIs. The return format is intentionally designed to keep the same as password login API.
     * Login with Auth0.
     */
    public auth0LoginWithHttpInfo(_options?: Configuration): Promise<HttpInfo<SuccRspAuth0LoginRsp>> {
        const result = this.api.auth0LoginWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     * This API should be called after the user finishes the Auth0 authorization. So the frontend should be able to obtain an Auth0 token at that point. The API should be called with this token in the `Authorization` header, in the format like `Authorization: Bearer <token>`.  The API will call an Auth0 API to query user information with the token. If it successfully gets it, it means the token is valid. Then the API will either:  1. Retrieve the user object within our system 2. Create a new user within our system  depending on whether a user with the same identity exists in our system.  If everything is okay, the API will return a token which can then be used as an identification to call other APIs. The return format is intentionally designed to keep the same as password login API.
     * Login with Auth0.
     */
    public auth0Login(_options?: Configuration): Promise<SuccRspAuth0LoginRsp> {
        const result = this.api.auth0Login(_options);
        return result.toPromise();
    }

    /**
     * Exchange code for access token.
     * Code2Token
     * @param code
     */
    public code2tokenWithHttpInfo(code: string, _options?: Configuration): Promise<HttpInfo<SuccRspCode2TokenRsp>> {
        const result = this.api.code2tokenWithHttpInfo(code, _options);
        return result.toPromise();
    }

    /**
     * Exchange code for access token.
     * Code2Token
     * @param code
     */
    public code2token(code: string, _options?: Configuration): Promise<SuccRspCode2TokenRsp> {
        const result = this.api.code2token(code, _options);
        return result.toPromise();
    }

    /**
     * This is where the user explicitly creates a new token. The token can be used to call other APIs in the name of the user.
     * Create a new authorization token.
     * @param [createToken]
     */
    public createTokenWithHttpInfo(createToken?: CreateToken, _options?: Configuration): Promise<HttpInfo<SuccRspGetTokensRsp>> {
        const result = this.api.createTokenWithHttpInfo(createToken, _options);
        return result.toPromise();
    }

    /**
     * This is where the user explicitly creates a new token. The token can be used to call other APIs in the name of the user.
     * Create a new authorization token.
     * @param [createToken]
     */
    public createToken(createToken?: CreateToken, _options?: Configuration): Promise<SuccRspGetTokensRsp> {
        const result = this.api.createToken(createToken, _options);
        return result.toPromise();
    }

    /**
     * Delete linked accounts.
     * Delete Linked Account
     * @param [deletedKey]
     * @param [accounts] account list. List item in format &#x60;&lt;account_type&gt;:&lt;account&gt;&#x60;
     */
    public deleteLinkedAccountWithHttpInfo(deletedKey?: string, accounts?: Array<string>, _options?: Configuration): Promise<HttpInfo<SuccRspSoftDeletedRsp>> {
        const result = this.api.deleteLinkedAccountWithHttpInfo(deletedKey, accounts, _options);
        return result.toPromise();
    }

    /**
     * Delete linked accounts.
     * Delete Linked Account
     * @param [deletedKey]
     * @param [accounts] account list. List item in format &#x60;&lt;account_type&gt;:&lt;account&gt;&#x60;
     */
    public deleteLinkedAccount(deletedKey?: string, accounts?: Array<string>, _options?: Configuration): Promise<SuccRspSoftDeletedRsp> {
        const result = this.api.deleteLinkedAccount(deletedKey, accounts, _options);
        return result.toPromise();
    }

    /**
     * Delete(invalidate) tokens by their IDs.
     * Delete Token
     * @param [deletedKey]
     * @param [tokens] list of tokens to be deleted
     */
    public deleteTokenWithHttpInfo(deletedKey?: string, tokens?: Array<string>, _options?: Configuration): Promise<HttpInfo<SuccRspSoftDeletedRsp>> {
        const result = this.api.deleteTokenWithHttpInfo(deletedKey, tokens, _options);
        return result.toPromise();
    }

    /**
     * Delete(invalidate) tokens by their IDs.
     * Delete Token
     * @param [deletedKey]
     * @param [tokens] list of tokens to be deleted
     */
    public deleteToken(deletedKey?: string, tokens?: Array<string>, _options?: Configuration): Promise<SuccRspSoftDeletedRsp> {
        const result = this.api.deleteToken(deletedKey, tokens, _options);
        return result.toPromise();
    }

    /**
     * Get the tokens created by the current user.  In our system, there are two kinds of tokens:  1. Tokens created explicitly by user. 2. Tokens created implicitly when a user logs in.  This API only returns the former. The latter should be seen as implementation detail and be invisible to the user.
     * List all of current user\'s tokens.
     */
    public getTokensWithHttpInfo(_options?: Configuration): Promise<HttpInfo<SuccRspListGetTokensRsp>> {
        const result = this.api.getTokensWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     * Get the tokens created by the current user.  In our system, there are two kinds of tokens:  1. Tokens created explicitly by user. 2. Tokens created implicitly when a user logs in.  This API only returns the former. The latter should be seen as implementation detail and be invisible to the user.
     * List all of current user\'s tokens.
     */
    public getTokens(_options?: Configuration): Promise<SuccRspListGetTokensRsp> {
        const result = this.api.getTokens(_options);
        return result.toPromise();
    }

    /**
     * Get list of linked account.
     * List Linked Account
     */
    public listLinkedAccountWithHttpInfo(_options?: Configuration): Promise<HttpInfo<SuccRspListLinkedAccountRsp>> {
        const result = this.api.listLinkedAccountWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     * Get list of linked account.
     * List Linked Account
     */
    public listLinkedAccount(_options?: Configuration): Promise<SuccRspListLinkedAccountRsp> {
        const result = this.api.listLinkedAccount(_options);
        return result.toPromise();
    }

    /**
     * Modify the property of the current logined user. Currently only login password is supported.
     * Update information of current user.
     * @param modifyCurrentUser
     */
    public modifyCurrentUserWithHttpInfo(modifyCurrentUser: ModifyCurrentUser, _options?: Configuration): Promise<HttpInfo<SuccRspUserInfoRsp>> {
        const result = this.api.modifyCurrentUserWithHttpInfo(modifyCurrentUser, _options);
        return result.toPromise();
    }

    /**
     * Modify the property of the current logined user. Currently only login password is supported.
     * Update information of current user.
     * @param modifyCurrentUser
     */
    public modifyCurrentUser(modifyCurrentUser: ModifyCurrentUser, _options?: Configuration): Promise<SuccRspUserInfoRsp> {
        const result = this.api.modifyCurrentUser(modifyCurrentUser, _options);
        return result.toPromise();
    }

    /**
     * Modify various property of a token.
     * Update a token by its ID.
     * @param tokenId
     * @param modifyToken
     */
    public modifyTokenWithHttpInfo(tokenId: string, modifyToken: ModifyToken, _options?: Configuration): Promise<HttpInfo<SuccRspGetTokensRsp>> {
        const result = this.api.modifyTokenWithHttpInfo(tokenId, modifyToken, _options);
        return result.toPromise();
    }

    /**
     * Modify various property of a token.
     * Update a token by its ID.
     * @param tokenId
     * @param modifyToken
     */
    public modifyToken(tokenId: string, modifyToken: ModifyToken, _options?: Configuration): Promise<SuccRspGetTokensRsp> {
        const result = this.api.modifyToken(tokenId, modifyToken, _options);
        return result.toPromise();
    }

    /**
     * Returns the information of the current logined user.
     * Get information of current user.
     */
    public userInfoWithHttpInfo(_options?: Configuration): Promise<HttpInfo<SuccRspUserInfoRsp>> {
        const result = this.api.userInfoWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     * Returns the information of the current logined user.
     * Get information of current user.
     */
    public userInfo(_options?: Configuration): Promise<SuccRspUserInfoRsp> {
        const result = this.api.userInfo(_options);
        return result.toPromise();
    }

    /**
     * Login in with user name and password.  On success, the return value of the API will be a token which can then be used as an identification to call other APIs.
     * Login with password.
     * @param userLogin
     */
    public userLoginWithHttpInfo(userLogin: UserLogin, _options?: Configuration): Promise<HttpInfo<SuccRspUserLoginRsp>> {
        const result = this.api.userLoginWithHttpInfo(userLogin, _options);
        return result.toPromise();
    }

    /**
     * Login in with user name and password.  On success, the return value of the API will be a token which can then be used as an identification to call other APIs.
     * Login with password.
     * @param userLogin
     */
    public userLogin(userLogin: UserLogin, _options?: Configuration): Promise<SuccRspUserLoginRsp> {
        const result = this.api.userLogin(userLogin, _options);
        return result.toPromise();
    }

    /**
     * Log out of the system.
     * Logout the system.
     */
    public userLogoutWithHttpInfo(_options?: Configuration): Promise<HttpInfo<SuccRspNoneType>> {
        const result = this.api.userLogoutWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     * Log out of the system.
     * Logout the system.
     */
    public userLogout(_options?: Configuration): Promise<SuccRspNoneType> {
        const result = this.api.userLogout(_options);
        return result.toPromise();
    }


}



import { ObservableNotificationApi } from './ObservableAPI';

import { NotificationApiRequestFactory, NotificationApiResponseProcessor} from "../apis/NotificationApi";
export class PromiseNotificationApi {
    private api: ObservableNotificationApi

    public constructor(
        configuration: Configuration,
        requestFactory?: NotificationApiRequestFactory,
        responseProcessor?: NotificationApiResponseProcessor
    ) {
        this.api = new ObservableNotificationApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get notification messages targeting the current user.
     * Get notification messsages
     * @param status Filter the notification message by read status
     * @param [pageNo] page number
     * @param [pageSize] page size
     */
    public getNotificationWithHttpInfo(status: 'all' | 'read' | 'unread', pageNo?: number, pageSize?: number, _options?: Configuration): Promise<HttpInfo<SuccRspListingRspDataNotificationDict>> {
        const result = this.api.getNotificationWithHttpInfo(status, pageNo, pageSize, _options);
        return result.toPromise();
    }

    /**
     * Get notification messages targeting the current user.
     * Get notification messsages
     * @param status Filter the notification message by read status
     * @param [pageNo] page number
     * @param [pageSize] page size
     */
    public getNotification(status: 'all' | 'read' | 'unread', pageNo?: number, pageSize?: number, _options?: Configuration): Promise<SuccRspListingRspDataNotificationDict> {
        const result = this.api.getNotification(status, pageNo, pageSize, _options);
        return result.toPromise();
    }

    /**
     * Mark some notification as having been read by user. Listing messages support filtering by read mark.
     * Mark notification messsage as already read
     * @param markNotificationReadReq
     */
    public markNotificationReadWithHttpInfo(markNotificationReadReq: MarkNotificationReadReq, _options?: Configuration): Promise<HttpInfo<SuccRspNoneType>> {
        const result = this.api.markNotificationReadWithHttpInfo(markNotificationReadReq, _options);
        return result.toPromise();
    }

    /**
     * Mark some notification as having been read by user. Listing messages support filtering by read mark.
     * Mark notification messsage as already read
     * @param markNotificationReadReq
     */
    public markNotificationRead(markNotificationReadReq: MarkNotificationReadReq, _options?: Configuration): Promise<SuccRspNoneType> {
        const result = this.api.markNotificationRead(markNotificationReadReq, _options);
        return result.toPromise();
    }


}



import { ObservableObjectApi } from './ObservableAPI';

import { ObjectApiRequestFactory, ObjectApiResponseProcessor} from "../apis/ObjectApi";
export class PromiseObjectApi {
    private api: ObservableObjectApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ObjectApiRequestFactory,
        responseProcessor?: ObjectApiResponseProcessor
    ) {
        this.api = new ObservableObjectApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create new object.  ### Example Create model: ``` POST /api/object {     \"payload\": {         \"object_type\": \"model\",         \"name\": \"model name\",         \"type\": \"local\",         \"content\": {             \"meta\": {\"entrance_file\": \"main.jl\"},             \"tree\": [],         }     } } ```  Create model from GitHub repo: ``` POST /api/object {     \"payload\": {         \"object_type\": \"model\",         \"repo\": \"vectorly-ai/simple-model\",         \"branch\": \"main\",         \"type\": \"repo\",     } } ```  Create model from GitHub gist: ``` POST /api/object {     \"payload\": {         \"object_type\": \"model\",         \"repo\": \"<the-gist-id>\",         \"type\": \"gist\",     } } ```  Create experiment: ``` POST /api/object {     \"payload\": {         \"object_type\": \"experiment\",         \"name\": \"experiment name\",         \"model_id\": \"M1234567\",     } } ```  Create share of experiment: ``` POST /api/object {     \"payload\": {         \"object_type\": \"share\",         \"objid\": \"X1234567\",         \"password\": \"the-pass\",     } } ```
     * Create new object.
     * @param createObjectReq
     */
    public createObjectWithHttpInfo(createObjectReq: CreateObjectReq, _options?: Configuration): Promise<HttpInfo<SuccRspAnnotatedUnionExperimentRspListModelsRspItemCreateExperimentShareRspCreateEventRspCreateCallbackRspCreateRelationRspFieldInfoAnnotationNoneTypeRequiredTrueDiscriminatorObjectType>> {
        const result = this.api.createObjectWithHttpInfo(createObjectReq, _options);
        return result.toPromise();
    }

    /**
     * Create new object.  ### Example Create model: ``` POST /api/object {     \"payload\": {         \"object_type\": \"model\",         \"name\": \"model name\",         \"type\": \"local\",         \"content\": {             \"meta\": {\"entrance_file\": \"main.jl\"},             \"tree\": [],         }     } } ```  Create model from GitHub repo: ``` POST /api/object {     \"payload\": {         \"object_type\": \"model\",         \"repo\": \"vectorly-ai/simple-model\",         \"branch\": \"main\",         \"type\": \"repo\",     } } ```  Create model from GitHub gist: ``` POST /api/object {     \"payload\": {         \"object_type\": \"model\",         \"repo\": \"<the-gist-id>\",         \"type\": \"gist\",     } } ```  Create experiment: ``` POST /api/object {     \"payload\": {         \"object_type\": \"experiment\",         \"name\": \"experiment name\",         \"model_id\": \"M1234567\",     } } ```  Create share of experiment: ``` POST /api/object {     \"payload\": {         \"object_type\": \"share\",         \"objid\": \"X1234567\",         \"password\": \"the-pass\",     } } ```
     * Create new object.
     * @param createObjectReq
     */
    public createObject(createObjectReq: CreateObjectReq, _options?: Configuration): Promise<SuccRspAnnotatedUnionExperimentRspListModelsRspItemCreateExperimentShareRspCreateEventRspCreateCallbackRspCreateRelationRspFieldInfoAnnotationNoneTypeRequiredTrueDiscriminatorObjectType> {
        const result = this.api.createObject(createObjectReq, _options);
        return result.toPromise();
    }

    /**
     * Delete objects of certain IDs in batch.  ### Example  ``` DELETE /api/object?objids=M1234567&objids=X1234567 ```
     * Delete objects.
     * @param [objids] list of object ids
     * @param [deletedKey]
     */
    public deleteObjectWithHttpInfo(objids?: Array<string>, deletedKey?: string, _options?: Configuration): Promise<HttpInfo<SuccRspSoftDeletedRsp>> {
        const result = this.api.deleteObjectWithHttpInfo(objids, deletedKey, _options);
        return result.toPromise();
    }

    /**
     * Delete objects of certain IDs in batch.  ### Example  ``` DELETE /api/object?objids=M1234567&objids=X1234567 ```
     * Delete objects.
     * @param [objids] list of object ids
     * @param [deletedKey]
     */
    public deleteObject(objids?: Array<string>, deletedKey?: string, _options?: Configuration): Promise<SuccRspSoftDeletedRsp> {
        const result = this.api.deleteObject(objids, deletedKey, _options);
        return result.toPromise();
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
     * @param [kind] Filter by kind
     */
    public listObjectWithHttpInfo(objectType: 'model' | 'experiment' | 'share' | 'event' | 'callback' | 'relation' | '', pageNo?: number, pageSize?: number, withShareInfo?: boolean, sharedByMe?: boolean, sharedWithMe?: boolean, modelIds?: Array<string>, status?: 'NEW' | 'RUN' | 'FIN' | 'ERR' | '', runOn?: 'Lambda' | 'Fargate' | 'Local' | '', hasModel?: 'true' | 'false' | '', kind?: string, _options?: Configuration): Promise<HttpInfo<SuccRspListingRspDataUnionListExperimentRspListModelsRspItemCreateEventRspCreateCallbackRspCreateRelationRsp>> {
        const result = this.api.listObjectWithHttpInfo(objectType, pageNo, pageSize, withShareInfo, sharedByMe, sharedWithMe, modelIds, status, runOn, hasModel, kind, _options);
        return result.toPromise();
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
     * @param [kind] Filter by kind
     */
    public listObject(objectType: 'model' | 'experiment' | 'share' | 'event' | 'callback' | 'relation' | '', pageNo?: number, pageSize?: number, withShareInfo?: boolean, sharedByMe?: boolean, sharedWithMe?: boolean, modelIds?: Array<string>, status?: 'NEW' | 'RUN' | 'FIN' | 'ERR' | '', runOn?: 'Lambda' | 'Fargate' | 'Local' | '', hasModel?: 'true' | 'false' | '', kind?: string, _options?: Configuration): Promise<SuccRspListingRspDataUnionListExperimentRspListModelsRspItemCreateEventRspCreateCallbackRspCreateRelationRsp> {
        const result = this.api.listObject(objectType, pageNo, pageSize, withShareInfo, sharedByMe, sharedWithMe, modelIds, status, runOn, hasModel, kind, _options);
        return result.toPromise();
    }

    /**
     * Update object of certain ID.  ### Example  Update model: ``` POST /api/object/M1234567  {     \"payload\": {         \"object_type\": \"model\",         \"name\": \"model name\",         \"content\": {             \"meta\": {\"entrance_file\": \"main.jl\"},             \"tree\": [],         }     } } ```  Update experiment: ``` POST /api/object/X1234567  {     \"payload\": {         \"object_type\": \"experiment\",         \"name\": \"experiment name\",     } } ```
     * Update object.
     * @param objid
     * @param updateObject
     */
    public updateObjectWithHttpInfo(objid: string, updateObject: UpdateObject, _options?: Configuration): Promise<HttpInfo<SuccRspUnionExperimentRspViewModelsRspNoneType>> {
        const result = this.api.updateObjectWithHttpInfo(objid, updateObject, _options);
        return result.toPromise();
    }

    /**
     * Update object of certain ID.  ### Example  Update model: ``` POST /api/object/M1234567  {     \"payload\": {         \"object_type\": \"model\",         \"name\": \"model name\",         \"content\": {             \"meta\": {\"entrance_file\": \"main.jl\"},             \"tree\": [],         }     } } ```  Update experiment: ``` POST /api/object/X1234567  {     \"payload\": {         \"object_type\": \"experiment\",         \"name\": \"experiment name\",     } } ```
     * Update object.
     * @param objid
     * @param updateObject
     */
    public updateObject(objid: string, updateObject: UpdateObject, _options?: Configuration): Promise<SuccRspUnionExperimentRspViewModelsRspNoneType> {
        const result = this.api.updateObject(objid, updateObject, _options);
        return result.toPromise();
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
    public viewObjectWithHttpInfo(objid: string, objectType?: 'model' | 'experiment' | 'share' | 'event' | 'callback' | 'relation' | '', shareId?: string, sampledata?: boolean, fmt?: 'csv' | 'grist' | 'arviz', cloudwatchLog?: boolean, batchId?: string, runId?: string, _options?: Configuration): Promise<HttpInfo<SuccRspAnnotatedUnionExperimentRspViewModelsRspViewExperimentShareRspExperimentSampleDataRspExperimentCloudwatchLogRspGetExperimentRunInfoRspFieldInfoAnnotationNoneTypeRequiredTrueDiscriminatorObjectType>> {
        const result = this.api.viewObjectWithHttpInfo(objid, objectType, shareId, sampledata, fmt, cloudwatchLog, batchId, runId, _options);
        return result.toPromise();
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
    public viewObject(objid: string, objectType?: 'model' | 'experiment' | 'share' | 'event' | 'callback' | 'relation' | '', shareId?: string, sampledata?: boolean, fmt?: 'csv' | 'grist' | 'arviz', cloudwatchLog?: boolean, batchId?: string, runId?: string, _options?: Configuration): Promise<SuccRspAnnotatedUnionExperimentRspViewModelsRspViewExperimentShareRspExperimentSampleDataRspExperimentCloudwatchLogRspGetExperimentRunInfoRspFieldInfoAnnotationNoneTypeRequiredTrueDiscriminatorObjectType> {
        const result = this.api.viewObject(objid, objectType, shareId, sampledata, fmt, cloudwatchLog, batchId, runId, _options);
        return result.toPromise();
    }


}



import { ObservableShareApi } from './ObservableAPI';

import { ShareApiRequestFactory, ShareApiResponseProcessor} from "../apis/ShareApi";
export class PromiseShareApi {
    private api: ObservableShareApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ShareApiRequestFactory,
        responseProcessor?: ShareApiResponseProcessor
    ) {
        this.api = new ObservableShareApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get sharing information of an experiment.
     * @param shareId
     */
    public getExperimentShareWithHttpInfo(shareId: string, _options?: Configuration): Promise<HttpInfo<SuccRspGetExperimentShareRsp>> {
        const result = this.api.getExperimentShareWithHttpInfo(shareId, _options);
        return result.toPromise();
    }

    /**
     * Get sharing information of an experiment.
     * @param shareId
     */
    public getExperimentShare(shareId: string, _options?: Configuration): Promise<SuccRspGetExperimentShareRsp> {
        const result = this.api.getExperimentShare(shareId, _options);
        return result.toPromise();
    }


}



import { ObservableSystemApi } from './ObservableAPI';

import { SystemApiRequestFactory, SystemApiResponseProcessor} from "../apis/SystemApi";
export class PromiseSystemApi {
    private api: ObservableSystemApi

    public constructor(
        configuration: Configuration,
        requestFactory?: SystemApiRequestFactory,
        responseProcessor?: SystemApiResponseProcessor
    ) {
        this.api = new ObservableSystemApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * This API is used to get the configuration about how to run a model. Currently the configuration includes the URL of the proxy lambda function which is used to run the model.
     * Get configuration about how to run a model.
     */
    public configWithHttpInfo(_options?: Configuration): Promise<HttpInfo<SuccRspGetConfigRsp>> {
        const result = this.api.configWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     * This API is used to get the configuration about how to run a model. Currently the configuration includes the URL of the proxy lambda function which is used to run the model.
     * Get configuration about how to run a model.
     */
    public config(_options?: Configuration): Promise<SuccRspGetConfigRsp> {
        const result = this.api.config(_options);
        return result.toPromise();
    }

    /**
     * List demo models.
     */
    public repositoryWithHttpInfo(_options?: Configuration): Promise<HttpInfo<SuccRspDemoListRsp>> {
        const result = this.api.repositoryWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     * List demo models.
     */
    public repository(_options?: Configuration): Promise<SuccRspDemoListRsp> {
        const result = this.api.repository(_options);
        return result.toPromise();
    }


}



