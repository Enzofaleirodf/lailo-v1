
import React from 'react';
import { FilterSection } from './FilterSection';
import { RangeSlider } from './RangeSlider';
import { useIsMobile } from '../../hooks/use-mobile';

interface PropertySpecificFiltersProps {
  areaRange: [number, number];
  onAreaRangeChange: (range: [number, number]) => void;
  priceRange: [number, number];
  onPriceRangeChange: (range: [number, number]) => void;
}

export const PropertySpecificFilters = ({
  areaRange,
  onAreaRangeChange,
  priceRange,
  onPriceRangeChange
}: PropertySpecificFiltersProps) => {
  const isMobile = useIsMobile();

  return (
    <div className={`space-y-6 ${!isMobile ? 'grid grid-cols-2 gap-6 space-y-0' : ''}`}>
      <FilterSection title="Área Útil">
        <RangeSlider
          min={50}
          max={500}
          value={areaRange}
          onChange={onAreaRangeChange}
          suffix="m²"
          step={10}
        />
      </FilterSection>

      <FilterSection title="Valor do Lance">
        <RangeSlider
          min={50000}
          max={1000000}
          value={priceRange}
          onChange={onPriceRangeChange}
          prefix="R$ "
          step={1000}
          formatValue={(value) => `R$ ${(value / 1000).toFixed(0)}k`}
        />
      </FilterSection>
    </div>
  );
};
