
import React, { useState } from 'react';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "../ui/sheet";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { Button } from "../ui/button";
import { X } from "lucide-react";
import { StateSelect } from './location/StateSelect';
import { CitySelect } from './location/CitySelect';
import { AddressInput } from './location/AddressInput';
import { CategoryTypeFilters } from '../filters/CategoryTypeFilters';
import { FormatFilter } from './FormatFilter';
import { OriginFilter } from './OriginFilter';
import { StageFilter } from './StageFilter';
import { PriceFilter } from '../filters/PriceFilter';
import { PropertySpecificFilters } from '../filters/PropertySpecificFilters';
import { VehicleSpecificFilters } from '../filters/VehicleSpecificFilters';
import { ItemType } from '../../types/search';

interface MobileFiltersModalProps {
  isOpen: boolean;
  onClose: () => void;
  itemType: ItemType;
}

export const MobileFiltersModal = ({
  isOpen,
  onClose,
  itemType
}: MobileFiltersModalProps) => {
  // Estados dos filtros (mockados por enquanto)
  const [category, setCategory] = useState(itemType === 'property' ? 'Residenciais' : 'Veículos Leves');
  const [type, setType] = useState(itemType === 'property' ? 'Todos' : 'Carros');
  const [formatValue, setFormatValue] = useState('Leilão');
  const [areaRange, setAreaRange] = useState<[number, number]>([50, 500]);
  const [yearRange, setYearRange] = useState<[number, number]>([2010, 2025]);
  const [priceRange, setPriceRange] = useState<[number, number]>([50000, 1000000]);
  
  // Estados específicos para veículos
  const [brand, setBrand] = useState('todas-marcas');
  const [model, setModel] = useState('todos-modelos');
  const [color, setColor] = useState('todas-cores');

  // Estados para localização
  const [selectedState, setSelectedState] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [address, setAddress] = useState('');

  const isStageEnabled = formatValue === 'Leilão';

  const handleClearFilters = () => {
    console.log("Limpar todos os filtros");
  };

  const handleApplyFilters = () => {
    console.log("Aplicar filtros");
    onClose();
  };

  const handleClearCity = () => {
    setSelectedCity('');
  };

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent side="bottom" className="h-[90vh] rounded-t-3xl flex flex-col">
        <SheetHeader className="flex flex-row items-center justify-between border-b border-gray-100 pb-4 flex-shrink-0">
          <SheetTitle className="text-lg font-semibold">
            Filtros
          </SheetTitle>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="h-8 w-8"
          >
            <X className="h-4 w-4" />
          </Button>
        </SheetHeader>

        <div className="flex-1 overflow-hidden flex flex-col py-6">
          <Tabs defaultValue="location" className="w-full flex flex-col flex-1">
            <TabsList className="grid w-full grid-cols-3 mb-6 flex-shrink-0">
              <TabsTrigger value="location">Localização</TabsTrigger>
              <TabsTrigger value="characteristics">Características</TabsTrigger>
              <TabsTrigger value="conditions">Condições</TabsTrigger>
            </TabsList>

            <div className="flex-1 overflow-y-auto">
              {/* Tab Localização */}
              <TabsContent value="location" className="space-y-6 mt-0">
                <div className="px-1 space-y-4">
                  <StateSelect
                    value={selectedState}
                    onChange={setSelectedState}
                    onClearCity={handleClearCity}
                  />

                  <CitySelect
                    value={selectedCity}
                    onChange={setSelectedCity}
                    selectedState={selectedState}
                  />

                  <AddressInput
                    value={address}
                    onChange={setAddress}
                  />
                </div>
              </TabsContent>

              {/* Tab Características */}
              <TabsContent value="characteristics" className="space-y-6 mt-0">
                <div className="px-1 space-y-6">
                  <CategoryTypeFilters
                    itemType={itemType}
                    category={category}
                    type={type}
                    onCategoryChange={setCategory}
                    onTypeChange={setType}
                  />

                  {itemType === 'property' ? (
                    <PropertySpecificFilters
                      areaRange={areaRange}
                      onAreaRangeChange={setAreaRange}
                    />
                  ) : (
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

                  <PriceFilter
                    priceRange={priceRange}
                    onPriceRangeChange={setPriceRange}
                  />
                </div>
              </TabsContent>

              {/* Tab Condições */}
              <TabsContent value="conditions" className="space-y-6 mt-0">
                <div className="px-1 space-y-6">
                  <FormatFilter itemType={itemType} />
                  <OriginFilter itemType={itemType} />
                  <StageFilter 
                    itemType={itemType} 
                    isEnabled={isStageEnabled}
                  />
                </div>
              </TabsContent>
            </div>
          </Tabs>
        </div>

        {/* Footer com botões - sempre visível */}
        <div className="border-t border-gray-100 pt-4 pb-2 flex-shrink-0">
          <div className="flex gap-3">
            <Button
              variant="outline"
              onClick={handleClearFilters}
              className="flex-1"
            >
              Limpar filtros
            </Button>
            <Button
              onClick={handleApplyFilters}
              className="flex-1"
            >
              Aplicar filtros
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};
