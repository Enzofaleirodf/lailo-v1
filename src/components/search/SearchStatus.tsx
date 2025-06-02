
import React from 'react';

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
  className = "" 
}: SearchStatusProps) => {
  const formatNumber = (num: number) => {
    return num.toLocaleString('pt-BR');
  };

  const buildStatusText = () => {
    const baseText = `Encontramos ${formatNumber(totalAuctions)} leilões em ${formatNumber(totalSites)} sites`;
    
    if (newAuctions > 0) {
      return `${baseText} · ${formatNumber(newAuctions)} novos hoje`;
    }
    
    return baseText;
  };

  return (
    <div className={`text-sm md:text-sm text-gray-600 whitespace-nowrap ${className}`}>
      {buildStatusText()}
    </div>
  );
};
