
import React from 'react';
import { ItemType } from '../../types/search';
import { FilterSection } from './FilterSection';
import { FormatFilter } from '../search/FormatFilter';
import { OriginFilter } from '../search/OriginFilter';
import { StageFilter } from '../search/StageFilter';

interface AuctionConditionFiltersProps {
  itemType: ItemType;
}

export const AuctionConditionFilters = ({ itemType }: AuctionConditionFiltersProps) => {
  const [formatValue, setFormatValue] = React.useState('Leilão');
  const isStageEnabled = formatValue === 'Leilão';

  return (
    <>
      <FilterSection title="Formato">
        <FormatFilter itemType={itemType} />
      </FilterSection>

      <FilterSection title="Origem">
        <OriginFilter itemType={itemType} />
      </FilterSection>

      <FilterSection title="Etapa">
        <StageFilter 
          itemType={itemType} 
          isEnabled={isStageEnabled}
        />
      </FilterSection>
    </>
  );
};
