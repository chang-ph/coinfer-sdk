import json
import subprocess

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


def main():
    rsp = httpx.get("https://dev.coinfer.ai/openapi.json")
    openapi_json = rsp.json()
    for path, path_item in openapi_json['paths'].items():
        for method, operation in path_item.items():
            operation["operationId"] = (
                operation["operationId"]
                .removeprefix("coinfer_apis_base_api_")
                .removeprefix("coinfer_apis_turing_api_")
                .removeprefix("coinfer_apis_mcmc_api_")
                .removeprefix("coinfer_apis_notification_api_")
                .removeprefix("coinfer_apis_unified_api_")
            )
    with open("openapi.json", "wt") as fout:
        json.dump(openapi_json, fout)

    lang_config['typescript']['additional_properties']['npmVersion'] = openapi_json['info']['version']
    for lang in ("python", "julia-client", "typescript"):
        if _lang_config := lang_config.get(lang):
            additional_properties = ",".join(
                f"{key}={val}" for key, val in _lang_config.get("additional_properties", {}).items()
            )
            additional_properties = f"--additional-properties={additional_properties}" if additional_properties else ""
            dir_name = _lang_config.get("dir_name", lang)
        else:
            additional_properties = ""
            dir_name = lang
        subprocess.check_call(
            cmd_template.format(
                target_lang=lang, target_lang_dir=dir_name, additional_properties=additional_properties
            ),
            shell=True,
        )


if __name__ == "__main__":
    main()
