import * as coinfer_sdk from '../sdk/'
import { getConfigurationPub } from './get_configuration'

export async function testPublicApi() {
    const basePubAPI = new coinfer_sdk.AuthorizationApi(getConfigurationPub())
    const rsp = await basePubAPI.auth0Config()
    console.log(rsp.data)
}