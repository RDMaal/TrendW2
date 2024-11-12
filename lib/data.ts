import { Collection, Product } from './types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Sustainable Bamboo Water Bottle',
    description: 'Double-walled insulation keeps your drinks at the perfect temperature for hours. Made from sustainable bamboo with a sleek, minimalist design perfect for everyday use.',
    price: 35,
    image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=1200&auto=format&fit=crop&q=60',
    slug: 'sustainable-bamboo-water-bottle',
    category: 'Lifestyle',
    badge: 'Eco-friendly',
    trending: true,
    featured: true
  },
  {
    id: '2',
    name: 'Organic Cotton Yoga Mat',
    description: 'Premium eco-friendly exercise mat made from 100% organic cotton. Features natural grip texture and extra cushioning for maximum comfort during your practice.',
    price: 89,
    image: 'https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=1200&auto=format&fit=crop&q=60',
    slug: 'organic-cotton-yoga-mat',
    category: 'Fitness',
    trending: true
  },
  {
    id: '3',
    name: 'Smart Planner 2024',
    description: 'Digital-integrated daily planner with QR code features, habit tracking, and goal setting frameworks. Includes premium paper and a built-in bookmark system.',
    price: 45,
    image: 'https://images.unsplash.com/photo-1506784365847-bbad939e9335?w=1200&auto=format&fit=crop&q=60',
    slug: 'smart-planner-2024',
    category: 'Productivity',
    trending: true,
    badge: 'Best Seller'
  },
  {
    id: '4',
    name: 'Silk Sleep Mask Set',
    description: 'Luxury silk sleep mask with matching scrunchie. Perfect for beauty sleep and travel.',
    price: 49,
    image: 'https://images.unsplash.com/photo-1613521140785-e85e427f8002?w=800&auto=format&fit=crop&q=60',
    slug: 'silk-sleep-mask-set',
    category: 'Wellness',
    badge: 'Weekly Pick'
  },
  {
    id: '5',
    name: 'Smart Ring Light',
    description: 'Professional LED ring light with phone mount and Bluetooth control. Perfect for content creators.',
    price: 79,
    image: 'https://images.unsplash.com/photo-1595159102909-699300a2d225?w=800&auto=format&fit=crop&q=60',
    slug: 'smart-ring-light',
    category: 'Tech',
    badge: 'Top Rated'
  },
  {
    id: '6',
    name: 'Minimalist Leather Tote',
    description: 'Handcrafted leather tote with laptop compartment and organizational pockets.',
    price: 189,
    image: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=800&auto=format&fit=crop&q=60',
    slug: 'minimalist-leather-tote',
    category: 'Fashion',
    featured: true
  }
];

export const collections: Collection[] = [
  {
    id: 'daily-trending',
    title: 'Daily Trending',
    description: 'Must-have products making waves today',
    products: products.filter(p => p.trending),
    type: 'daily'
  },
  {
    id: 'weekly-highlights',
    title: 'Weekly Highlights',
    description: 'Top picks of the week that you should not miss',
    products: products.slice(0, 4),
    type: 'weekly'
  },
  {
    id: 'monthly-winners',
    title: 'Monthly Winners',
    description: 'Best-performing products of the month',
    products: products,
    type: 'monthly'
  }
];