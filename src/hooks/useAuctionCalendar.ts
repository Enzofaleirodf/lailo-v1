
import { useState, useMemo } from 'react';
import { AuctionEvent } from '../data/agendaAuctions';

export const useAuctionCalendar = (auctions: AuctionEvent[]) => {
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [selectedAuctions, setSelectedAuctions] = useState<AuctionEvent[]>([]);

  const handleDateSelect = (date: string, auctions: AuctionEvent[]) => {
    setSelectedDate(date);
    setSelectedAuctions(auctions);
  };

  const clearSelection = () => {
    setSelectedDate("");
    setSelectedAuctions([]);
  };

  // Agrupar leilões por mês
  const auctionsByMonth = useMemo(() => {
    const auctionsToGroup = selectedDate ? selectedAuctions : auctions;
    const grouped: Record<string, AuctionEvent[]> = {};
    
    auctionsToGroup.forEach(auction => {
      const date = new Date(auction.date);
      const monthKey = date.toLocaleDateString('pt-BR', { 
        year: 'numeric', 
        month: 'long' 
      });
      
      if (!grouped[monthKey]) {
        grouped[monthKey] = [];
      }
      grouped[monthKey].push(auction);
    });
    
    // Ordenar por data dentro de cada mês
    Object.keys(grouped).forEach(month => {
      grouped[month].sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
    });
    
    return grouped;
  }, [selectedDate, selectedAuctions, auctions]);

  return {
    selectedDate,
    selectedAuctions,
    auctionsByMonth,
    handleDateSelect,
    clearSelection
  };
};
