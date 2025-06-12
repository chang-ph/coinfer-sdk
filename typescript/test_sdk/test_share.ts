import * as coinfer_sdk from '../sdk/'
import { admin_utoken, gh_utoken } from './config_constants'
import { getConfigurationPub, getConfigurationPassword, getConfigurationToken } from './get_configuration'
import { assert } from './assert'

async function createPublicShare(exp_id: string) {
    const admin_configuration = getConfigurationToken(admin_utoken)
    const object_api = new coinfer_sdk.ObjectApi(admin_configuration)

    const rsp = await object_api.createObject({
        payload: {
            objectType: coinfer_sdk.CreateExperimentShareObjectTypeEnum.Share,
            objid: exp_id,
        }
    })

    return rsp.data.shortId
}

export async function testPublicExperimentShare(exp_id: string) {
    const admin_configuration = getConfigurationToken(admin_utoken)
    const object_api = new coinfer_sdk.ObjectApi(admin_configuration)

    let public_api = new coinfer_sdk.ObjectApi(getConfigurationPub())

    console.log('viewing experiment without share', exp_id)
    try {
        await public_api.viewObject(exp_id)
    }
    catch (e) {
        console.assert((e instanceof coinfer_sdk.ApiException) && (e.body.code !== 'NOT_FOUND'), e)
    }

    console.log('creating public share over', exp_id)
    const share_id = await createPublicShare(exp_id)
    assert(share_id !== undefined)
    console.log('created public share', share_id)

    console.log('viewing share with public share', share_id)
    while (true) {
        try {
            const rsp_share = await public_api.viewObject(share_id)
            const rsp_share_data = rsp_share.data as coinfer_sdk.ViewExperimentShareRsp;
            console.assert(rsp_share_data.requirePassword === false, rsp_share_data)
            break
        } catch (e) {
            if (!(e instanceof coinfer_sdk.ApiException) || (e.body.code !== 'NOT_FOUND')) {
                break
            }
            console.log('waiting 10s for share to be ready')
            await new Promise(resolve => setTimeout(resolve, 10000))
        }
    }

    const exp_rsp = await public_api.viewObject(exp_id)
    const exp_rsp_data = exp_rsp.data as coinfer_sdk.ExperimentRsp;
    console.assert(exp_rsp_data.shortId === exp_id, exp_rsp_data)

    console.log('deleting share', [share_id])
    const rsp3 = await object_api.deleteObject([share_id])
    console.assert(rsp3.status === "ok", rsp3.status)

    console.log('viewing experiment after share deleted', exp_id)
    try {
        await public_api.viewObject(exp_id)
    }
    catch (e) {
        console.assert((e instanceof coinfer_sdk.ApiException) && (e.body.code !== 'NOT_FOUND'), e)
    }
}

export async function testPasswordExperimentShare(exp_id: string) {
    const admin_configuration = getConfigurationToken(admin_utoken)
    const object_api = new coinfer_sdk.ObjectApi(admin_configuration)

    const password = "123456"
    let password_share_api = new coinfer_sdk.ObjectApi(getConfigurationPassword(password))

    console.log('viewing experiment without share', exp_id)
    try {
        await password_share_api.viewObject(exp_id)
    }
    catch (e) {
        console.assert((e instanceof coinfer_sdk.ApiException) && (e.body.code !== 'NOT_FOUND'), e)
    }

    console.log('creating password share over', exp_id)
    const rsp = await object_api.createObject({
        payload: {
            objectType: coinfer_sdk.CreateExperimentShareObjectTypeEnum.Share,
            objid: exp_id,
            password: password,
        }
    })
    const share_id = rsp.data.shortId
    assert(share_id !== undefined)
    console.log('created password share', share_id)

    console.log('viewing share with password share', share_id)
    while (true) {
        try {
            const rsp_share = await password_share_api.viewObject(share_id)
            const rsp_share_data = rsp_share.data as coinfer_sdk.ViewExperimentShareRsp;
            console.assert(rsp_share_data.requirePassword === true, rsp_share_data)
            break
        } catch (e) {
            if (!(e instanceof coinfer_sdk.ApiException) || (e.body.code !== 'NOT_FOUND')) {
                break
            }
            console.log('waiting 10s for share to be ready')
            await new Promise(resolve => setTimeout(resolve, 10000))
        }
    }

    const exp_rsp = await password_share_api.viewObject(exp_id)
    const exp_rsp_data = exp_rsp.data as coinfer_sdk.ExperimentRsp;
    console.assert(exp_rsp_data.shortId === exp_id, exp_rsp_data)

    console.log('deleting share', [share_id])
    const rsp3 = await object_api.deleteObject([share_id])
    console.assert(rsp3.status === "ok", rsp3.status)

    console.log('viewing experiment after share deleted', exp_id)
    try {
        await password_share_api.viewObject(exp_id)
    }
    catch (e) {
        console.assert((e instanceof coinfer_sdk.ApiException) && (e.body.code !== 'NOT_FOUND'), e)
    }
}

export async function testToUserExperimentShare(exp_id: string) {
    const admin_configuration = getConfigurationToken(admin_utoken)
    const object_api = new coinfer_sdk.ObjectApi(admin_configuration)

    const auth_api = new coinfer_sdk.AuthorizationApi(getConfigurationToken(gh_utoken))
    const rsp_user = await auth_api.userInfo()
    const rsp_user_data = rsp_user.data as coinfer_sdk.UserInfoRsp;
    const username = rsp_user_data.username
    console.log('gh user', username)

    const viewer_object_api = new coinfer_sdk.ObjectApi(getConfigurationToken(gh_utoken))
    console.log('viewing experiment without share', exp_id)
    try {
        await viewer_object_api.viewObject(exp_id)
    }
    catch (e) {
        console.assert((e instanceof coinfer_sdk.ApiException) && (e.body.code !== 'NOT_FOUND'), e)
    }

    console.log('creating target-user share over', exp_id)
    const rsp = await object_api.createObject({
        payload: {
            objectType: coinfer_sdk.CreateExperimentShareObjectTypeEnum.Share,
            objid: exp_id,
            targetUser: username,
        }
    })
    const share_id = rsp.data.shortId
    assert(share_id !== undefined)
    console.log('created target-user share', share_id)

    console.log('viewing share with target user ', share_id)
    while (true) {
        try {
            const rsp_share = await viewer_object_api.viewObject(share_id)
            const rsp_share_data = rsp_share.data as coinfer_sdk.ViewExperimentShareRsp;
            console.assert(rsp_share_data.requirePassword === false, rsp.data)
            break
        } catch (e) {
            if (!(e instanceof coinfer_sdk.ApiException) || (e.body.code !== 'NOT_FOUND')) {
                break
            }
            console.log('waiting 10s for share to be ready')
            await new Promise(resolve => setTimeout(resolve, 10000))
        }
    }

    const exp_rsp = await viewer_object_api.viewObject(exp_id)
    const exp_rsp_data = exp_rsp.data as coinfer_sdk.ExperimentRsp;
    console.assert(exp_rsp_data.shortId === exp_id, exp_rsp_data)

    console.log('deleting share', [share_id])
    const rsp3 = await object_api.deleteObject([share_id])
    console.assert(rsp3.status === "ok", rsp3.status)

    console.log('viewing experiment after share deleted', exp_id)
    try {
        await viewer_object_api.viewObject(exp_id)
    }
    catch (e) {
        console.assert((e instanceof coinfer_sdk.ApiException) && (e.body.code !== 'NOT_FOUND'), e)
    }
}

