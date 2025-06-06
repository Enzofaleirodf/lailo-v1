
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
    const formattedAuctions = formatNumber(totalAuctions);
    const formattedSites = formatNumber(totalSites);
    const formattedNewAuctions = formatNumber(newAuctions);
    
    return (
      <>
        Encontramos <span className="font-semibold">{formattedAuctions}</span> leilões em <span className="font-semibold">{formattedSites}</span> sites
        {newAuctions > 0 && (
          <> · <span className="font-semibold">{formattedNewAuctions}</span> novos hoje</>
        )}
      </>
    );
  };

  return (
    <div className={`text-lg md:text-sm text-gray-600 whitespace-nowrap ${className}`}>
      {buildStatusText()}
    </div>
  );
};
