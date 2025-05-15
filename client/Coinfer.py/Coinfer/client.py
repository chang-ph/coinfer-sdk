import json
import logging

from .logged_requests import requests

logger = logging.getLogger(__name__)
logger.setLevel(logging.INFO)


class Client:
    session = requests

    def __init__(self, endpoints, coinfer_auth_token):
        self.endpoints = endpoints.rstrip("/")
        self.coinfer_auth_token = coinfer_auth_token
        self.run_info = {}

    def endpoint(self, name, path):
        sep = "/"
        return self.endpoints + sep + name + sep + path.lstrip("/")

    def headers_with_auth(self, **kwargs):
        headers = {"Authorization": f"bearer {self.coinfer_auth_token}"}
        headers.update(kwargs)
        return headers

    @staticmethod
    def response_data(resp):
        rdata = resp.json()
        if rdata["status"] != "ok":
            msg = rdata["message"]
            logger.error(f"{msg}")
            raise Exception(msg)
        return rdata["data"]

    def sendmsg(self, group, data, mtype="object_broadcast"):
        url = self.endpoint("mcmc", "/message")
        data = {
            "datas": [
                {
                    "group": group,
                    "type": mtype,
                    "message": data,
                }
            ]
        }
        data.update(self.run_info)
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

    def set_experiment_run_info(self, run_info: dict):
        self.run_info = run_info

    def get_experiment_run_info(self, experiment_id: str, batch_id: str, run_id: str):
        url = self.endpoint("mcmc", f"/experiment/{experiment_id}/runinfo/{batch_id}/{run_id}")
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
