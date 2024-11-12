import { Product } from '@/lib/types';

interface TrendSource {
  url: string;
  selector: string;
}

const TREND_SOURCES: TrendSource[] = [
  {
    url: 'https://api.example.com/trending-products',
    selector: 'products[].data'
  }
];

export async function fetchTrendingProducts(): Promise<Partial<Product>[]> {
  try {
    // Simulated trending products for demo
    return [
      {
        id: 'trend-1',
        name: 'Smart Water Bottle',
        category: 'Wellness',
        trending: true,
        description: 'AI-powered hydration tracking with temperature control',
        price: 45.99,
        image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=800&auto=format&fit=crop',
        rating: 4.8,
        reviews: 128
      },
      {
        id: 'trend-2',
        name: 'Sustainable Yoga Mat',
        category: 'Fitness',
        trending: true,
        description: 'Made from recycled materials with alignment guides',
        price: 89.99,
        image: 'https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=800&auto=format&fit=crop',
        rating: 4.9,
        reviews: 256
      }
    ];
  } catch (error) {
    console.error('Error fetching trends:', error);
    return [];
  }
}