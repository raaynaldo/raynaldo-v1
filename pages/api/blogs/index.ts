// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { getArticles } from '@/lib/devto';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'GET') {
    const articles = await getArticles();
    res.status(200).json({ data: articles });
  } else {
    res.status(404).json({ message: 'not found' });
  }
}
