import openapi_client as sdk


class Client:
    def __init__(self, host, token="", share_password=""):
        self.host = host
        self.token = token
        self.share_password = share_password
        self._client_inst = None

    def set_token(self, token):
        self.token = token
        self._client_inst = None

    def set_share_password(self, share_password):
        self.share_password = share_password
        self._client_inst = None

    def _client(self):
        if self._client_inst:
            return self._client_inst

        if self.token:
            config = sdk.Configuration(host=self.host, access_token=self.token)
        else:
            config = sdk.Configuration(host=self.host)

        self._client_inst = sdk.ApiClient(config, header_name='X-Share-Password', header_value=self.share_password)
        return self._client_inst

    def model_api(self):
        return sdk.ModelApi(self._client())

    def authorization_api(self):
        return sdk.AuthorizationApi(self._client())

    def experiment_api(self):
        return sdk.ExperimentApi(self._client())

    def other_api(self):
        return sdk.OtherApi(self._client())

    def share_api(self):
        return sdk.ShareApi(self._client())
