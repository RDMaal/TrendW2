import { fetchTrendingProducts } from './trend-crawler';

let lastUpdate: Date | null = null;
const UPDATE_INTERVAL = 24 * 60 * 60 * 1000; // 24 hours

export async function checkTrendUpdates() {
  const now = new Date();
  
  if (!lastUpdate || now.getTime() - lastUpdate.getTime() > UPDATE_INTERVAL) {
    try {
      const trends = await fetchTrendingProducts();
      lastUpdate = now;
      return trends;
    } catch (error) {
      console.error('Failed to update trends:', error);
      return null;
    }
  }
  
  return null;
}