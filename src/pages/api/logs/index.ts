import { NextApiHandler } from 'next';
import { getLogStat } from '../../../libs/getLogStat';

const index: NextApiHandler = async (_req, res) => {
  const logs = await getLogStat();
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(logs));
};
export default index;
