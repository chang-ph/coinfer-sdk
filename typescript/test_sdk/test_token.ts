import * as coinfer_sdk from '../sdk/'

import { admin_utoken } from "./config_constants";
import { getConfigurationToken } from "./get_configuration";

export async function testToken() {
    const configuration = getConfigurationToken(admin_utoken)
    const api = new coinfer_sdk.AuthorizationApi(configuration)

    const tokenName = "token-name"
    const rsp_create_token = await api.createToken({
        name: tokenName,
        desc: "token-desc",
        expire: new Date('2025-03-12T10:36:04.077936Z'),
    });
    const rsp_create_token_data = rsp_create_token.data as coinfer_sdk.GetTokensRsp;
    console.assert(rsp_create_token_data.tokenName === tokenName)
    const tokenId = rsp_create_token_data.id;

    const rsp_list_token = await api.getTokens();
    const rsp_list_token_data = rsp_list_token.data as coinfer_sdk.GetTokensRsp[];
    // check the item in the rsp_list_token_data contains an item with tokenName === tokenName
    const found = rsp_list_token_data.find(item => item.id === tokenId)
    console.assert(found !== undefined)

    const newTokenDesc = "new-token-desc"
    const rsp_update_token = await api.modifyToken(`${tokenId}`, {
        desc: newTokenDesc,
    });
    console.assert(rsp_update_token.status === "ok")
    console.assert(rsp_update_token.data.tokenDesc === newTokenDesc)

    const rsp_delete_token = await api.deleteToken(`${tokenId}`);
    console.assert(rsp_delete_token.status === "ok")

    // list token again to check the token is deleted (not in the rsp_list_token_data any more)
    const rsp_list_token2 = await api.getTokens();
    const rsp_list_token_data2 = rsp_list_token2.data as coinfer_sdk.GetTokensRsp[];
    const found2 = rsp_list_token_data2.find(item => item.id === tokenId)
    console.assert(found2 === undefined)
}