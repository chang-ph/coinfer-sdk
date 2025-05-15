import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration} from '../configuration'

import { Auth0ConfigRsp } from '../models/Auth0ConfigRsp';
import { Auth0LoginRsp } from '../models/Auth0LoginRsp';
import { CreateExperiment } from '../models/CreateExperiment';
import { CreateExperimentShare } from '../models/CreateExperimentShare';
import { CreateExperimentShareRsp } from '../models/CreateExperimentShareRsp';
import { CreateModel } from '../models/CreateModel';
import { CreateModelShare } from '../models/CreateModelShare';
import { CreateModelShareRsp } from '../models/CreateModelShareRsp';
import { CreateObjectReq } from '../models/CreateObjectReq';
import { CreateToken } from '../models/CreateToken';
import { Data } from '../models/Data';
import { Data1 } from '../models/Data1';
import { Data2 } from '../models/Data2';
import { Data3 } from '../models/Data3';
import { DeleteModelShare } from '../models/DeleteModelShare';
import { DeleteObject } from '../models/DeleteObject';
import { ErrRsp } from '../models/ErrRsp';
import { ExperimentRsp } from '../models/ExperimentRsp';
import { GetConfigRsp } from '../models/GetConfigRsp';
import { GetExperimentShareRsp } from '../models/GetExperimentShareRsp';
import { GetModelShareRsp } from '../models/GetModelShareRsp';
import { GetNotificationReq } from '../models/GetNotificationReq';
import { GetSampleDataRsp } from '../models/GetSampleDataRsp';
import { GetTokensRsp } from '../models/GetTokensRsp';
import { GistRsp } from '../models/GistRsp';
import { ListBranchRsp } from '../models/ListBranchRsp';
import { ListExperimentRsp } from '../models/ListExperimentRsp';
import { ListGitHubRepository } from '../models/ListGitHubRepository';
import { ListModelsRspItem } from '../models/ListModelsRspItem';
import { ListObjectTmp } from '../models/ListObjectTmp';
import { ListRepositoryRsp } from '../models/ListRepositoryRsp';
import { ListingRspDataNotificationDict } from '../models/ListingRspDataNotificationDict';
import { ListingRspDataUnionListExperimentRspListModelsRspItem } from '../models/ListingRspDataUnionListExperimentRspListModelsRspItem';
import { ListingRspDataUnionListExperimentRspListModelsRspItemObjectsInner } from '../models/ListingRspDataUnionListExperimentRspListModelsRspItemObjectsInner';
import { MarkNotificationReadReq } from '../models/MarkNotificationReadReq';
import { MetaModel } from '../models/MetaModel';
import { ModelContent } from '../models/ModelContent';
import { ModelMeta } from '../models/ModelMeta';
import { ModelMetaInRsp } from '../models/ModelMetaInRsp';
import { ModelTreeNode } from '../models/ModelTreeNode';
import { ModifyCurrentUser } from '../models/ModifyCurrentUser';
import { ModifyCurrentUserNew } from '../models/ModifyCurrentUserNew';
import { ModifyToken } from '../models/ModifyToken';
import { ModifyTokenNew } from '../models/ModifyTokenNew';
import { NotificationDict } from '../models/NotificationDict';
import { Payload } from '../models/Payload';
import { Payload1 } from '../models/Payload1';
import { Payload2 } from '../models/Payload2';
import { ShareInfoModel } from '../models/ShareInfoModel';
import { SuccRspAnnotatedUnionExperimentRspViewModelsRspViewExperimentShareRspFieldInfoAnnotationNoneTypeRequiredTrueDiscriminatorObjectType } from '../models/SuccRspAnnotatedUnionExperimentRspViewModelsRspViewExperimentShareRspFieldInfoAnnotationNoneTypeRequiredTrueDiscriminatorObjectType';
import { SuccRspAny } from '../models/SuccRspAny';
import { SuccRspAuth0ConfigRsp } from '../models/SuccRspAuth0ConfigRsp';
import { SuccRspAuth0LoginRsp } from '../models/SuccRspAuth0LoginRsp';
import { SuccRspCreateModelShareRsp } from '../models/SuccRspCreateModelShareRsp';
import { SuccRspGetConfigRsp } from '../models/SuccRspGetConfigRsp';
import { SuccRspGetExperimentShareRsp } from '../models/SuccRspGetExperimentShareRsp';
import { SuccRspGetModelShareRsp } from '../models/SuccRspGetModelShareRsp';
import { SuccRspGetSampleDataRsp } from '../models/SuccRspGetSampleDataRsp';
import { SuccRspGetTokensRsp } from '../models/SuccRspGetTokensRsp';
import { SuccRspListBranchRsp } from '../models/SuccRspListBranchRsp';
import { SuccRspListGetTokensRsp } from '../models/SuccRspListGetTokensRsp';
import { SuccRspListRepositoryRsp } from '../models/SuccRspListRepositoryRsp';
import { SuccRspListingRspDataNotificationDict } from '../models/SuccRspListingRspDataNotificationDict';
import { SuccRspListingRspDataUnionListExperimentRspListModelsRspItem } from '../models/SuccRspListingRspDataUnionListExperimentRspListModelsRspItem';
import { SuccRspNoneType } from '../models/SuccRspNoneType';
import { SuccRspUnionExperimentRspListModelsRspItemCreateExperimentShareRsp } from '../models/SuccRspUnionExperimentRspListModelsRspItemCreateExperimentShareRsp';
import { SuccRspUnionExperimentRspViewModelsRsp } from '../models/SuccRspUnionExperimentRspViewModelsRsp';
import { SuccRspUnionUserInfoRspGetTokensRsp } from '../models/SuccRspUnionUserInfoRspGetTokensRsp';
import { SuccRspUserInfoRsp } from '../models/SuccRspUserInfoRsp';
import { SuccRspUserLoginRsp } from '../models/SuccRspUserLoginRsp';
import { SuccRspViewCloudwatchLogsRsp } from '../models/SuccRspViewCloudwatchLogsRsp';
import { SuccRspViewModelsRsp } from '../models/SuccRspViewModelsRsp';
import { UpdateBase } from '../models/UpdateBase';
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

