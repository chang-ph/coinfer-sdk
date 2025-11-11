def bool_sync(sync: str | bool) -> bool:
    # off is turned into False by yaml
    # 'off' is kept as 'off'
    if isinstance(sync, str):
        return sync != "off"
    return sync
