
import React from 'react';
import { LocationFilter } from './LocationFilter';
import { FormatFilter } from './FormatFilter';
import { OriginFilter } from './OriginFilter';
import { StageFilter } from './StageFilter';
import { ItemType } from '../../types/search';

interface TopBarFiltersProps {
  itemType: ItemType;
}

export const TopBarFilters = ({
  itemType
}: TopBarFiltersProps) => {
  // Estado para controlar se o filtro de Etapa está habilitado
  const [formatValue, setFormatValue] = React.useState('Leilão');
  const isStageEnabled = formatValue === 'Leilão';

  return (
    <div className="flex items-start gap-3 min-w-0">
      {/* Filtro de Localização - sempre primeiro */}
      <div className="flex-shrink-0">
        <LocationFilter />
      </div>

      {/* Filtro de Formato - SEM LABEL */}
      <div className="flex-shrink-0">
        <FormatFilter itemType={itemType} />
      </div>

      {/* Filtro de Origem - SEM LABEL */}
      <div className="flex-shrink-0">
        <OriginFilter itemType={itemType} />
      </div>

      {/* Filtro de Etapa - SEM LABEL - dependente do formato */}
      <div className="flex-shrink-0">
        <StageFilter 
          itemType={itemType} 
          isEnabled={isStageEnabled}
        />
      </div>
    </div>
  );
};
