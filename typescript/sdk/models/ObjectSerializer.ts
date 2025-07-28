export * from '../models/Auth0ConfigRsp';
export * from '../models/Auth0LoginRsp';
export * from '../models/CloudFunctionKind';
export * from '../models/CloudFunctionLang';
export * from '../models/Code2TokenRsp';
export * from '../models/CreateCallbackReq';
export * from '../models/CreateCallbackRsp';
export * from '../models/CreateEventReq';
export * from '../models/CreateEventRsp';
export * from '../models/CreateExperiment';
export * from '../models/CreateExperimentShare';
export * from '../models/CreateExperimentShareRsp';
export * from '../models/CreateModel';
export * from '../models/CreateNSampleStatReq';
export * from '../models/CreateObjectReq';
export * from '../models/CreateProtobufMessageReq';
export * from '../models/CreateRelationReq';
export * from '../models/CreateRelationRsp';
export * from '../models/CreateTextMessageReq';
export * from '../models/CreateToken';
export * from '../models/Data';
export * from '../models/Data1';
export * from '../models/Data2';
export * from '../models/DataTyping';
export * from '../models/DeleteLinkedAccountReq';
export * from '../models/DeleteObject';
export * from '../models/DeleteTokenReq';
export * from '../models/ErrRsp';
export * from '../models/ExperimentCloudwatchLogRsp';
export * from '../models/ExperimentRsp';
export * from '../models/ExperimentSampleDataRsp';
export * from '../models/Folder';
export * from '../models/FolderChildrenInner';
export * from '../models/GetConfigRsp';
export * from '../models/GetExperimentRunInfoRsp';
export * from '../models/GetExperimentShareRsp';
export * from '../models/GetNotificationReq';
export * from '../models/GetTokensRsp';
export * from '../models/GistRsp';
export * from '../models/LinkedAccountSchema';
export * from '../models/ListBranchRsp';
export * from '../models/ListExperimentRsp';
export * from '../models/ListGistFilesRsp';
export * from '../models/ListGitHubRepository';
export * from '../models/ListLinkedAccountRsp';
export * from '../models/ListModelsRspItem';
export * from '../models/ListObjectTmp';
export * from '../models/ListRepoFilesRsp';
export * from '../models/ListRepositoryRsp';
export * from '../models/ListingRspDataNotificationDict';
export * from '../models/ListingRspDataUnionListExperimentRspListModelsRspItemCreateEventRspCreateCallbackRspCreateRelationRsp';
export * from '../models/ListingRspDataUnionListExperimentRspListModelsRspItemCreateEventRspCreateCallbackRspCreateRelationRspObjectsInner';
export * from '../models/MarkNotificationReadReq';
export * from '../models/MetaModel';
export * from '../models/ModelContent';
export * from '../models/ModelFile';
export * from '../models/ModelMeta';
export * from '../models/ModelMetaInRsp';
export * from '../models/ModelTreeNode';
export * from '../models/ModifyCurrentUser';
export * from '../models/ModifyToken';
export * from '../models/NotificationDict';
export * from '../models/Payload';
export * from '../models/Payload1';
export * from '../models/ShareInfoModel';
export * from '../models/SoftDeletedRsp';
export * from '../models/SuccRspAnnotatedUnionExperimentRspListModelsRspItemCreateExperimentShareRspCreateEventRspCreateCallbackRspCreateRelationRspFieldInfoAnnotationNoneTypeRequiredTrueDiscriminatorObjectType';
export * from '../models/SuccRspAnnotatedUnionExperimentRspViewModelsRspViewExperimentShareRspExperimentSampleDataRspExperimentCloudwatchLogRspGetExperimentRunInfoRspFieldInfoAnnotationNoneTypeRequiredTrueDiscriminatorObjectType';
export * from '../models/SuccRspAuth0ConfigRsp';
export * from '../models/SuccRspAuth0LoginRsp';
export * from '../models/SuccRspCode2TokenRsp';
export * from '../models/SuccRspGetConfigRsp';
export * from '../models/SuccRspGetExperimentShareRsp';
export * from '../models/SuccRspGetTokensRsp';
export * from '../models/SuccRspListBranchRsp';
export * from '../models/SuccRspListGetTokensRsp';
export * from '../models/SuccRspListGistFilesRsp';
export * from '../models/SuccRspListLinkedAccountRsp';
export * from '../models/SuccRspListRepoFilesRsp';
export * from '../models/SuccRspListRepositoryRsp';
export * from '../models/SuccRspListingRspDataNotificationDict';
export * from '../models/SuccRspListingRspDataUnionListExperimentRspListModelsRspItemCreateEventRspCreateCallbackRspCreateRelationRsp';
export * from '../models/SuccRspNoneType';
export * from '../models/SuccRspSoftDeletedRsp';
export * from '../models/SuccRspUnionExperimentRspViewModelsRspNoneType';
export * from '../models/SuccRspUserInfoRsp';
export * from '../models/SuccRspUserLoginRsp';
export * from '../models/UpdateEventReq';
export * from '../models/UpdateExperiment';
export * from '../models/UpdateModel';
export * from '../models/UpdateObject';
export * from '../models/UserInfoRsp';
export * from '../models/UserLogin';
export * from '../models/UserLoginRsp';
export * from '../models/ViewExperimentShareRsp';
export * from '../models/ViewModelShareInfo';
export * from '../models/ViewModelsRsp';
export * from '../models/ViewObject';
export * from '../models/ViewObjectTmp';

