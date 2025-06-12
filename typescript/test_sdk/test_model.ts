import * as coinfer_sdk from '../sdk/'
import dirToJson from './unified_model_format'
import { assert } from './assert'
import { admin_utoken, endpoint } from './config_constants'
import { getConfigurationToken } from './get_configuration'
import { wait_experiment_run } from './test_ws'
import { testPasswordExperimentShare, testPublicExperimentShare, testToUserExperimentShare } from './test_share'

export async function createModelFromGitHub(object_api: coinfer_sdk.ObjectApi): Promise<string> {
  const rsp = await object_api.createObject({
    payload: {
      objectType: coinfer_sdk.CreateModelObjectTypeEnum.Model,
      repo: 'chang-ph/simple-model',
      branch: 'main',
      type: coinfer_sdk.CreateModelTypeEnum.Gist,
      name: '[TeSt]simple-model',
    }
  })
  assert(rsp.data.shortId !== undefined)
  return rsp.data.shortId
}

export async function createModelFromGist(object_api: coinfer_sdk.ObjectApi): Promise<string>{
  const rsp = await object_api.createObject({
    payload: {
      objectType: coinfer_sdk.CreateModelObjectTypeEnum.Model,
      repo: '12d84de9b30144f83ab1a2376158efd2',
      type: coinfer_sdk.CreateModelTypeEnum.Gist,
      name: '[TeSt]simple-model-gist',
    }
  })
  assert(rsp.data.shortId !== undefined)
  return rsp.data.shortId
}

export async function createModelFromLocal(object_api: coinfer_sdk.ObjectApi): Promise<string> {
  const rsp = await object_api.createObject({
    payload: {
      objectType: coinfer_sdk.CreateModelObjectTypeEnum.Model,
      name: '[TeSt]simple-model-local',
      content: {
        meta: {},
        tree: await dirToJson('../../test_data/simple_model'),
      }
    }
  })
  assert(rsp.data.shortId !== undefined)
  return rsp.data.shortId
}

export async function getRandomExperimentID(object_api: coinfer_sdk.ObjectApi): Promise<string> {
  const rsp = await object_api.listObject('experiment')
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

export async function deleteTestModels(object_api: coinfer_sdk.ObjectApi) {
  const rsp = await object_api.listObject('model')
  for (const item of rsp.data.objects) {
    console.log(item.shortId, item.name)
  }

  const shortIds = []
  for (const shortId of rsp.data.objects.filter(x => /^\[TeSt\]/.test(x.name)).map(x => x.shortId)) {
    shortIds.push(shortId)
  }
  if (shortIds.length > 0) {
    console.log('deleting', shortIds)
    const rsp2 = await object_api.deleteObject(shortIds)
    console.assert(rsp2.status == 'ok')
  }
}

export async function runModel(turingApi: coinfer_sdk.ModelApi, modelId: String, endpoint: string, admin_utoken: string) : Promise<string> {
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
      "coinfer_auth_token": admin_utoken,
    }),
  })
  const exp_id = (await rsp2.json())['data']['experiment_id']
  return exp_id
}

export async function testModel() {
const admin_configuration = getConfigurationToken(admin_utoken)
const object_api = new coinfer_sdk.ObjectApi(admin_configuration)
const sysPubAPI = new coinfer_sdk.SystemApi(admin_configuration)
const rsp_config = await sysPubAPI.config()
console.log(rsp_config.data.runModelUrl)

// const modelId1 = await createModelFromGitHub()
// const modelId2 = await createModelFromGist()
const modelId3 = await createModelFromLocal(object_api)
console.log('create models:', modelId3)
const turingApi = new coinfer_sdk.ModelApi(admin_configuration)
// function viewCloudwatchLogs(exp_id: string) {
//   const api = coinfer_sdk.ObjectApi(coinfer_sdk.createConfiguration())
// }

// const exp_id = await getRandomExperimentID()
const exp_id = await runModel(turingApi, modelId3, endpoint, admin_utoken)
if (exp_id.length > 0) {
  const socketExp = await wait_experiment_run(exp_id, endpoint, admin_utoken)
  // viewCloudwatchLogs(exp_id)
  while (true) {
    const rsp = await object_api.viewObject(exp_id)
    const rsp_data = rsp.data as coinfer_sdk.ExperimentRsp;
    console.log("Waiting experiment finish: ", rsp_data.status)
    if (rsp_data.status === "FIN" || rsp_data.status === "ERR") {
      break
    }
    await new Promise(resolve => setTimeout(resolve, 10000))
  }

  await testPublicExperimentShare(exp_id)
  await testPasswordExperimentShare(exp_id)
  await testToUserExperimentShare(exp_id)
  socketExp.close()
}

await deleteTestModels(object_api)

const notify_api = new coinfer_sdk.NotificationApi(admin_configuration)
const rsp3 = await notify_api.getNotification("unread", 1, 1)
console.assert(rsp3.status == 'ok', rsp3)
}