import { Product } from '@/lib/types';
import { ProductCard } from './product-card';

export function ProductList({ products }: { products: Product[] }) {
  return (
    <div className="max-w-2xl mx-auto space-y-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}