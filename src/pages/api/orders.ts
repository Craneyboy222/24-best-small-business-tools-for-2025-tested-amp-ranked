import { NextApiRequest, NextApiResponse } from 'next';
// production-ready for future order-related APIs

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  res.status(501).json({ error: 'Not Implemented' });
};

export default handler;