import { ObservableAuthorizationApi } from "./ObservableAPI";
import { AuthorizationApiRequestFactory, AuthorizationApiResponseProcessor} from "../apis/AuthorizationApi";

export interface AuthorizationApiAuth0ConfigRequest {
}

export interface AuthorizationApiAuth0LoginRequest {
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

export interface AuthorizationApiUpdateRequest {
    /**
     * 
     * @type UpdateBase
     * @memberof AuthorizationApiupdate
     */
    updateBase: UpdateBase
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
     * This API is multi-functional. It can: 1. update the data of the current user 2. update the data of a specific token  Because of this, it support different set of parameters, discrimated by the \"type\" field:  ```js {\"payload\": {\"type\": \"update_user\", ...}} // or {\"payload\": {\"type\": \"update_token\", ...}} ```
     * Update current user or a token
     * @param param the request object
     */
    public updateWithHttpInfo(param: AuthorizationApiUpdateRequest, options?: Configuration): Promise<HttpInfo<SuccRspUnionUserInfoRspGetTokensRsp>> {
        return this.api.updateWithHttpInfo(param.updateBase,  options).toPromise();
    }

    /**
     * This API is multi-functional. It can: 1. update the data of the current user 2. update the data of a specific token  Because of this, it support different set of parameters, discrimated by the \"type\" field:  ```js {\"payload\": {\"type\": \"update_user\", ...}} // or {\"payload\": {\"type\": \"update_token\", ...}} ```
     * Update current user or a token
     * @param param the request object
     */
    public update(param: AuthorizationApiUpdateRequest, options?: Configuration): Promise<SuccRspUnionUserInfoRspGetTokensRsp> {
        return this.api.update(param.updateBase,  options).toPromise();
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

import { ObservableExperimentApi } from "./ObservableAPI";
import { ExperimentApiRequestFactory, ExperimentApiResponseProcessor} from "../apis/ExperimentApi";

export interface ExperimentApiExperimentNotebookRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof ExperimentApiexperimentNotebook
     */
    expid: string
}

export interface ExperimentApiExperimentNotebookColabRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof ExperimentApiexperimentNotebookColab
     */
    expid: string
}

export interface ExperimentApiGetSampleDataRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof ExperimentApigetSampleData
     */
    experimentId: string
    /**
     * 
     * Defaults to: undefined
     * @type &#39;csv&#39; | &#39;grist&#39;
     * @memberof ExperimentApigetSampleData
     */
    fmt: 'csv' | 'grist'
}