import { Auth0ConfigRsp } from '../models/Auth0ConfigRsp';
import { Auth0LoginRsp } from '../models/Auth0LoginRsp';
import { CloudFunctionKind } from '../models/CloudFunctionKind';
import { CloudFunctionLang } from '../models/CloudFunctionLang';
import { Code2TokenRsp } from '../models/Code2TokenRsp';
import { CreateCallbackReq, CreateCallbackReqObjectTypeEnum  , CreateCallbackReqLangEnum     } from '../models/CreateCallbackReq';
import { CreateCallbackRsp, CreateCallbackRspObjectTypeEnum        } from '../models/CreateCallbackRsp';
import { CreateEventReq, CreateEventReqObjectTypeEnum    } from '../models/CreateEventReq';
import { CreateEventRsp, CreateEventRspObjectTypeEnum      } from '../models/CreateEventRsp';
import { CreateExperiment, CreateExperimentObjectTypeEnum      , CreateExperimentDataFileTypeEnum     } from '../models/CreateExperiment';
import { CreateExperimentShare, CreateExperimentShareObjectTypeEnum      } from '../models/CreateExperimentShare';
import { CreateExperimentShareRsp, CreateExperimentShareRspObjectTypeEnum            } from '../models/CreateExperimentShareRsp';
import { CreateModel, CreateModelObjectTypeEnum    , CreateModelTypeEnum             } from '../models/CreateModel';
import { CreateNSampleStatReq, CreateNSampleStatReqObjectTypeEnum        } from '../models/CreateNSampleStatReq';
import { CreateObjectReq } from '../models/CreateObjectReq';
import { CreateProtobufMessageReq, CreateProtobufMessageReqObjectTypeEnum      } from '../models/CreateProtobufMessageReq';
import { CreateRelationReq, CreateRelationReqObjectTypeEnum     } from '../models/CreateRelationReq';
import { CreateRelationRsp, CreateRelationRspObjectTypeEnum        } from '../models/CreateRelationRsp';
import { CreateTextMessageReq, CreateTextMessageReqObjectTypeEnum      } from '../models/CreateTextMessageReq';
import { CreateToken } from '../models/CreateToken';
import { DataClass } from '../models/Data';
import { Data1Class } from '../models/Data1';
import { Data2, Data2ObjectTypeEnum                    } from '../models/Data2';
import { DataTyping } from '../models/DataTyping';
import { DeleteLinkedAccountReq } from '../models/DeleteLinkedAccountReq';
import { DeleteObject } from '../models/DeleteObject';
import { DeleteTokenReq } from '../models/DeleteTokenReq';
import { ErrRsp, ErrRspStatusEnum     } from '../models/ErrRsp';
import { ExperimentCloudwatchLogRsp, ExperimentCloudwatchLogRspObjectTypeEnum    } from '../models/ExperimentCloudwatchLogRsp';
import { ExperimentRsp, ExperimentRspObjectTypeEnum                 } from '../models/ExperimentRsp';
import { ExperimentSampleDataRsp, ExperimentSampleDataRspObjectTypeEnum      } from '../models/ExperimentSampleDataRsp';
import { Folder } from '../models/Folder';
import { FolderChildrenInner } from '../models/FolderChildrenInner';
import { GetConfigRsp } from '../models/GetConfigRsp';
import { GetExperimentRunInfoRsp, GetExperimentRunInfoRspObjectTypeEnum    } from '../models/GetExperimentRunInfoRsp';
import { GetExperimentShareRsp } from '../models/GetExperimentShareRsp';
import { GetNotificationReq  , GetNotificationReqStatusEnum   } from '../models/GetNotificationReq';
import { GetTokensRsp } from '../models/GetTokensRsp';
import { GistRsp } from '../models/GistRsp';
import { LinkedAccountSchema } from '../models/LinkedAccountSchema';
import { ListBranchRsp } from '../models/ListBranchRsp';
import { ListExperimentRsp } from '../models/ListExperimentRsp';
import { ListGistFilesRsp } from '../models/ListGistFilesRsp';
import { ListGitHubRepository } from '../models/ListGitHubRepository';
import { ListLinkedAccountRsp } from '../models/ListLinkedAccountRsp';
import { ListModelsRspItem, ListModelsRspItemObjectTypeEnum          } from '../models/ListModelsRspItem';
import { ListObjectTmp  , ListObjectTmpObjectTypeEnum      , ListObjectTmpStatusEnum  , ListObjectTmpRunOnEnum  , ListObjectTmpHasModelEnum  , ListObjectTmpKindEnum   } from '../models/ListObjectTmp';
import { ListRepoFilesRsp } from '../models/ListRepoFilesRsp';
import { ListRepositoryRsp } from '../models/ListRepositoryRsp';
import { ListingRspDataNotificationDict } from '../models/ListingRspDataNotificationDict';
import { ListingRspDataUnionListExperimentRspListModelsRspItemCreateEventRspCreateCallbackRspCreateRelationRsp } from '../models/ListingRspDataUnionListExperimentRspListModelsRspItemCreateEventRspCreateCallbackRspCreateRelationRsp';
import { ListingRspDataUnionListExperimentRspListModelsRspItemCreateEventRspCreateCallbackRspCreateRelationRspObjectsInner            , ListingRspDataUnionListExperimentRspListModelsRspItemCreateEventRspCreateCallbackRspCreateRelationRspObjectsInnerObjectTypeEnum             } from '../models/ListingRspDataUnionListExperimentRspListModelsRspItemCreateEventRspCreateCallbackRspCreateRelationRspObjectsInner';
import { MarkNotificationReadReq , MarkNotificationReadReqStatusEnum   } from '../models/MarkNotificationReadReq';
import { MetaModel } from '../models/MetaModel';
import { ModelContent } from '../models/ModelContent';
import { ModelFile } from '../models/ModelFile';
import { ModelMeta } from '../models/ModelMeta';
import { ModelMetaInRsp } from '../models/ModelMetaInRsp';
import { ModelTreeNode , ModelTreeNodeTypeEnum     } from '../models/ModelTreeNode';
import { ModifyCurrentUser } from '../models/ModifyCurrentUser';
import { ModifyToken } from '../models/ModifyToken';
import { NotificationDict } from '../models/NotificationDict';
import { PayloadClass } from '../models/Payload';
import { Payload1Class } from '../models/Payload1';
import { ShareInfoModel } from '../models/ShareInfoModel';
import { SoftDeletedRsp } from '../models/SoftDeletedRsp';
import { SuccRspAnnotatedUnionExperimentRspListModelsRspItemCreateExperimentShareRspCreateEventRspCreateCallbackRspCreateRelationRspFieldInfoAnnotationNoneTypeRequiredTrueDiscriminatorObjectType, SuccRspAnnotatedUnionExperimentRspListModelsRspItemCreateExperimentShareRspCreateEventRspCreateCallbackRspCreateRelationRspFieldInfoAnnotationNoneTypeRequiredTrueDiscriminatorObjectTypeStatusEnum    } from '../models/SuccRspAnnotatedUnionExperimentRspListModelsRspItemCreateExperimentShareRspCreateEventRspCreateCallbackRspCreateRelationRspFieldInfoAnnotationNoneTypeRequiredTrueDiscriminatorObjectType';
import { SuccRspAnnotatedUnionExperimentRspViewModelsRspViewExperimentShareRspExperimentSampleDataRspExperimentCloudwatchLogRspGetExperimentRunInfoRspFieldInfoAnnotationNoneTypeRequiredTrueDiscriminatorObjectType, SuccRspAnnotatedUnionExperimentRspViewModelsRspViewExperimentShareRspExperimentSampleDataRspExperimentCloudwatchLogRspGetExperimentRunInfoRspFieldInfoAnnotationNoneTypeRequiredTrueDiscriminatorObjectTypeStatusEnum    } from '../models/SuccRspAnnotatedUnionExperimentRspViewModelsRspViewExperimentShareRspExperimentSampleDataRspExperimentCloudwatchLogRspGetExperimentRunInfoRspFieldInfoAnnotationNoneTypeRequiredTrueDiscriminatorObjectType';
import { SuccRspAuth0ConfigRsp, SuccRspAuth0ConfigRspStatusEnum    } from '../models/SuccRspAuth0ConfigRsp';
import { SuccRspAuth0LoginRsp, SuccRspAuth0LoginRspStatusEnum    } from '../models/SuccRspAuth0LoginRsp';
import { SuccRspCode2TokenRsp, SuccRspCode2TokenRspStatusEnum    } from '../models/SuccRspCode2TokenRsp';
import { SuccRspGetConfigRsp, SuccRspGetConfigRspStatusEnum    } from '../models/SuccRspGetConfigRsp';
import { SuccRspGetExperimentShareRsp, SuccRspGetExperimentShareRspStatusEnum    } from '../models/SuccRspGetExperimentShareRsp';
import { SuccRspGetTokensRsp, SuccRspGetTokensRspStatusEnum    } from '../models/SuccRspGetTokensRsp';
import { SuccRspListBranchRsp, SuccRspListBranchRspStatusEnum    } from '../models/SuccRspListBranchRsp';
import { SuccRspListGetTokensRsp, SuccRspListGetTokensRspStatusEnum    } from '../models/SuccRspListGetTokensRsp';
import { SuccRspListGistFilesRsp, SuccRspListGistFilesRspStatusEnum    } from '../models/SuccRspListGistFilesRsp';
import { SuccRspListLinkedAccountRsp, SuccRspListLinkedAccountRspStatusEnum    } from '../models/SuccRspListLinkedAccountRsp';
import { SuccRspListRepoFilesRsp, SuccRspListRepoFilesRspStatusEnum    } from '../models/SuccRspListRepoFilesRsp';
import { SuccRspListRepositoryRsp, SuccRspListRepositoryRspStatusEnum    } from '../models/SuccRspListRepositoryRsp';
import { SuccRspListingRspDataNotificationDict, SuccRspListingRspDataNotificationDictStatusEnum    } from '../models/SuccRspListingRspDataNotificationDict';
import { SuccRspListingRspDataUnionListExperimentRspListModelsRspItemCreateEventRspCreateCallbackRspCreateRelationRsp, SuccRspListingRspDataUnionListExperimentRspListModelsRspItemCreateEventRspCreateCallbackRspCreateRelationRspStatusEnum    } from '../models/SuccRspListingRspDataUnionListExperimentRspListModelsRspItemCreateEventRspCreateCallbackRspCreateRelationRsp';
import { SuccRspNoneType, SuccRspNoneTypeStatusEnum    } from '../models/SuccRspNoneType';
import { SuccRspSoftDeletedRsp, SuccRspSoftDeletedRspStatusEnum    } from '../models/SuccRspSoftDeletedRsp';
import { SuccRspUnionExperimentRspViewModelsRspNoneType, SuccRspUnionExperimentRspViewModelsRspNoneTypeStatusEnum    } from '../models/SuccRspUnionExperimentRspViewModelsRspNoneType';
import { SuccRspUserInfoRsp, SuccRspUserInfoRspStatusEnum    } from '../models/SuccRspUserInfoRsp';
import { SuccRspUserLoginRsp, SuccRspUserLoginRspStatusEnum    } from '../models/SuccRspUserLoginRsp';
import { UpdateEventReq, UpdateEventReqObjectTypeEnum   , UpdateEventReqEngineEnum    } from '../models/UpdateEventReq';
import { UpdateExperiment, UpdateExperimentObjectTypeEnum           } from '../models/UpdateExperiment';
import { UpdateModel, UpdateModelObjectTypeEnum         } from '../models/UpdateModel';
import { UpdateObject } from '../models/UpdateObject';
import { UserInfoRsp } from '../models/UserInfoRsp';
import { UserLogin } from '../models/UserLogin';
import { UserLoginRsp } from '../models/UserLoginRsp';
import { ViewExperimentShareRsp, ViewExperimentShareRspObjectTypeEnum    } from '../models/ViewExperimentShareRsp';
import { ViewModelShareInfo } from '../models/ViewModelShareInfo';
import { ViewModelsRsp, ViewModelsRspObjectTypeEnum         } from '../models/ViewModelsRsp';
import { ViewObject, ViewObjectObjectTypeEnum    , ViewObjectFmtEnum      } from '../models/ViewObject';
import { ViewObjectTmp } from '../models/ViewObjectTmp';

