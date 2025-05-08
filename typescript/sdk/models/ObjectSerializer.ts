export * from '../models/Auth0ConfigRsp';
export * from '../models/Auth0LoginRsp';
export * from '../models/BatchDeleteExperiment';
export * from '../models/BatchDeleteModel';
export * from '../models/CreateExperiment';
export * from '../models/CreateExperimentShare';
export * from '../models/CreateExperimentShareRsp';
export * from '../models/CreateModel';
export * from '../models/CreateModelShare';
export * from '../models/CreateModelShareRsp';
export * from '../models/CreateObjectReq';
export * from '../models/CreateToken';
export * from '../models/Data';
export * from '../models/Data1';
export * from '../models/Data2';
export * from '../models/Data3';
export * from '../models/DeleteExperimentShare';
export * from '../models/DeleteModelShare';
export * from '../models/DeleteObject';
export * from '../models/ErrRsp';
export * from '../models/ExperimentRsp';
export * from '../models/GetConfigRsp';
export * from '../models/GetExperimentShareRsp';
export * from '../models/GetModelShareRsp';
export * from '../models/GetNotificationReq';
export * from '../models/GetSampleDataRsp';
export * from '../models/GetTokensRsp';
export * from '../models/GistRsp';
export * from '../models/ImportModelReq';
export * from '../models/ListBranchRsp';
export * from '../models/ListExperimentRsp';
export * from '../models/ListGitHubRepository';
export * from '../models/ListModels';
export * from '../models/ListModelsRspItem';
export * from '../models/ListObject';
export * from '../models/ListObjectRsp';
export * from '../models/ListObjectTmp';
export * from '../models/ListRepositoryRsp';
export * from '../models/ListingRspDataListModelsRspItem';
export * from '../models/ListingRspDataListObjectRsp';
export * from '../models/ListingRspDataNotificationDict';
export * from '../models/ListingRspDataUnionListExperimentRspListModelsRspItem';
export * from '../models/ListingRspDataUnionListExperimentRspListModelsRspItemObjectsInner';
export * from '../models/ListingRspListModelsRspItem';
export * from '../models/ListingRspListObjectRsp';
export * from '../models/MarkNotificationReadReq';
export * from '../models/MetaModel';
export * from '../models/ModelContent';
export * from '../models/ModelMeta';
export * from '../models/ModelMetaInRsp';
export * from '../models/ModelTreeNode';
export * from '../models/ModifyCurrentUser';
export * from '../models/ModifyCurrentUserNew';
export * from '../models/ModifyToken';
export * from '../models/ModifyTokenNew';
export * from '../models/NotificationDict';
export * from '../models/Payload';
export * from '../models/Payload1';
export * from '../models/Payload2';
export * from '../models/PlaceHolder';
export * from '../models/ShareInfoModel';
export * from '../models/SuccRspAnnotatedUnionExperimentRspViewModelsRspViewExperimentShareRspFieldInfoAnnotationNoneTypeRequiredTrueDiscriminatorObjectType';
export * from '../models/SuccRspAny';
export * from '../models/SuccRspAuth0ConfigRsp';
export * from '../models/SuccRspAuth0LoginRsp';
export * from '../models/SuccRspCreateExperimentShareRsp';
export * from '../models/SuccRspCreateModelShareRsp';
export * from '../models/SuccRspGetConfigRsp';
export * from '../models/SuccRspGetExperimentShareRsp';
export * from '../models/SuccRspGetModelShareRsp';
export * from '../models/SuccRspGetSampleDataRsp';
export * from '../models/SuccRspGetTokensRsp';
export * from '../models/SuccRspListBranchRsp';
export * from '../models/SuccRspListGetTokensRsp';
export * from '../models/SuccRspListModelsRspItem';
export * from '../models/SuccRspListRepositoryRsp';
export * from '../models/SuccRspListingRspDataNotificationDict';
export * from '../models/SuccRspListingRspDataUnionListExperimentRspListModelsRspItem';
export * from '../models/SuccRspNoneType';
export * from '../models/SuccRspUnionExperimentRspListModelsRspItemCreateExperimentShareRsp';
export * from '../models/SuccRspUnionExperimentRspViewModelsRsp';
export * from '../models/SuccRspUnionUserInfoRspGetTokensRsp';
export * from '../models/SuccRspUserInfoRsp';
export * from '../models/SuccRspUserLoginRsp';
export * from '../models/SuccRspViewCloudwatchLogsRsp';
export * from '../models/SuccRspViewModelsRsp';
export * from '../models/UpdateBase';
export * from '../models/UpdateData';
export * from '../models/UpdateExperiment';
export * from '../models/UpdateModel';
export * from '../models/UpdateObject';
export * from '../models/UpdateXP';
export * from '../models/UserInfoRsp';
export * from '../models/UserLogin';
export * from '../models/UserLoginRsp';
export * from '../models/ViewCloudwatchLogsRsp';
export * from '../models/ViewExperimentShareRsp';
export * from '../models/ViewModelShareInfo';
export * from '../models/ViewModelsRsp';
export * from '../models/ViewXP';

