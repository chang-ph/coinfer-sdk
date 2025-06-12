import * as coinfer_sdk from '../sdk/'
import { gh_utoken } from './config_constants'
import { getConfigurationToken } from './get_configuration'

export async function listBranches(repo: string = 'chang-ph/simple-model') {
    console.log("==== list branches")
    const admin_configuration = getConfigurationToken(gh_utoken)
    const admin_sys_api = new coinfer_sdk.SystemApi(admin_configuration)

    const rsp = await admin_sys_api.branch(repo)
    for (const branch of rsp.data.branches) {
        console.log(branch)
    }
}

export async function listRepos() {
    console.log("==== list repos")
    const admin_configuration = getConfigurationToken(gh_utoken)
    const admin_sys_api = new coinfer_sdk.SystemApi(admin_configuration)

    const rsp = await admin_sys_api.repository()
    for (const repo of rsp.data.repos) {
        console.log(repo)
    }
}