
import React from 'react';
import { FilterSection } from './FilterSection';
import { SearchableCombobox } from './SearchableCombobox';
import { ColorPopover } from './ColorPopover';
import { RangeSlider } from './RangeSlider';
import { carBrandOptions, motoBrandOptions, modelOptions, colorOptions } from '../../config/filterData';
import { useIsMobile } from '../../hooks/use-mobile';

interface VehicleSpecificFiltersProps {
  brand: string;
  model: string;
  color: string;
  yearRange: [number, number];
  priceRange: [number, number];
  vehicleType: string;
  onBrandChange: (brand: string) => void;
  onModelChange: (model: string) => void;
  onColorChange: (color: string) => void;
  onYearRangeChange: (range: [number, number]) => void;
  onPriceRangeChange: (range: [number, number]) => void;
}

export const VehicleSpecificFilters = ({
  brand,
  model,
  color,
  yearRange,
  priceRange,
  vehicleType,
  onBrandChange,
  onModelChange,
  onColorChange,
  onYearRangeChange,
  onPriceRangeChange
}: VehicleSpecificFiltersProps) => {
  const isMobile = useIsMobile();

  // Determinar quais marcas mostrar baseado no tipo de veículo
  const getBrandOptions = () => {
    if (vehicleType === 'moto') {
      return motoBrandOptions;
    }
    return carBrandOptions;
  };

  return (
    <>
      <FilterSection title="Marca e Modelo">
        <div className="space-y-1">
          <SearchableCombobox
            options={getBrandOptions()}
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

      <div className={`space-y-6 ${!isMobile ? 'grid grid-cols-2 gap-6 space-y-0' : ''}`}>
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
    </>
  );
};
