
import React from 'react';
import { AlertFilters } from '../../types/alert';
import { FilterSection } from '../filters/FilterSection';
import { RangeSlider } from '../filters/RangeSlider';
import { AlertLocationFilters } from './filters/AlertLocationFilters';
import { AlertCategoryTypeFilters } from './filters/AlertCategoryTypeFilters';
import { AlertVehicleSpecificFilters } from './filters/AlertVehicleSpecificFilters';
import { AlertConditionFilters } from './filters/AlertConditionFilters';

interface AlertFiltersFormProps {
  type: 'property' | 'vehicle';
  filters: AlertFilters;
  onFiltersChange: (filters: AlertFilters) => void;
}

export const AlertFiltersForm = ({ type, filters, onFiltersChange }: AlertFiltersFormProps) => {
  const updateFilter = (key: keyof AlertFilters, value: any) => {
    onFiltersChange({ ...filters, [key]: value });
  };

  return (
    <div className="space-y-6">
      {/* Localização */}
      <AlertLocationFilters 
        filters={filters} 
        onFiltersChange={onFiltersChange} 
      />

      {/* Categoria e Tipo */}
      <AlertCategoryTypeFilters 
        type={type} 
        filters={filters} 
        onFiltersChange={onFiltersChange} 
      />

      {/* Filtros específicos de veículos */}
      {type === 'vehicle' && (
        <AlertVehicleSpecificFilters 
          filters={filters} 
          onFiltersChange={onFiltersChange} 
        />
      )}

      {/* Área útil (apenas para imóveis) */}
      {type === 'property' && (
        <FilterSection title="Área Útil">
          <RangeSlider
            value={filters.areaRange || [50, 500]}
            onChange={(range) => updateFilter('areaRange', range)}
            min={50}
            max={500}
            step={10}
            suffix="m²"
          />
        </FilterSection>
      )}

      {/* Valor do Lance */}
      <FilterSection title="Valor do Lance">
        <RangeSlider
          value={filters.priceRange || [50000, 1000000]}
          onChange={(range) => updateFilter('priceRange', range)}
          min={50000}
          max={1000000}
          step={1000}
          prefix="R$ "
          formatValue={(value) => `R$ ${(value / 1000).toFixed(0)}k`}
        />
      </FilterSection>

      {/* Condições do Leilão */}
      <AlertConditionFilters 
        filters={filters} 
        onFiltersChange={onFiltersChange} 
      />
    </div>
  );
};
