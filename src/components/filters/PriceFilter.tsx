
import React from 'react';
import { FilterSection } from './FilterSection';
import { RangeSlider } from './RangeSlider';

interface PriceFilterProps {
  priceRange: [number, number];
  onPriceRangeChange: (range: [number, number]) => void;
}

export const PriceFilter = ({ priceRange, onPriceRangeChange }: PriceFilterProps) => {
  return (
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
  );
};
