'use client';

import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Product } from '@/lib/types';

export function ProductCard({ product }: { product: Product }) {
  return (
    <Card className="overflow-hidden">
      <CardContent className="p-0">
        <div className="flex flex-col">
          <div className="relative w-full aspect-[16/9]">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover"
            />
            {product.badge && (
              <Badge className="absolute top-2 right-2">{product.badge}</Badge>
            )}
          </div>
          <div className="p-6">
            <div className="text-sm text-muted-foreground mb-2">{product.category}</div>
            <h3 className="text-xl font-semibold mb-3">{product.name}</h3>
            <p className="text-muted-foreground mb-4">{product.description}</p>
            <div className="text-2xl font-bold">${product.price}</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}