
import React from 'react';
import { RangeSlider } from './RangeSlider';
import { useIsMobile } from '@/hooks/use-mobile';

interface PropertySpecificFiltersProps {
  areaRange: [number, number];
  priceRange: [number, number];
  onAreaRangeChange: (range: [number, number]) => void;
  onPriceRangeChange: (range: [number, number]) => void;
  isAlert?: boolean;
}

export const PropertySpecificFilters = ({
  areaRange,
  priceRange,
  onAreaRangeChange,
  onPriceRangeChange,
  isAlert = false
}: PropertySpecificFiltersProps) => {
  const isMobile = useIsMobile();
  
  const formatCurrency = (value: number) => {
    if (value >= 1000000) {
      return `R$ ${(value / 1000000).toFixed(1)}M`;
    }
    return `R$ ${(value / 1000).toFixed(0)}k`;
  };

  if (isAlert) {
    return (
      <div className={`${isMobile ? 'space-y-6' : 'flex flex-row gap-4'}`}>
        <div className={isMobile ? '' : 'flex-1'}>
          <label className="block text-sm font-medium text-gray-900 mb-3">
            Área útil
          </label>
          <RangeSlider
            min={50}
            max={500}
            value={areaRange}
            onChange={onAreaRangeChange}
            suffix="m²"
            step={10}
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
    );
  }

  return (
    <>
      <div>
        <label className="block text-sm font-medium text-gray-900 mb-3">
          Área útil
        </label>
        <RangeSlider
          min={50}
          max={500}
          value={areaRange}
          onChange={onAreaRangeChange}
          suffix="m²"
          step={10}
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
