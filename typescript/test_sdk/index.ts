// There are 3 different kinds of API:
// * PromiseAPI(types/PromiseAPI.ts)
// * ObserableAPI(types/ObserableAPI.ts)
// * ObjectParamAPI(types/ObjectParamAPI.ts)
// The PromiseAPI is the default export of the SDK.
//
// The auto-generated API document files(ModelApi.md, AuthorizationApi.md, ...) use ObjectParamAPI.
// This can be judged by it's parameter type, all the params are contained in a single object parameter.
// As ObjectParamAPI are not exported directly, the demo code in these documents acturally is not runnable.

import { testModel } from './test_model'
import { admin_utoken, endpoint } from './config_constants'
import { listBranches, listRepos } from './test_github_api'
import { createNotificationWS } from './test_ws'
import { testToken } from './test_token'
import { testPublicApi } from './test_public_api'

const socketNotification = await createNotificationWS(endpoint, admin_utoken)
// class MiddlewareDemo implements coinfer_sdk.Middleware {
//     pre(context: coinfer_sdk.RequestContext): Promise<coinfer_sdk.RequestContext> {
//         // Modify context here and return
//         // console.log("====middelware_pre", context)
//         return Promise.resolve(context);
//     }

//     post(context: coinfer_sdk.ResponseContext): Promise<coinfer_sdk.ResponseContext> {
//         // console.log("====middelware_post", context)
//         return Promise.resolve(context);
//     }

// }

await listBranches()
await listRepos()
await testToken()
await testPublicApi()
await testModel()
socketNotification.close()