export interface ExperimentApiViewXpCloudwatchLogsRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof ExperimentApiviewXpCloudwatchLogs
     */
    objid: string
}

export class ObjectExperimentApi {
    private api: ObservableExperimentApi

    public constructor(configuration: Configuration, requestFactory?: ExperimentApiRequestFactory, responseProcessor?: ExperimentApiResponseProcessor) {
        this.api = new ObservableExperimentApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Download a notebook which can be used to load and visualize the experiment result
     * @param param the request object
     */
    public experimentNotebookWithHttpInfo(param: ExperimentApiExperimentNotebookRequest, options?: Configuration): Promise<HttpInfo<SuccRspAny>> {
        return this.api.experimentNotebookWithHttpInfo(param.expid,  options).toPromise();
    }

    /**
     * Download a notebook which can be used to load and visualize the experiment result
     * @param param the request object
     */
    public experimentNotebook(param: ExperimentApiExperimentNotebookRequest, options?: Configuration): Promise<SuccRspAny> {
        return this.api.experimentNotebook(param.expid,  options).toPromise();
    }

    /**
     * Create notebook which can be used to load and visualize the experiment result. Save it to Github and returns a link which can be used to open this notebook in Google Colab
     * Get a link of the notebook in Colab
     * @param param the request object
     */
    public experimentNotebookColabWithHttpInfo(param: ExperimentApiExperimentNotebookColabRequest, options?: Configuration): Promise<HttpInfo<SuccRspAny>> {
        return this.api.experimentNotebookColabWithHttpInfo(param.expid,  options).toPromise();
    }

    /**
     * Create notebook which can be used to load and visualize the experiment result. Save it to Github and returns a link which can be used to open this notebook in Google Colab
     * Get a link of the notebook in Colab
     * @param param the request object
     */
    public experimentNotebookColab(param: ExperimentApiExperimentNotebookColabRequest, options?: Configuration): Promise<SuccRspAny> {
        return this.api.experimentNotebookColab(param.expid,  options).toPromise();
    }

    /**
     * It takes time for the system to build the sample data file.  If the sample data file not ready yet, the API will return with the `progress` field set to `generating` and the sample data file is then generating in the background by the system. You may need to call this API later to see if the sample data is ready.  If it is ready, the API will return with the `progress` field set to `done` and the `url` field is the presigned URL of the sample data file.
     * Get sample data
     * @param param the request object
     */
    public getSampleDataWithHttpInfo(param: ExperimentApiGetSampleDataRequest, options?: Configuration): Promise<HttpInfo<SuccRspGetSampleDataRsp>> {
        return this.api.getSampleDataWithHttpInfo(param.experimentId, param.fmt,  options).toPromise();
    }

    /**
     * It takes time for the system to build the sample data file.  If the sample data file not ready yet, the API will return with the `progress` field set to `generating` and the sample data file is then generating in the background by the system. You may need to call this API later to see if the sample data is ready.  If it is ready, the API will return with the `progress` field set to `done` and the `url` field is the presigned URL of the sample data file.
     * Get sample data
     * @param param the request object
     */
    public getSampleData(param: ExperimentApiGetSampleDataRequest, options?: Configuration): Promise<SuccRspGetSampleDataRsp> {
        return this.api.getSampleData(param.experimentId, param.fmt,  options).toPromise();
    }

    /**
     * As logs may contain sensetive info, this api can only be used by admin
     * Get Cloudwatch logs
     * @param param the request object
     */
    public viewXpCloudwatchLogsWithHttpInfo(param: ExperimentApiViewXpCloudwatchLogsRequest, options?: Configuration): Promise<HttpInfo<SuccRspViewCloudwatchLogsRsp>> {
        return this.api.viewXpCloudwatchLogsWithHttpInfo(param.objid,  options).toPromise();
    }

    /**
     * As logs may contain sensetive info, this api can only be used by admin
     * Get Cloudwatch logs
     * @param param the request object
     */
    public viewXpCloudwatchLogs(param: ExperimentApiViewXpCloudwatchLogsRequest, options?: Configuration): Promise<SuccRspViewCloudwatchLogsRsp> {
        return this.api.viewXpCloudwatchLogs(param.objid,  options).toPromise();
    }

}

import { ObservableModelApi } from "./ObservableAPI";
import { ModelApiRequestFactory, ModelApiResponseProcessor} from "../apis/ModelApi";

export interface ModelApiGetConfigRequest {
}

export interface ModelApiListBranchRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof ModelApilistBranch
     */
    repo: string
}

