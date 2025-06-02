
import React from 'react';
import { FilterSection } from './FilterSection';
import { RangeSlider } from './RangeSlider';

interface PropertySpecificFiltersProps {
  areaRange: [number, number];
  onAreaRangeChange: (range: [number, number]) => void;
}

export const PropertySpecificFilters = ({
  areaRange,
  onAreaRangeChange
}: PropertySpecificFiltersProps) => {
  return (
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
  );
};
