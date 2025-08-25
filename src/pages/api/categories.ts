import { NextApiRequest, NextApiResponse } from 'next';
import { getAllCategories } from '../../lib/db';
import { connectToDatabase } from '../../lib/mongodb';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  await connectToDatabase();

  if (req.method === 'GET') {
    try {
      const categories = await getAllCategories();
      res.status(200).json(categories);
    } catch (error) {
      console.error('Error retrieving categories:', error);
      res.status(500).json({ error: 'Internal server error.' });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};

export default handler;