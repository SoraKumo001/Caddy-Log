import { NextApiHandler } from 'next';
import { readReferer } from '../../../../../libs/getReferer';

const index: NextApiHandler = async (req, res) => {
  const values = await readReferer(req.query['id'] as string, 1000, Number(req.query['page']));

  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(values));
};
export default index;
