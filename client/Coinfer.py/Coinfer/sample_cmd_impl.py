import csv
import json
import logging
import os
import subprocess
import threading
import time
import uuid
from pathlib import Path
from typing import Any, Callable, cast

import yaml

from .client import Client

logger = logging.getLogger(__name__)


def base62(n: int) -> str:
    if n == 0:
        return "0"

    base62_chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    result: list[str] = []

    while n > 0:
        n, remainder = divmod(n, 62)
        result.append(base62_chars[remainder])

    return "".join(result[::-1])


def gen_batch_id():
    return base62(cast(int, uuid.uuid1().int))


def sample():
    settings = yaml.safe_load(open("workflow.yaml"))
    workflowdir = Path(os.getcwd())

    sampling = settings['sampling']
    coinfer = settings.get(sampling['sync'], {})
    is_sync = sampling['sync'] != 'off'
    if is_sync:
        client = Client(coinfer["endpoint"], coinfer["token"])
        wf_id = coinfer["workflow_id"]
        wf_rsp = client.get_object(wf_id)
        exp_id = wf_rsp["experiment_id"]
        batch_id = coinfer.get("batch_id", gen_batch_id())
        run_id = coinfer.get("run_id", gen_batch_id())
        if not exp_id:
            exp_rsp = client.create_experiment(
                model_id=wf_rsp["model_id"],
                workflow_id=wf_id,
                input_id=wf_rsp["data_id"],
                meta={"status": "RUN"},
                name=coinfer["experiment_name"],
                run_on=coinfer["engine"],
            )
            exp_id = exp_rsp["short_id"]
        coinfer["experiment_id"] = exp_id
        client.set_experiment_run_info({"batch_id": batch_id, "run_id": run_id, "experiment_id": exp_id})
        client.update_experiment(exp_id, {"status": "RUN"})
        group_name = f"object_{exp_id}"
        client.sendmsg(group_name, {"action": "start"})
    else:
        group_name = ""
        client = None
        wf_id = ""
        exp_id = ""
        batch_id = ""
        run_id = ""
    _run_data_script(settings, workflowdir, client, group_name)
    return _run_model(settings, workflowdir, wf_id, exp_id, batch_id, run_id, client, group_name)


def _run_model(
    settings: dict[str, Any],
    workflowdir: Path,
    wf_id: str,
    exp_id: str,
    batch_id: str,
    run_id: str,
    client: Client | None,
    group_name: str,
):
    sampling = settings['sampling']
    # is_cloud = bool('off' != sampling['sync'])
    # if not is_cloud:
    #     logger.setLevel(logging.ERROR)

    pre_script = """
    using Pkg
    Pkg.instantiate()
    """

    coinfer = settings.get(sampling['sync'], {})
    is_sync = sampling['sync'] != 'off'
    modelmeta = json.loads(Path("model", ".metadata").read_text())
    model_entrance_file = modelmeta["entrance_file"]
    run_model_scripts = "\n".join(
        (
            pre_script,
            Path("model", model_entrance_file).read_text(),
            Path("model", "script.jl").read_text(),
        )
    )

    if exp_id:
        mcmc_data_path = workflowdir / sampling['mcmc_data'].get("directory", "mcmcdata") / exp_id
    else:
        mcmc_data_path = workflowdir / sampling['mcmc_data'].get("directory", "mcmcdata")

    envs: dict[str, Any] = os.environ | {
        "EXPERIMENT_ID": exp_id,
        "BATCH_ID": batch_id,
        "RUN_ID": run_id,
        "WORKFLOW_ID": wf_id,
        "COINFER_SYNC": sampling['sync'],
        "COINFER_AUTH_TOKEN": coinfer.get("token", ""),
        "COINFER_SERVER_ENDPOINT": coinfer.get("endpoint", ""),
        "COINFER_MCMC_DATA_PATH": mcmc_data_path.as_posix(),
    }
    cmd: list[str] = [
        "julia",
        *sampling.get("julia_args", []),
        "--project",
        "-e",
        run_model_scripts,
        (workflowdir / "client/Coinfer.jl").as_posix(),
    ]
    print((workflowdir / "client/Coinfer.jl").as_posix())
    run_handler = ModelRunHandler(exp_id, batch_id, run_id, is_sync)
    status = run_handler.run_in_process(cmd, envs, workflowdir / "model", mcmc_data_path, client, group_name)
    if is_sync:
        assert client
        client.update_experiment(exp_id, {"status": status})
        client.sendmsg(group_name, {"action": "experiment:finish"})
    return status


def _mask_envs(envs: dict[str, str]) -> dict[str, str]:
    return {
        key: "*" if any(w in key.lower().split("_") for w in ["key", "secrets", "secret", "token"]) else val
        for key, val in envs.items()
    }


class PropagatingThread(threading.Thread):
    def run(self):
        self.exc = None
        try:
            if self._target is not None:  # type: ignore
                self._target(*self._args, **self._kwargs)  # type: ignore
        except BaseException as e:
            self.exc = e

    def join(self, timeout: float | None = None):
        super(PropagatingThread, self).join(timeout)
        if self.exc:
            raise self.exc


