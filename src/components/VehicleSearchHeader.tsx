
import { Link } from "react-router-dom";
import { LoadingSpinner } from "@/components/ui/LoadingSpinner";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Home, Car, ChevronDown } from "lucide-react";
import { MultipleSelector } from "@/components/ui/multiple-selector";

interface VehicleSearchHeaderProps {
  isLoading: boolean;
  brandOptions?: { label: string; value: string }[];
  categoryOptions?: { label: string; value: string }[];
  selectedBrands?: string[];
  selectedCategories?: string[];
  onBrandChange?: (values: string[]) => void;
  onCategoryChange?: (values: string[]) => void;
}

export const VehicleSearchHeader = ({ 
  isLoading,
  brandOptions = [],
  categoryOptions = [],
  selectedBrands = [],
  selectedCategories = [],
  onBrandChange = () => {},
  onCategoryChange = () => {}
}: VehicleSearchHeaderProps) => {
  return (
    <div className="fixed top-0 left-0 right-0 h-16 bg-white border-b border-gray-200 z-40">
      <div className="flex items-center justify-between h-full px-6">
        <Tabs defaultValue="veiculos" className="w-auto">
          <TabsList className="grid w-full grid-cols-2 bg-transparent p-0 h-auto gap-8">
            <TabsTrigger 
              value="imoveis" 
              className="data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:text-blue-600 text-gray-600 font-medium px-4 pb-[13px] relative border-b-2 border-transparent data-[state=active]:border-blue-600 rounded-none text-lg flex items-center justify-center gap-2"
              asChild
            >
              <Link to="/buscador/imoveis">
                <Home className="w-5 h-5" />
                Imóveis
              </Link>
            </TabsTrigger>
            <TabsTrigger 
              value="veiculos" 
              className="data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:text-blue-600 text-gray-600 font-medium px-4 pb-[13px] relative border-b-2 border-transparent data-[state=active]:border-blue-600 rounded-none text-lg flex items-center justify-center gap-2"
              asChild
            >
              <Link to="/buscador/veiculos">
                <Car className="w-5 h-5" />
                Veículos
              </Link>
            </TabsTrigger>
          </TabsList>
        </Tabs>
        
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600">Marcas</span>
              <ChevronDown className="w-4 h-4 text-gray-400" />
              <MultipleSelector
                options={brandOptions}
                onValueChange={onBrandChange}
                defaultValue={selectedBrands}
                placeholder=""
                className="w-48 border-0 shadow-none"
                maxCount={2}
              />
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600">Categorias</span>
              <ChevronDown className="w-4 h-4 text-gray-400" />
              <MultipleSelector
                options={categoryOptions}
                onValueChange={onCategoryChange}
                defaultValue={selectedCategories}
                placeholder=""
                className="w-48 border-0 shadow-none"
                maxCount={2}
              />
            </div>
          </div>
          {isLoading && <LoadingSpinner />}
        </div>
      </div>
    </div>
  );
};
