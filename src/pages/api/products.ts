import { NextApiRequest, NextApiResponse } from 'next';
import { getAllTools, createTool } from '../../lib/db';
import { connectToDatabase } from '../../lib/mongodb';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  await connectToDatabase();

  if (req.method === 'GET') {
    try {
      const tools = await getAllTools();
      res.status(200).json(tools);
    } catch (error) {
      console.error('Error retrieving tools:', error);
      res.status(500).json({ error: 'Internal server error.' });
    }
  } else if (req.method === 'POST') {
    const { name, description, category, website_url } = req.body;

    if (!name || !description) {
      return res.status(400).json({ error: 'Name and description are required.' });
    }

    try {
      const tool = await createTool({ name, description, category, website_url });
      res.status(201).json(tool);
    } catch (error) {
      console.error('Error creating tool:', error);
      res.status(500).json({ error: 'Internal server error.' });
    }
  } else {
    res.setHeader('Allow', ['GET', 'POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};

export default handler;