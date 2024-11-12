import { Suspense } from 'react';
import { collections } from '@/lib/data';
import { ProductList } from '@/components/product-list';
import { CollectionHeader } from '@/components/collection-header';
import { TrendingUp } from 'lucide-react';
import { checkTrendUpdates } from '@/lib/services/trend-scheduler';

export default async function Home() {
  // Check for new trends
  const trends = await checkTrendUpdates();

  return (
    <div className="container mx-auto px-4 py-8 space-y-16">
      <section className="text-center space-y-4 max-w-2xl mx-auto">
        <div className="inline-flex items-center justify-center p-2 bg-primary/10 rounded-full">
          <TrendingUp className="h-5 w-5 text-primary mr-2" />
          <span className="text-sm font-medium">Daily Curated Selection</span>
        </div>
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Discover Today's Must-Have Products
        </h1>
        <p className="text-lg text-muted-foreground">
          Carefully selected items that blend style, functionality, and innovation
          for the modern lifestyle.
        </p>
      </section>

      <Suspense fallback={<div>Loading...</div>}>
        {collections.map((collection) => (
          <section key={collection.id} className="space-y-8">
            <CollectionHeader collection={collection} />
            <ProductList products={collection.products} />
          </section>
        ))}
      </Suspense>
    </div>
  );
}