/* tslint:disable:no-unused-variable */
let primitives = [
                    "string",
                    "boolean",
                    "double",
                    "integer",
                    "long",
                    "float",
                    "number",
                    "any"
                 ];

let enumsMap: Set<string> = new Set<string>([
    "CloudFunctionKind",
    "CloudFunctionLang",
    "CreateCallbackReqObjectTypeEnum",
    "CreateCallbackReqLangEnum",
    "CreateCallbackRspObjectTypeEnum",
    "CreateEventReqObjectTypeEnum",
    "CreateEventRspObjectTypeEnum",
    "CreateExperimentObjectTypeEnum",
    "CreateExperimentDataFileTypeEnum",
    "CreateExperimentShareObjectTypeEnum",
    "CreateExperimentShareRspObjectTypeEnum",
    "CreateModelObjectTypeEnum",
    "CreateModelTypeEnum",
    "CreateNSampleStatReqObjectTypeEnum",
    "CreateProtobufMessageReqObjectTypeEnum",
    "CreateRelationReqObjectTypeEnum",
    "CreateRelationRspObjectTypeEnum",
    "CreateTextMessageReqObjectTypeEnum",
    "DataObjectTypeEnum",
    "Data1ObjectTypeEnum",
    "Data2ObjectTypeEnum",
    "ErrRspStatusEnum",
    "ExperimentCloudwatchLogRspObjectTypeEnum",
    "ExperimentRspObjectTypeEnum",
    "ExperimentSampleDataRspObjectTypeEnum",
    "GetExperimentRunInfoRspObjectTypeEnum",
    "GetNotificationReqStatusEnum",
    "ListModelsRspItemObjectTypeEnum",
    "ListObjectTmpObjectTypeEnum",
    "ListObjectTmpStatusEnum",
    "ListObjectTmpRunOnEnum",
    "ListObjectTmpHasModelEnum",
    "ListObjectTmpKindEnum",
    "ListingRspDataUnionListExperimentRspListModelsRspItemCreateEventRspCreateCallbackRspCreateRelationRspObjectsInnerObjectTypeEnum",
    "MarkNotificationReadReqStatusEnum",
    "ModelTreeNodeTypeEnum",
    "PayloadObjectTypeEnum",
    "PayloadTypeEnum",
    "PayloadLangEnum",
    "PayloadDataFileTypeEnum",
    "Payload1ObjectTypeEnum",
    "Payload1EngineEnum",
    "SuccRspAnnotatedUnionExperimentRspListModelsRspItemCreateExperimentShareRspCreateEventRspCreateCallbackRspCreateRelationRspFieldInfoAnnotationNoneTypeRequiredTrueDiscriminatorObjectTypeStatusEnum",
    "SuccRspAnnotatedUnionExperimentRspViewModelsRspViewExperimentShareRspExperimentSampleDataRspExperimentCloudwatchLogRspGetExperimentRunInfoRspFieldInfoAnnotationNoneTypeRequiredTrueDiscriminatorObjectTypeStatusEnum",
    "SuccRspAuth0ConfigRspStatusEnum",
    "SuccRspAuth0LoginRspStatusEnum",
    "SuccRspCode2TokenRspStatusEnum",
    "SuccRspGetConfigRspStatusEnum",
    "SuccRspGetExperimentShareRspStatusEnum",
    "SuccRspGetTokensRspStatusEnum",
    "SuccRspListBranchRspStatusEnum",
    "SuccRspListGetTokensRspStatusEnum",
    "SuccRspListGistFilesRspStatusEnum",
    "SuccRspListLinkedAccountRspStatusEnum",
    "SuccRspListRepoFilesRspStatusEnum",
    "SuccRspListRepositoryRspStatusEnum",
    "SuccRspListingRspDataNotificationDictStatusEnum",
    "SuccRspListingRspDataUnionListExperimentRspListModelsRspItemCreateEventRspCreateCallbackRspCreateRelationRspStatusEnum",
    "SuccRspNoneTypeStatusEnum",
    "SuccRspSoftDeletedRspStatusEnum",
    "SuccRspUnionExperimentRspViewModelsRspNoneTypeStatusEnum",
    "SuccRspUserInfoRspStatusEnum",
    "SuccRspUserLoginRspStatusEnum",
    "UpdateEventReqObjectTypeEnum",
    "UpdateEventReqEngineEnum",
    "UpdateExperimentObjectTypeEnum",
    "UpdateModelObjectTypeEnum",
    "ViewExperimentShareRspObjectTypeEnum",
    "ViewModelsRspObjectTypeEnum",
    "ViewObjectObjectTypeEnum",
    "ViewObjectFmtEnum",
]);