import { Auth0ConfigRsp } from '../models/Auth0ConfigRsp';
import { Auth0LoginRsp } from '../models/Auth0LoginRsp';
import { BatchDeleteExperiment } from '../models/BatchDeleteExperiment';
import { BatchDeleteModel } from '../models/BatchDeleteModel';
import { CreateExperiment, CreateExperimentObjectTypeEnum       } from '../models/CreateExperiment';
import { CreateExperimentShare, CreateExperimentShareObjectTypeEnum      } from '../models/CreateExperimentShare';
import { CreateExperimentShareRsp } from '../models/CreateExperimentShareRsp';
import { CreateModel, CreateModelObjectTypeEnum    , CreateModelTypeEnum        } from '../models/CreateModel';
import { CreateModelShare } from '../models/CreateModelShare';
import { CreateModelShareRsp } from '../models/CreateModelShareRsp';
import { CreateObjectReq } from '../models/CreateObjectReq';
import { CreateToken } from '../models/CreateToken';
import { Data } from '../models/Data';
import { Data1, Data1ObjectTypeEnum                           } from '../models/Data1';
import { Data2Class } from '../models/Data2';
import { Data3, Data3ObjectTypeEnum                    } from '../models/Data3';
import { DeleteExperimentShare } from '../models/DeleteExperimentShare';
import { DeleteModelShare } from '../models/DeleteModelShare';
import { DeleteObject } from '../models/DeleteObject';
import { ErrRsp, ErrRspStatusEnum     } from '../models/ErrRsp';
import { ExperimentRsp, ExperimentRspObjectTypeEnum                 } from '../models/ExperimentRsp';
import { GetConfigRsp } from '../models/GetConfigRsp';
import { GetExperimentShareRsp } from '../models/GetExperimentShareRsp';
import { GetModelShareRsp } from '../models/GetModelShareRsp';
import { GetNotificationReq  , GetNotificationReqStatusEnum   } from '../models/GetNotificationReq';
import { GetSampleDataRsp , GetSampleDataRspProgressEnum    } from '../models/GetSampleDataRsp';
import { GetTokensRsp } from '../models/GetTokensRsp';
import { GistRsp } from '../models/GistRsp';
import { ImportModelReq  , ImportModelReqTypeEnum    } from '../models/ImportModelReq';
import { ListBranchRsp } from '../models/ListBranchRsp';
import { ListExperimentRsp } from '../models/ListExperimentRsp';
import { ListGitHubRepository } from '../models/ListGitHubRepository';
import { ListModels } from '../models/ListModels';
import { ListModelsRspItem } from '../models/ListModelsRspItem';
import { ListObject     , ListObjectObjectTypeEnum  , ListObjectStatusEnum  , ListObjectRunOnEnum  , ListObjectHasModelEnum   } from '../models/ListObject';
import { ListObjectRsp } from '../models/ListObjectRsp';
import { ListObjectTmp  , ListObjectTmpObjectTypeEnum      , ListObjectTmpStatusEnum  , ListObjectTmpRunOnEnum  , ListObjectTmpHasModelEnum   } from '../models/ListObjectTmp';
import { ListRepositoryRsp } from '../models/ListRepositoryRsp';
import { ListingRspDataListModelsRspItem } from '../models/ListingRspDataListModelsRspItem';
import { ListingRspDataListObjectRsp } from '../models/ListingRspDataListObjectRsp';
import { ListingRspDataNotificationDict } from '../models/ListingRspDataNotificationDict';
import { ListingRspDataUnionListExperimentRspListModelsRspItem } from '../models/ListingRspDataUnionListExperimentRspListModelsRspItem';
import { ListingRspDataUnionListExperimentRspListModelsRspItemObjectsInner } from '../models/ListingRspDataUnionListExperimentRspListModelsRspItemObjectsInner';
import { ListingRspListModelsRspItem, ListingRspListModelsRspItemStatusEnum    } from '../models/ListingRspListModelsRspItem';
import { ListingRspListObjectRsp, ListingRspListObjectRspStatusEnum    } from '../models/ListingRspListObjectRsp';
import { MarkNotificationReadReq , MarkNotificationReadReqStatusEnum   } from '../models/MarkNotificationReadReq';
import { MetaModel } from '../models/MetaModel';
import { ModelContent } from '../models/ModelContent';
import { ModelMeta } from '../models/ModelMeta';
import { ModelMetaInRsp } from '../models/ModelMetaInRsp';
import { ModelTreeNode , ModelTreeNodeTypeEnum     } from '../models/ModelTreeNode';
import { ModifyCurrentUser } from '../models/ModifyCurrentUser';
import { ModifyCurrentUserNew, ModifyCurrentUserNewTypeEnum     } from '../models/ModifyCurrentUserNew';
import { ModifyToken } from '../models/ModifyToken';
import { ModifyTokenNew, ModifyTokenNewTypeEnum       } from '../models/ModifyTokenNew';
import { NotificationDict } from '../models/NotificationDict';
import { PayloadClass } from '../models/Payload';
import { Payload1Class } from '../models/Payload1';
import { Payload2Class } from '../models/Payload2';
import { PlaceHolder } from '../models/PlaceHolder';
import { ShareInfoModel } from '../models/ShareInfoModel';
import { SuccRspAnnotatedUnionExperimentRspViewModelsRspViewExperimentShareRspFieldInfoAnnotationNoneTypeRequiredTrueDiscriminatorObjectType, SuccRspAnnotatedUnionExperimentRspViewModelsRspViewExperimentShareRspFieldInfoAnnotationNoneTypeRequiredTrueDiscriminatorObjectTypeStatusEnum    } from '../models/SuccRspAnnotatedUnionExperimentRspViewModelsRspViewExperimentShareRspFieldInfoAnnotationNoneTypeRequiredTrueDiscriminatorObjectType';
import { SuccRspAny, SuccRspAnyStatusEnum    } from '../models/SuccRspAny';
import { SuccRspAuth0ConfigRsp, SuccRspAuth0ConfigRspStatusEnum    } from '../models/SuccRspAuth0ConfigRsp';
import { SuccRspAuth0LoginRsp, SuccRspAuth0LoginRspStatusEnum    } from '../models/SuccRspAuth0LoginRsp';
import { SuccRspCreateExperimentShareRsp, SuccRspCreateExperimentShareRspStatusEnum    } from '../models/SuccRspCreateExperimentShareRsp';
import { SuccRspCreateModelShareRsp, SuccRspCreateModelShareRspStatusEnum    } from '../models/SuccRspCreateModelShareRsp';
import { SuccRspGetConfigRsp, SuccRspGetConfigRspStatusEnum    } from '../models/SuccRspGetConfigRsp';
import { SuccRspGetExperimentShareRsp, SuccRspGetExperimentShareRspStatusEnum    } from '../models/SuccRspGetExperimentShareRsp';
import { SuccRspGetModelShareRsp, SuccRspGetModelShareRspStatusEnum    } from '../models/SuccRspGetModelShareRsp';
import { SuccRspGetSampleDataRsp, SuccRspGetSampleDataRspStatusEnum    } from '../models/SuccRspGetSampleDataRsp';
import { SuccRspGetTokensRsp, SuccRspGetTokensRspStatusEnum    } from '../models/SuccRspGetTokensRsp';
import { SuccRspListBranchRsp, SuccRspListBranchRspStatusEnum    } from '../models/SuccRspListBranchRsp';
import { SuccRspListGetTokensRsp, SuccRspListGetTokensRspStatusEnum    } from '../models/SuccRspListGetTokensRsp';
import { SuccRspListModelsRspItem, SuccRspListModelsRspItemStatusEnum    } from '../models/SuccRspListModelsRspItem';
import { SuccRspListRepositoryRsp, SuccRspListRepositoryRspStatusEnum    } from '../models/SuccRspListRepositoryRsp';
import { SuccRspListingRspDataNotificationDict, SuccRspListingRspDataNotificationDictStatusEnum    } from '../models/SuccRspListingRspDataNotificationDict';
import { SuccRspListingRspDataUnionListExperimentRspListModelsRspItem, SuccRspListingRspDataUnionListExperimentRspListModelsRspItemStatusEnum    } from '../models/SuccRspListingRspDataUnionListExperimentRspListModelsRspItem';
import { SuccRspNoneType, SuccRspNoneTypeStatusEnum    } from '../models/SuccRspNoneType';
import { SuccRspUnionExperimentRspListModelsRspItemCreateExperimentShareRsp, SuccRspUnionExperimentRspListModelsRspItemCreateExperimentShareRspStatusEnum    } from '../models/SuccRspUnionExperimentRspListModelsRspItemCreateExperimentShareRsp';
import { SuccRspUnionExperimentRspViewModelsRsp, SuccRspUnionExperimentRspViewModelsRspStatusEnum    } from '../models/SuccRspUnionExperimentRspViewModelsRsp';
import { SuccRspUnionUserInfoRspGetTokensRsp, SuccRspUnionUserInfoRspGetTokensRspStatusEnum    } from '../models/SuccRspUnionUserInfoRspGetTokensRsp';
import { SuccRspUserInfoRsp, SuccRspUserInfoRspStatusEnum    } from '../models/SuccRspUserInfoRsp';
import { SuccRspUserLoginRsp, SuccRspUserLoginRspStatusEnum    } from '../models/SuccRspUserLoginRsp';
import { SuccRspViewCloudwatchLogsRsp, SuccRspViewCloudwatchLogsRspStatusEnum    } from '../models/SuccRspViewCloudwatchLogsRsp';
import { SuccRspViewModelsRsp, SuccRspViewModelsRspStatusEnum    } from '../models/SuccRspViewModelsRsp';
import { UpdateBase } from '../models/UpdateBase';
import { UpdateData } from '../models/UpdateData';
import { UpdateExperiment, UpdateExperimentObjectTypeEnum         } from '../models/UpdateExperiment';
import { UpdateModel     , UpdateModelObjectTypeEnum   } from '../models/UpdateModel';
import { UpdateObject } from '../models/UpdateObject';
import { UpdateXP } from '../models/UpdateXP';
import { UserInfoRsp } from '../models/UserInfoRsp';
import { UserLogin } from '../models/UserLogin';
import { UserLoginRsp } from '../models/UserLoginRsp';
import { ViewCloudwatchLogsRsp } from '../models/ViewCloudwatchLogsRsp';
import { ViewExperimentShareRsp, ViewExperimentShareRspObjectTypeEnum    } from '../models/ViewExperimentShareRsp';
import { ViewModelShareInfo } from '../models/ViewModelShareInfo';
import { ViewModelsRsp, ViewModelsRspObjectTypeEnum         } from '../models/ViewModelsRsp';
import { ViewXP } from '../models/ViewXP';

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
    "CreateExperimentObjectTypeEnum",
    "CreateExperimentShareObjectTypeEnum",
    "CreateModelObjectTypeEnum",
    "CreateModelTypeEnum",
    "Data1ObjectTypeEnum",
    "Data2ObjectTypeEnum",
    "Data3ObjectTypeEnum",
    "ErrRspStatusEnum",
    "ExperimentRspObjectTypeEnum",
    "GetNotificationReqStatusEnum",
    "GetSampleDataRspProgressEnum",
    "ImportModelReqTypeEnum",
    "ListObjectObjectTypeEnum",
    "ListObjectStatusEnum",
    "ListObjectRunOnEnum",
    "ListObjectHasModelEnum",
    "ListObjectTmpObjectTypeEnum",
    "ListObjectTmpStatusEnum",
    "ListObjectTmpRunOnEnum",
    "ListObjectTmpHasModelEnum",
    "ListingRspListModelsRspItemStatusEnum",
    "ListingRspListObjectRspStatusEnum",
    "MarkNotificationReadReqStatusEnum",
    "ModelTreeNodeTypeEnum",
    "ModifyCurrentUserNewTypeEnum",
    "ModifyTokenNewTypeEnum",
    "PayloadTypeEnum",
    "Payload1ObjectTypeEnum",
    "Payload1TypeEnum",
    "Payload2ObjectTypeEnum",
    "SuccRspAnnotatedUnionExperimentRspViewModelsRspViewExperimentShareRspFieldInfoAnnotationNoneTypeRequiredTrueDiscriminatorObjectTypeStatusEnum",
    "SuccRspAnyStatusEnum",
    "SuccRspAuth0ConfigRspStatusEnum",
    "SuccRspAuth0LoginRspStatusEnum",
    "SuccRspCreateExperimentShareRspStatusEnum",
    "SuccRspCreateModelShareRspStatusEnum",
    "SuccRspGetConfigRspStatusEnum",
    "SuccRspGetExperimentShareRspStatusEnum",
    "SuccRspGetModelShareRspStatusEnum",
    "SuccRspGetSampleDataRspStatusEnum",
    "SuccRspGetTokensRspStatusEnum",
    "SuccRspListBranchRspStatusEnum",
    "SuccRspListGetTokensRspStatusEnum",
    "SuccRspListModelsRspItemStatusEnum",
    "SuccRspListRepositoryRspStatusEnum",
    "SuccRspListingRspDataNotificationDictStatusEnum",
    "SuccRspListingRspDataUnionListExperimentRspListModelsRspItemStatusEnum",
    "SuccRspNoneTypeStatusEnum",
    "SuccRspUnionExperimentRspListModelsRspItemCreateExperimentShareRspStatusEnum",
    "SuccRspUnionExperimentRspViewModelsRspStatusEnum",
    "SuccRspUnionUserInfoRspGetTokensRspStatusEnum",
    "SuccRspUserInfoRspStatusEnum",
    "SuccRspUserLoginRspStatusEnum",
    "SuccRspViewCloudwatchLogsRspStatusEnum",
    "SuccRspViewModelsRspStatusEnum",
    "UpdateExperimentObjectTypeEnum",
    "UpdateModelObjectTypeEnum",
    "ViewExperimentShareRspObjectTypeEnum",
    "ViewModelsRspObjectTypeEnum",
]);

