import { NextApiRequest, NextApiResponse } from 'next';
import { verifyAdmin } from '../../lib/auth';
import { connectToDatabase } from '../../lib/mongodb';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  await connectToDatabase();

  const isAdmin = await verifyAdmin(req);
  if (!isAdmin) {
    return res.status(403).json({ error: 'Forbidden' });
  }

  if (req.method === 'GET') {
    // Admin-specific logic here
    res.status(200).json({ message: 'Admin access granted.' });
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};

export default handler;