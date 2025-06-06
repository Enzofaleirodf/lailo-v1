import React from 'react';
import { SearchableCombobox } from './SearchableCombobox';
import { SimpleSelect } from './SimpleSelect';
import { RangeSlider } from './RangeSlider';
import { vehicleBrands, vehicleModels, vehicleColors } from '../../config/filterData';
import { useIsMobile } from '@/hooks/use-mobile';

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
  isAlert?: boolean;
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
  onPriceRangeChange,
  isAlert = false
}: VehicleSpecificFiltersProps) => {
  const isMobile = useIsMobile();
  const availableBrands = vehicleBrands[vehicleType] || [];
  const availableModels = brand !== 'todas-marcas' ? vehicleModels[brand] || [] : [];

  const formatCurrency = (value: number) => {
    if (value >= 1000000) {
      return `R$ ${(value / 1000000).toFixed(1)}M`;
    }
    return `R$ ${(value / 1000).toFixed(0)}k`;
  };

  if (isAlert) {
    return (
      <>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-3">
              Marca e Modelo
            </label>
            <div className="space-y-1">
              <SearchableCombobox
                options={availableBrands}
                selected={brand}
                onSelect={onBrandChange}
                placeholder="Selecione uma marca"
              />
              <SearchableCombobox
                options={availableModels}
                selected={model}
                onSelect={onModelChange}
                placeholder="Selecione um modelo"
                disabled={brand === 'todas-marcas'}
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-900 mb-3">
              Cor
            </label>
            <SimpleSelect
              options={vehicleColors}
              selected={color}
              onSelect={onColorChange}
              placeholder="Selecione uma cor"
            />
          </div>
        </div>

        <div className={`${isMobile ? 'space-y-6' : 'flex flex-row gap-4'}`}>
          <div className={isMobile ? '' : 'flex-1'}>
            <label className="block text-sm font-medium text-gray-900 mb-3">
              Ano
            </label>
            <RangeSlider
              min={2010}
              max={2025}
              value={yearRange}
              onChange={onYearRangeChange}
              step={1}
            />
          </div>

          <div className={isMobile ? '' : 'flex-1'}>
            <label className="block text-sm font-medium text-gray-900 mb-3">
              Valor do Lance
            </label>
            <RangeSlider
              min={50000}
              max={1000000}
              value={priceRange}
              onChange={onPriceRangeChange}
              prefix="R$"
              step={10000}
              formatValue={formatCurrency}
            />
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <div>
        <label className="block text-sm font-medium text-gray-900 mb-3">
          Marca e Modelo
        </label>
        <div className="space-y-1">
          <SearchableCombobox
            options={availableBrands}
            selected={brand}
            onSelect={onBrandChange}
            placeholder="Selecione uma marca"
          />
          <SearchableCombobox
            options={availableModels}
            selected={model}
            onSelect={onModelChange}
            placeholder="Selecione um modelo"
            disabled={brand === 'todas-marcas'}
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-900 mb-3">
          Cor
        </label>
        <SimpleSelect
          options={vehicleColors}
          selected={color}
          onSelect={onColorChange}
          placeholder="Selecione uma cor"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-900 mb-3">
          Ano
        </label>
        <RangeSlider
          min={2010}
          max={2025}
          value={yearRange}
          onChange={onYearRangeChange}
          step={1}
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-900 mb-3">
          Valor do Lance
        </label>
        <RangeSlider
          min={50000}
          max={1000000}
          value={priceRange}
          onChange={onPriceRangeChange}
          prefix="R$"
          step={10000}
          formatValue={formatCurrency}
        />
      </div>
    </>
  );
};
