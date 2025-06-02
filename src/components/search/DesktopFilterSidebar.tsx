
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ItemType } from '../../types/search';
import { FilterSection } from '../filters/FilterSection';
import { CategoryGrid } from '../filters/CategoryGrid';
import { ChipSelector } from '../filters/ChipSelector';
import { SearchableCombobox } from '../filters/SearchableCombobox';
import { ColorGrid } from '../filters/ColorGrid';
import { RangeSlider } from '../filters/RangeSlider';
import { Home, Building, TreePine, Factory, Car, Truck, Wrench, Waves } from 'lucide-react';

interface DesktopFilterSidebarProps {
  itemType: ItemType;
  onClearFilters: () => void;
}

export const DesktopFilterSidebar = ({ itemType, onClearFilters }: DesktopFilterSidebarProps) => {
  // Estados dos filtros
  const [category, setCategory] = useState(itemType === 'property' ? 'residenciais' : 'leves');
  const [type, setType] = useState(itemType === 'property' ? 'todos' : 'carros');
  const [brand, setBrand] = useState('todas-marcas');
  const [model, setModel] = useState('todos-modelos');
  const [color, setColor] = useState('todas-cores');
  const [yearRange, setYearRange] = useState<[number, number]>([2010, 2025]);
  const [areaRange, setAreaRange] = useState<[number, number]>([50, 500]);
  const [priceRange, setPriceRange] = useState<[number, number]>([50000, 1000000]);

  // Opções para imóveis
  const propertyCategories = [
    { value: 'residenciais', label: 'Residenciais', icon: <Home className="w-4 h-4" /> },
    { value: 'comerciais', label: 'Comerciais', icon: <Building className="w-4 h-4" /> },
    { value: 'rurais', label: 'Rurais', icon: <TreePine className="w-4 h-4" /> },
    { value: 'industriais', label: 'Industriais', icon: <Factory className="w-4 h-4" /> },
  ];

  const propertyTypes = {
    residenciais: [
      { value: 'todos', label: 'Todos' },
      { value: 'apartamentos', label: 'Apartamentos' },
      { value: 'casas', label: 'Casas' },
      { value: 'sobrados', label: 'Sobrados' },
      { value: 'condominios', label: 'Condomínios' }
    ],
    comerciais: [
      { value: 'todos', label: 'Todos' },
      { value: 'lojas', label: 'Lojas' },
      { value: 'escritorios', label: 'Escritórios' },
      { value: 'galpoes', label: 'Galpões' }
    ],
    rurais: [
      { value: 'todos', label: 'Todos' },
      { value: 'chacaras', label: 'Chácaras' },
      { value: 'fazendas', label: 'Fazendas' },
      { value: 'sitios', label: 'Sítios' }
    ],
    industriais: [
      { value: 'todos', label: 'Todos' },
      { value: 'galpoes', label: 'Galpões' },
      { value: 'terrenos', label: 'Terrenos' }
    ]
  };

  // Opções para veículos
  const vehicleCategories = [
    { value: 'leves', label: 'Leves', icon: <Car className="w-4 h-4" /> },
    { value: 'pesados', label: 'Pesados', icon: <Truck className="w-4 h-4" /> },
    { value: 'maquinas', label: 'Máquinas', icon: <Wrench className="w-4 h-4" /> },
    { value: 'aquaticos', label: 'Aquáticos', icon: <Waves className="w-4 h-4" /> },
  ];

  const vehicleTypes = {
    leves: [
      { value: 'carros', label: 'Carros' },
      { value: 'motos', label: 'Motos' }
    ],
    pesados: [
      { value: 'caminhoes', label: 'Caminhões' },
      { value: 'onibus', label: 'Ônibus' }
    ],
    maquinas: [
      { value: 'agricolas', label: 'Agrícolas' },
      { value: 'construcao', label: 'Construção' }
    ],
    aquaticos: [
      { value: 'barcos', label: 'Barcos' },
      { value: 'jet-skis', label: 'Jet Skis' }
    ]
  };

  const brandOptions = [
    { value: 'todas-marcas', label: 'Todas as Marcas' },
    { value: 'volkswagen', label: 'Volkswagen' },
    { value: 'honda', label: 'Honda' },
    { value: 'toyota', label: 'Toyota' },
    { value: 'ford', label: 'Ford' }
  ];

  const modelOptions = [
    { value: 'todos-modelos', label: 'Todos os Modelos' },
    { value: 'civic', label: 'Civic' },
    { value: 'corolla', label: 'Corolla' },
    { value: 't-cross', label: 'T-Cross' }
  ];

  const colorOptions = [
    'Todas as cores', 'Amarelo', 'Azul', 'Bege', 'Branco', 'Bronze', 
    'Cinza', 'Dourado', 'Grafite', 'Laranja', 'Marrom', 'Prata', 
    'Preto', 'Rosa', 'Roxo', 'Verde', 'Vermelho', 'Vinho'
  ];

  const handleCategoryChange = (newCategory: string) => {
    setCategory(newCategory);
    // Reset type when category changes
    if (itemType === 'property') {
      setType('todos');
    } else {
      setType(vehicleTypes[newCategory as keyof typeof vehicleTypes]?.[0]?.value || 'carros');
    }
  };

  const handleClearAllFilters = () => {
    setCategory(itemType === 'property' ? 'residenciais' : 'leves');
    setType(itemType === 'property' ? 'todos' : 'carros');
    setBrand('todas-marcas');
    setModel('todos-modelos');
    setColor('todas-cores');
    setYearRange([2010, 2025]);
    setAreaRange([50, 500]);
    setPriceRange([50000, 1000000]);
    onClearFilters();
  };

  return (
    <div className="hidden md:block fixed left-12 top-16 w-[448px] h-[calc(100vh-4rem)] bg-white border-r border-gray-200 z-30 overflow-y-auto">
      <div className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-semibold text-gray-900">Filtros</h2>
          <Button 
            variant="ghost" 
            className="text-sm text-gray-600 hover:text-gray-800 p-0 h-auto font-normal"
            onClick={handleClearAllFilters}
          >
            Resetar filtros
          </Button>
        </div>

        <div className="space-y-8">
          {/* Filtro de Categoria */}
          <FilterSection title={itemType === 'property' ? 'Categoria do Imóvel' : 'Categoria do Veículo'}>
            <CategoryGrid
              options={itemType === 'property' ? propertyCategories : vehicleCategories}
              selected={category}
              onSelect={handleCategoryChange}
              columns={2}
            />
          </FilterSection>

          {/* Filtro de Tipo */}
          <FilterSection title="Tipo">
            <ChipSelector
              options={itemType === 'property' 
                ? propertyTypes[category as keyof typeof propertyTypes] || []
                : vehicleTypes[category as keyof typeof vehicleTypes] || []
              }
              selected={type}
              onSelect={setType}
            />
          </FilterSection>

          {/* Filtros específicos para veículos */}
          {itemType === 'vehicle' && (
            <>
              <FilterSection title="Marca e Modelo">
                <div className="space-y-2">
                  <SearchableCombobox
                    options={brandOptions}
                    selected={brand}
                    onSelect={setBrand}
                    placeholder="Selecione uma marca"
                  />
                  <SearchableCombobox
                    options={modelOptions}
                    selected={model}
                    onSelect={setModel}
                    placeholder="Selecione um modelo"
                    disabled={brand === 'todas-marcas'}
                  />
                </div>
              </FilterSection>
              
              <FilterSection title="Cor">
                <ColorGrid
                  colors={colorOptions}
                  selected={color}
                  onSelect={setColor}
                />
              </FilterSection>

              <FilterSection title="Ano do Veículo">
                <RangeSlider
                  min={2010}
                  max={2025}
                  value={yearRange}
                  onChange={setYearRange}
                  step={1}
                />
              </FilterSection>
            </>
          )}

          {/* Filtros específicos para imóveis */}
          {itemType === 'property' && (
            <FilterSection title="Área Útil">
              <RangeSlider
                min={50}
                max={500}
                value={areaRange}
                onChange={setAreaRange}
                suffix="m²"
                step={10}
              />
            </FilterSection>
          )}

          {/* Filtro de Valor do Lance - sempre por último */}
          <FilterSection title="Valor do Lance">
            <RangeSlider
              min={50000}
              max={1000000}
              value={priceRange}
              onChange={setPriceRange}
              prefix="R$ "
              step={1000}
              formatValue={(value) => `R$ ${(value / 1000).toFixed(0)}k`}
            />
          </FilterSection>
        </div>
      </div>
    </div>
  );
};
