import logging
from typing import Any

import requests as requests_lib

logger = logging.getLogger(__name__)


class Req:
    def __init__(self):
        self.session = requests_lib.Session()

    def get(self, *args, **kwargs):
        return self._do("get", *args, **kwargs)

    def post(self, *args, **kwargs):
        return self._do("post", *args, **kwargs)

    def put(self, *args, **kwargs):
        return self._do("put", *args, **kwargs)

    def delete(self, *args, **kwargs):
        return self._do("delete", *args, **kwargs)

    def patch(self, *args, **kwargs):
        return self._do("patch", *args, **kwargs)

    def _do(self, method_name, *args, **kwargs):
        check_return_code = kwargs.pop("check_return_code", True)
        method = getattr(self.session, method_name, None)
        if not method:
            msg = f"no such request method: {method_name}"
            logger.error("%s", msg)
            raise RuntimeError(msg)

        rsp = Response(method(*args, **kwargs))
        if check_return_code and rsp.status_code != 200:
            logger.warning(
                "invalid http code: %s %s %s %s",
                rsp.status_code,
                rsp.content[:500],
                args,
                kwargs,
            )
        return rsp


class Response:
    def __init__(self, raw_rsp):
        self.raw_rsp = raw_rsp

    def __getattribute__(self, name: str) -> Any:
        try:
            return object.__getattribute__(self, name)
        except AttributeError:
            return self.raw_rsp.__getattribute__(name)

    def json(self):
        try:
            return self.raw_rsp.json()
        except Exception:
            logger.error("invalid json in resp: %s", self.raw_rsp.content[:100])
            raise


requests = Req()
