
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
      <div className="flex-shrink-0 w-[220px]">
        <LocationFilter />
      </div>

      {/* Filtro de Formato - mesma largura da localização */}
      <div className="flex-shrink-0 w-[220px]">
        <FormatFilter itemType={itemType} />
      </div>

      {/* Filtro de Origem - mesma largura da localização */}
      <div className="flex-shrink-0 w-[220px]">
        <OriginFilter itemType={itemType} />
      </div>

      {/* Filtro de Etapa - mesma largura da localização - dependente do formato */}
      <div className="flex-shrink-0 w-[220px]">
        <StageFilter 
          itemType={itemType} 
          isEnabled={isStageEnabled}
        />
      </div>
    </div>
  );
};
