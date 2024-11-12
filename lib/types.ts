export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  slug: string;
  category: string;
  badge?: string;
  trending?: boolean;
  featured?: boolean;
}

export interface Collection {
  id: string;
  title: string;
  description: string;
  products: Product[];
  type: 'daily' | 'weekly' | 'monthly';
}