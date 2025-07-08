import json
import logging
from typing import TypedDict, Required, Any

from .logged_requests import requests
logger = logging.getLogger(__name__)
logger.setLevel(logging.INFO)


class RunInfoData(TypedDict, total=False):
    experiment_id: Required[str]
    batch_id: Required[str]
    run_id: Required[str]
    log_group: str
    log_stream: str
    run_on: str
    status: str


class Client:
    session = requests
    run_info: RunInfoData

    def __init__(self, endpoints: str, coinfer_auth_token: str):
        self.endpoints = endpoints.rstrip("/")
        self.coinfer_auth_token = coinfer_auth_token
        self.run_info = {
            "experiment_id": "",
            "batch_id": "",
            "run_id": "",
        }

    def endpoint(self, name: str, path: str) -> str:
        sep = "/"
        return self.endpoints + sep + name + sep + path.lstrip("/")

    def headers_with_auth(self, **kwargs: Any) -> dict[str, Any]:
        headers = {"Authorization": f"bearer {self.coinfer_auth_token}"}
        headers.update(kwargs)
        return headers

    @staticmethod
    def response_data(resp) -> dict[str, Any]:
        rdata = resp.json()
        if rdata["status"] != "ok":
            msg = rdata["message"]
            logger.error(f"{msg}")
            raise Exception(msg)
        return rdata["data"]

    def sendmsg(self, group, data, mtype="object_broadcast"):
        url = self.endpoint("api", "/object/" + self.run_info["experiment_id"])
        data = {
                "payload": {
                    "object_type": "experiment.text_message",
            "datas": [
                {
                    "group": group,
                    "type": mtype,
                    "message": data,
                }
            ]
        }}
        data["payload"].update(self.run_info)
        res = self.session.post(url, data=json.dumps(data), headers=self.headers_with_auth())
        return self.response_data(res)

    def update_experiment(self, exp_id, data):
        if self.run_info:
            data.setdefault('meta', {}).setdefault('run_info', {}).update(self.run_info)
            if data.get('status'):
                data["meta"]["run_info"]["status"] = data["status"]
        url = self.endpoint("api", f"/object/{exp_id}")
        res = self.session.post(
            url, data=json.dumps({"payload": {"object_type": "experiment", **data}}), headers=self.headers_with_auth()
        )
        return self.response_data(res)

    def create_experiment(self, model_id, input_id, xp_meta, name=""):
        url = self.endpoint("api", "/object")
        data = {
            "payload": {
                "object_type": "experiment",
                "model_id": model_id,
                "input_id": input_id,
                "xp_meta": xp_meta,
                "name": name,
            }
        }
        headers = self.headers_with_auth()
        headers["Content-Type"] = "application/json"
        res = self.session.post(url, headers=headers, json=data)
        return self.response_data(res)

    def get_experiment(self, exp_id):
        url = self.endpoint("api", f"/object/{exp_id}")
        headers = self.headers_with_auth()
        res = self.session.get(url, headers=headers)
        return self.response_data(res)

    def generate_script(self, params):
        url = self.endpoint("turing", "/model/generate-script")
        headers = self.headers_with_auth()
        res = self.session.post(url, headers=headers, json=params)
        print(params)
        print(res.json())
        return self.response_data(res)["script"]

    def set_experiment_run_info(self, run_info: RunInfoData):
        self.run_info = run_info

    def get_experiment_run_info(self, experiment_id: str, batch_id: str, run_id: str):
        url = self.endpoint("api", f"/object/{experiment_id}?object_type=experiment&batch_id={batch_id}&run_id={run_id}")
        headers = self.headers_with_auth()
        res = self.session.get(url, headers=headers)
        return self.response_data(res)

    def create_model(self, content, name=""):
        url = self.endpoint("api", "/object")
        headers = self.headers_with_auth()
        res = self.session.post(
            url, headers=headers, json={"payload": {"object_type": "model", "name": name, "content": content}}
        )
        return self.response_data(res)["short_id"]

    def get_access_token(self) -> str:
        res = self.session.get(
            self.endpoint("base", "/access_token"), headers=self.headers_with_auth()
        )
        return self.response_data(res)["access_token"]