let typeMap: {[index: string]: any} = {
    "Auth0ConfigRsp": Auth0ConfigRsp,
    "Auth0LoginRsp": Auth0LoginRsp,
    "Code2TokenRsp": Code2TokenRsp,
    "CreateCallbackReq": CreateCallbackReq,
    "CreateCallbackRsp": CreateCallbackRsp,
    "CreateEventReq": CreateEventReq,
    "CreateEventRsp": CreateEventRsp,
    "CreateExperiment": CreateExperiment,
    "CreateExperimentShare": CreateExperimentShare,
    "CreateExperimentShareRsp": CreateExperimentShareRsp,
    "CreateModel": CreateModel,
    "CreateNSampleStatReq": CreateNSampleStatReq,
    "CreateObjectReq": CreateObjectReq,
    "CreateProtobufMessageReq": CreateProtobufMessageReq,
    "CreateRelationReq": CreateRelationReq,
    "CreateRelationRsp": CreateRelationRsp,
    "CreateTextMessageReq": CreateTextMessageReq,
    "CreateToken": CreateToken,
    "Data": DataClass,
    "Data1": Data1Class,
    "Data2": Data2,
    "DataTyping": DataTyping,
    "DeleteLinkedAccountReq": DeleteLinkedAccountReq,
    "DeleteObject": DeleteObject,
    "DeleteTokenReq": DeleteTokenReq,
    "ErrRsp": ErrRsp,
    "ExperimentCloudwatchLogRsp": ExperimentCloudwatchLogRsp,
    "ExperimentRsp": ExperimentRsp,
    "ExperimentSampleDataRsp": ExperimentSampleDataRsp,
    "Folder": Folder,
    "FolderChildrenInner": FolderChildrenInner,
    "GetConfigRsp": GetConfigRsp,
    "GetExperimentRunInfoRsp": GetExperimentRunInfoRsp,
    "GetExperimentShareRsp": GetExperimentShareRsp,
    "GetNotificationReq": GetNotificationReq,
    "GetTokensRsp": GetTokensRsp,
    "GistRsp": GistRsp,
    "LinkedAccountSchema": LinkedAccountSchema,
    "ListBranchRsp": ListBranchRsp,
    "ListExperimentRsp": ListExperimentRsp,
    "ListGistFilesRsp": ListGistFilesRsp,
    "ListGitHubRepository": ListGitHubRepository,
    "ListLinkedAccountRsp": ListLinkedAccountRsp,
    "ListModelsRspItem": ListModelsRspItem,
    "ListObjectTmp": ListObjectTmp,
    "ListRepoFilesRsp": ListRepoFilesRsp,
    "ListRepositoryRsp": ListRepositoryRsp,
    "ListingRspDataNotificationDict": ListingRspDataNotificationDict,
    "ListingRspDataUnionListExperimentRspListModelsRspItemCreateEventRspCreateCallbackRspCreateRelationRsp": ListingRspDataUnionListExperimentRspListModelsRspItemCreateEventRspCreateCallbackRspCreateRelationRsp,
    "ListingRspDataUnionListExperimentRspListModelsRspItemCreateEventRspCreateCallbackRspCreateRelationRspObjectsInner": ListingRspDataUnionListExperimentRspListModelsRspItemCreateEventRspCreateCallbackRspCreateRelationRspObjectsInner,
    "MarkNotificationReadReq": MarkNotificationReadReq,
    "MetaModel": MetaModel,
    "ModelContent": ModelContent,
    "ModelFile": ModelFile,
    "ModelMeta": ModelMeta,
    "ModelMetaInRsp": ModelMetaInRsp,
    "ModelTreeNode": ModelTreeNode,
    "ModifyCurrentUser": ModifyCurrentUser,
    "ModifyToken": ModifyToken,
    "NotificationDict": NotificationDict,
    "Payload": PayloadClass,
    "Payload1": Payload1Class,
    "ShareInfoModel": ShareInfoModel,
    "SoftDeletedRsp": SoftDeletedRsp,
    "SuccRspAnnotatedUnionExperimentRspListModelsRspItemCreateExperimentShareRspCreateEventRspCreateCallbackRspCreateRelationRspFieldInfoAnnotationNoneTypeRequiredTrueDiscriminatorObjectType": SuccRspAnnotatedUnionExperimentRspListModelsRspItemCreateExperimentShareRspCreateEventRspCreateCallbackRspCreateRelationRspFieldInfoAnnotationNoneTypeRequiredTrueDiscriminatorObjectType,
    "SuccRspAnnotatedUnionExperimentRspViewModelsRspViewExperimentShareRspExperimentSampleDataRspExperimentCloudwatchLogRspGetExperimentRunInfoRspFieldInfoAnnotationNoneTypeRequiredTrueDiscriminatorObjectType": SuccRspAnnotatedUnionExperimentRspViewModelsRspViewExperimentShareRspExperimentSampleDataRspExperimentCloudwatchLogRspGetExperimentRunInfoRspFieldInfoAnnotationNoneTypeRequiredTrueDiscriminatorObjectType,
    "SuccRspAuth0ConfigRsp": SuccRspAuth0ConfigRsp,
    "SuccRspAuth0LoginRsp": SuccRspAuth0LoginRsp,
    "SuccRspCode2TokenRsp": SuccRspCode2TokenRsp,
    "SuccRspGetConfigRsp": SuccRspGetConfigRsp,
    "SuccRspGetExperimentShareRsp": SuccRspGetExperimentShareRsp,
    "SuccRspGetTokensRsp": SuccRspGetTokensRsp,
    "SuccRspListBranchRsp": SuccRspListBranchRsp,
    "SuccRspListGetTokensRsp": SuccRspListGetTokensRsp,
    "SuccRspListGistFilesRsp": SuccRspListGistFilesRsp,
    "SuccRspListLinkedAccountRsp": SuccRspListLinkedAccountRsp,
    "SuccRspListRepoFilesRsp": SuccRspListRepoFilesRsp,
    "SuccRspListRepositoryRsp": SuccRspListRepositoryRsp,
    "SuccRspListingRspDataNotificationDict": SuccRspListingRspDataNotificationDict,
    "SuccRspListingRspDataUnionListExperimentRspListModelsRspItemCreateEventRspCreateCallbackRspCreateRelationRsp": SuccRspListingRspDataUnionListExperimentRspListModelsRspItemCreateEventRspCreateCallbackRspCreateRelationRsp,
    "SuccRspNoneType": SuccRspNoneType,
    "SuccRspSoftDeletedRsp": SuccRspSoftDeletedRsp,
    "SuccRspUnionExperimentRspViewModelsRspNoneType": SuccRspUnionExperimentRspViewModelsRspNoneType,
    "SuccRspUserInfoRsp": SuccRspUserInfoRsp,
    "SuccRspUserLoginRsp": SuccRspUserLoginRsp,
    "UpdateEventReq": UpdateEventReq,
    "UpdateExperiment": UpdateExperiment,
    "UpdateModel": UpdateModel,
    "UpdateObject": UpdateObject,
    "UserInfoRsp": UserInfoRsp,
    "UserLogin": UserLogin,
    "UserLoginRsp": UserLoginRsp,
    "ViewExperimentShareRsp": ViewExperimentShareRsp,
    "ViewModelShareInfo": ViewModelShareInfo,
    "ViewModelsRsp": ViewModelsRsp,
    "ViewObject": ViewObject,
    "ViewObjectTmp": ViewObjectTmp,
}

