import argparse
import hashlib
import json
import subprocess
import sys
from typing import Any, Dict, List, Union

import httpx

# TIPS:
# 1. to extract the template of a specific target language: openapi-generator-cli author template -g java
# 2. to inspect the supported additional properties of a specific target language: openapi-generator-cli config-help -g go
lang_config = {
    "julia-client": {
        "dir_name": "julia",
    },
    "typescript": {
        "additional_properties": {
            "npmName": "@vectorly-ai/coinfer-ts",
            "npmVersion": "",  # override in code
            "projectName": "coinfer-ts",
        }
    },
}

cmd_template = """
rm -rf {target_lang_dir}/sdk \
&& openapi-generator-cli generate -g {target_lang} \
  --git-host github.com --git-repo-id coinfer-sdk --git-user-id vectorly-ai \
  -i openapi.json -o {target_lang_dir}/sdk -t {target_lang_dir}/template {additional_properties}\
&& cp -rT {target_lang_dir}/patch {target_lang_dir}/sdk
"""


def replace_long_keys(data: Any) -> None:
    key_mapping = {}

    def collect_replacements(node: Any):
        if isinstance(node, dict):
            for key, value in list(node.items()):
                if len(key) > 100:
                    md5_hash = hashlib.md5(key.encode('utf-8')).hexdigest()
                    new_key = f"UUUU{md5_hash}"
                    key_mapping[key] = new_key

                    node[new_key] = value
                    del node[key]
                collect_replacements(value)

        elif isinstance(node, list):
            for idx, item in enumerate(node):
                collect_replacements(item)

    def apply_replacements(node: Any):
        if isinstance(node, dict):
            for key, value in list(node.items()):
                if isinstance(value, str):
                    for old_ref, new_ref in key_mapping.items():
                        if old_ref in value:
                            node[key] = value.replace(old_ref, new_ref)

                apply_replacements(value)

        elif isinstance(node, list):
            for item in node:
                apply_replacements(item)

    collect_replacements(data)
    apply_replacements(data)
    return data


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("http_endpoint", nargs="?", default="https://dev.coinfer.ai")
    args = parser.parse_args()
    print(args.http_endpoint)
    rsp = httpx.get(f"{args.http_endpoint}/openapi.json")
    openapi_json = rsp.json()
    # remove common prefix to make the method name shorter
    for path, path_item in openapi_json["paths"].items():
        for method, operation in path_item.items():
            operation["operationId"] = (
                operation["operationId"]
                .removeprefix("coinfer_apis_base_api_")
                .removeprefix("coinfer_apis_turing_api_")
                .removeprefix("coinfer_apis_mcmc_api_")
                .removeprefix("coinfer_apis_notification_api_")
                .removeprefix("coinfer_apis_unified_api_")
                .removeprefix("coinfer_apis_system_api_")
                .removeprefix("coinfer_apis_no_auth_api_")
            )

    # check if all the operationIds are fixed
    check_uniq = set()
    for path, path_item in openapi_json["paths"].items():
        for method, operation in path_item.items():
            opid = operation["operationId"]
            if opid.startswith("coinfer_apis_"):
                print(f"{opid} has invalid naming", file=sys.stderr)
                sys.exit(1)

            if opid in check_uniq:
                print(f"{opid} conflict", file=sys.stderr)
                sys.exit(2)
            check_uniq.add(opid)

    with open("openapi.json", "wt") as fout:
        json.dump(replace_long_keys(openapi_json), fout)

    lang_config["typescript"]["additional_properties"]["npmVersion"] = openapi_json[
        "info"
    ]["version"]
    for lang in ("python", "julia-client", "typescript"):
        if _lang_config := lang_config.get(lang):
            additional_properties = ",".join(
                f"{key}={val}"
                for key, val in _lang_config.get("additional_properties", {}).items()
            )
            additional_properties = (
                f"--additional-properties={additional_properties}"
                if additional_properties
                else ""
            )
            dir_name = _lang_config.get("dir_name", lang)
        else:
            additional_properties = ""
            dir_name = lang
        subprocess.check_call(
            cmd_template.format(
                target_lang=lang,
                target_lang_dir=dir_name,
                additional_properties=additional_properties,
            ),
            shell=True,
        )


if __name__ == "__main__":
    main()
