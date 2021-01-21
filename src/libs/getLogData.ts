import logFiles from '../../main.json';
import { promises as fs } from 'fs';
import { CaddyLog } from '../types/CaddyLog';

export type LogResultType = {
  logs: CaddyLog[];
  page: number;
  allCount: number;
};

export const getLogData = async (
  name: string,
  count = 1000,
  page = 1
): Promise<LogResultType | undefined> =>
  await fs
    .readFile(logFiles[name].log, 'utf8')
    .then((values) => {
      const datas = values.split('\n').filter((value) => value);
      const logs = datas
        .slice(-count * page, -count * (page - 1) || undefined)
        .map((value) => JSON.parse(value) as CaddyLog);
      return { host: logFiles[name].url, logs, page, allCount: datas.length };
    })
    .catch(() => undefined);
