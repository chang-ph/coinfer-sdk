import fs from 'fs/promises';
import path from 'path';
import * as coinfer_sdk from '../sdk/'

type DirEntry = coinfer_sdk.ModelTreeNode

// interface DirEntry {
//   name: string;
//   type: 'folder' | 'file';
//   children?: DirEntry[];
//   content?: string;
// }

async function dirToJson(dirPath: string): Promise<DirEntry[]> {
  const children: DirEntry[] = [];

  try {
    const entries = await fs.readdir(dirPath);

    for (const entry of entries) {
      const entryPath = path.join(dirPath, entry);
      const stat = await fs.stat(entryPath);

      if (stat.isDirectory()) {
        continue
      } else {
        const buffer = await fs.readFile(entryPath);
        const content = buffer.toString('base64');

        children.push({
          name: entry,
          type: coinfer_sdk.ModelTreeNodeTypeEnum.File,
          content,
        });
      }
    }
  } catch (err) {
    // 忽略非目录错误等
    console.error(`Error reading directory ${dirPath}:`, err);
  }

  return children;
}

export default dirToJson
