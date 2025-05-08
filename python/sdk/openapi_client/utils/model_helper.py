import os
import tarfile
import base64
from pathlib import Path

from openapi_client.models.model_tree_node import ModelTreeNode


def _get_child(children: list[ModelTreeNode], name: str):
    for child in children:
        if child.name == name:
            return child
    return None


def tar_to_UMF(tar) -> list[ModelTreeNode]:
    if isinstance(tar, str):
        tar = tarfile.open(tar)
    content = ModelTreeNode(name="", type="folder", children=[])

    for info in tar.getmembers():
        if info.isdir():
            continue
        file_obj = tar.extractfile(info)

        dir_entry = content
        for path_item in info.name.split("/")[:-1]:
            if path_item in [".", ".."]:
                continue
            assert dir_entry.children is not None
            if child_entry := _get_child(dir_entry.children, path_item):
                dir_entry = child_entry
                continue
            else:
                assert dir_entry.children is not None
                dir_entry.children.append(ModelTreeNode(name=path_item, type="folder", children=[]))
                dir_entry = dir_entry.children[-1]

        assert dir_entry.children is not None
        dir_entry.children.append(
            ModelTreeNode(
                name=Path(info.name).name, type="file", content=base64.b64encode(file_obj.read()).decode('utf-8')
            )
        )

    assert content.children is not None
    return content.children


def dir_to_UMF(path):
    children = []

    if not os.path.isdir(path):
        return children

    for entry in os.listdir(path):
        entry_path = os.path.join(path, entry)

        if os.path.isdir(entry_path):
            children.append(
                ModelTreeNode(name=os.path.basename(entry_path), type="folder", children=dir_to_UMF(entry_path))
            )
        else:
            children.append(
                ModelTreeNode(
                    name=entry, type="file", content=base64.b64encode(Path(entry_path).read_bytes()).decode('utf-8')
                )
            )

    return children


def test_tar():
    print(tar_to_UMF("/home/cph/server/server/src/turing/tests/simple_model.tar.xz"))


def test_dir():
    print(dir_to_UMF('/tmp/x'))


if __name__ == '__main__':
    test_tar()
    test_dir()
