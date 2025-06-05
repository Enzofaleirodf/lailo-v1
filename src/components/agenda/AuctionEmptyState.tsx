
import React from "react";
import { Calendar } from "lucide-react";

interface AuctionEmptyStateProps {
  selectedDate?: string;
}

export const AuctionEmptyState = ({ selectedDate }: AuctionEmptyStateProps) => {
  return (
    <div className="text-center py-12">
      <Calendar className="w-16 h-16 text-gray-300 mx-auto mb-4" />
      <h3 className="text-lg font-medium text-gray-900 mb-2">
        {selectedDate ? 'Nenhum leilão nesta data' : 'Nenhum leilão agendado'}
      </h3>
      <p className="text-gray-600 text-sm md:text-base">
        {selectedDate 
          ? 'Não há leilões programados para esta data.'
          : 'Não há leilões presenciais programados para os próximos dias.'
        }
      </p>
    </div>
  );
};
