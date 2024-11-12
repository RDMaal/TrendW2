import { NextResponse } from 'next/server';
import { fetchTrendingProducts } from '@/lib/services/trend-crawler';

export async function GET() {
  try {
    const trends = await fetchTrendingProducts();
    return NextResponse.json({ trends });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch trends' },
      { status: 500 }
    );
  }
}