
import React, { useState, useEffect } from 'react';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "../ui/sheet";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { Button } from "../ui/button";
import { X, MapPin, Settings, Gavel } from "lucide-react";
import { StateSelect } from '../search/location/StateSelect';
import { CitySelect } from '../search/location/CitySelect';
import { AddressInput } from '../search/location/AddressInput';
import { CategoryTypeFilters } from './CategoryTypeFilters';
import { FormatFilter } from '../search/FormatFilter';
import { OriginFilter } from '../search/OriginFilter';
import { StageFilter } from '../search/StageFilter';
import { PriceFilter } from './PriceFilter';
import { PropertySpecificFilters } from './PropertySpecificFilters';
import { VehicleSpecificFilters } from './VehicleSpecificFilters';
import { ItemType } from '../../types/search';
import { AlertFilters } from '../../types/alert';

interface FilterModalProps {
  isOpen: boolean;
  onClose: () => void;
  itemType: ItemType;
  mode?: 'search' | 'alert';
  // Para modo search
  onApplyFilters?: () => void;
  onClearFilters?: () => void;
  // Para modo alert
  alertFilters?: AlertFilters;
  onAlertFiltersChange?: (filters: AlertFilters) => void;
}

export const FilterModal = ({
  isOpen,
  onClose,
  itemType,
  mode = 'search',
  onApplyFilters,
  onClearFilters,
  alertFilters,
  onAlertFiltersChange
}: FilterModalProps) => {
  // Estados para modo search (valores atuais do MobileFiltersModal)
  const [category, setCategory] = useState(itemType === 'property' ? 'residenciais' : 'leves');
  const [type, setType] = useState(itemType === 'property' ? 'todos' : 'carros');
  const [formatValue, setFormatValue] = useState('Leilão');
  const [areaRange, setAreaRange] = useState<[number, number]>([50, 500]);
  const [yearRange, setYearRange] = useState<[number, number]>([2010, 2025]);
  const [priceRange, setPriceRange] = useState<[number, number]>([50000, 1000000]);
  const [brand, setBrand] = useState('todas-marcas');
  const [model, setModel] = useState('todos-modelos');
  const [color, setColor] = useState('todas-cores');
  const [selectedState, setSelectedState] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [address, setAddress] = useState('');

  const isStageEnabled = formatValue === 'Leilão';

  // Sincronizar com alertFilters quando estiver no modo alert
  useEffect(() => {
    if (mode === 'alert' && alertFilters) {
      setCategory(alertFilters.propertyCategory || alertFilters.vehicleCategory || (itemType === 'property' ? 'residenciais' : 'leves'));
      setType(alertFilters.propertyType || alertFilters.vehicleType || (itemType === 'property' ? 'todos' : 'carros'));
      setSelectedState(alertFilters.state || '');
      setSelectedCity(alertFilters.city || '');
      setPriceRange(alertFilters.priceRange || [50000, 1000000]);
      
      if (itemType === 'property') {
        setAreaRange(alertFilters.areaRange || [50, 500]);
      } else {
        setBrand(alertFilters.brand || 'todas-marcas');
        setModel(alertFilters.model || 'todos-modelos');
        setColor(alertFilters.color || 'todas-cores');
        setYearRange(alertFilters.yearRange || [2010, 2025]);
      }
    }
  }, [mode, alertFilters, itemType]);

  // Aplicar estados padrão quando modal abre
  useEffect(() => {
    if (isOpen && mode === 'search') {
      const defaultCategory = itemType === 'property' ? 'residenciais' : 'leves';
      const defaultType = itemType === 'property' ? 'todos' : 'carros';
      
      setCategory(defaultCategory);
      setType(defaultType);
    }
  }, [isOpen, itemType, mode]);

  // Atualizar alertFilters quando valores mudam (apenas no modo alert)
  const updateAlertFilter = (updates: Partial<AlertFilters>) => {
    if (mode === 'alert' && onAlertFiltersChange && alertFilters) {
      onAlertFiltersChange({ ...alertFilters, ...updates });
    }
  };

  const handleCategoryChange = (newCategory: string) => {
    setCategory(newCategory);
    const defaultType = itemType === 'property' ? 'todos' : 'carros';
    setType(defaultType);
    
    if (mode === 'alert') {
      updateAlertFilter(itemType === 'property' 
        ? { propertyCategory: newCategory, propertyType: defaultType }
        : { vehicleCategory: newCategory, vehicleType: defaultType }
      );
    }
  };

  const handleTypeChange = (newType: string) => {
    setType(newType);
    if (mode === 'alert') {
      updateAlertFilter(itemType === 'property' 
        ? { propertyType: newType }
        : { vehicleType: newType }
      );
    }
  };

  const handleStateChange = (newState: string) => {
    setSelectedState(newState);
    setSelectedCity(''); // Reset city
    if (mode === 'alert') {
      updateAlertFilter({ state: newState, city: '' });
    }
  };

  const handleCityChange = (newCity: string) => {
    setSelectedCity(newCity);
    if (mode === 'alert') {
      updateAlertFilter({ city: newCity });
    }
  };

  const handlePriceRangeChange = (newRange: [number, number]) => {
    setPriceRange(newRange);
    if (mode === 'alert') {
      updateAlertFilter({ priceRange: newRange });
    }
  };

  const handleClearFilters = () => {
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
    setSelectedState('');
    setSelectedCity('');
    setAddress('');

    if (mode === 'search' && onClearFilters) {
      onClearFilters();
    } else if (mode === 'alert' && onAlertFiltersChange) {
      onAlertFiltersChange({});
    }
  };

  const handleApplyFilters = () => {
    if (mode === 'search' && onApplyFilters) {
      onApplyFilters();
    }
    onClose();
  };

  const handleClearCity = () => {
    setSelectedCity('');
    if (mode === 'alert') {
      updateAlertFilter({ city: '' });
    }
  };

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent side="bottom" className="h-[98vh] rounded-t-3xl flex flex-col">
        <SheetHeader className="flex flex-row items-center justify-between border-b border-gray-100 pb-4 flex-shrink-0 pt-6 px-0 py-0">
          <SheetTitle className="text-lg font-semibold">
            {mode === 'alert' ? 'Filtros do Alerta' : 'Filtros'}
          </SheetTitle>
          <Button variant="ghost" size="icon" onClick={onClose} className="h-8 w-8">
            <X className="h-4 w-4" />
          </Button>
        </SheetHeader>

        <div className="flex-1 overflow-hidden flex flex-col py-6 px-0">
          <Tabs defaultValue="location" className="w-full flex flex-col flex-1 overflow-hidden">
            <TabsList className="grid w-full grid-cols-3 mb-6 flex-shrink-0">
              <TabsTrigger value="location" className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
              </TabsTrigger>
              <TabsTrigger value="characteristics" className="flex items-center gap-2">
                <Settings className="h-4 w-4" />
              </TabsTrigger>
              <TabsTrigger value="conditions" className="flex items-center gap-2">
                <Gavel className="h-4 w-4" />
              </TabsTrigger>
            </TabsList>

            <div className="flex-1 overflow-hidden">
              <TabsContent value="location" className="mt-0 h-full overflow-y-auto">
                <div className="pr-4 space-y-4 pb-4" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                  <StateSelect value={selectedState} onChange={handleStateChange} onClearCity={handleClearCity} />
                  <CitySelect value={selectedCity} onChange={handleCityChange} selectedState={selectedState} />
                  {mode === 'search' && (
                    <AddressInput value={address} onChange={setAddress} />
                  )}
                </div>
              </TabsContent>

              <TabsContent value="characteristics" className="mt-0 h-full overflow-y-auto">
                <div className="pr-4 space-y-6 pb-20" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                  <CategoryTypeFilters 
                    itemType={itemType} 
                    category={category} 
                    type={type} 
                    onCategoryChange={handleCategoryChange} 
                    onTypeChange={handleTypeChange} 
                  />

                  {itemType === 'property' ? (
                    <PropertySpecificFilters 
                      areaRange={areaRange} 
                      onAreaRangeChange={(range) => {
                        setAreaRange(range);
                        if (mode === 'alert') updateAlertFilter({ areaRange: range });
                      }} 
                    />
                  ) : (
                    <VehicleSpecificFilters 
                      brand={brand} 
                      model={model} 
                      color={color} 
                      yearRange={yearRange} 
                      vehicleType={type.toLowerCase()} 
                      onBrandChange={(newBrand) => {
                        setBrand(newBrand);
                        if (mode === 'alert') updateAlertFilter({ brand: newBrand });
                      }} 
                      onModelChange={(newModel) => {
                        setModel(newModel);
                        if (mode === 'alert') updateAlertFilter({ model: newModel });
                      }} 
                      onColorChange={(newColor) => {
                        setColor(newColor);
                        if (mode === 'alert') updateAlertFilter({ color: newColor });
                      }} 
                      onYearRangeChange={(range) => {
                        setYearRange(range);
                        if (mode === 'alert') updateAlertFilter({ yearRange: range });
                      }} 
                    />
                  )}

                  <PriceFilter priceRange={priceRange} onPriceRangeChange={handlePriceRangeChange} />
                </div>
              </TabsContent>

              <TabsContent value="conditions" className="mt-0 h-full overflow-y-auto">
                <div className="pr-4 space-y-6 pb-4" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                  <div className="w-full">
                    <FormatFilter itemType={itemType} />
                  </div>
                  <div className="w-full">
                    <OriginFilter itemType={itemType} />
                  </div>
                  <div className="w-full">
                    <StageFilter 
                      itemType={itemType} 
                      isEnabled={isStageEnabled}
                    />
                  </div>
                </div>
              </TabsContent>
            </div>
          </Tabs>
        </div>

        <div className="border-t border-gray-100 pt-4 pb-6 flex-shrink-0 bg-white px-0">
          <div className="flex gap-3">
            <Button variant="outline" onClick={handleClearFilters} className="flex-1">
              Limpar filtros
            </Button>
            <Button onClick={handleApplyFilters} className="flex-1">
              {mode === 'alert' ? 'Aplicar filtros' : 'Aplicar filtros'}
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};