type MimeTypeDescriptor = {
    type: string;
    subtype: string;
    subtypeTokens: string[];
};

/**
 * Every mime-type consists of a type, subtype, and optional parameters.
 * The subtype can be composite, including information about the content format.
 * For example: `application/json-patch+json`, `application/merge-patch+json`.
 *
 * This helper transforms a string mime-type into an internal representation.
 * This simplifies the implementation of predicates that in turn define common rules for parsing or stringifying
 * the payload.
 */
const parseMimeType = (mimeType: string): MimeTypeDescriptor => {
    const [type = '', subtype = ''] = mimeType.split('/');
    return {
        type,
        subtype,
        subtypeTokens: subtype.split('+'),
    };
};

type MimeTypePredicate = (mimeType: string) => boolean;

// This factory creates a predicate function that checks a string mime-type against defined rules.
const mimeTypePredicateFactory = (predicate: (descriptor: MimeTypeDescriptor) => boolean): MimeTypePredicate => (mimeType) => predicate(parseMimeType(mimeType));

// Use this factory when you need to define a simple predicate based only on type and, if applicable, subtype.
const mimeTypeSimplePredicateFactory = (type: string, subtype?: string): MimeTypePredicate => mimeTypePredicateFactory((descriptor) => {
    if (descriptor.type !== type) return false;
    if (subtype != null && descriptor.subtype !== subtype) return false;
    return true;
});

