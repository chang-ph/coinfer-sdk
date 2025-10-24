import gzip
import json
import os
import sys
import tarfile
import tempfile
from collections import defaultdict
from functools import lru_cache
from html import escape as html_escape
from typing import Any
from urllib.parse import unquote

import numpy as np
from bokeh.embed import json_item
from bokeh.layouts import gridplot

from .client import Client, RunInfoData
from .logged_requests import CheckResponseSubject, requests

html_template = """
<html>
<head>
<meta charset="UTF-8">
<script src="https://cdn.bokeh.org/bokeh/release/bokeh-3.7.3.min.js" integrity="sha384-f9OMx2EWGS0hozkLpVyaUV4XzoSXVv/1pxjZMv+WoU1pbtDYTGIsEimplL09JcpG" crossorigin="anonymous"></script>
<script src="https://cdn.bokeh.org/bokeh/release/bokeh-widgets-3.7.3.min.js" integrity="sha384-aQKMYQDmGs4iQIrxsx0ljkK1k0AIEqmmX0KG5guifkWlbkyYAWYvFEjrHOV4EzwS" crossorigin="anonymous"></script>
<script src="https://cdn.bokeh.org/bokeh/release/bokeh-tables-3.7.3.min.js" integrity="sha384-otTB77cyuCb07xo+PhCTj0qSDTExz8OqdEMjzk7Bd8DMrcQXnAVu4anSw0tMeeA+" crossorigin="anonymous"></script>
<script src="https://cdn.bokeh.org/bokeh/release/bokeh-api-3.7.3.min.js" integrity="sha384-X7SJ5DT/e4hTT4uld2sfPDDPXCPcykuRAt+Eqlw6U9GHnh2Wrz0gAN++MjzjG0dX" crossorigin="anonymous"></script>
<script src="https://cdn.bokeh.org/bokeh/release/bokeh-gl-3.7.3.min.js" integrity="sha384-F4W2SOgejw11DZLLdhkYV/2BTUVTqMWVv1HzuYFmEr90Pay23nqkX83KXNrPw8JY" crossorigin="anonymous"></script>
<script src="https://cdn.bokeh.org/bokeh/release/bokeh-mathjax-3.7.3.min.js" integrity="sha384-s+GIObe4Pd80YrY134UK31+sRCl13teyOT3Lyqfe42gg+rqjtQNW0XTugtm3tEny" crossorigin="anonymous"></script>
</head>
<body>
    ###div###
<script>
    ###script###
</script>
</body>
</html>
"""


def set_arviz_params(az):
    az.rcParams["data.load"] = "eager"
    az.rcParams["plot.max_subplots"] = 100


class Experiment:
    def __init__(self, server_endpoint: str, auth_token: str, experiment_id: str):
        self.experiment_id = experiment_id
        self.server_endpoint = server_endpoint
        self.auth_token = auth_token
        self.inference_data = self._download_inference_data(
            self.server_endpoint, self.auth_token, self.experiment_id
        )

    @lru_cache(maxsize=1)
    def all_chains(self) -> list[str]:
        return [item for item in list(self.inference_data.keys())]

    @lru_cache(maxsize=1)
    def all_vars(self) -> list[str]:
        idata = next(iter(self.inference_data.values()))
        return list(idata.posterior.data_vars.keys())

    @classmethod
    def _download_inference_data(
        cls, server_endpoint: str, auth_token: str, experiment_id: str
    ):
        import arviz as az

        set_arviz_params(az)

        download_url = (
            f"{server_endpoint}/sys/get-arviz-data?experiment_id={experiment_id}"
        )
        if auth_token:
            headers = {"Authorization": f"Bearer {auth_token}"}
        else:
            headers = {}  # public share
        rsp = requests.get(download_url, headers=headers)
        if requests.errmsg:
            raise RuntimeError(f"get inference data failed: {requests.errmsg}")
        assert rsp
        with tempfile.TemporaryDirectory() as temp_dir:
            with open(os.path.join(temp_dir, "data.tar"), "wb") as f:
                f.write(rsp.content)
            with tarfile.open(os.path.join(temp_dir, "data.tar")) as tar:
                tar.extractall(temp_dir)

            inference_data_by_chain: dict[str, az.InferenceData] = {}
            for item in os.listdir(temp_dir):
                if item.endswith(".nc"):
                    inference_data = az.from_netcdf(os.path.join(temp_dir, item))
                    name_mapping = {
                        name: unquote(name)
                        for name in inference_data.posterior.data_vars.keys()
                    }
                    inference_data.rename(name_mapping, inplace=True)
                    inference_data_by_chain[item[:-3]] = inference_data
            if not inference_data_by_chain:
                raise RuntimeError("no inference data found")
            return inference_data_by_chain


