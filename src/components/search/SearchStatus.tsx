
import React from "react";

interface SearchStatusProps {
  totalAuctions: number;
  totalSites: number;
  newAuctions: number;
  className?: string;
}

export const SearchStatus = ({ 
  totalAuctions, 
  totalSites, 
  newAuctions, 
  className = "text-xs md:text-sm" 
}: SearchStatusProps) => {
  const formatNumber = (num: number) => {
    return num.toLocaleString('pt-BR');
  };

  const statusText = `Encontramos ${formatNumber(totalAuctions)} leilões em ${formatNumber(totalSites)} sites${newAuctions > 0 ? ` · ${formatNumber(newAuctions)} novos hoje` : ''}`;

  return (
    <p className={`text-gray-600 font-urbanist whitespace-nowrap ${className}`}>
      {statusText}
    </p>
  );
};
