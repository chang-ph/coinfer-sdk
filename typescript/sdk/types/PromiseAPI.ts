import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration} from '../configuration'

import { Auth0ConfigRsp } from '../models/Auth0ConfigRsp';
import { Auth0LoginRsp } from '../models/Auth0LoginRsp';
import { BatchDeleteExperiment } from '../models/BatchDeleteExperiment';
import { BatchDeleteModel } from '../models/BatchDeleteModel';
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
import { DeleteExperimentShare } from '../models/DeleteExperimentShare';
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
import { ImportModelReq } from '../models/ImportModelReq';
import { ListBranchRsp } from '../models/ListBranchRsp';
import { ListExperimentRsp } from '../models/ListExperimentRsp';
import { ListGitHubRepository } from '../models/ListGitHubRepository';
import { ListModels } from '../models/ListModels';
import { ListModelsRspItem } from '../models/ListModelsRspItem';
import { ListObject } from '../models/ListObject';
import { ListObjectRsp } from '../models/ListObjectRsp';
import { ListObjectTmp } from '../models/ListObjectTmp';
import { ListRepositoryRsp } from '../models/ListRepositoryRsp';
import { ListingRspDataListModelsRspItem } from '../models/ListingRspDataListModelsRspItem';
import { ListingRspDataListObjectRsp } from '../models/ListingRspDataListObjectRsp';
import { ListingRspDataNotificationDict } from '../models/ListingRspDataNotificationDict';
import { ListingRspDataUnionListExperimentRspListModelsRspItem } from '../models/ListingRspDataUnionListExperimentRspListModelsRspItem';
import { ListingRspDataUnionListExperimentRspListModelsRspItemObjectsInner } from '../models/ListingRspDataUnionListExperimentRspListModelsRspItemObjectsInner';
import { ListingRspListModelsRspItem } from '../models/ListingRspListModelsRspItem';
import { ListingRspListObjectRsp } from '../models/ListingRspListObjectRsp';
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
import { PlaceHolder } from '../models/PlaceHolder';
import { ShareInfoModel } from '../models/ShareInfoModel';
import { SuccRspAnnotatedUnionExperimentRspViewModelsRspViewExperimentShareRspFieldInfoAnnotationNoneTypeRequiredTrueDiscriminatorObjectType } from '../models/SuccRspAnnotatedUnionExperimentRspViewModelsRspViewExperimentShareRspFieldInfoAnnotationNoneTypeRequiredTrueDiscriminatorObjectType';
import { SuccRspAny } from '../models/SuccRspAny';
import { SuccRspAuth0ConfigRsp } from '../models/SuccRspAuth0ConfigRsp';
import { SuccRspAuth0LoginRsp } from '../models/SuccRspAuth0LoginRsp';
import { SuccRspCreateExperimentShareRsp } from '../models/SuccRspCreateExperimentShareRsp';
import { SuccRspCreateModelShareRsp } from '../models/SuccRspCreateModelShareRsp';
import { SuccRspGetConfigRsp } from '../models/SuccRspGetConfigRsp';
import { SuccRspGetExperimentShareRsp } from '../models/SuccRspGetExperimentShareRsp';
import { SuccRspGetModelShareRsp } from '../models/SuccRspGetModelShareRsp';
import { SuccRspGetSampleDataRsp } from '../models/SuccRspGetSampleDataRsp';
import { SuccRspGetTokensRsp } from '../models/SuccRspGetTokensRsp';
import { SuccRspListBranchRsp } from '../models/SuccRspListBranchRsp';
import { SuccRspListGetTokensRsp } from '../models/SuccRspListGetTokensRsp';
import { SuccRspListModelsRspItem } from '../models/SuccRspListModelsRspItem';
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
import { UpdateData } from '../models/UpdateData';
import { UpdateExperiment } from '../models/UpdateExperiment';
import { UpdateModel } from '../models/UpdateModel';
import { UpdateObject } from '../models/UpdateObject';
import { UpdateXP } from '../models/UpdateXP';
import { UserInfoRsp } from '../models/UserInfoRsp';
import { UserLogin } from '../models/UserLogin';
import { UserLoginRsp } from '../models/UserLoginRsp';
import { ViewCloudwatchLogsRsp } from '../models/ViewCloudwatchLogsRsp';
import { ViewExperimentShareRsp } from '../models/ViewExperimentShareRsp';
import { ViewModelShareInfo } from '../models/ViewModelShareInfo';
import { ViewModelsRsp } from '../models/ViewModelsRsp';
import { ViewXP } from '../models/ViewXP';
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
     * Delete(invalidate) a token.
     * Delete a token by its ID.
     * @param tokenId
     */
    public deleteTokenWithHttpInfo(tokenId: string, _options?: Configuration): Promise<HttpInfo<SuccRspNoneType>> {
        const result = this.api.deleteTokenWithHttpInfo(tokenId, _options);
        return result.toPromise();
    }

    /**
     * Delete(invalidate) a token.
     * Delete a token by its ID.
     * @param tokenId
     */
    public deleteToken(tokenId: string, _options?: Configuration): Promise<SuccRspNoneType> {
        const result = this.api.deleteToken(tokenId, _options);
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
     * This API is multi-functional. It can: 1. update the data of the current user 2. update the data of a specific token  Because of this, it support different set of parameters, discrimated by the \"type\" field:  ```js {\"payload\": {\"type\": \"update_user\", ...}} // or {\"payload\": {\"type\": \"update_token\", ...}} ```
     * Update current user or a token
     * @param updateBase
     */
    public updateWithHttpInfo(updateBase: UpdateBase, _options?: Configuration): Promise<HttpInfo<SuccRspUnionUserInfoRspGetTokensRsp>> {
        const result = this.api.updateWithHttpInfo(updateBase, _options);
        return result.toPromise();
    }

    /**
     * This API is multi-functional. It can: 1. update the data of the current user 2. update the data of a specific token  Because of this, it support different set of parameters, discrimated by the \"type\" field:  ```js {\"payload\": {\"type\": \"update_user\", ...}} // or {\"payload\": {\"type\": \"update_token\", ...}} ```
     * Update current user or a token
     * @param updateBase
     */
    public update(updateBase: UpdateBase, _options?: Configuration): Promise<SuccRspUnionUserInfoRspGetTokensRsp> {
        const result = this.api.update(updateBase, _options);
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



import { ObservableExperimentApi } from './ObservableAPI';

import { ExperimentApiRequestFactory, ExperimentApiResponseProcessor} from "../apis/ExperimentApi";
export class PromiseExperimentApi {
    private api: ObservableExperimentApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ExperimentApiRequestFactory,
        responseProcessor?: ExperimentApiResponseProcessor
    ) {
        this.api = new ObservableExperimentApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Delete experiments in batch.  There are two ways to specify the experiments to be deleted: 1. By experiment IDs. In this case all experiments with the specified IDs will be deleted. 2. By model IDs. In this case all experiments with the specified model IDs will be deleted.
     * Delete experiments in batch.
     * @param [objids]
     * @param [modelIds]
     */
    public batchDeleteExperimentWithHttpInfo(objids?: Array<string>, modelIds?: Array<string>, _options?: Configuration): Promise<HttpInfo<SuccRspNoneType>> {
        const result = this.api.batchDeleteExperimentWithHttpInfo(objids, modelIds, _options);
        return result.toPromise();
    }

    /**
     * Delete experiments in batch.  There are two ways to specify the experiments to be deleted: 1. By experiment IDs. In this case all experiments with the specified IDs will be deleted. 2. By model IDs. In this case all experiments with the specified model IDs will be deleted.
     * Delete experiments in batch.
     * @param [objids]
     * @param [modelIds]
     */
    public batchDeleteExperiment(objids?: Array<string>, modelIds?: Array<string>, _options?: Configuration): Promise<SuccRspNoneType> {
        const result = this.api.batchDeleteExperiment(objids, modelIds, _options);
        return result.toPromise();
    }

    /**
     * The API allows you to create a new experiment.
     * Create an experiment.
     */
    public createObjectV1WithHttpInfo(_options?: Configuration): Promise<HttpInfo<SuccRspAny>> {
        const result = this.api.createObjectV1WithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     * The API allows you to create a new experiment.
     * Create an experiment.
     */
    public createObjectV1(_options?: Configuration): Promise<SuccRspAny> {
        const result = this.api.createObjectV1(_options);
        return result.toPromise();
    }

    /**
     * NOTE: the \'D\' prefix in URL is part of the ID.
     * Delete a data object by its ID.
     * @param objid
     */
    public deleteDataWithHttpInfo(objid: string, _options?: Configuration): Promise<HttpInfo<SuccRspNoneType>> {
        const result = this.api.deleteDataWithHttpInfo(objid, _options);
        return result.toPromise();
    }

    /**
     * NOTE: the \'D\' prefix in URL is part of the ID.
     * Delete a data object by its ID.
     * @param objid
     */
    public deleteData(objid: string, _options?: Configuration): Promise<SuccRspNoneType> {
        const result = this.api.deleteData(objid, _options);
        return result.toPromise();
    }

    /**
     * Download a notebook which can be used to load and visualize the experiment result
     * @param expid
     */
    public experimentNotebookWithHttpInfo(expid: string, _options?: Configuration): Promise<HttpInfo<SuccRspAny>> {
        const result = this.api.experimentNotebookWithHttpInfo(expid, _options);
        return result.toPromise();
    }

    /**
     * Download a notebook which can be used to load and visualize the experiment result
     * @param expid
     */
    public experimentNotebook(expid: string, _options?: Configuration): Promise<SuccRspAny> {
        const result = this.api.experimentNotebook(expid, _options);
        return result.toPromise();
    }

    /**
     * Create notebook which can be used to load and visualize the experiment result. Save it to Github and returns a link which can be used to open this notebook in Google Colab
     * Get a link of the notebook in Colab
     * @param expid
     */
    public experimentNotebookColabWithHttpInfo(expid: string, _options?: Configuration): Promise<HttpInfo<SuccRspAny>> {
        const result = this.api.experimentNotebookColabWithHttpInfo(expid, _options);
        return result.toPromise();
    }

    /**
     * Create notebook which can be used to load and visualize the experiment result. Save it to Github and returns a link which can be used to open this notebook in Google Colab
     * Get a link of the notebook in Colab
     * @param expid
     */
    public experimentNotebookColab(expid: string, _options?: Configuration): Promise<SuccRspAny> {
        const result = this.api.experimentNotebookColab(expid, _options);
        return result.toPromise();
    }

    /**
     * It takes time for the system to build the sample data file.  If the sample data file not ready yet, the API will return with the `progress` field set to `generating` and the sample data file is then generating in the background by the system. You may need to call this API later to see if the sample data is ready.  If it is ready, the API will return with the `progress` field set to `done` and the `url` field is the presigned URL of the sample data file.
     * Get sample data
     * @param experimentId
     * @param fmt
     */
    public getSampleDataWithHttpInfo(experimentId: string, fmt: 'csv' | 'grist', _options?: Configuration): Promise<HttpInfo<SuccRspGetSampleDataRsp>> {
        const result = this.api.getSampleDataWithHttpInfo(experimentId, fmt, _options);
        return result.toPromise();
    }

    /**
     * It takes time for the system to build the sample data file.  If the sample data file not ready yet, the API will return with the `progress` field set to `generating` and the sample data file is then generating in the background by the system. You may need to call this API later to see if the sample data is ready.  If it is ready, the API will return with the `progress` field set to `done` and the `url` field is the presigned URL of the sample data file.
     * Get sample data
     * @param experimentId
     * @param fmt
     */
    public getSampleData(experimentId: string, fmt: 'csv' | 'grist', _options?: Configuration): Promise<SuccRspGetSampleDataRsp> {
        const result = this.api.getSampleData(experimentId, fmt, _options);
        return result.toPromise();
    }

    /**
     * ### List Experiment  By default, the API returns only experiments created by the current user, excluding sharing information for performance optimization.  When `shared_with_me` is enabled, the API returns experiments owned by other users but shared with the current user, including their sharing details.  Enabling `shared_by_me` will include sharing information for experiments that the current user has shared with others.  Setting `with_share_info` to true combines both scenarios: it returns experiments shared by the current user as well as experiments shared with the current user, complete with their respective sharing information. This effectively merges the functionality of both `shared_by_me` and `shared_with_me`.
     * List experiments or data.
     * @param [pageNo]
     * @param [pageSize]
     * @param [withShareInfo] Whether to return the related share info
     * @param [sharedByMe] Filter experiments shared by the current user
     * @param [sharedWithMe] Filter experiments shared with the current user
     * @param [objectType]
     * @param [status]
     * @param [runOn]
     * @param [hasModel]
     */
    public listObjectsWithHttpInfo(pageNo?: number, pageSize?: number, withShareInfo?: boolean, sharedByMe?: boolean, sharedWithMe?: boolean, objectType?: 'data' | 'experiment', status?: 'NEW' | 'RUN' | 'FIN' | 'ERR' | '', runOn?: 'Lambda' | 'Fargate' | 'Local' | '', hasModel?: 'true' | 'false' | '', _options?: Configuration): Promise<HttpInfo<ListingRspListObjectRsp>> {
        const result = this.api.listObjectsWithHttpInfo(pageNo, pageSize, withShareInfo, sharedByMe, sharedWithMe, objectType, status, runOn, hasModel, _options);
        return result.toPromise();
    }

    /**
     * ### List Experiment  By default, the API returns only experiments created by the current user, excluding sharing information for performance optimization.  When `shared_with_me` is enabled, the API returns experiments owned by other users but shared with the current user, including their sharing details.  Enabling `shared_by_me` will include sharing information for experiments that the current user has shared with others.  Setting `with_share_info` to true combines both scenarios: it returns experiments shared by the current user as well as experiments shared with the current user, complete with their respective sharing information. This effectively merges the functionality of both `shared_by_me` and `shared_with_me`.
     * List experiments or data.
     * @param [pageNo]
     * @param [pageSize]
     * @param [withShareInfo] Whether to return the related share info
     * @param [sharedByMe] Filter experiments shared by the current user
     * @param [sharedWithMe] Filter experiments shared with the current user
     * @param [objectType]
     * @param [status]
     * @param [runOn]
     * @param [hasModel]
     */
    public listObjects(pageNo?: number, pageSize?: number, withShareInfo?: boolean, sharedByMe?: boolean, sharedWithMe?: boolean, objectType?: 'data' | 'experiment', status?: 'NEW' | 'RUN' | 'FIN' | 'ERR' | '', runOn?: 'Lambda' | 'Fargate' | 'Local' | '', hasModel?: 'true' | 'false' | '', _options?: Configuration): Promise<ListingRspListObjectRsp> {
        const result = this.api.listObjects(pageNo, pageSize, withShareInfo, sharedByMe, sharedWithMe, objectType, status, runOn, hasModel, _options);
        return result.toPromise();
    }

    /**
     * NOTE: the \'D\' prefix in URL is part of the ID.
     * Update a data object by its ID.
     * @param objid
     * @param fmt
     * @param file
     * @param [use]
     */
    public updateDataWithHttpInfo(objid: string, fmt: string, file: HttpFile, use?: string, _options?: Configuration): Promise<HttpInfo<SuccRspAny>> {
        const result = this.api.updateDataWithHttpInfo(objid, fmt, file, use, _options);
        return result.toPromise();
    }

    /**
     * NOTE: the \'D\' prefix in URL is part of the ID.
     * Update a data object by its ID.
     * @param objid
     * @param fmt
     * @param file
     * @param [use]
     */
    public updateData(objid: string, fmt: string, file: HttpFile, use?: string, _options?: Configuration): Promise<SuccRspAny> {
        const result = this.api.updateData(objid, fmt, file, use, _options);
        return result.toPromise();
    }

    /**
     * NOTE: the \'D\' prefix in URL is part of the ID.  NOTE: The status of experiment is manipulated by the system. So normally you should not call this API to update the status.
     * Update an experiment by its ID.
     * @param objid
     * @param updateXP
     */
    public updateExperimentWithHttpInfo(objid: string, updateXP: UpdateXP, _options?: Configuration): Promise<HttpInfo<SuccRspAny>> {
        const result = this.api.updateExperimentWithHttpInfo(objid, updateXP, _options);
        return result.toPromise();
    }

    /**
     * NOTE: the \'D\' prefix in URL is part of the ID.  NOTE: The status of experiment is manipulated by the system. So normally you should not call this API to update the status.
     * Update an experiment by its ID.
     * @param objid
     * @param updateXP
     */
    public updateExperiment(objid: string, updateXP: UpdateXP, _options?: Configuration): Promise<SuccRspAny> {
        const result = this.api.updateExperiment(objid, updateXP, _options);
        return result.toPromise();
    }

    /**
     * NOTE: the \'D\' prefix in URL is part of the ID.
     * View a data object by its ID.
     * @param objid
     */
    public viewDataWithHttpInfo(objid: string, _options?: Configuration): Promise<HttpInfo<SuccRspAny>> {
        const result = this.api.viewDataWithHttpInfo(objid, _options);
        return result.toPromise();
    }

    /**
     * NOTE: the \'D\' prefix in URL is part of the ID.
     * View a data object by its ID.
     * @param objid
     */
    public viewData(objid: string, _options?: Configuration): Promise<SuccRspAny> {
        const result = this.api.viewData(objid, _options);
        return result.toPromise();
    }

    /**
     * NOTE: the \'D\' prefix in URL is part of the ID.  This API is primarily designed for experiment owners to view their experiments, requiring a valid access token for authentication.  For shared experiments, access is granted based on the sharing configuration: 1. Password-protected sharing: Requires the share password for access, eg. `X-Share-Password` in the header 2. Public sharing: Allows access without any password 3. User-specific sharing: Permits access for designated users without requiring a password
     * View an experiment by its ID.
     * @param objid
     * @param [o]
     * @param [log]
     */
    public viewExperimentWithHttpInfo(objid: string, o?: string, log?: string, _options?: Configuration): Promise<HttpInfo<SuccRspAny>> {
        const result = this.api.viewExperimentWithHttpInfo(objid, o, log, _options);
        return result.toPromise();
    }

    /**
     * NOTE: the \'D\' prefix in URL is part of the ID.  This API is primarily designed for experiment owners to view their experiments, requiring a valid access token for authentication.  For shared experiments, access is granted based on the sharing configuration: 1. Password-protected sharing: Requires the share password for access, eg. `X-Share-Password` in the header 2. Public sharing: Allows access without any password 3. User-specific sharing: Permits access for designated users without requiring a password
     * View an experiment by its ID.
     * @param objid
     * @param [o]
     * @param [log]
     */
    public viewExperiment(objid: string, o?: string, log?: string, _options?: Configuration): Promise<SuccRspAny> {
        const result = this.api.viewExperiment(objid, o, log, _options);
        return result.toPromise();
    }

    /**
     * As logs may contain sensetive info, this api can only be used by admin
     * Get Cloudwatch logs
     * @param objid
     */
    public viewXpCloudwatchLogsWithHttpInfo(objid: string, _options?: Configuration): Promise<HttpInfo<SuccRspViewCloudwatchLogsRsp>> {
        const result = this.api.viewXpCloudwatchLogsWithHttpInfo(objid, _options);
        return result.toPromise();
    }

    /**
     * As logs may contain sensetive info, this api can only be used by admin
     * Get Cloudwatch logs
     * @param objid
     */
    public viewXpCloudwatchLogs(objid: string, _options?: Configuration): Promise<SuccRspViewCloudwatchLogsRsp> {
        const result = this.api.viewXpCloudwatchLogs(objid, _options);
        return result.toPromise();
    }


}



import { ObservableModelApi } from './ObservableAPI';

import { ModelApiRequestFactory, ModelApiResponseProcessor} from "../apis/ModelApi";
export class PromiseModelApi {
    private api: ObservableModelApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ModelApiRequestFactory,
        responseProcessor?: ModelApiResponseProcessor
    ) {
        this.api = new ObservableModelApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Delete models in batch.
     * Delete models in batch.
     * @param [objids]
     */
    public batchDeleteModelWithHttpInfo(objids?: Array<string>, _options?: Configuration): Promise<HttpInfo<SuccRspNoneType>> {
        const result = this.api.batchDeleteModelWithHttpInfo(objids, _options);
        return result.toPromise();
    }

    /**
     * Delete models in batch.
     * Delete models in batch.
     * @param [objids]
     */
    public batchDeleteModel(objids?: Array<string>, _options?: Configuration): Promise<SuccRspNoneType> {
        const result = this.api.batchDeleteModel(objids, _options);
        return result.toPromise();
    }

    /**
     * Create a new model.
     * Create a new model.
     * @param createModel
     */
    public createModelWithHttpInfo(createModel: CreateModel, _options?: Configuration): Promise<HttpInfo<SuccRspListModelsRspItem>> {
        const result = this.api.createModelWithHttpInfo(createModel, _options);
        return result.toPromise();
    }

    /**
     * Create a new model.
     * Create a new model.
     * @param createModel
     */
    public createModel(createModel: CreateModel, _options?: Configuration): Promise<SuccRspListModelsRspItem> {
        const result = this.api.createModel(createModel, _options);
        return result.toPromise();
    }

    /**
     * Create a model from GitHub repository/gist.  Some details: 1. Use the repository name as the model name. Use gist description as the model name if it is not empty, otherwise use the gist ID as the model name. 2. Assume that the repository/gist contains Project.toml. 3. Assume that the repository/gist contains main.jl as the entrance file. 4. Assume that the entrance file contains a function named model as the entrance function.
     * Create a model from GitHub repository.
     * @param importModelReq
     */
    public createModelFromGithubWithHttpInfo(importModelReq: ImportModelReq, _options?: Configuration): Promise<HttpInfo<SuccRspListModelsRspItem>> {
        const result = this.api.createModelFromGithubWithHttpInfo(importModelReq, _options);
        return result.toPromise();
    }

    /**
     * Create a model from GitHub repository/gist.  Some details: 1. Use the repository name as the model name. Use gist description as the model name if it is not empty, otherwise use the gist ID as the model name. 2. Assume that the repository/gist contains Project.toml. 3. Assume that the repository/gist contains main.jl as the entrance file. 4. Assume that the entrance file contains a function named model as the entrance function.
     * Create a model from GitHub repository.
     * @param importModelReq
     */
    public createModelFromGithub(importModelReq: ImportModelReq, _options?: Configuration): Promise<SuccRspListModelsRspItem> {
        const result = this.api.createModelFromGithub(importModelReq, _options);
        return result.toPromise();
    }

    /**
     * This API is used to get the configuration about how to run a model. Currently the configuration includes the URL of the proxy lambda function which is used to run the model.
     * Get configuration about how to run a model.
     */
    public getConfigWithHttpInfo(_options?: Configuration): Promise<HttpInfo<SuccRspGetConfigRsp>> {
        const result = this.api.getConfigWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     * This API is used to get the configuration about how to run a model. Currently the configuration includes the URL of the proxy lambda function which is used to run the model.
     * Get configuration about how to run a model.
     */
    public getConfig(_options?: Configuration): Promise<SuccRspGetConfigRsp> {
        const result = this.api.getConfig(_options);
        return result.toPromise();
    }

    /**
     * List branches of the specified repository.
     * List branches.
     * @param repo
     */
    public listBranchWithHttpInfo(repo: string, _options?: Configuration): Promise<HttpInfo<SuccRspListBranchRsp>> {
        const result = this.api.listBranchWithHttpInfo(repo, _options);
        return result.toPromise();
    }

    /**
     * List branches of the specified repository.
     * List branches.
     * @param repo
     */
    public listBranch(repo: string, _options?: Configuration): Promise<SuccRspListBranchRsp> {
        const result = this.api.listBranch(repo, _options);
        return result.toPromise();
    }

    /**
     * By default, the API returns only models created by the current user, excluding sharing information for performance optimization.  When `shared_with_me` is enabled, the API returns models owned by other users but shared with the current user, including their sharing details.  Enabling `shared_by_me` will include sharing information for models that the current user has shared with others.  Setting `with_share_info` to true combines both scenarios: it returns models shared by the current user as well as models shared with the current user, complete with their respective sharing information. This effectively merges the functionality of both `shared_by_me` and `shared_with_me`.
     * List models.
     * @param [pageNo] page number
     * @param [pageSize] page size
     * @param [modelIds]
     * @param [withShareInfo] Whether to return the related share info
     * @param [sharedByMe] Filter models shared by the current user
     * @param [sharedWithMe] Filter models shared with the current user
     */
    public listModelsWithHttpInfo(pageNo?: number, pageSize?: number, modelIds?: Array<string>, withShareInfo?: boolean, sharedByMe?: boolean, sharedWithMe?: boolean, _options?: Configuration): Promise<HttpInfo<ListingRspListModelsRspItem>> {
        const result = this.api.listModelsWithHttpInfo(pageNo, pageSize, modelIds, withShareInfo, sharedByMe, sharedWithMe, _options);
        return result.toPromise();
    }

    /**
     * By default, the API returns only models created by the current user, excluding sharing information for performance optimization.  When `shared_with_me` is enabled, the API returns models owned by other users but shared with the current user, including their sharing details.  Enabling `shared_by_me` will include sharing information for models that the current user has shared with others.  Setting `with_share_info` to true combines both scenarios: it returns models shared by the current user as well as models shared with the current user, complete with their respective sharing information. This effectively merges the functionality of both `shared_by_me` and `shared_with_me`.
     * List models.
     * @param [pageNo] page number
     * @param [pageSize] page size
     * @param [modelIds]
     * @param [withShareInfo] Whether to return the related share info
     * @param [sharedByMe] Filter models shared by the current user
     * @param [sharedWithMe] Filter models shared with the current user
     */
    public listModels(pageNo?: number, pageSize?: number, modelIds?: Array<string>, withShareInfo?: boolean, sharedByMe?: boolean, sharedWithMe?: boolean, _options?: Configuration): Promise<ListingRspListModelsRspItem> {
        const result = this.api.listModels(pageNo, pageSize, modelIds, withShareInfo, sharedByMe, sharedWithMe, _options);
        return result.toPromise();
    }

    /**
     * List repositories and gists of the current (GitHub) user.  Of course this API can only be used when the user is login using the GitHub account.  The return value contains two parts: 1. List of repositories names. 2. List of gists. As the description field can\'t uniquely identify a gist, the id field is also returned. In practice, the description field should be showed to user for them to select the gist, the ID field should be used to specify a gist.
     * List repositories and gists.
     * @param [pageNo] page number
     * @param [pageSize] page size
     */
    public listRepositoryWithHttpInfo(pageNo?: number, pageSize?: number, _options?: Configuration): Promise<HttpInfo<SuccRspListRepositoryRsp>> {
        const result = this.api.listRepositoryWithHttpInfo(pageNo, pageSize, _options);
        return result.toPromise();
    }

    /**
     * List repositories and gists of the current (GitHub) user.  Of course this API can only be used when the user is login using the GitHub account.  The return value contains two parts: 1. List of repositories names. 2. List of gists. As the description field can\'t uniquely identify a gist, the id field is also returned. In practice, the description field should be showed to user for them to select the gist, the ID field should be used to specify a gist.
     * List repositories and gists.
     * @param [pageNo] page number
     * @param [pageSize] page size
     */
    public listRepository(pageNo?: number, pageSize?: number, _options?: Configuration): Promise<SuccRspListRepositoryRsp> {
        const result = this.api.listRepository(pageNo, pageSize, _options);
        return result.toPromise();
    }

    /**
     * Update a model by its ID.  NOTE: The status of model is manipulated by the system. So normally you should not call this API to update the status.
     * Update a model by its ID.
     * @param objid
     * @param updateModel
     */
    public updateModelWithHttpInfo(objid: string, updateModel: UpdateModel, _options?: Configuration): Promise<HttpInfo<SuccRspListModelsRspItem>> {
        const result = this.api.updateModelWithHttpInfo(objid, updateModel, _options);
        return result.toPromise();
    }

    /**
     * Update a model by its ID.  NOTE: The status of model is manipulated by the system. So normally you should not call this API to update the status.
     * Update a model by its ID.
     * @param objid
     * @param updateModel
     */
    public updateModel(objid: string, updateModel: UpdateModel, _options?: Configuration): Promise<SuccRspListModelsRspItem> {
        const result = this.api.updateModel(objid, updateModel, _options);
        return result.toPromise();
    }

    /**
     * This API is primarily designed for model owners to view their models, requiring a valid access token for authentication.  For shared models, access is granted based on the sharing configuration: 1. Password-protected sharing: Requires the share password for access, eg. `X-Share-Password` in the header 2. Public sharing: Allows access without any password 3. User-specific sharing: Permits access for designated users without requiring a password
     * View a model by its ID.
     * @param objid
     */
    public viewModelWithHttpInfo(objid: string, _options?: Configuration): Promise<HttpInfo<SuccRspViewModelsRsp>> {
        const result = this.api.viewModelWithHttpInfo(objid, _options);
        return result.toPromise();
    }

    /**
     * This API is primarily designed for model owners to view their models, requiring a valid access token for authentication.  For shared models, access is granted based on the sharing configuration: 1. Password-protected sharing: Requires the share password for access, eg. `X-Share-Password` in the header 2. Public sharing: Allows access without any password 3. User-specific sharing: Permits access for designated users without requiring a password
     * View a model by its ID.
     * @param objid
     */
    public viewModel(objid: string, _options?: Configuration): Promise<SuccRspViewModelsRsp> {
        const result = this.api.viewModel(objid, _options);
        return result.toPromise();
    }

    /**
     * View the snapshot of a model which is created when creating the share.  The snapshot is assured to remain unchanged even when the model undergoes modifications. This guarantees that discussions regarding shared resources among users are grounded in a solid foundation.
     * View share snapshot of a model
     * @param objid
     * @param shareId
     */
    public viewSharedModelWithHttpInfo(objid: string, shareId: string, _options?: Configuration): Promise<HttpInfo<SuccRspViewModelsRsp>> {
        const result = this.api.viewSharedModelWithHttpInfo(objid, shareId, _options);
        return result.toPromise();
    }

    /**
     * View the snapshot of a model which is created when creating the share.  The snapshot is assured to remain unchanged even when the model undergoes modifications. This guarantees that discussions regarding shared resources among users are grounded in a solid foundation.
     * View share snapshot of a model
     * @param objid
     * @param shareId
     */
    public viewSharedModel(objid: string, shareId: string, _options?: Configuration): Promise<SuccRspViewModelsRsp> {
        const result = this.api.viewSharedModel(objid, shareId, _options);
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
    public createObjectWithHttpInfo(createObjectReq: CreateObjectReq, _options?: Configuration): Promise<HttpInfo<SuccRspUnionExperimentRspListModelsRspItemCreateExperimentShareRsp>> {
        const result = this.api.createObjectWithHttpInfo(createObjectReq, _options);
        return result.toPromise();
    }

    /**
     * Create new object.  ### Example Create model: ``` POST /api/object {     \"payload\": {         \"object_type\": \"model\",         \"name\": \"model name\",         \"type\": \"local\",         \"content\": {             \"meta\": {\"entrance_file\": \"main.jl\"},             \"tree\": [],         }     } } ```  Create model from GitHub repo: ``` POST /api/object {     \"payload\": {         \"object_type\": \"model\",         \"repo\": \"vectorly-ai/simple-model\",         \"branch\": \"main\",         \"type\": \"repo\",     } } ```  Create model from GitHub gist: ``` POST /api/object {     \"payload\": {         \"object_type\": \"model\",         \"repo\": \"<the-gist-id>\",         \"type\": \"gist\",     } } ```  Create experiment: ``` POST /api/object {     \"payload\": {         \"object_type\": \"experiment\",         \"name\": \"experiment name\",         \"model_id\": \"M1234567\",     } } ```  Create share of experiment: ``` POST /api/object {     \"payload\": {         \"object_type\": \"share\",         \"objid\": \"X1234567\",         \"password\": \"the-pass\",     } } ```
     * Create new object.
     * @param createObjectReq
     */
    public createObject(createObjectReq: CreateObjectReq, _options?: Configuration): Promise<SuccRspUnionExperimentRspListModelsRspItemCreateExperimentShareRsp> {
        const result = this.api.createObject(createObjectReq, _options);
        return result.toPromise();
    }

    /**
     * Delete objects of certain IDs in batch.  ### Example  ``` DELETE /api/object?objids=M1234567&objids=X1234567 ```
     * Delete objects.
     * @param objids
     */
    public deleteObjectWithHttpInfo(objids: Array<string>, _options?: Configuration): Promise<HttpInfo<SuccRspNoneType>> {
        const result = this.api.deleteObjectWithHttpInfo(objids, _options);
        return result.toPromise();
    }

    /**
     * Delete objects of certain IDs in batch.  ### Example  ``` DELETE /api/object?objids=M1234567&objids=X1234567 ```
     * Delete objects.
     * @param objids
     */
    public deleteObject(objids: Array<string>, _options?: Configuration): Promise<SuccRspNoneType> {
        const result = this.api.deleteObject(objids, _options);
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
     */
    public listObjectWithHttpInfo(objectType: 'model' | 'experiment' | 'data', pageNo?: number, pageSize?: number, withShareInfo?: boolean, sharedByMe?: boolean, sharedWithMe?: boolean, modelIds?: Array<string>, status?: 'NEW' | 'RUN' | 'FIN' | 'ERR' | '', runOn?: 'Lambda' | 'Fargate' | 'Local' | '', hasModel?: 'true' | 'false' | '', _options?: Configuration): Promise<HttpInfo<SuccRspListingRspDataUnionListExperimentRspListModelsRspItem>> {
        const result = this.api.listObjectWithHttpInfo(objectType, pageNo, pageSize, withShareInfo, sharedByMe, sharedWithMe, modelIds, status, runOn, hasModel, _options);
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
     */
    public listObject(objectType: 'model' | 'experiment' | 'data', pageNo?: number, pageSize?: number, withShareInfo?: boolean, sharedByMe?: boolean, sharedWithMe?: boolean, modelIds?: Array<string>, status?: 'NEW' | 'RUN' | 'FIN' | 'ERR' | '', runOn?: 'Lambda' | 'Fargate' | 'Local' | '', hasModel?: 'true' | 'false' | '', _options?: Configuration): Promise<SuccRspListingRspDataUnionListExperimentRspListModelsRspItem> {
        const result = this.api.listObject(objectType, pageNo, pageSize, withShareInfo, sharedByMe, sharedWithMe, modelIds, status, runOn, hasModel, _options);
        return result.toPromise();
    }

    /**
     * Update object of certain ID.  ### Example  Update model: ``` POST /api/object/M1234567  {     \"payload\": {         \"object_type\": \"model\",         \"name\": \"model name\",         \"content\": {             \"meta\": {\"entrance_file\": \"main.jl\"},             \"tree\": [],         }     } } ```  Update experiment: ``` POST /api/object/X1234567  {     \"payload\": {         \"object_type\": \"experiment\",         \"name\": \"experiment name\",     } } ```
     * Update object.
     * @param objid
     * @param updateObject
     */
    public updateObjectWithHttpInfo(objid: string, updateObject: UpdateObject, _options?: Configuration): Promise<HttpInfo<SuccRspUnionExperimentRspViewModelsRsp>> {
        const result = this.api.updateObjectWithHttpInfo(objid, updateObject, _options);
        return result.toPromise();
    }

    /**
     * Update object of certain ID.  ### Example  Update model: ``` POST /api/object/M1234567  {     \"payload\": {         \"object_type\": \"model\",         \"name\": \"model name\",         \"content\": {             \"meta\": {\"entrance_file\": \"main.jl\"},             \"tree\": [],         }     } } ```  Update experiment: ``` POST /api/object/X1234567  {     \"payload\": {         \"object_type\": \"experiment\",         \"name\": \"experiment name\",     } } ```
     * Update object.
     * @param objid
     * @param updateObject
     */
    public updateObject(objid: string, updateObject: UpdateObject, _options?: Configuration): Promise<SuccRspUnionExperimentRspViewModelsRsp> {
        const result = this.api.updateObject(objid, updateObject, _options);
        return result.toPromise();
    }

    /**
     * View object of certain ID.  ### Example  ``` GET /api/object/M1234567  # view model data GET /api/object/X1234567  # view experiment data GET /api/object/S1234566  # view share data ```
     * View object.
     * @param objid
     * @param [payload]
     */
    public viewObjectWithHttpInfo(objid: string, payload?: any, _options?: Configuration): Promise<HttpInfo<SuccRspAnnotatedUnionExperimentRspViewModelsRspViewExperimentShareRspFieldInfoAnnotationNoneTypeRequiredTrueDiscriminatorObjectType>> {
        const result = this.api.viewObjectWithHttpInfo(objid, payload, _options);
        return result.toPromise();
    }

    /**
     * View object of certain ID.  ### Example  ``` GET /api/object/M1234567  # view model data GET /api/object/X1234567  # view experiment data GET /api/object/S1234566  # view share data ```
     * View object.
     * @param objid
     * @param [payload]
     */
    public viewObject(objid: string, payload?: any, _options?: Configuration): Promise<SuccRspAnnotatedUnionExperimentRspViewModelsRspViewExperimentShareRspFieldInfoAnnotationNoneTypeRequiredTrueDiscriminatorObjectType> {
        const result = this.api.viewObject(objid, payload, _options);
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
    public coinferApisNoAuthApiGetExperimentShareWithHttpInfo(shareId: string, _options?: Configuration): Promise<HttpInfo<SuccRspGetExperimentShareRsp>> {
        const result = this.api.coinferApisNoAuthApiGetExperimentShareWithHttpInfo(shareId, _options);
        return result.toPromise();
    }

    /**
     * Get sharing information of an experiment.
     * @param shareId
     */
    public coinferApisNoAuthApiGetExperimentShare(shareId: string, _options?: Configuration): Promise<SuccRspGetExperimentShareRsp> {
        const result = this.api.coinferApisNoAuthApiGetExperimentShare(shareId, _options);
        return result.toPromise();
    }

    /**
     * Share an experiment specified by experiment ID.  Currently we support three types of sharing:  1. Public sharing: The experiment is shared publicly. Create a public share by not specifying `target_user` and share password in the request body.  2. User-specific sharing: The experiment is shared with a specific user. Create a user-specific share by specifying `target_user` in the request body. The `target_user` should be in the format of `name(@id)`. This is exactly the format what the user info API returns.  3. Password-protected sharing: The experiment is shared with a password. Create a password-protected share by specifying `password` in the request body.
     * Share an experiment.
     * @param expId
     * @param createExperimentShare
     */
    public createExperimentShareWithHttpInfo(expId: string, createExperimentShare: CreateExperimentShare, _options?: Configuration): Promise<HttpInfo<SuccRspCreateExperimentShareRsp>> {
        const result = this.api.createExperimentShareWithHttpInfo(expId, createExperimentShare, _options);
        return result.toPromise();
    }

    /**
     * Share an experiment specified by experiment ID.  Currently we support three types of sharing:  1. Public sharing: The experiment is shared publicly. Create a public share by not specifying `target_user` and share password in the request body.  2. User-specific sharing: The experiment is shared with a specific user. Create a user-specific share by specifying `target_user` in the request body. The `target_user` should be in the format of `name(@id)`. This is exactly the format what the user info API returns.  3. Password-protected sharing: The experiment is shared with a password. Create a password-protected share by specifying `password` in the request body.
     * Share an experiment.
     * @param expId
     * @param createExperimentShare
     */
    public createExperimentShare(expId: string, createExperimentShare: CreateExperimentShare, _options?: Configuration): Promise<SuccRspCreateExperimentShareRsp> {
        const result = this.api.createExperimentShare(expId, createExperimentShare, _options);
        return result.toPromise();
    }

    /**
     * Share a model specified by model ID.  Currently we support three types of sharing:  1. Public sharing: The model is shared publicly. Create a public share by not specifying `target_user` and share password in the request body.  2. User-specific sharing: The model is shared with a specific user. Create a user-specific share by specifying `target_user` in the request body. The `target_user` should be in the format of `name(@id)`. This is exactly the format what the user info API returns.  3. Password-protected sharing: The model is shared with a password. Create a password-protected share by specifying `password` in the request body.
     * Share a model specified by model ID.
     * @param modelId
     * @param createModelShare
     */
    public createModelShareWithHttpInfo(modelId: string, createModelShare: CreateModelShare, _options?: Configuration): Promise<HttpInfo<SuccRspCreateModelShareRsp>> {
        const result = this.api.createModelShareWithHttpInfo(modelId, createModelShare, _options);
        return result.toPromise();
    }

    /**
     * Share a model specified by model ID.  Currently we support three types of sharing:  1. Public sharing: The model is shared publicly. Create a public share by not specifying `target_user` and share password in the request body.  2. User-specific sharing: The model is shared with a specific user. Create a user-specific share by specifying `target_user` in the request body. The `target_user` should be in the format of `name(@id)`. This is exactly the format what the user info API returns.  3. Password-protected sharing: The model is shared with a password. Create a password-protected share by specifying `password` in the request body.
     * Share a model specified by model ID.
     * @param modelId
     * @param createModelShare
     */
    public createModelShare(modelId: string, createModelShare: CreateModelShare, _options?: Configuration): Promise<SuccRspCreateModelShareRsp> {
        const result = this.api.createModelShare(modelId, createModelShare, _options);
        return result.toPromise();
    }

    /**
     * Deletion in batch is supported by passing \"-\" separated share ids in the path param.
     * Delete experiment shares.
     * @param shareId \&quot;-\&quot;separated share ids
     */
    public deleteExperimentShareWithHttpInfo(shareId: string, _options?: Configuration): Promise<HttpInfo<SuccRspNoneType>> {
        const result = this.api.deleteExperimentShareWithHttpInfo(shareId, _options);
        return result.toPromise();
    }

    /**
     * Deletion in batch is supported by passing \"-\" separated share ids in the path param.
     * Delete experiment shares.
     * @param shareId \&quot;-\&quot;separated share ids
     */
    public deleteExperimentShare(shareId: string, _options?: Configuration): Promise<SuccRspNoneType> {
        const result = this.api.deleteExperimentShare(shareId, _options);
        return result.toPromise();
    }

    /**
     *      
     * Delete model shares.
     * @param shareId \&quot;-\&quot;separated share ids
     */
    public deleteModelShareWithHttpInfo(shareId: string, _options?: Configuration): Promise<HttpInfo<SuccRspNoneType>> {
        const result = this.api.deleteModelShareWithHttpInfo(shareId, _options);
        return result.toPromise();
    }

    /**
     *      
     * Delete model shares.
     * @param shareId \&quot;-\&quot;separated share ids
     */
    public deleteModelShare(shareId: string, _options?: Configuration): Promise<SuccRspNoneType> {
        const result = this.api.deleteModelShare(shareId, _options);
        return result.toPromise();
    }

    /**
     * Returns very basic sharing info without any authorization. Currently it only returns one field `require_password`, which is used when opening a share URL. If `require_password` is true, then a password input box is open. Else the page should be directly displayed.
     * Get sharing information of an experiment.
     * @param shareId
     */
    public getExperimentShareWithHttpInfo(shareId: string, _options?: Configuration): Promise<HttpInfo<SuccRspGetExperimentShareRsp>> {
        const result = this.api.getExperimentShareWithHttpInfo(shareId, _options);
        return result.toPromise();
    }

    /**
     * Returns very basic sharing info without any authorization. Currently it only returns one field `require_password`, which is used when opening a share URL. If `require_password` is true, then a password input box is open. Else the page should be directly displayed.
     * Get sharing information of an experiment.
     * @param shareId
     */
    public getExperimentShare(shareId: string, _options?: Configuration): Promise<SuccRspGetExperimentShareRsp> {
        const result = this.api.getExperimentShare(shareId, _options);
        return result.toPromise();
    }

    /**
     * Returns very basic share information without authorization. Currently it only returns one field `require_password`, which is used when opening a share URL. If `require_password` is true, then a password input box is open. Else the page should be directly displayed.
     * Get basic share information of a model sharing.
     * @param shareId
     */
    public getModelShareWithHttpInfo(shareId: string, _options?: Configuration): Promise<HttpInfo<SuccRspGetModelShareRsp>> {
        const result = this.api.getModelShareWithHttpInfo(shareId, _options);
        return result.toPromise();
    }

    /**
     * Returns very basic share information without authorization. Currently it only returns one field `require_password`, which is used when opening a share URL. If `require_password` is true, then a password input box is open. Else the page should be directly displayed.
     * Get basic share information of a model sharing.
     * @param shareId
     */
    public getModelShare(shareId: string, _options?: Configuration): Promise<SuccRspGetModelShareRsp> {
        const result = this.api.getModelShare(shareId, _options);
        return result.toPromise();
    }


}



