
import React from 'react';
import { FilterSection } from './FilterSection';
import { SearchableCombobox } from './SearchableCombobox';
import { ColorPopover } from './ColorPopover';
import { RangeSlider } from './RangeSlider';
import { brandOptions, modelOptions, colorOptions } from '../../config/filterData';

interface VehicleSpecificFiltersProps {
  brand: string;
  model: string;
  color: string;
  yearRange: [number, number];
  onBrandChange: (brand: string) => void;
  onModelChange: (model: string) => void;
  onColorChange: (color: string) => void;
  onYearRangeChange: (range: [number, number]) => void;
}

export const VehicleSpecificFilters = ({
  brand,
  model,
  color,
  yearRange,
  onBrandChange,
  onModelChange,
  onColorChange,
  onYearRangeChange
}: VehicleSpecificFiltersProps) => {
  return (
    <>
      <FilterSection title="Marca e Modelo">
        <div className="space-y-1">
          <SearchableCombobox
            options={brandOptions}
            selected={brand}
            onSelect={onBrandChange}
            placeholder="Selecione uma marca"
          />
          <SearchableCombobox
            options={modelOptions}
            selected={model}
            onSelect={onModelChange}
            placeholder="Selecione um modelo"
            disabled={brand === 'todas-marcas'}
          />
        </div>
      </FilterSection>

      <FilterSection title="Cor">
        <ColorPopover
          colors={colorOptions}
          selected={color}
          onSelect={onColorChange}
        />
      </FilterSection>

      <FilterSection title="Ano do veículo">
        <RangeSlider
          value={yearRange}
          onChange={onYearRangeChange}
          min={2000}
          max={2025}
          step={1}
          suffix=""
        />
      </FilterSection>
    </>
  );
};
