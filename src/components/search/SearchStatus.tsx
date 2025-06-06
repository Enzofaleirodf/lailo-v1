
import React from 'react';
import { useMockPropertiesStats } from '../../hooks/useMockProperties';
import { useMockVehiclesStats } from '../../hooks/useMockVehicles';
import { useIsMobile } from '../../hooks/use-mobile';

interface SearchStatusProps {
  type: 'property' | 'vehicle';
}

export const SearchStatus = ({ type }: SearchStatusProps) => {
  const isMobile = useIsMobile();
  
  const { data: propertiesStats } = useMockPropertiesStats();
  const { data: vehiclesStats } = useMockVehiclesStats();
  
  const stats = type === 'property' ? propertiesStats : vehiclesStats;
  
  if (!stats) {
    return (
      <div className={`${isMobile ? 'text-xs' : 'text-sm'} text-gray-600`}>
        Carregando...
      </div>
    );
  }

  const { totalAuctions, totalSites, newAuctions } = stats;
  
  const buildStatusText = () => {
    let text = `Encontramos ${totalAuctions} leilões em ${totalSites} sites`;
    
    if (newAuctions > 0) {
      text += ` · ${newAuctions} novos hoje`;
    }
    
    return text;
  };

  return (
    <div className={`${isMobile ? 'text-xs' : 'text-sm'} text-gray-600 whitespace-nowrap`}>
      {buildStatusText()}
    </div>
  );
};
