import { promises as fs } from 'fs';
import logFiles from '../../main.json';

export type LogStatType = { name: string; size: number; ctime: string; mtime: string };

export const getLogStat = async () =>
  (
    await Promise.all(
      Object.entries(logFiles).map(async ([key, value]) => {
        const stat = await fs.stat(value.log).catch(() => null);
        return (
          stat &&
          ({
            name: key,
            size: stat.size,
            ctime: stat.ctime.toISOString(),
            mtime: stat.mtime.toISOString(),
          } as LogStatType)
        );
      })
    )
  ).filter((v) => v);
