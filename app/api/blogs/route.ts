import { NextResponse } from 'next/server';
import { getArticles } from '@/lib/devto';

export async function GET() {
  try {
    const articles = await getArticles();
    return NextResponse.json({ data: articles }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'not found' }, { status: 404 });
  }
}
