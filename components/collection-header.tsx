'use client';

import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Collection } from '@/lib/types';
import { cn } from '@/lib/utils';

export function CollectionHeader({ collection }: { collection: Collection }) {
  const backgroundColors = {
    daily: 'bg-rose-50 dark:bg-rose-950/30',
    weekly: 'bg-blue-50 dark:bg-blue-950/30',
    monthly: 'bg-emerald-50 dark:bg-emerald-950/30'
  };

  return (
    <div className={cn(
      'rounded-lg px-6 py-4',
      backgroundColors[collection.type]
    )}>
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight">{collection.title}</h2>
          <p className="text-muted-foreground mt-1">{collection.description}</p>
        </div>
        <Button variant="ghost" className="hover:bg-background/50">
          View All <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}