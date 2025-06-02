
import { useState } from "react";
import { Filter, X } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Separator } from "@/components/ui/separator";

interface VehicleFilterSidebarProps {
  selectedBrands: string[];
  selectedCategories: string[];
  onBrandChange: (brands: string[]) => void;
  onCategoryChange: (categories: string[]) => void;
}

export function VehicleFilterSidebar({
  selectedBrands,
  selectedCategories,
  onBrandChange,
  onCategoryChange,
}: VehicleFilterSidebarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [priceRange, setPriceRange] = useState([0, 200000]);

  const brands = [
    "Volkswagen",
    "Honda", 
    "Toyota",
    "Ford",
    "Chevrolet",
    "Hyundai",
    "Fiat",
    "Nissan"
  ];

  const categories = [
    "Sedan",
    "SUV", 
    "Hatch",
    "Pickup",
    "Coupe",
    "Wagon"
  ];

  const handleBrandToggle = (brand: string) => {
    const newBrands = selectedBrands.includes(brand)
      ? selectedBrands.filter(b => b !== brand)
      : [...selectedBrands, brand];
    onBrandChange(newBrands);
  };

  const handleCategoryToggle = (category: string) => {
    const newCategories = selectedCategories.includes(category)
      ? selectedCategories.filter(c => c !== category)
      : [...selectedCategories, category];
    onCategoryChange(newCategories);
  };

  const clearAllFilters = () => {
    onBrandChange([]);
    onCategoryChange([]);
    setPriceRange([0, 200000]);
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="outline" className="flex items-center gap-2">
          <Filter className="h-4 w-4" />
          Filtros
          {(selectedBrands.length > 0 || selectedCategories.length > 0) && (
            <span className="bg-blue-600 text-white text-xs rounded-full px-2 py-1">
              {selectedBrands.length + selectedCategories.length}
            </span>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-80">
        <SheetHeader>
          <div className="flex items-center justify-between">
            <SheetTitle>Filtros de Veículos</SheetTitle>
            <Button
              variant="ghost"
              size="sm"
              onClick={clearAllFilters}
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              Limpar todos
            </Button>
          </div>
          <SheetDescription>
            Refine sua busca usando os filtros abaixo
          </SheetDescription>
        </SheetHeader>

        <div className="space-y-6 mt-6">
          {/* Marcas */}
          <div>
            <Label className="text-base font-medium">Marcas</Label>
            <div className="space-y-3 mt-3">
              {brands.map((brand) => (
                <div key={brand} className="flex items-center space-x-2">
                  <Checkbox
                    id={brand}
                    checked={selectedBrands.includes(brand)}
                    onCheckedChange={() => handleBrandToggle(brand)}
                  />
                  <Label htmlFor={brand} className="text-sm font-normal">
                    {brand}
                  </Label>
                </div>
              ))}
            </div>
          </div>

          <Separator />

          {/* Categorias */}
          <div>
            <Label className="text-base font-medium">Categorias</Label>
            <div className="space-y-3 mt-3">
              {categories.map((category) => (
                <div key={category} className="flex items-center space-x-2">
                  <Checkbox
                    id={category}
                    checked={selectedCategories.includes(category)}
                    onCheckedChange={() => handleCategoryToggle(category)}
                  />
                  <Label htmlFor={category} className="text-sm font-normal">
                    {category}
                  </Label>
                </div>
              ))}
            </div>
          </div>

          <Separator />

          {/* Faixa de Preço */}
          <div>
            <Label className="text-base font-medium">Faixa de Preço</Label>
            <div className="mt-3 space-y-3">
              <Slider
                value={priceRange}
                onValueChange={setPriceRange}
                max={200000}
                min={0}
                step={5000}
                className="w-full"
              />
              <div className="flex justify-between text-sm text-muted-foreground">
                <span>R$ {priceRange[0].toLocaleString()}</span>
                <span>R$ {priceRange[1].toLocaleString()}</span>
              </div>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