// Creating a set of named predicates that will help us determine how to handle different mime-types
const isTextLikeMimeType = mimeTypeSimplePredicateFactory('text');
const isJsonMimeType = mimeTypeSimplePredicateFactory('application', 'json');
const isJsonLikeMimeType = mimeTypePredicateFactory((descriptor) => descriptor.type === 'application' && descriptor.subtypeTokens.some((item) => item === 'json'));
const isOctetStreamMimeType = mimeTypeSimplePredicateFactory('application', 'octet-stream');
const isFormUrlencodedMimeType = mimeTypeSimplePredicateFactory('application', 'x-www-form-urlencoded');

// Defining a list of mime-types in the order of prioritization for handling.
const supportedMimeTypePredicatesWithPriority: MimeTypePredicate[] = [
    isJsonMimeType,
    isJsonLikeMimeType,
    isTextLikeMimeType,
    isOctetStreamMimeType,
    isFormUrlencodedMimeType,
];

const nullableSuffix = " | null";
const optionalSuffix = " | undefined";
const arrayPrefix = "Array<";
const arraySuffix = ">";
const mapPrefix = "{ [key: string]: ";
const mapSuffix = "; }";

function camelToSnake(str: string) {
    return str.replace(/([A-Z])/g, function(match: string) {
        return "_" + match.toLowerCase();
    });
}

