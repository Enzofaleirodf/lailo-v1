
import React from 'react';
import { FilterSection } from '../../filters/FilterSection';
import { CategoryGrid } from '../../filters/CategoryGrid';
import { ChipSelector } from '../../filters/ChipSelector';
import { AlertFilters } from '../../../types/alert';
import { propertyCategories, propertyTypes, vehicleCategories, vehicleTypes } from '../../../config/alertsData';

interface AlertCategoryTypeFiltersProps {
  type: 'property' | 'vehicle';
  filters: AlertFilters;
  onFiltersChange: (filters: AlertFilters) => void;
}

export const AlertCategoryTypeFilters = ({ type, filters, onFiltersChange }: AlertCategoryTypeFiltersProps) => {
  const updateFilter = (key: keyof AlertFilters, value: any) => {
    onFiltersChange({ ...filters, [key]: value });
  };

  // Convert string arrays to chip options with proper format
  const getTypeOptions = () => {
    if (type === 'property') {
      const category = filters.propertyCategory || 'residenciais';
      return (propertyTypes[category] || []).map(typeStr => ({ 
        value: typeStr.toLowerCase().replace(/\s+/g, '-'), 
        label: typeStr 
      }));
    } else {
      const category = filters.vehicleCategory || 'leves';
      return (vehicleTypes[category] || []).map(typeStr => ({ 
        value: typeStr.toLowerCase().replace(/\s+/g, '-'), 
        label: typeStr 
      }));
    }
  };

  return (
    <>
      {/* Categoria */}
      <FilterSection title="Categoria">
        <CategoryGrid
          options={type === 'property' ? propertyCategories : vehicleCategories}
          selected={type === 'property' ? (filters.propertyCategory || 'residenciais') : (filters.vehicleCategory || 'leves')}
          onSelect={(value) => {
            if (type === 'property') {
              updateFilter('propertyCategory', value);
              updateFilter('propertyType', 'todos'); // Reset tipo
            } else {
              updateFilter('vehicleCategory', value);
              updateFilter('vehicleType', 'carros'); // Reset tipo
            }
          }}
          columns={2} // Mobile-first: 2 colunas
        />
      </FilterSection>

      {/* Tipo */}
      <FilterSection title="Tipo">
        <div className="w-full">
          <ChipSelector
            options={getTypeOptions()}
            selected={type === 'property' ? (filters.propertyType || 'todos') : (filters.vehicleType || 'carros')}
            onSelect={(value) => {
              if (type === 'property') {
                updateFilter('propertyType', value);
              } else {
                updateFilter('vehicleType', value);
              }
            }}
          />
        </div>
      </FilterSection>
    </>
  );
};
