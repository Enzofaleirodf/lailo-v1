
import React from 'react';
import { LoadingSpinner } from '../ui/LoadingSpinner';
import { ErrorMessage } from '../ui/ErrorMessage';
import { EmptyState } from '../ui/EmptyState';
import { PropertyCard } from '../cards/PropertyCard';
import { VehicleCard } from '../cards/VehicleCard';
import { useMockProperties } from '../../hooks/useMockProperties';
import { useMockVehicles } from '../../hooks/useMockVehicles';
import { useIsMobile } from '../../hooks/use-mobile';
import { cardTokens } from '../../styles/card-tokens';

interface SearchResultsProps {
  type: 'property' | 'vehicle';
}

export const SearchResults = ({ type }: SearchResultsProps) => {
  const isMobile = useIsMobile();
  
  const { 
    data: properties, 
    isLoading: isLoadingProperties, 
    error: propertiesError 
  } = useMockProperties();
  
  const { 
    data: vehicles, 
    isLoading: isLoadingVehicles, 
    error: vehiclesError 
  } = useMockVehicles();

  const isLoading = type === 'property' ? isLoadingProperties : isLoadingVehicles;
  const error = type === 'property' ? propertiesError : vehiclesError;
  const data = type === 'property' ? properties : vehicles;

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-12">
        <LoadingSpinner size="lg" />
      </div>
    );
  }

  if (error) {
    return (
      <ErrorMessage 
        title="Erro ao carregar dados"
        message="Não foi possível carregar os leilões. Tente novamente."
      />
    );
  }

  if (!data || data.length === 0) {
    return (
      <EmptyState
        title="Nenhum leilão encontrado"
        description="Tente ajustar os filtros para encontrar mais resultados."
        actionLabel="Limpar filtros"
        onAction={() => console.log('Clear filters')}
      />
    );
  }

  return (
    <div className={`space-y-4 ${cardTokens.grid.gap}`}>
      {data.map((item) => (
        <div key={item.id}>
          {type === 'property' ? (
            <PropertyCard property={item} isMobile={isMobile} />
          ) : (
            <VehicleCard vehicle={item} isMobile={isMobile} />
          )}
        </div>
      ))}
    </div>
  );
};