export class ObjectSerializer {
    public static findCorrectType(data: any, expectedType: string) {
        if (data == undefined) {
            return expectedType;
        } else if (primitives.indexOf(expectedType.toLowerCase()) !== -1) {
            return expectedType;
        } else if (expectedType === "Date") {
            return expectedType;
        } else {
            if (enumsMap.has(expectedType)) {
                return expectedType;
            }

            if (!typeMap[expectedType]) {
                return expectedType; // w/e we don't know the type
            }

            // Check the discriminator
            let discriminatorProperty = typeMap[expectedType].discriminator;
            if (discriminatorProperty == null) {
                return expectedType; // the type does not have a discriminator. use it.
            } else {
                if (data[discriminatorProperty]) {
                    var discriminatorType = data[discriminatorProperty];
                    let mapping = typeMap[expectedType].mapping;
                    if (mapping != undefined && mapping[discriminatorType]) {
                        return mapping[discriminatorType]; // use the type given in the discriminator
                    } else if(typeMap[discriminatorType]) {
                        return discriminatorType;
                    } else {
                        return expectedType; // discriminator did not map to a type
                    }
                } else if (data[camelToSnake(discriminatorProperty)]) {
                    var discriminatorType = data[camelToSnake(discriminatorProperty)];
                    let mapping = typeMap[expectedType].mapping;
                    if (mapping != undefined && mapping[discriminatorType]) {
                        return mapping[discriminatorType]; // use the type given in the discriminator
                    } else if(typeMap[discriminatorType]) {
                        return discriminatorType;
                    } else {
                        return expectedType; // discriminator did not map to a type
                    }
                } else {
                    return expectedType; // discriminator was not present (or an empty string)
                }
            }
        }
    }

