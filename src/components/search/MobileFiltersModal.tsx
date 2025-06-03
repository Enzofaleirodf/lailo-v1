
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
import { LocationFilter } from './LocationFilter';
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

  const isStageEnabled = formatValue === 'Leilão';

  const handleClearFilters = () => {
    console.log("Limpar todos os filtros");
  };

  const handleApplyFilters = () => {
    console.log("Aplicar filtros");
    onClose();
  };

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent side="bottom" className="h-[90vh] rounded-t-3xl">
        <SheetHeader className="flex flex-row items-center justify-between border-b border-gray-100 pb-4">
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

        <div className="flex-1 overflow-y-auto py-6">
          <Tabs defaultValue="location" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-6">
              <TabsTrigger value="location">Localização</TabsTrigger>
              <TabsTrigger value="characteristics">Características</TabsTrigger>
              <TabsTrigger value="conditions">Condições</TabsTrigger>
            </TabsList>

            {/* Tab Localização */}
            <TabsContent value="location" className="space-y-6 mt-0">
              <div className="px-1">
                <LocationFilter />
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
          </Tabs>
        </div>

        {/* Footer com botões */}
        <div className="border-t border-gray-100 pt-4 pb-2">
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
