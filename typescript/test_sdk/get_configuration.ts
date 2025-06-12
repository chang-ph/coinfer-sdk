import * as coinfer_sdk from '../sdk/'
import { endpoint } from './config_constants'

export function getConfigurationPub() {
    return coinfer_sdk.createConfiguration(
      {
        baseServer: new coinfer_sdk.ServerConfiguration(endpoint, {}),
      })
}

export function getConfigurationPassword(password: string) {
    return coinfer_sdk.createConfiguration(
      {
        baseServer: new coinfer_sdk.ServerConfiguration(endpoint, {}),
        authMethods: {
          "default": new coinfer_sdk.SharingAuthAuthentication(password),
        }
      })
}

export function getConfigurationToken(token: string) {
  const configuration = coinfer_sdk.createConfiguration(
    {
      baseServer: new coinfer_sdk.ServerConfiguration(endpoint, {}),
      authMethods: {
        "default": new coinfer_sdk.GlobalAuthAuthentication({
          getToken: () => token,
        }),
      },
    })
  return configuration
}
