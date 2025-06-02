
import { Link } from "react-router-dom";
import { LoadingSpinner } from "@/components/ui/LoadingSpinner";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Home, Car, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { useId } from "react";

interface VehicleSearchHeaderProps {
  isLoading: boolean;
}

function FilterPopover({ title, options }: { title: string; options: string[] }) {
  const id = useId();
  
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" className="h-9 px-3 gap-2" aria-label={`Filtros ${title}`}>
          <span className="text-sm">{title}</span>
          <ChevronDown size={16} strokeWidth={2} aria-hidden="true" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-36 p-3">
        <div className="space-y-3">
          <div className="text-xs font-medium text-muted-foreground">{title}</div>
          <form className="space-y-3">
            {options.map((option, index) => (
              <div key={index} className="flex items-center gap-2">
                <Checkbox id={`${id}-${index}`} />
                <Label htmlFor={`${id}-${index}`} className="font-normal">
                  {option}
                </Label>
              </div>
            ))}
            <div
              role="separator"
              aria-orientation="horizontal"
              className="-mx-3 my-1 h-px bg-border"
            ></div>
            <div className="flex justify-between gap-2">
              <Button size="sm" variant="outline" className="h-7 px-2">
                Limpar
              </Button>
              <Button size="sm" className="h-7 px-2">
                Aplicar
              </Button>
            </div>
          </form>
        </div>
      </PopoverContent>
    </Popover>
  );
}

export const VehicleSearchHeader = ({ isLoading }: VehicleSearchHeaderProps) => {
  const brandOptions = ["Toyota", "Honda", "Volkswagen", "Ford", "Chevrolet"];
  const categoryOptions = ["SUV", "Sedan", "Hatchback", "Pickup", "Coupe"];

  return (
    <div className="hidden md:block fixed top-0 right-0 left-12 h-16 bg-white border-b border-gray-200 z-40">
      <div className="flex items-start justify-between h-full px-6 pt-3">
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
        
        <div className="flex items-center gap-3">
          <FilterPopover title="Marcas" options={brandOptions} />
          <FilterPopover title="Categorias" options={categoryOptions} />
          {isLoading && <LoadingSpinner />}
        </div>
      </div>
    </div>
  );
};
