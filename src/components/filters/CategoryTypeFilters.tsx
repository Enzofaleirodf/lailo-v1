
import React from 'react';
import { ItemType } from '../../types/search';
import { FilterSection } from './FilterSection';
import { CategoryGrid } from './CategoryGrid';
import { ChipSelector } from './ChipSelector';
import { propertyCategories, propertyTypes, vehicleCategories, vehicleTypes } from '../../config/filterData';

interface CategoryTypeFiltersProps {
  itemType: ItemType;
  category: string;
  type: string;
  onCategoryChange: (category: string) => void;
  onTypeChange: (type: string) => void;
}

export const CategoryTypeFilters = ({
  itemType,
  category,
  type,
  onCategoryChange,
  onTypeChange
}: CategoryTypeFiltersProps) => {
  return (
    <>
      <FilterSection title={itemType === 'property' ? 'Categoria do Imóvel' : 'Categoria do Veículo'}>
        <CategoryGrid
          options={itemType === 'property' ? propertyCategories : vehicleCategories}
          selected={category}
          onSelect={onCategoryChange}
          columns={2}
        />
      </FilterSection>

      <FilterSection title="Tipo">
        <ChipSelector
          options={itemType === 'property' 
            ? propertyTypes[category as keyof typeof propertyTypes] || []
            : vehicleTypes[category as keyof typeof vehicleTypes] || []
          }
          selected={type}
          onSelect={onTypeChange}
        />
      </FilterSection>
    </>
  );
};
