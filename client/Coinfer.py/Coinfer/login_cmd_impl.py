import dataclasses
import pathlib

from .client import Client
from .client_common import get_token


def login():
    if token := get_token():
        userinfo = _get_user_info(token)
        print(f"You're logged in as {userinfo.name}.")
    else:
        print(_login_prompt)


@dataclasses.dataclass
class _UserInfo:
    name: str


def _get_user_info(token: str) -> _UserInfo:
    import yaml

    with open("workflow.yaml", "r") as f:
        workflow_settings = yaml.safe_load(f)

    client = Client(workflow_settings['coinfer']['endpoint'], token)
    rsp = client.get_user_info()
    return _UserInfo(rsp['username'])


_login_prompt = f"""
To run the sample or analyze command with result sending to server, you need a token.

You can get a token at https://coinfer.ai/bayes/#/home > Profile.

Edit {pathlib.Path.home()}/.config/coinfer/config.yaml and add the token to "auth.token":

```yaml
# {pathlib.Path.home()}/.config/coinfer/config.yaml
auth:
    token: <your-token>
```
"""
