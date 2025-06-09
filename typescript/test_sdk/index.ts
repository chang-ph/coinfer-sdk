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
import dirToJson from './unified_model_format'


// const token:string = "b2cd04be-ea1b-488a-9733-43bce6725d0d"
// const endpoint:string = "https://dev.coinfer.ai"
const local_utoken: string = "e903a567-8ffe-4b87-8ae0-364e67d66ca8"
const gh_utoken: string = ""
const gh_utoken2: string = ""
const endpoint: string = "https://dev.coinfer.ai"

const sharesCreated = new Map()
const socketNotification = new WebSocket(endpoint.replace('http', 'ws') + '/api/notification');
// message is received
socketNotification.addEventListener("message", event => {
  const message = JSON.parse(event.data);
  if (message["type"] == "on.notification") {
    const m = message["message"]
    console.log(`[on_notification] ${m["title"]} -- ${m["message"]}`)
  } else {
    console.log("[on_message]", event)
  }
});

// socket opened
socketNotification.addEventListener("open", event => {
  console.warn("[on_open]", event)
  socketNotification.send(`{"action": "authorization", "token": "${local_utoken}"}`)
});

// socket closed
socketNotification.addEventListener("close", event => {
  console.warn("[on_close]", event)
});

// error handler
socketNotification.addEventListener("error", event => {
  console.error("[on_errror]", event)
});

let httpBearerConfiguration: coinfer_sdk.HttpBearerConfiguration = {
  tokenProvider: {
    getToken: () => local_utoken
  }
}

const authConfig: coinfer_sdk.AuthMethodsConfiguration = {
  "GlobalAuth": httpBearerConfiguration,
  // "SharingAuth": httpBearerConfiguration,
}

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

//  Create configuration parameter object
// console.log(configuration)
const configuration = coinfer_sdk.createConfiguration(
  {
    baseServer: new coinfer_sdk.ServerConfiguration(endpoint, {}),
    authMethods: authConfig,
  })
const api = new coinfer_sdk.ObjectApi(configuration)

async function createModelFromGitHub() {
  const rsp = await api.createObject({
    payload: {
      objectType: 'model',
      repo: 'chang-ph/simple-model',
      branch: 'main',
      type: 'repo',
      name: '[TeSt]simple-model',
    }
  })
  return rsp.data.shortId
}

async function createModelFromGist() {
  const rsp = await api.createObject({
    payload: {
      objectType: 'model',
      repo: '12d84de9b30144f83ab1a2376158efd2',
      type: 'gist',
      name: '[TeSt]simple-model-gist',
    }
  })
  return rsp.data.shortId
}

async function createModelFromLocal() {
  const rsp = await api.createObject({
    payload: {
      objectType: 'model',
      name: '[TeSt]simple-model-local',
      content: {
        meta: {},
        tree: await dirToJson('../../test_data/simple_model'),
      }
    }
  })
  return rsp.data.shortId
}

async function getRandomExperimentID(): Promise<string> {
  const rsp = await api.listObject('experiment')
  for (const item of rsp.data.objects) {
    console.log(item.shortId, item.name, item.status)
  }
  const finished_experiments = rsp.data.objects.filter(x => x.status === 'FIN')
  if (finished_experiments.length == 0) {
    return ""
  }
  const shortId = finished_experiments[0].shortId
  console.log("choosed random experiment:", shortId)
  return shortId
}

// const api = new coinfer_sdk.AuthorizationApi(configuration)

// const request: coinfer_sdk.CreateToken = {
//     name: "token-name",
//     desc: "token-desc",
//     expire: new Date('2025-03-12T10:36:04.077936Z'),
// }
// const data1 = await api.createToken(request);
// console.log('API called successfully. Returned data:', data1);


// let p: coinfer_sdk.CreateToken = new coinfer_sdk.CreateToken()
// p.name = "token-name"
// p.desc = "token-desc"
// p.expire = new Date('2025-03-12T10:36:04.077936Z')
// console.log(p)
// const data2: coinfer_sdk.SuccRspGetTokensRsp = await api.createToken(request);
// console.log('API called successfully. Returned data:', data2);




async function deleteTestModels() {
  const rsp = await api.listObject('model')
  for (const item of rsp.data.objects) {
    console.log(item.shortId, item.name)
  }

  const shortIds = []
  for (const shortId of rsp.data.objects.filter(x => /^\[TeSt\]/.test(x.name)).map(x => x.shortId)) {
    shortIds.push(shortId)
  }
  if (shortIds.length > 0) {
    console.log('deleting', shortIds)
    const rsp2 = await api.deleteObject(shortIds)
    console.assert(rsp2.status == 'ok')
  }
}

// const modelId1 = await createModelFromGitHub()
// const modelId2 = await createModelFromGist()
const modelId3 = await createModelFromLocal()
console.log('create models:', modelId3)
const turingApi = new coinfer_sdk.ModelApi(configuration)
async function runModel(modelId: String) {
  const rsp1 = await turingApi.getConfig()
  console.log(rsp1.data.runModelUrl)

  const iteration_count = 1000
  const rsp2 = await fetch(rsp1.data.runModelUrl, {
    method: 'POST',
    body: JSON.stringify({
      "coinfer_server_endpoint": endpoint,
      "cmd": "run_in_lambda",
      "model_id": modelId,
      "model": {
        "meta": {
          "entrance_file": "mainmain.jl",
          "experiment_name": "[TeSt]experiment",
          "sample_args": [
            { "type": "stable-rng", "params": 1744609364 },
            { "type": "model-placeholder" },
            { "type": "sampler-placeholder" },
            { "type": "ensemble-placeholder", "params": ["MCMCSerial"] },
            iteration_count,
            1
          ],
          "project_file": "Project.toml",
          "manifest": "Manifest.toml",
          "action": "",
          "iteraction_count": iteration_count,
          "entrance_kwargs": {},
          "sample_kwargs": {},
          "entrance_func": "model"
        },
        "tree": "model data in Unified Model Format"
      },
      "parallel": 1,
      "coinfer_auth_token": local_utoken,
    }),
  })
  const exp_id = (await rsp2.json())['data']['experiment_id']
  return exp_id
}