    public static serialize(data: any, type: string, format: string): any {
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.endsWith(nullableSuffix)) {
            let subType: string = type.slice(0, -nullableSuffix.length); // Type | null => Type
            return ObjectSerializer.serialize(data, subType, format);
        } else if (type.endsWith(optionalSuffix)) {
            let subType: string = type.slice(0, -optionalSuffix.length); // Type | undefined => Type
            return ObjectSerializer.serialize(data, subType, format);
        } else if (type.startsWith(arrayPrefix)) {
            let subType: string = type.slice(arrayPrefix.length, -arraySuffix.length); // Array<Type> => Type
            let transformedData: any[] = [];
            for (let date of data) {
                transformedData.push(ObjectSerializer.serialize(date, subType, format));
            }
            return transformedData;
        } else if (type.startsWith(mapPrefix)) {
            let subType: string = type.slice(mapPrefix.length, -mapSuffix.length); // { [key: string]: Type; } => Type
            let transformedData: { [key: string]: any } = {};
            for (let key in data) {
                transformedData[key] = ObjectSerializer.serialize(
                    data[key],
                    subType,
                    format,
                );
            }
            return transformedData;
        } else if (type === "Date") {
            if (format == "date") {
                let month = data.getMonth()+1
                month = month < 10 ? "0" + month.toString() : month.toString()
                let day = data.getDate();
                day = day < 10 ? "0" + day.toString() : day.toString();

                return data.getFullYear() + "-" + month + "-" + day;
            } else {
                return data.toISOString();
            }
        } else {
            if (enumsMap.has(type)) {
                return data;
            }
            if (!typeMap[type]) { // in case we dont know the type
                return data;
            }

            // Get the actual type of this object
            type = this.findCorrectType(data, type);

            // get the map for the correct type.
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            let instance: {[index: string]: any} = {};
            for (let attributeType of attributeTypes) {
                instance[attributeType.baseName] = ObjectSerializer.serialize(data[attributeType.name], attributeType.type, attributeType.format);
            }
            return instance;
        }
    }

    public static deserialize(data: any, type: string, format: string): any {
        // polymorphism may change the actual type.
        type = ObjectSerializer.findCorrectType(data, type);
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.endsWith(nullableSuffix)) {
            let subType: string = type.slice(0, -nullableSuffix.length); // Type | null => Type
            return ObjectSerializer.deserialize(data, subType, format);
        } else if (type.endsWith(optionalSuffix)) {
            let subType: string = type.slice(0, -optionalSuffix.length); // Type | undefined => Type
            return ObjectSerializer.deserialize(data, subType, format);
        } else if (type.startsWith(arrayPrefix)) {
            let subType: string = type.slice(arrayPrefix.length, -arraySuffix.length); // Array<Type> => Type
            let transformedData: any[] = [];
            for (let date of data) {
                transformedData.push(ObjectSerializer.deserialize(date, subType, format));
            }
            return transformedData;
        } else if (type.startsWith(mapPrefix)) {
            let subType: string = type.slice(mapPrefix.length, -mapSuffix.length); // { [key: string]: Type; } => Type
            let transformedData: { [key: string]: any } = {};
            for (let key in data) {
                transformedData[key] = ObjectSerializer.deserialize(
                    data[key],
                    subType,
                    format,
                );
            }
            return transformedData;
        } else if (type === "Date") {
            return new Date(data);
        } else {
            if (enumsMap.has(type)) {// is Enum
                return data;
            }

            if (!typeMap[type]) { // dont know the type
                return data;
            }
            let instance = new typeMap[type]();
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            for (let attributeType of attributeTypes) {
                let value = ObjectSerializer.deserialize(data[attributeType.baseName], attributeType.type, attributeType.format);
                if (value !== undefined) {
                    instance[attributeType.name] = value;
                }
            }
            return instance;
        }
    }


    /**
     * Normalize media type
     *
     * We currently do not handle any media types attributes, i.e. anything
     * after a semicolon. All content is assumed to be UTF-8 compatible.
     */
    public static normalizeMediaType(mediaType: string | undefined): string | undefined {
        if (mediaType === undefined) {
            return undefined;
        }
        return (mediaType.split(";")[0] ?? '').trim().toLowerCase();
    }

    /**
     * From a list of possible media types, choose the one we can handle best.
     *
     * The order of the given media types does not have any impact on the choice
     * made.
     */
    public static getPreferredMediaType(mediaTypes: Array<string>): string {
        /** According to OAS 3 we should default to json */
        if (mediaTypes.length === 0) {
            return "application/json";
        }

        const normalMediaTypes = mediaTypes.map(ObjectSerializer.normalizeMediaType);

        for (const predicate of supportedMimeTypePredicatesWithPriority) {
            for (const mediaType of normalMediaTypes) {
                if (mediaType != null && predicate(mediaType)) {
                    return mediaType;
                }
            }
        }

        throw new Error("None of the given media types are supported: " + mediaTypes.join(", "));
    }

    /**
     * Convert data to a string according the given media type
     */
    public static stringify(data: any, mediaType: string): string {
        if (isTextLikeMimeType(mediaType)) {
            return String(data);
        }

        if (isJsonLikeMimeType(mediaType)) {
            return JSON.stringify(data);
        }

        throw new Error("The mediaType " + mediaType + " is not supported by ObjectSerializer.stringify.");
    }

    /**
     * Parse data from a string according to the given media type
     */
    public static parse(rawData: string, mediaType: string | undefined) {
        if (mediaType === undefined) {
            throw new Error("Cannot parse content. No Content-Type defined.");
        }

        if (isTextLikeMimeType(mediaType)) {
            return rawData;
        }

        if (isJsonLikeMimeType(mediaType)) {
            return JSON.parse(rawData);
        }

        throw new Error("The mediaType " + mediaType + " is not supported by ObjectSerializer.parse.");
    }
}