class ModelRunHandler:
    def __init__(self, exp_id: str, batch_id: str, run_id: str, is_sync: bool):
        self.exp_id = exp_id
        self.batch_id = batch_id
        self.run_id = run_id
        self.is_sync = is_sync

    def run_in_process(
        self,
        cmd: list[str],
        envs: dict[str, str],
        model_path: Path,
        mcmc_data_path: Path,
        client: Client | None,
        group_name: str,
    ):
        logger.debug(f"about to run: {cmd}, {_mask_envs(envs)}")
        popen = subprocess.Popen(
            cmd,
            bufsize=1,
            env=envs,
            stdout=subprocess.PIPE,
            stderr=subprocess.STDOUT,
            universal_newlines=True,
            cwd=model_path,
        )
        evt = threading.Event()
        thd = PropagatingThread(target=self._sync_mcmc_data, args=(mcmc_data_path, client, evt), daemon=True)
        # thd = threading.Thread(target=self._sync_mcmc_data, args=(mcmc_data_path, client, evt))
        thd.start()
        assert popen.stdout is not None
        for stdout_line in iter(popen.stdout.readline, ""):
            logger.info("-->" + stdout_line.rstrip())
            if client and not os.environ.get("JULIA_DEBUG"):
                client.sendmsg(group_name, {"action": "experiment:output", "data": stdout_line})
        popen.stdout.close()
        return_code = popen.wait()
        evt.set()
        try:
            thd.join()
        except Exception:
            logging.exception("Error syncing MCMC data: %s", thd.exc)
            return_code = -1
        if return_code:
            status = "ERR"
            logging.error("ERR: %s", return_code)
            if client:
                client.sendmsg(group_name, {"action": "experiment:error", "data": return_code})
        else:
            status = "SAMPLE_FIN"
        return status

    def _sync_mcmc_data(self, mcmc_data_path: Path, client: Client | None, evt: threading.Event):
        logger.debug("syncing MCMC data")
        if not client:
            return
        while not mcmc_data_path.exists() and not evt.is_set():
            time.sleep(1)

        log_data: dict[str, dict[str, list[Any]]] = {}
        if Path(mcmc_data_path, ".mcmc_data_handled").is_file():
            already_handled = set(open(mcmc_data_path / ".mcmc_data_handled").readlines())
        else:
            already_handled: set[str] = set()
        var_converter_map: dict[str, Callable[[str], Any]] = {}
        chain_iter_map: dict[str, tuple[int, int, int]] = {}
        while True:
            has_pending_data = False
            for mcmc_data_file in sorted(mcmc_data_path.iterdir()):
                if mcmc_data_file.name in already_handled:
                    continue
                logger.debug("handling file: %s", mcmc_data_file.name)
                chain_name, min_iter, max_iter, _seqno = mcmc_data_file.stem.split("-")
                csvreader = csv.reader(mcmc_data_file.open())
                skip_header = True
                is_empty_csv = True
                for row in csvreader:
                    is_empty_csv = False
                    if skip_header:
                        skip_header = False
                        continue
                    chain_name = row[0]
                    var_name = row[1]
                    if var_name in var_converter_map:
                        converter = var_converter_map[var_name]
                    else:
                        converter = self._guess_type(row[2])
                        var_converter_map[var_name] = converter
                    val = converter(row[2])
                    log_data.setdefault(chain_name, {}).setdefault(var_name, []).append(val)
                    has_pending_data = True
                if is_empty_csv:  # empty file may mean the file is generating, retry in next loop
                    logger.debug("empty file: %s", mcmc_data_file.name)
                    break
                already_handled.add(mcmc_data_file.name)

                if chain_name in chain_iter_map:
                    chain_iter_map[chain_name] = (
                        min(chain_iter_map[chain_name][0], int(min_iter)),
                        max(chain_iter_map[chain_name][1], int(max_iter)),
                        max(chain_iter_map[chain_name][2], int(_seqno)),
                    )
                else:
                    chain_iter_map[chain_name] = (int(min_iter), int(max_iter), int(_seqno))

            if has_pending_data:
                client.send_mcmc_data(
                    self.exp_id,
                    self.batch_id,
                    self.run_id,
                    {
                        "vars": log_data,
                        "iteration": chain_iter_map,
                    },
                )
            if evt.is_set():
                break
            time.sleep(1)
        with open(mcmc_data_path / ".mcmc_data_handled", "a") as f:
            f.write("\n".join(already_handled))
            f.write("\n")
        logger.debug("done syncing MCMC data")

    @staticmethod
    def _guess_type(value: str) -> Callable[[str], int | float | bool | str]:
        if value.isdigit() or (value.startswith("-") and value[1:].isdigit()):
            return lambda v: int(v)
        lower_val = value.lower()
        if lower_val in ["true", "false"]:
            return lambda v: v.lower() == "true"
        try:
            float(value)
            return lambda v: float(v)
        except ValueError:
            pass
        return lambda v: v


def _run_data_script(settings: dict[str, Any], rootdir: Path, client: Client | None, group_name: str):
    extra_envs: dict[str, str] = {
        "PYTHONPATH": Path(rootdir, "client", "Coinfer.py").as_posix(),
        "WORKFLOW_ID": settings.get("coinfer", {}).get("workflow_id", ""),
        "COINFER_SERVER_ENDPOINT": settings.get("coinfer", {}).get("endpoint", ""),
        "COINFER_AUTH_TOKEN": settings.get("coinfer", {}).get("token", ""),
    }
    if EFS_DIR := os.environ.get("EFS_DIR"):
        extra_envs["UV_CACHE_DIR"] = f"{EFS_DIR}/uv_cache"

    popen = subprocess.Popen(
        ["uv", "run", "--script", "data.py"],
        bufsize=1,
        env=os.environ | extra_envs,
        stdout=subprocess.PIPE,
        stderr=subprocess.STDOUT,
        universal_newlines=True,
    )
    assert popen.stdout is not None
    for stdout_line in iter(popen.stdout.readline, ""):
        logger.info("-->" + stdout_line.rstrip())
        if client:
            client.sendmsg(group_name, {"action": "experiment:output", "data": stdout_line})
    popen.stdout.close()
    return_code = popen.wait()
    if not return_code == 0:
        raise RuntimeError(f"run data script failed: {return_code}")
