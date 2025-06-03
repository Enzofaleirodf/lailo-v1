
import React from 'react';
import { LocationFilter } from './LocationFilter';
import { FormatFilter } from '../filters/FormatFilter';
import { ItemType } from '../../types/search';

interface TopBarFiltersProps {
  itemType: ItemType;
}

export const TopBarFilters = ({
  itemType
}: TopBarFiltersProps) => {
  const handleFormatChange = (value: string) => {
    console.log('Format changed:', value);
    // TODO: Integrar com o sistema de filtros global
  };

  return (
    <div className="flex items-start gap-6 min-w-0">
      {/* Filtro de Localização - sempre primeiro */}
      <div className="flex-shrink-0">
        <LocationFilter />
      </div>
      
      {/* Filtro de Formato - ao lado direito */}
      <div className="flex-shrink-0">
        <FormatFilter 
          value="leilao"
          onChange={handleFormatChange}
        />
      </div>
    </div>
  );
};
