
import React from 'react';
import { ItemType } from '../../types/search';
import { FilterSection } from './FilterSection';
import { CategoryGrid } from './CategoryGrid';
import { TypeCombobox } from './TypeCombobox';
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
  
  const handleCategoryChange = (newCategory: string) => {
    console.log('CategoryTypeFilters - Categoria mudou para:', newCategory);
    
    // Primeiro aplica a nova categoria
    onCategoryChange(newCategory);
    
    // Depois aplica automaticamente o primeiro tipo da nova categoria
    const typeOptions = itemType === 'property' 
      ? propertyTypes[newCategory as keyof typeof propertyTypes] || []
      : vehicleTypes[newCategory as keyof typeof vehicleTypes] || [];
    
    if (typeOptions.length > 0) {
      const firstType = typeOptions[0].value;
      console.log('CategoryTypeFilters - Aplicando primeiro tipo:', firstType);
      onTypeChange(firstType);
    }
  };

  return (
    <>
      <FilterSection title={itemType === 'property' ? 'Categoria do Imóvel' : 'Categoria do Veículo'}>
        <CategoryGrid
          options={itemType === 'property' ? propertyCategories : vehicleCategories}
          selected={category}
          onSelect={handleCategoryChange}
          columns={2}
        />
      </FilterSection>

      <FilterSection title="Tipo">
        <TypeCombobox
          options={itemType === 'property' 
            ? propertyTypes[category as keyof typeof propertyTypes] || []
            : vehicleTypes[category as keyof typeof vehicleTypes] || []
          }
          selected={type}
          onSelect={onTypeChange}
          placeholder={`Selecione um tipo`}
        />
      </FilterSection>
    </>
  );
};
