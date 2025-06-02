
import React from "react";
import { Filter, RotateCcw } from "lucide-react";
import { Sidebar, SidebarContent, SidebarHeader, SidebarTrigger } from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { useFiltersStore } from "../stores/filtersStore";
import { showInfo } from "./ui/NotificationToast";

export const VehicleSidebar = () => {
  const { vehicleFilters, setVehicleFilters, resetVehicleFilters } = useFiltersStore();

  const handleCityChange = (city: string) => {
    setVehicleFilters({ city });
  };

  const handleBrandToggle = (brand: string, checked: boolean) => {
    const currentBrands = vehicleFilters.brand;
    if (checked) {
      setVehicleFilters({ brand: [...currentBrands, brand] });
    } else {
      setVehicleFilters({ brand: currentBrands.filter(b => b !== brand) });
    }
  };

  const handlePriceRangeChange = (range: [number, number]) => {
    setVehicleFilters({ priceRange: range });
  };

  const handleYearRangeChange = (range: [number, number]) => {
    setVehicleFilters({ yearRange: range });
  };

  const handleFuelTypeToggle = (fuelType: string, checked: boolean) => {
    const currentTypes = vehicleFilters.fuelType;
    if (checked) {
      setVehicleFilters({ fuelType: [...currentTypes, fuelType] });
    } else {
      setVehicleFilters({ fuelType: currentTypes.filter(t => t !== fuelType) });
    }
  };

  const handleTransmissionToggle = (transmission: string, checked: boolean) => {
    const currentTypes = vehicleFilters.transmission;
    if (checked) {
      setVehicleFilters({ transmission: [...currentTypes, transmission] });
    } else {
      setVehicleFilters({ transmission: currentTypes.filter(t => t !== transmission) });
    }
  };

  const handleReset = () => {
    resetVehicleFilters();
    showInfo("Filtros limpos", "Todos os filtros foram removidos");
  };

  const brands = ["Volkswagen", "Honda", "Toyota", "Hyundai", "Chevrolet", "Nissan", "Renault", "Ford", "Fiat", "Peugeot"];
  const fuelTypes = ["Flex", "Gasolina", "Álcool", "Diesel", "Elétrico", "Híbrido"];
  const transmissions = ["Manual", "Automático", "CVT"];

  return (
    <Sidebar className="w-80 border-r">
      <SidebarHeader className="flex flex-row items-center justify-between p-4 border-b">
        <div className="flex items-center gap-2">
          <Filter className="w-5 h-5 text-blue-600" />
          <h2 className="font-semibold">Filtros</h2>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" onClick={handleReset}>
            <RotateCcw className="w-4 h-4 mr-1" />
            Limpar
          </Button>
          <SidebarTrigger />
        </div>
      </SidebarHeader>
      
      <SidebarContent className="p-4 space-y-6">
        {/* Cidade */}
        <div className="space-y-2">
          <Label htmlFor="city">Cidade</Label>
          <Select value={vehicleFilters.city} onValueChange={handleCityChange}>
            <SelectTrigger>
              <SelectValue placeholder="Selecione uma cidade" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="">Todas as cidades</SelectItem>
              <SelectItem value="brasilia">Brasília - DF</SelectItem>
              <SelectItem value="sao-paulo">São Paulo - SP</SelectItem>
              <SelectItem value="belo-horizonte">Belo Horizonte - MG</SelectItem>
              <SelectItem value="fortaleza">Fortaleza - CE</SelectItem>
              <SelectItem value="salvador">Salvador - BA</SelectItem>
              <SelectItem value="recife">Recife - PE</SelectItem>
              <SelectItem value="curitiba">Curitiba - PR</SelectItem>
              <SelectItem value="porto-alegre">Porto Alegre - RS</SelectItem>
              <SelectItem value="goiania">Goiânia - GO</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Marca */}
        <div className="space-y-3">
          <Label>Marca</Label>
          <div className="space-y-2 max-h-48 overflow-y-auto">
            {brands.map((brand) => (
              <div key={brand} className="flex items-center space-x-2">
                <Checkbox
                  id={`brand-${brand}`}
                  checked={vehicleFilters.brand.includes(brand)}
                  onCheckedChange={(checked) => handleBrandToggle(brand, checked as boolean)}
                />
                <Label htmlFor={`brand-${brand}`} className="text-sm font-normal">
                  {brand}
                </Label>
              </div>
            ))}
          </div>
        </div>

        {/* Faixa de Preço */}
        <div className="space-y-3">
          <Label>Preço: R$ {vehicleFilters.priceRange[0].toLocaleString()} - R$ {vehicleFilters.priceRange[1].toLocaleString()}</Label>
          <Slider
            value={vehicleFilters.priceRange}
            onValueChange={(value) => handlePriceRangeChange(value as [number, number])}
            min={0}
            max={500000}
            step={5000}
            className="w-full"
          />
        </div>

        {/* Faixa de Ano */}
        <div className="space-y-3">
          <Label>Ano: {vehicleFilters.yearRange[0]} - {vehicleFilters.yearRange[1]}</Label>
          <Slider
            value={vehicleFilters.yearRange}
            onValueChange={(value) => handleYearRangeChange(value as [number, number])}
            min={2000}
            max={2025}
            step={1}
            className="w-full"
          />
        </div>

        {/* Combustível */}
        <div className="space-y-3">
          <Label>Combustível</Label>
          <div className="space-y-2">
            {fuelTypes.map((fuel) => (
              <div key={fuel} className="flex items-center space-x-2">
                <Checkbox
                  id={`fuel-${fuel}`}
                  checked={vehicleFilters.fuelType.includes(fuel)}
                  onCheckedChange={(checked) => handleFuelTypeToggle(fuel, checked as boolean)}
                />
                <Label htmlFor={`fuel-${fuel}`} className="text-sm font-normal">
                  {fuel}
                </Label>
              </div>
            ))}
          </div>
        </div>

        {/* Transmissão */}
        <div className="space-y-3">
          <Label>Transmissão</Label>
          <div className="space-y-2">
            {transmissions.map((transmission) => (
              <div key={transmission} className="flex items-center space-x-2">
                <Checkbox
                  id={`transmission-${transmission}`}
                  checked={vehicleFilters.transmission.includes(transmission)}
                  onCheckedChange={(checked) => handleTransmissionToggle(transmission, checked as boolean)}
                />
                <Label htmlFor={`transmission-${transmission}`} className="text-sm font-normal">
                  {transmission}
                </Label>
              </div>
            ))}
          </div>
        </div>
      </SidebarContent>
    </Sidebar>
  );
};
