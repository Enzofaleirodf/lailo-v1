
import React, { useState } from 'react';
import { ItemType } from '../../types/search';
import { SidebarHeader } from '../filters/SidebarHeader';
import { CategoryTypeFilters } from '../filters/CategoryTypeFilters';
import { VehicleSpecificFilters } from '../filters/VehicleSpecificFilters';
import { PropertySpecificFilters } from '../filters/PropertySpecificFilters';
import { PriceFilter } from '../filters/PriceFilter';

interface DesktopFilterSidebarProps {
  itemType: ItemType;
  onClearFilters: () => void;
}

export const DesktopFilterSidebar = ({ itemType, onClearFilters }: DesktopFilterSidebarProps) => {
  // Estados iniciais conforme especificação - exatamente igual ao mobile
  const [category, setCategory] = useState(itemType === 'property' ? 'Residenciais' : 'Veículos Leves');
  const [type, setType] = useState(itemType === 'property' ? 'Todos' : 'Carros');
  const [brand, setBrand] = useState('todas-marcas');
  const [model, setModel] = useState('todos-modelos');
  const [color, setColor] = useState('todas-cores');
  const [yearRange, setYearRange] = useState<[number, number]>([2010, 2025]);
  const [areaRange, setAreaRange] = useState<[number, number]>([50, 500]);
  const [priceRange, setPriceRange] = useState<[number, number]>([50000, 1000000]);

  // Função para resetar tipo quando categoria muda - mesma lógica do mobile
  const handleCategoryChange = (newCategory: string) => {
    setCategory(newCategory);
    // Sempre aplicar o primeiro tipo da nova categoria
    if (itemType === 'property') {
      setType('Todos');
    } else {
      // Para veículos, definir o primeiro tipo baseado na categoria
      if (newCategory === 'Veículos Leves') {
        setType('Carros');
      } else if (newCategory === 'Veículos Pesados') {
        setType('Caminhões');
      } else {
        setType('Carros'); // fallback
      }
    }
  };

  const handleClearAllFilters = () => {
    // Reset para estados iniciais - exatamente igual ao mobile
    setCategory(itemType === 'property' ? 'Residenciais' : 'Veículos Leves');
    setType(itemType === 'property' ? 'Todos' : 'Carros');
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
                vehicleType={type.toLowerCase()}
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
    </div>
  );
};