def current_experiment():
    with open(sys.argv[1]) as fin:
        input_data = json.load(fin)

    xp = Experiment(
        input_data["coinfer_server_endpoint"],
        input_data.get("coinfer_auth_token", ""),
        input_data["experiment_id"],
    )
    return xp


def save_result(data: bytes):
    with gzip.open(sys.argv[3], "wb") as fresult:
        fresult.write(data)


def _ensure_center_last(data: Any):
    # https://github.com/bokeh/bokeh/issues/13115
    if "doc" not in data:
        return data
    if "roots" not in data["doc"]:
        return data
    for item in data["doc"]["roots"]:
        if "attributes" not in item:
            continue
        if "center" not in item["attributes"]:
            continue
        item["attributes"]["center"] = item["attributes"].pop("center")
    return data


def render_plots_to_html(plot) -> str:
    plot_json = _convert_plots_to_json(plot)
    group_by = defaultdict(list)
    for plot_func, chain, var_name, plot_json in plot_json:
        group_by[plot_func].append((chain, var_name, plot_json))

    divs: list[str] = []
    scripts: list[str] = []
    for plot_func in group_by:
        divs.append(f'<div id="{html_escape(plot_func)}">')
        divs.append(f"<h3>{html_escape(plot_func, quote=False)}</h3>")
        for chain, var_name, plot_json in group_by[plot_func]:
            if not chain or not var_name:
                divs.append("<h4>all vars</h4>")
            else:
                divs.append(
                    f"<h4>chain={html_escape(chain, quote=False)} var_name={html_escape(var_name, quote=False)}</h4>"
                )
            divs.append(
                f'<div id="{html_escape(plot_func)}_{html_escape(chain)}_{html_escape(var_name)}"></div>'
            )

            # Embed the JSON data safely in a <script type="application/json"> tag
            divs.append(
                f'<script type="application/json" id="{html_escape(plot_func)}_{html_escape(chain)}_{html_escape(var_name)}_data">{html_escape(json.dumps(plot_json), quote=False)}</script>'
            )
            # In the JS, retrieve and parse the JSON before passing to Bokeh
            scripts.append(
                f'''
var dataElem = document.getElementById("{html_escape(plot_func)}_{html_escape(chain)}_{html_escape(var_name)}_data");
var plotData = JSON.parse(dataElem.textContent);
Bokeh.embed.embed_item(plotData, "{html_escape(plot_func)}_{html_escape(chain)}_{html_escape(var_name)}");
'''
            )
        divs.append("</div>")

    html = html_template.replace("###div###", "\n".join(divs))
    html = html.replace("###script###", "\n".join(scripts))
    return html


def _convert_plots_to_json(plots):
    plot_jsons = []
    for plot in plots:
        if isinstance(plot[3], np.ndarray):
            g = gridplot(plot[3].tolist())
            plot_data = json_item(g)
        else:
            plot_data = json_item(plot[3])

        plot_jsons.append((*plot[:3], _ensure_center_last(plot_data)))
    return plot_jsons


class Workflow:
    def __init__(self, workflow_id: str, client: Client) -> None:
        wf_rsp = client.get_object(workflow_id)
        self.model_id = wf_rsp["model_id"]
        self.data_id = wf_rsp["data_id"]
        self.experiment_id = wf_rsp["experiment_id"]
        self.analyzer_id = wf_rsp["analyzer_id"]

        self.experiment = Experiment(
            client.endpoints, client.coinfer_auth_token, self.experiment_id
        )


def current_workflow():
    client = Client(
        os.environ["COINFER_SERVER_ENDPOINT"], os.environ["COINFER_AUTH_TOKEN"]
    )
    return Workflow(os.environ["WORKFLOW_ID"], client)


__all__ = [
    "requests",
    "Client",
    "CheckResponseSubject",
    "RunInfoData",
    "save_result",
    "current_experiment",
    "render_plots_to_html",
    "Workflow",
    "current_workflow",
]