async function createPublicShare(exp_id: string) {
  const rsp = await api.createObject({
    payload: {
      objectType: 'share',
      objid: exp_id,
    }
  })

  return rsp.data.shortId
}

async function testExperimentShare(exp_id: string) {
  let public_api = new coinfer_sdk.ObjectApi(coinfer_sdk.createConfiguration(
    {
      baseServer: new coinfer_sdk.ServerConfiguration(endpoint, {}),
    }))

  console.log('viewing experiment', exp_id)
  try {
    await public_api.viewObject(exp_id)
  }
  catch (e) {
    console.assert((e instanceof coinfer_sdk.ApiException) && (e.body.code !== 'NOT_FOUND'), e)
  }

  console.log('creating public share over', exp_id)
  const share_id = await createPublicShare(exp_id)
  console.log('created public share', share_id)

  console.log('viewing share', share_id)
  while (true) {
    try {
      const rsp2 = await public_api.viewObject(share_id)
      console.assert(rsp2.data.requirePassword === false, rsp.data)
      break
    } catch (e) {
      if (!(e instanceof coinfer_sdk.ApiException) || (e.body.code !== 'NOT_FOUND')) {
        break
      }
      console.log('waiting 10s for share to be ready')
      await new Promise(resolve => setTimeout(resolve, 10000))
    }
  }


  console.log('deleting', [share_id])
  const rsp3 = await api.deleteObject([share_id])
  console.assert(rsp3.status === 200, rsp3.status)
}

class MessageHandler {
  constructor(public websocket: any, private names: any[] = []) { }

  public handle(m: any) {
    const message = m["message"]
    if (message["action"] === "experiment:event") {
      console.log(message['data'][0]['data'])
      console.assert(message["action"] === "experiment:event" && message["data"].length > 0 && message["data"][0]["data"].length > 0, message["action"] === "experiment:event", message["data"].length > 0, Object.keys(message["data"][0]["data"]).length > 0)
    }
    if (message["action"] === "experiment:event" && message["data"].length > 0 && Object.keys(message["data"][0]["data"]).length > 0) {
      console.log(`received ${message}`)
      const chain_name = this.names[0]["chain"]
      const names = this.names[0]["names"].slice(0, 1)
      const msg = this.make_unsub_msg(chain_name, names)
      console.log(`unsubscribing ${names} ${msg}`)
      this.websocket.send(msg)
      return true
    }
    else if (message["action"] === "names" && message["data"].length > 0 && message["data"][0]["names"].length > 0) {
      const is_empty_before = this.names.length === 0
      this.names = this.names.concat(message["data"])
      if (is_empty_before && this.names.length > 0) {
        const chain_name = this.names[0]["chain"]
        const names = this.names[0]["names"].slice(0, 1)
        const msg = this.make_sub_msg(chain_name, names)
        console.log(`subscribing ${names} ${msg}`)
        this.websocket.send(msg)
      }
    } else if (message["action"] === "experiment:output") {
      console.log("==>", message["data"].trimEnd())
    }
    return false
  }

  private make_sub_msg(chain_name: string, variable_names: string[]) {
    return JSON.stringify(
      {
        "action": "subscribe",
        "data": [{ "chain": chain_name, "variables": variable_names }],
      }
    )
  }

  private make_unsub_msg(chain_name: string, variable_names: string[]) {
    return JSON.stringify(
      {
        "action": "unsubscribe",
        "data": [{ "chain": chain_name, "variables": variable_names }],
      }
    )
  }
}


// const exp_id = await getRandomExperimentID()
const exp_id = await runModel(modelId3)
if (exp_id.length > 0) {
  const socketExp = new WebSocket(endpoint.replace('http', 'ws') + `/mcmc/ws/sub/object/${exp_id}`)
  const handler = new MessageHandler(socketExp)
  let waiting_exp_data: boolean = true
  socketExp.addEventListener("message", event => {
    try {
      if (handler.handle(JSON.parse(event.data))) {
        waiting_exp_data = false;
      }
    } catch (e) {
      console.error(`[${exp_id}][on_message]`, e)
    }
  });

  socketExp.addEventListener("open", event => {
    console.warn(`[${exp_id}][on_open]`, event)
    socketExp.send(`{"action": "authorization", "token": "${local_utoken}", "version": "1.0"}`)
  });

  socketExp.addEventListener("close", event => {
    console.warn(`[${exp_id}][on_close]`, event)
  });

  socketExp.addEventListener("error", event => {
    console.error(`[${exp_id}][on_errror]`, event)
  });

  while (waiting_exp_data) {
    await new Promise(resolve => setTimeout(resolve, 10000))
    console.log(`[${exp_id}] waiting 10s for exp data...`)
  }
  const rsp = await api.viewObject(exp_id)
  console.assert(rsp.data.shortId == exp_id, rsp.data)

  await testExperimentShare(exp_id)
}

await deleteTestModels()

const notify_api = new coinfer_sdk.NotificationApi(configuration)
const rsp3 = await notify_api.getNotification("unread", 1, 1)
console.assert(rsp3.status == 'ok', rsp3)
socketNotification.close()