export interface ModelApiListRepositoryRequest {
    /**
     * page number
     * Defaults to: 1
     * @type number
     * @memberof ModelApilistRepository
     */
    pageNo?: number
    /**
     * page size
     * Maximum: 1000
     * Defaults to: 100
     * @type number
     * @memberof ModelApilistRepository
     */
    pageSize?: number
}

export interface ModelApiViewSharedModelRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof ModelApiviewSharedModel
     */
    objid: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof ModelApiviewSharedModel
     */
    shareId: string
}

export class ObjectModelApi {
    private api: ObservableModelApi

    public constructor(configuration: Configuration, requestFactory?: ModelApiRequestFactory, responseProcessor?: ModelApiResponseProcessor) {
        this.api = new ObservableModelApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * This API is used to get the configuration about how to run a model. Currently the configuration includes the URL of the proxy lambda function which is used to run the model.
     * Get configuration about how to run a model.
     * @param param the request object
     */
    public getConfigWithHttpInfo(param: ModelApiGetConfigRequest = {}, options?: Configuration): Promise<HttpInfo<SuccRspGetConfigRsp>> {
        return this.api.getConfigWithHttpInfo( options).toPromise();
    }

    /**
     * This API is used to get the configuration about how to run a model. Currently the configuration includes the URL of the proxy lambda function which is used to run the model.
     * Get configuration about how to run a model.
     * @param param the request object
     */
    public getConfig(param: ModelApiGetConfigRequest = {}, options?: Configuration): Promise<SuccRspGetConfigRsp> {
        return this.api.getConfig( options).toPromise();
    }

    /**
     * List branches of the specified repository.
     * List branches.
     * @param param the request object
     */
    public listBranchWithHttpInfo(param: ModelApiListBranchRequest, options?: Configuration): Promise<HttpInfo<SuccRspListBranchRsp>> {
        return this.api.listBranchWithHttpInfo(param.repo,  options).toPromise();
    }

    /**
     * List branches of the specified repository.
     * List branches.
     * @param param the request object
     */
    public listBranch(param: ModelApiListBranchRequest, options?: Configuration): Promise<SuccRspListBranchRsp> {
        return this.api.listBranch(param.repo,  options).toPromise();
    }

    /**
     * List repositories and gists of the current (GitHub) user.  Of course this API can only be used when the user is login using the GitHub account.  The return value contains two parts: 1. List of repositories names. 2. List of gists. As the description field can\'t uniquely identify a gist, the id field is also returned. In practice, the description field should be showed to user for them to select the gist, the ID field should be used to specify a gist.
     * List repositories and gists.
     * @param param the request object
     */
    public listRepositoryWithHttpInfo(param: ModelApiListRepositoryRequest = {}, options?: Configuration): Promise<HttpInfo<SuccRspListRepositoryRsp>> {
        return this.api.listRepositoryWithHttpInfo(param.pageNo, param.pageSize,  options).toPromise();
    }

    /**
     * List repositories and gists of the current (GitHub) user.  Of course this API can only be used when the user is login using the GitHub account.  The return value contains two parts: 1. List of repositories names. 2. List of gists. As the description field can\'t uniquely identify a gist, the id field is also returned. In practice, the description field should be showed to user for them to select the gist, the ID field should be used to specify a gist.
     * List repositories and gists.
     * @param param the request object
     */
    public listRepository(param: ModelApiListRepositoryRequest = {}, options?: Configuration): Promise<SuccRspListRepositoryRsp> {
        return this.api.listRepository(param.pageNo, param.pageSize,  options).toPromise();
    }

    /**
     * View the snapshot of a model which is created when creating the share.  The snapshot is assured to remain unchanged even when the model undergoes modifications. This guarantees that discussions regarding shared resources among users are grounded in a solid foundation.
     * View share snapshot of a model
     * @param param the request object
     */
    public viewSharedModelWithHttpInfo(param: ModelApiViewSharedModelRequest, options?: Configuration): Promise<HttpInfo<SuccRspViewModelsRsp>> {
        return this.api.viewSharedModelWithHttpInfo(param.objid, param.shareId,  options).toPromise();
    }

    /**
     * View the snapshot of a model which is created when creating the share.  The snapshot is assured to remain unchanged even when the model undergoes modifications. This guarantees that discussions regarding shared resources among users are grounded in a solid foundation.
     * View share snapshot of a model
     * @param param the request object
     */
    public viewSharedModel(param: ModelApiViewSharedModelRequest, options?: Configuration): Promise<SuccRspViewModelsRsp> {
        return this.api.viewSharedModel(param.objid, param.shareId,  options).toPromise();
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
     * 
     * Defaults to: undefined
     * @type Array&lt;string&gt;
     * @memberof ObjectApideleteObject
     */
    objids: Array<string>
}

export interface ObjectApiListObjectRequest {
    /**
     * 
     * Defaults to: undefined
     * @type &#39;model&#39; | &#39;experiment&#39; | &#39;share&#39;
     * @memberof ObjectApilistObject
     */
    objectType: 'model' | 'experiment' | 'share'
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
     * Defaults to: undefined
     * @type &#39;model&#39; | &#39;experiment&#39; | &#39;share&#39;
     * @memberof ObjectApiviewObject
     */
    objectType: 'model' | 'experiment' | 'share'
    /**
     *                  Only appicable to object_type &#x3D;&#x3D; model or object_type &#x3D;&#x3D; experiment                 If this field is empty, returns the latest version of the objects.                 otherwise returns the specified share snapshot
     * Defaults to: &#39;&#39;
     * @type string
     * @memberof ObjectApiviewObject
     */
    shareId?: string
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
    public createObjectWithHttpInfo(param: ObjectApiCreateObjectRequest, options?: Configuration): Promise<HttpInfo<SuccRspUnionExperimentRspListModelsRspItemCreateExperimentShareRsp>> {
        return this.api.createObjectWithHttpInfo(param.createObjectReq,  options).toPromise();
    }

    /**
     * Create new object.  ### Example Create model: ``` POST /api/object {     \"payload\": {         \"object_type\": \"model\",         \"name\": \"model name\",         \"type\": \"local\",         \"content\": {             \"meta\": {\"entrance_file\": \"main.jl\"},             \"tree\": [],         }     } } ```  Create model from GitHub repo: ``` POST /api/object {     \"payload\": {         \"object_type\": \"model\",         \"repo\": \"vectorly-ai/simple-model\",         \"branch\": \"main\",         \"type\": \"repo\",     } } ```  Create model from GitHub gist: ``` POST /api/object {     \"payload\": {         \"object_type\": \"model\",         \"repo\": \"<the-gist-id>\",         \"type\": \"gist\",     } } ```  Create experiment: ``` POST /api/object {     \"payload\": {         \"object_type\": \"experiment\",         \"name\": \"experiment name\",         \"model_id\": \"M1234567\",     } } ```  Create share of experiment: ``` POST /api/object {     \"payload\": {         \"object_type\": \"share\",         \"objid\": \"X1234567\",         \"password\": \"the-pass\",     } } ```
     * Create new object.
     * @param param the request object
     */
    public createObject(param: ObjectApiCreateObjectRequest, options?: Configuration): Promise<SuccRspUnionExperimentRspListModelsRspItemCreateExperimentShareRsp> {
        return this.api.createObject(param.createObjectReq,  options).toPromise();
    }

    /**
     * Delete objects of certain IDs in batch.  ### Example  ``` DELETE /api/object?objids=M1234567&objids=X1234567 ```
     * Delete objects.
     * @param param the request object
     */
    public deleteObjectWithHttpInfo(param: ObjectApiDeleteObjectRequest, options?: Configuration): Promise<HttpInfo<SuccRspNoneType>> {
        return this.api.deleteObjectWithHttpInfo(param.objids,  options).toPromise();
    }

    /**
     * Delete objects of certain IDs in batch.  ### Example  ``` DELETE /api/object?objids=M1234567&objids=X1234567 ```
     * Delete objects.
     * @param param the request object
     */
    public deleteObject(param: ObjectApiDeleteObjectRequest, options?: Configuration): Promise<SuccRspNoneType> {
        return this.api.deleteObject(param.objids,  options).toPromise();
    }

    /**
     * ### List Objects  By default, the API returns only objects created by the current user, excluding sharing information for performance optimization.  When `shared_with_me` is enabled, the API returns objects owned by other users but shared with the current user, including their sharing details.  Enabling `shared_by_me` will include sharing information for objects that the current user has shared with others.  Setting `with_share_info` to true combines both scenarios: it returns objects shared by the current user as well as objects shared with the current user, complete with their respective sharing information. This effectively merges the functionality of both `shared_by_me` and `shared_with_me`.  ### Example  List models: ``` GET /api/object?object_type=model GET /api/object?object_type=model&shared_by_me=true GET /api/object?object_type=model&shared_with_me=true GET /api/object?object_type=model&with_share_info=true ```  List experiments: ``` GET /api/object?object_type=experiment GET /api/object?object_type=experiment&shared_by_me=true GET /api/object?object_type=experiment&shared_with_me=true GET /api/object?object_type=experiment&with_share_info=true ```
     * List objects.
     * @param param the request object
     */
    public listObjectWithHttpInfo(param: ObjectApiListObjectRequest, options?: Configuration): Promise<HttpInfo<SuccRspListingRspDataUnionListExperimentRspListModelsRspItem>> {
        return this.api.listObjectWithHttpInfo(param.objectType, param.pageNo, param.pageSize, param.withShareInfo, param.sharedByMe, param.sharedWithMe, param.modelIds, param.status, param.runOn, param.hasModel,  options).toPromise();
    }

    /**
     * ### List Objects  By default, the API returns only objects created by the current user, excluding sharing information for performance optimization.  When `shared_with_me` is enabled, the API returns objects owned by other users but shared with the current user, including their sharing details.  Enabling `shared_by_me` will include sharing information for objects that the current user has shared with others.  Setting `with_share_info` to true combines both scenarios: it returns objects shared by the current user as well as objects shared with the current user, complete with their respective sharing information. This effectively merges the functionality of both `shared_by_me` and `shared_with_me`.  ### Example  List models: ``` GET /api/object?object_type=model GET /api/object?object_type=model&shared_by_me=true GET /api/object?object_type=model&shared_with_me=true GET /api/object?object_type=model&with_share_info=true ```  List experiments: ``` GET /api/object?object_type=experiment GET /api/object?object_type=experiment&shared_by_me=true GET /api/object?object_type=experiment&shared_with_me=true GET /api/object?object_type=experiment&with_share_info=true ```
     * List objects.
     * @param param the request object
     */
    public listObject(param: ObjectApiListObjectRequest, options?: Configuration): Promise<SuccRspListingRspDataUnionListExperimentRspListModelsRspItem> {
        return this.api.listObject(param.objectType, param.pageNo, param.pageSize, param.withShareInfo, param.sharedByMe, param.sharedWithMe, param.modelIds, param.status, param.runOn, param.hasModel,  options).toPromise();
    }

    /**
     * Update object of certain ID.  ### Example  Update model: ``` POST /api/object/M1234567  {     \"payload\": {         \"object_type\": \"model\",         \"name\": \"model name\",         \"content\": {             \"meta\": {\"entrance_file\": \"main.jl\"},             \"tree\": [],         }     } } ```  Update experiment: ``` POST /api/object/X1234567  {     \"payload\": {         \"object_type\": \"experiment\",         \"name\": \"experiment name\",     } } ```
     * Update object.
     * @param param the request object
     */
    public updateObjectWithHttpInfo(param: ObjectApiUpdateObjectRequest, options?: Configuration): Promise<HttpInfo<SuccRspUnionExperimentRspViewModelsRsp>> {
        return this.api.updateObjectWithHttpInfo(param.objid, param.updateObject,  options).toPromise();
    }

    /**
     * Update object of certain ID.  ### Example  Update model: ``` POST /api/object/M1234567  {     \"payload\": {         \"object_type\": \"model\",         \"name\": \"model name\",         \"content\": {             \"meta\": {\"entrance_file\": \"main.jl\"},             \"tree\": [],         }     } } ```  Update experiment: ``` POST /api/object/X1234567  {     \"payload\": {         \"object_type\": \"experiment\",         \"name\": \"experiment name\",     } } ```
     * Update object.
     * @param param the request object
     */
    public updateObject(param: ObjectApiUpdateObjectRequest, options?: Configuration): Promise<SuccRspUnionExperimentRspViewModelsRsp> {
        return this.api.updateObject(param.objid, param.updateObject,  options).toPromise();
    }

    /**
     * View object of certain ID.  ### Example  ``` GET /api/object/M1234567  # view model data GET /api/object/X1234567  # view experiment data GET /api/object/S1234566  # view share data ```
     * View object.
     * @param param the request object
     */
    public viewObjectWithHttpInfo(param: ObjectApiViewObjectRequest, options?: Configuration): Promise<HttpInfo<SuccRspAnnotatedUnionExperimentRspViewModelsRspViewExperimentShareRspFieldInfoAnnotationNoneTypeRequiredTrueDiscriminatorObjectType>> {
        return this.api.viewObjectWithHttpInfo(param.objid, param.objectType, param.shareId,  options).toPromise();
    }

    /**
     * View object of certain ID.  ### Example  ``` GET /api/object/M1234567  # view model data GET /api/object/X1234567  # view experiment data GET /api/object/S1234566  # view share data ```
     * View object.
     * @param param the request object
     */
    public viewObject(param: ObjectApiViewObjectRequest, options?: Configuration): Promise<SuccRspAnnotatedUnionExperimentRspViewModelsRspViewExperimentShareRspFieldInfoAnnotationNoneTypeRequiredTrueDiscriminatorObjectType> {
        return this.api.viewObject(param.objid, param.objectType, param.shareId,  options).toPromise();
    }

}

import { ObservableShareApi } from "./ObservableAPI";
import { ShareApiRequestFactory, ShareApiResponseProcessor} from "../apis/ShareApi";

export interface ShareApiCoinferApisNoAuthApiGetExperimentShareRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof ShareApicoinferApisNoAuthApiGetExperimentShare
     */
    shareId: string
}

export interface ShareApiCreateModelShareRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof ShareApicreateModelShare
     */
    modelId: string
    /**
     * 
     * @type CreateModelShare
     * @memberof ShareApicreateModelShare
     */
    createModelShare: CreateModelShare
}

