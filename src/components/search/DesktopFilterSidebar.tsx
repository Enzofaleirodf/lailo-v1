
import React, { useState, useEffect } from 'react';
import { ItemType } from '../../types/search';
import { SidebarHeader } from '../filters/SidebarHeader';
import { LocationFilter } from './LocationFilter';
import { CategoryTypeFilters } from '../filters/CategoryTypeFilters';
import { VehicleSpecificFilters } from '../filters/VehicleSpecificFilters';
import { PropertySpecificFilters } from '../filters/PropertySpecificFilters';

interface DesktopFilterSidebarProps {
  itemType: ItemType;
  onClearFilters: () => void;
}

export const DesktopFilterSidebar = ({ itemType, onClearFilters }: DesktopFilterSidebarProps) => {
  // Estados iniciais conforme especificação - OBRIGATORIAMENTE marcados
  const [category, setCategory] = useState(itemType === 'property' ? 'residenciais' : 'leves');
  const [type, setType] = useState(itemType === 'property' ? 'todos' : 'carros');
  const [brand, setBrand] = useState('todas-marcas');
  const [model, setModel] = useState('todos-modelos');
  const [color, setColor] = useState('todas-cores');
  const [yearRange, setYearRange] = useState<[number, number]>([2010, 2025]);
  const [areaRange, setAreaRange] = useState<[number, number]>([50, 500]);
  const [priceRange, setPriceRange] = useState<[number, number]>([50000, 1000000]);

  // UseEffect para garantir que as categorias e tipos padrão estejam sempre aplicados
  useEffect(() => {
    const defaultCategory = itemType === 'property' ? 'residenciais' : 'leves';
    const defaultType = itemType === 'property' ? 'todos' : 'carros';
    
    console.log('DesktopFilterSidebar - Aplicando categoria e tipo padrão obrigatórios:', {
      itemType,
      category: defaultCategory,
      type: defaultType
    });
    
    setCategory(defaultCategory);
    setType(defaultType);
  }, [itemType]);

  console.log('DesktopFilterSidebar - Estado atual:', { category, type });

  const handleClearAllFilters = () => {
    console.log('DesktopFilterSidebar - Limpando filtros');
    // Reset para estados iniciais - mantendo categorias e tipos obrigatórios
    const defaultCategory = itemType === 'property' ? 'residenciais' : 'leves';
    const defaultType = itemType === 'property' ? 'todos' : 'carros';
    
    setCategory(defaultCategory);
    setType(defaultType);
    setBrand('todas-marcas');
    setModel('todos-modelos');
    setColor('todas-cores');
    setYearRange([2010, 2025]);
    setAreaRange([50, 500]);
    setPriceRange([50000, 1000000]);
    onClearFilters();
  };

  return (
    <div className="hidden md:block w-[512px] h-full bg-white border-r border-gray-200">
      <div 
        className="h-full overflow-y-auto invisible-scrollbar"
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none'
        }}
      >
        <div className="p-6">
          <SidebarHeader onClearFilters={handleClearAllFilters} />

          <div className="space-y-8">
            {/* Localização como primeiro filtro */}
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-3">
                Localização
              </label>
              <LocationFilter placeholder="Selecione uma localização" />
            </div>

            <CategoryTypeFilters
              itemType={itemType}
              category={category}
              type={type}
              onCategoryChange={setCategory}
              onTypeChange={setType}
            />

            {itemType === 'vehicle' && (
              <VehicleSpecificFilters
                brand={brand}
                model={model}
                color={color}
                yearRange={yearRange}
                priceRange={priceRange}
                vehicleType={type.toLowerCase()}
                onBrandChange={setBrand}
                onModelChange={setModel}
                onColorChange={setColor}
                onYearRangeChange={setYearRange}
                onPriceRangeChange={setPriceRange}
              />
            )}

            {itemType === 'property' && (
              <PropertySpecificFilters
                areaRange={areaRange}
                priceRange={priceRange}
                onAreaRangeChange={setAreaRange}
                onPriceRangeChange={setPriceRange}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
