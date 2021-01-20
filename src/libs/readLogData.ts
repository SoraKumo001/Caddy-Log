import logFiles from '../../main.json';
import { promises as fs } from 'fs';
import { CaddyLog } from '../types/CaddyLog';

export type LogResultType = {
  logs: CaddyLog[];
  page: number;
  allCount: number;
};

export const readLogData = async (
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

export type RankingData = { uri: string; count: number };
export type RankingResultType = {
  logs: RankingData[];
  host: string;
  page: number;
  allCount: number;
};

export const readRanking = async (
  name: string,
  count = 1000,
  page = 1
): Promise<RankingResultType | undefined> =>
  await fs
    .readFile(logFiles[name].log, 'utf8')
    .then((values) => {
      const datas = values
        .split('\n')
        .filter((value) => value)
        .map((value) => JSON.parse(value) as CaddyLog)
        .reduce((prev, data) => {
          prev[data.request.uri] = (prev[data.request.uri] || 0) + 1;
          return prev;
        }, {} as { [key: string]: number });
      const ranking = Object.entries(datas)
        .sort((a, b) => a[1] - b[1])
        .map(([uri, count]) => ({ uri, count }));
      const rankingPage = ranking.slice(-count * page, -count * (page - 1) || undefined);
      return { host: logFiles[name].url, page, allCount: ranking.length, logs: rankingPage };
    })
    .catch(() => undefined);
