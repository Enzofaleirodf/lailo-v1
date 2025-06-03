
import React from 'react';
import { LocationFilter } from './LocationFilter';
import { ItemType } from '../../types/search';

interface TopBarFiltersProps {
  itemType: ItemType;
}

export const TopBarFilters = ({
  itemType
}: TopBarFiltersProps) => {
  return (
    <div className="flex items-start gap-3 min-w-0">
      {/* Apenas o filtro de Localização na barra superior */}
      <div className="flex-shrink-0">
        <LocationFilter />
      </div>
    </div>
  );
};