let typeMap: {[index: string]: any} = {
    "Auth0ConfigRsp": Auth0ConfigRsp,
    "Auth0LoginRsp": Auth0LoginRsp,
    "BatchDeleteExperiment": BatchDeleteExperiment,
    "BatchDeleteModel": BatchDeleteModel,
    "CreateExperiment": CreateExperiment,
    "CreateExperimentShare": CreateExperimentShare,
    "CreateExperimentShareRsp": CreateExperimentShareRsp,
    "CreateModel": CreateModel,
    "CreateModelShare": CreateModelShare,
    "CreateModelShareRsp": CreateModelShareRsp,
    "CreateObjectReq": CreateObjectReq,
    "CreateToken": CreateToken,
    "Data": Data,
    "Data1": Data1,
    "Data2": Data2Class,
    "Data3": Data3,
    "DeleteExperimentShare": DeleteExperimentShare,
    "DeleteModelShare": DeleteModelShare,
    "DeleteObject": DeleteObject,
    "ErrRsp": ErrRsp,
    "ExperimentRsp": ExperimentRsp,
    "GetConfigRsp": GetConfigRsp,
    "GetExperimentShareRsp": GetExperimentShareRsp,
    "GetModelShareRsp": GetModelShareRsp,
    "GetNotificationReq": GetNotificationReq,
    "GetSampleDataRsp": GetSampleDataRsp,
    "GetTokensRsp": GetTokensRsp,
    "GistRsp": GistRsp,
    "ImportModelReq": ImportModelReq,
    "ListBranchRsp": ListBranchRsp,
    "ListExperimentRsp": ListExperimentRsp,
    "ListGitHubRepository": ListGitHubRepository,
    "ListModels": ListModels,
    "ListModelsRspItem": ListModelsRspItem,
    "ListObject": ListObject,
    "ListObjectRsp": ListObjectRsp,
    "ListObjectTmp": ListObjectTmp,
    "ListRepositoryRsp": ListRepositoryRsp,
    "ListingRspDataListModelsRspItem": ListingRspDataListModelsRspItem,
    "ListingRspDataListObjectRsp": ListingRspDataListObjectRsp,
    "ListingRspDataNotificationDict": ListingRspDataNotificationDict,
    "ListingRspDataUnionListExperimentRspListModelsRspItem": ListingRspDataUnionListExperimentRspListModelsRspItem,
    "ListingRspDataUnionListExperimentRspListModelsRspItemObjectsInner": ListingRspDataUnionListExperimentRspListModelsRspItemObjectsInner,
    "ListingRspListModelsRspItem": ListingRspListModelsRspItem,
    "ListingRspListObjectRsp": ListingRspListObjectRsp,
    "MarkNotificationReadReq": MarkNotificationReadReq,
    "MetaModel": MetaModel,
    "ModelContent": ModelContent,
    "ModelMeta": ModelMeta,
    "ModelMetaInRsp": ModelMetaInRsp,
    "ModelTreeNode": ModelTreeNode,
    "ModifyCurrentUser": ModifyCurrentUser,
    "ModifyCurrentUserNew": ModifyCurrentUserNew,
    "ModifyToken": ModifyToken,
    "ModifyTokenNew": ModifyTokenNew,
    "NotificationDict": NotificationDict,
    "Payload": PayloadClass,
    "Payload1": Payload1Class,
    "Payload2": Payload2Class,
    "PlaceHolder": PlaceHolder,
    "ShareInfoModel": ShareInfoModel,
    "SuccRspAnnotatedUnionExperimentRspViewModelsRspViewExperimentShareRspFieldInfoAnnotationNoneTypeRequiredTrueDiscriminatorObjectType": SuccRspAnnotatedUnionExperimentRspViewModelsRspViewExperimentShareRspFieldInfoAnnotationNoneTypeRequiredTrueDiscriminatorObjectType,
    "SuccRspAny": SuccRspAny,
    "SuccRspAuth0ConfigRsp": SuccRspAuth0ConfigRsp,
    "SuccRspAuth0LoginRsp": SuccRspAuth0LoginRsp,
    "SuccRspCreateExperimentShareRsp": SuccRspCreateExperimentShareRsp,
    "SuccRspCreateModelShareRsp": SuccRspCreateModelShareRsp,
    "SuccRspGetConfigRsp": SuccRspGetConfigRsp,
    "SuccRspGetExperimentShareRsp": SuccRspGetExperimentShareRsp,
    "SuccRspGetModelShareRsp": SuccRspGetModelShareRsp,
    "SuccRspGetSampleDataRsp": SuccRspGetSampleDataRsp,
    "SuccRspGetTokensRsp": SuccRspGetTokensRsp,
    "SuccRspListBranchRsp": SuccRspListBranchRsp,
    "SuccRspListGetTokensRsp": SuccRspListGetTokensRsp,
    "SuccRspListModelsRspItem": SuccRspListModelsRspItem,
    "SuccRspListRepositoryRsp": SuccRspListRepositoryRsp,
    "SuccRspListingRspDataNotificationDict": SuccRspListingRspDataNotificationDict,
    "SuccRspListingRspDataUnionListExperimentRspListModelsRspItem": SuccRspListingRspDataUnionListExperimentRspListModelsRspItem,
    "SuccRspNoneType": SuccRspNoneType,
    "SuccRspUnionExperimentRspListModelsRspItemCreateExperimentShareRsp": SuccRspUnionExperimentRspListModelsRspItemCreateExperimentShareRsp,
    "SuccRspUnionExperimentRspViewModelsRsp": SuccRspUnionExperimentRspViewModelsRsp,
    "SuccRspUnionUserInfoRspGetTokensRsp": SuccRspUnionUserInfoRspGetTokensRsp,
    "SuccRspUserInfoRsp": SuccRspUserInfoRsp,
    "SuccRspUserLoginRsp": SuccRspUserLoginRsp,
    "SuccRspViewCloudwatchLogsRsp": SuccRspViewCloudwatchLogsRsp,
    "SuccRspViewModelsRsp": SuccRspViewModelsRsp,
    "UpdateBase": UpdateBase,
    "UpdateData": UpdateData,
    "UpdateExperiment": UpdateExperiment,
    "UpdateModel": UpdateModel,
    "UpdateObject": UpdateObject,
    "UpdateXP": UpdateXP,
    "UserInfoRsp": UserInfoRsp,
    "UserLogin": UserLogin,
    "UserLoginRsp": UserLoginRsp,
    "ViewCloudwatchLogsRsp": ViewCloudwatchLogsRsp,
    "ViewExperimentShareRsp": ViewExperimentShareRsp,
    "ViewModelShareInfo": ViewModelShareInfo,
    "ViewModelsRsp": ViewModelsRsp,
    "ViewXP": ViewXP,
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
