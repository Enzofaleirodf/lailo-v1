
import React from "react";
import { AuctionCard } from "./AuctionCard";
import { AuctionEmptyState } from "./AuctionEmptyState";
import { AuctionEvent } from "../../data/agendaAuctions";

interface AuctionListProps {
  auctionsByMonth: Record<string, AuctionEvent[]>;
  selectedDate?: string;
  onClearSelection?: () => void;
}

export const AuctionList = ({ 
  auctionsByMonth, 
  selectedDate,
  onClearSelection 
}: AuctionListProps) => {
  const hasAuctions = Object.keys(auctionsByMonth).length > 0;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-lg md:text-xl font-semibold text-gray-900">
          {selectedDate 
            ? `Leilões em ${new Date(selectedDate).toLocaleDateString('pt-BR')}`
            : 'Próximos Leilões'
          }
        </h2>
        {selectedDate && onClearSelection && (
          <button
            onClick={onClearSelection}
            className="text-sm text-blue-600 hover:text-blue-700"
          >
            Ver todos os leilões
          </button>
        )}
      </div>
      
      {hasAuctions ? (
        Object.entries(auctionsByMonth).map(([month, auctions]) => (
          <div key={month} className="space-y-4">
            <h3 className="text-base md:text-lg font-medium text-blue-600 capitalize border-b border-gray-200 pb-2">
              {month}
            </h3>
            <div className="space-y-4">
              {auctions.map((auction) => (
                <AuctionCard key={auction.id} auction={auction} />
              ))}
            </div>
          </div>
        ))
      ) : (
        <AuctionEmptyState selectedDate={selectedDate} />
      )}
    </div>
  );
};
