import logging
import dataclasses
import pathlib

import yaml

from .client import Client
from .client_common import get_token

logger = logging.getLogger(__name__)


def login():
    if token := get_token():
        userinfo = _get_user_info(token)
        logger.info(f"You're logged in as {userinfo.name}.")
    else:
        logger.info(_login_prompt)


@dataclasses.dataclass
class _UserInfo:
    name: str


def _get_user_info(token: str) -> _UserInfo:
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