export interface ShareApiDeleteModelShareRequest {
    /**
     * \&quot;-\&quot;separated share ids
     * Defaults to: undefined
     * @type string
     * @memberof ShareApideleteModelShare
     */
    shareId: string
}

export interface ShareApiGetModelShareRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof ShareApigetModelShare
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
    public coinferApisNoAuthApiGetExperimentShareWithHttpInfo(param: ShareApiCoinferApisNoAuthApiGetExperimentShareRequest, options?: Configuration): Promise<HttpInfo<SuccRspGetExperimentShareRsp>> {
        return this.api.coinferApisNoAuthApiGetExperimentShareWithHttpInfo(param.shareId,  options).toPromise();
    }

    /**
     * Get sharing information of an experiment.
     * @param param the request object
     */
    public coinferApisNoAuthApiGetExperimentShare(param: ShareApiCoinferApisNoAuthApiGetExperimentShareRequest, options?: Configuration): Promise<SuccRspGetExperimentShareRsp> {
        return this.api.coinferApisNoAuthApiGetExperimentShare(param.shareId,  options).toPromise();
    }

    /**
     * Share a model specified by model ID.  Currently we support three types of sharing:  1. Public sharing: The model is shared publicly. Create a public share by not specifying `target_user` and share password in the request body.  2. User-specific sharing: The model is shared with a specific user. Create a user-specific share by specifying `target_user` in the request body. The `target_user` should be in the format of `name(@id)`. This is exactly the format what the user info API returns.  3. Password-protected sharing: The model is shared with a password. Create a password-protected share by specifying `password` in the request body.
     * Share a model specified by model ID.
     * @param param the request object
     */
    public createModelShareWithHttpInfo(param: ShareApiCreateModelShareRequest, options?: Configuration): Promise<HttpInfo<SuccRspCreateModelShareRsp>> {
        return this.api.createModelShareWithHttpInfo(param.modelId, param.createModelShare,  options).toPromise();
    }

    /**
     * Share a model specified by model ID.  Currently we support three types of sharing:  1. Public sharing: The model is shared publicly. Create a public share by not specifying `target_user` and share password in the request body.  2. User-specific sharing: The model is shared with a specific user. Create a user-specific share by specifying `target_user` in the request body. The `target_user` should be in the format of `name(@id)`. This is exactly the format what the user info API returns.  3. Password-protected sharing: The model is shared with a password. Create a password-protected share by specifying `password` in the request body.
     * Share a model specified by model ID.
     * @param param the request object
     */
    public createModelShare(param: ShareApiCreateModelShareRequest, options?: Configuration): Promise<SuccRspCreateModelShareRsp> {
        return this.api.createModelShare(param.modelId, param.createModelShare,  options).toPromise();
    }

    /**
     *      
     * Delete model shares.
     * @param param the request object
     */
    public deleteModelShareWithHttpInfo(param: ShareApiDeleteModelShareRequest, options?: Configuration): Promise<HttpInfo<SuccRspNoneType>> {
        return this.api.deleteModelShareWithHttpInfo(param.shareId,  options).toPromise();
    }

    /**
     *      
     * Delete model shares.
     * @param param the request object
     */
    public deleteModelShare(param: ShareApiDeleteModelShareRequest, options?: Configuration): Promise<SuccRspNoneType> {
        return this.api.deleteModelShare(param.shareId,  options).toPromise();
    }

    /**
     * Returns very basic share information without authorization. Currently it only returns one field `require_password`, which is used when opening a share URL. If `require_password` is true, then a password input box is open. Else the page should be directly displayed.
     * Get basic share information of a model sharing.
     * @param param the request object
     */
    public getModelShareWithHttpInfo(param: ShareApiGetModelShareRequest, options?: Configuration): Promise<HttpInfo<SuccRspGetModelShareRsp>> {
        return this.api.getModelShareWithHttpInfo(param.shareId,  options).toPromise();
    }

    /**
     * Returns very basic share information without authorization. Currently it only returns one field `require_password`, which is used when opening a share URL. If `require_password` is true, then a password input box is open. Else the page should be directly displayed.
     * Get basic share information of a model sharing.
     * @param param the request object
     */
    public getModelShare(param: ShareApiGetModelShareRequest, options?: Configuration): Promise<SuccRspGetModelShareRsp> {
        return this.api.getModelShare(param.shareId,  options).toPromise();
    }

}
