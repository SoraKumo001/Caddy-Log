import { promises as fs } from 'fs';
import logFiles from '../../main.json';
import { CaddyLog } from '../types/CaddyLog';

export type RefereData = { uri: string; count: number };
export type RefererResultType = {
  logs: RefereData[];
  host: string;
  page: number;
  allCount: number;
};

export const readReferer = async (
  name: string,
  count = 1000,
  page = 1
): Promise<RefererResultType | undefined> =>
  await fs
    .readFile(logFiles[name].log, 'utf8')
    .then((values) => {
      const datas = values
        .split('\n')
        .filter((value) => value)
        .map((value) => (JSON.parse(value) as CaddyLog).request.headers.Referer?.[0])
        .filter((value) => value && value.indexOf(logFiles[name].url) !== 0)
        .reduce((prev, data) => {
          data && (prev[data] = (prev[data] || 0) + 1);
          return prev;
        }, {} as { [key: string]: number });
      const ranking = Object.entries(datas)
        .sort((a, b) => a[1] - b[1])
        .map(([uri, count]) => ({ uri, count }));
      const rankingPage = ranking.slice(-count * page, -count * (page - 1) || undefined);
      return { host: logFiles[name].url, page, allCount: ranking.length, logs: rankingPage };
    })
    .catch((e) => {
      console.log(e);
      return undefined;
    });
