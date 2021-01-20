import logFiles from '../../main.json';
import { promises as fs } from 'fs';

export type LogStatType = { name: string; size: number; time: string };

export const getLogStat = async () =>
  await Promise.all(
    Object.entries(logFiles).map(async ([key, value]) => {
      const stat = await fs.stat(value.log);
      return { name: key, size: stat.size, time: stat.atime.toISOString() } as LogStatType;
    })
  );
