
import React, { useState } from 'react';
import { ItemType } from '../../types/search';
import { SidebarHeader } from '../filters/SidebarHeader';
import { CategoryTypeFilters } from '../filters/CategoryTypeFilters';
import { VehicleSpecificFilters } from '../filters/VehicleSpecificFilters';
import { PropertySpecificFilters } from '../filters/PropertySpecificFilters';
import { PriceFilter } from '../filters/PriceFilter';
import { vehicleTypes } from '../../config/filterData';

interface DesktopFilterSidebarProps {
  itemType: ItemType;
  onClearFilters: () => void;
}

export const DesktopFilterSidebar = ({ itemType, onClearFilters }: DesktopFilterSidebarProps) => {
  // Estados dos filtros
  const [category, setCategory] = useState(itemType === 'property' ? 'residenciais' : 'leves');
  const [type, setType] = useState(itemType === 'property' ? 'todos' : 'carro');
  const [brand, setBrand] = useState('todas-marcas');
  const [model, setModel] = useState('todos-modelos');
  const [color, setColor] = useState('todas-cores');
  const [yearRange, setYearRange] = useState<[number, number]>([2010, 2025]);
  const [areaRange, setAreaRange] = useState<[number, number]>([50, 500]);
  const [priceRange, setPriceRange] = useState<[number, number]>([50000, 1000000]);

  const handleCategoryChange = (newCategory: string) => {
    setCategory(newCategory);
    // Reset type when category changes
    if (itemType === 'property') {
      setType('todos');
    } else {
      setType(vehicleTypes[newCategory as keyof typeof vehicleTypes]?.[0]?.value || 'carro');
    }
  };

  const handleClearAllFilters = () => {
    setCategory(itemType === 'property' ? 'residenciais' : 'leves');
    setType(itemType === 'property' ? 'todos' : 'carro');
    setBrand('todas-marcas');
    setModel('todos-modelos');
    setColor('todas-cores');
    setYearRange([2010, 2025]);
    setAreaRange([50, 500]);
    setPriceRange([50000, 1000000]);
    onClearFilters();
  };

  return (
    <div className="hidden md:block fixed left-12 top-16 w-[512px] h-[calc(100vh-4rem)] bg-white border-r border-gray-200 z-30 overflow-y-auto">
      <div className="p-6">
        <SidebarHeader onClearFilters={handleClearAllFilters} />

        <div className="space-y-8">
          <CategoryTypeFilters
            itemType={itemType}
            category={category}
            type={type}
            onCategoryChange={handleCategoryChange}
            onTypeChange={setType}
          />

          {itemType === 'vehicle' && (
            <VehicleSpecificFilters
              brand={brand}
              model={model}
              color={color}
              yearRange={yearRange}
              onBrandChange={setBrand}
              onModelChange={setModel}
              onColorChange={setColor}
              onYearRangeChange={setYearRange}
            />
          )}

          {itemType === 'property' && (
            <PropertySpecificFilters
              areaRange={areaRange}
              onAreaRangeChange={setAreaRange}
            />
          )}

          <PriceFilter
            priceRange={priceRange}
            onPriceRangeChange={setPriceRange}
          />
        </div>
      </div>
    </div>
  );
};
