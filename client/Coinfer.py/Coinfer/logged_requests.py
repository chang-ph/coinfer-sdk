import json
import time
from enum import Flag, auto
import logging
from typing import TypedDict, Unpack, Any

import requests as requests_lib

logger = logging.getLogger(__name__)


class CheckResponseSubject(Flag):
    TIMEOUT = auto()
    STATUS_CODE = auto()
    JSON = auto()
    STATUS = auto()
    ALL = TIMEOUT | STATUS_CODE | JSON | STATUS


def check_response(
    rsp: requests_lib.Response,
    subjects: CheckResponseSubject = CheckResponseSubject.STATUS_CODE
    | CheckResponseSubject.JSON
    | CheckResponseSubject.STATUS,
    valid_status_code: range = range(200, 201),
):
    if CheckResponseSubject.STATUS_CODE in subjects and rsp.status_code not in valid_status_code:
        return rsp, f'(http)invalid status_code: {rsp.url} {rsp.status_code} {rsp.content[:100]}'
    if CheckResponseSubject.JSON in subjects:
        try:
            json_rsp = rsp.json()
        except json.decoder.JSONDecodeError:
            return rsp, f'(http)invalid json: {rsp.url} {rsp.content[:100]}'
        if CheckResponseSubject.STATUS in subjects and json_rsp.get('status') != 'ok':
            return rsp, f'(http)invalid status: {rsp.url} {json_rsp}'

    return rsp, ""


class _DoParamType(TypedDict, total=False):
    check_subjects: CheckResponseSubject
    valid_status_code: range

    headers: dict[str, str]
    json: dict[str, Any]
    timeout: float | int


class Req:
    def __init__(self):
        self.session = requests_lib.Session()
        self.errmsg = ""

    def get(self, *args: str, **kwargs: Unpack[_DoParamType]):
        return self._do("get", *args, **kwargs)

    def post(self, *args: str, **kwargs: Unpack[_DoParamType]):
        return self._do("post", *args, **kwargs)

    def put(self, *args: str, **kwargs: Unpack[_DoParamType]):
        return self._do("put", *args, **kwargs)

    def delete(self, *args: str, **kwargs: Unpack[_DoParamType]):
        return self._do("delete", *args, **kwargs)

    def patch(self, *args: str, **kwargs: Unpack[_DoParamType]):
        return self._do("patch", *args, **kwargs)

    def _do(self, method_name: str, *args: str, **kwargs: Unpack[_DoParamType]):
        self.errmsg = ""
        subjects: CheckResponseSubject = kwargs.pop(
            "check_subjects", CheckResponseSubject.TIMEOUT | CheckResponseSubject.STATUS_CODE
        )
        valid_status_code = kwargs.pop("valid_status_code", range(200, 201))
        kwargs.setdefault('timeout', 60)
        method = getattr(self.session, method_name, None)
        if not method:
            self.errmsg = f"no such request method: {method_name}"
            logger.error("%s", self.errmsg)
            raise RuntimeError(self.errmsg)

        start = time.time()
        try:
            rsp = method(*args, **kwargs)
        except requests_lib.exceptions.Timeout:
            if CheckResponseSubject.TIMEOUT in subjects:
                self.errmsg = f'(http)timeout: {args[0]}, {time.time() - start}, {kwargs}'
                logger.exception("%s", self.errmsg)
                return None
            else:
                raise
        rsp, err = check_response(rsp, subjects, valid_status_code)
        self.errmsg = err
        if err:
            logger.error("%s", err)
        return rsp


requests = Req()
