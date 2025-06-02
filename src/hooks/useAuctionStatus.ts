
import { useMemo } from 'react';
import { SearchItem } from '../types/search';

interface AuctionStatusData {
  totalAuctions: number;
  totalSites: number;
  newAuctions: number;
}

export const useAuctionStatus = (items: SearchItem[]): AuctionStatusData => {
  return useMemo(() => {
    const totalAuctions = items.length;
    
    // Calcular sites únicos baseado no campo website ou extraído do href
    const uniqueSites = new Set();
    items.forEach(item => {
      // Por enquanto usando um website mock, depois integrar com campo real
      const website = 'leiloeiro-exemplo.com.br';
      uniqueSites.add(website);
    });
    const totalSites = uniqueSites.size || 1; // mínimo 1 site para evitar 0
    
    // Calcular novos leilões (últimas 24h)
    const now = new Date();
    const twentyFourHoursAgo = new Date(now.getTime() - 24 * 60 * 60 * 1000);
    
    const newAuctions = items.filter(item => {
      // Por enquanto usando showNewBadge como proxy para "novo"
      // Depois integrar com campo updated real
      return item.showNewBadge;
    }).length;
    
    return {
      totalAuctions,
      totalSites,
      newAuctions
    };
  }, [items]);
};
