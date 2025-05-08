// There are 3 different kinds of API:
// * PromiseAPI(types/PromiseAPI.ts)
// * ObserableAPI(types/ObserableAPI.ts)
// * ObjectParamAPI(types/ObjectParamAPI.ts)
// The PromiseAPI is the default export of the SDK.
//
// The auto-generated API document files(ModelApi.md, AuthorizationApi.md, ...) use ObjectParamAPI.
// This can be judged by it's parameter type, all the params are contained in a single object parameter.
// As ObjectParamAPI are not exported directly, the demo code in these documents acturally is not runnable.

import * as coinfer_sdk from '../sdk/'

const token:string = ""
const endpoint:string = "http://127.0.0.1:8000"

let httpBearerConfiguration: coinfer_sdk.HttpBearerConfiguration = {
      tokenProvider: {
        getToken: () => token
      }
}

const authConfig: coinfer_sdk.AuthMethodsConfiguration = {
    "GlobalAuth": httpBearerConfiguration,
    "SharingAuth": httpBearerConfiguration,
}

class MiddlewareDemo implements coinfer_sdk.Middleware {
    pre(context: coinfer_sdk.RequestContext): Promise<coinfer_sdk.RequestContext> {
        // Modify context here and return
        console.log("====middelware_pre", context)
        return Promise.resolve(context);
    }

    post(context: coinfer_sdk.ResponseContext): Promise<coinfer_sdk.ResponseContext> {
        console.log("====middelware_post", context)
        return Promise.resolve(context);
    }

}

//  Create configuration parameter object
const configurationParameters = {
  // baseServer: CTS.server2,
  baseServer: new coinfer_sdk.ServerConfiguration(endpoint, {}),
  authMethods: authConfig,
  promiseMiddleware: [new MiddlewareDemo()],
}
let configuration: coinfer_sdk.Configuration = coinfer_sdk.createConfiguration(configurationParameters)
console.log(configuration)

const api = new coinfer_sdk.AuthorizationApi(configuration)

const request: coinfer_sdk.CreateToken = {
    name: "token-name",
    desc: "token-desc",
    expire: new Date('2025-03-12T10:36:04.077936Z'),
}
const data1 = await api.createToken(request);
console.log('API called successfully. Returned data:', data1);


let p: coinfer_sdk.CreateToken = new coinfer_sdk.CreateToken()
p.name = "token-name"
p.desc = "token-desc"
p.expire = new Date('2025-03-12T10:36:04.077936Z')
console.log(p)
const data2: coinfer_sdk.SuccRspGetTokensRsp = await api.createToken(request);
console.log('API called successfully. Returned data:', data2);
