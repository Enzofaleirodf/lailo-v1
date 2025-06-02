
import { Link } from "react-router-dom";
import { LoadingSpinner } from "@/components/ui/LoadingSpinner";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Home, Car } from "lucide-react";

interface VehicleSearchHeaderProps {
  isLoading: boolean;
}

export const VehicleSearchHeader = ({ isLoading }: VehicleSearchHeaderProps) => {
  return (
    <div className="hidden md:block fixed top-0 right-0 left-12 h-16 bg-white border-b border-gray-200 z-40">
      <div className="flex items-start justify-between h-full px-6 pt-3">
        <Tabs defaultValue="veiculos" className="w-auto">
          <TabsList className="grid w-full grid-cols-2 bg-transparent p-0 h-auto gap-8">
            <TabsTrigger 
              value="imoveis" 
              className="data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:text-blue-600 text-gray-600 font-medium px-0 pb-3 relative border-b-2 border-transparent data-[state=active]:border-blue-600 rounded-none text-lg flex items-center gap-2 data-[state=active]:after:content-[''] data-[state=active]:after:absolute data-[state=active]:after:bottom-[-2px] data-[state=active]:after:left-[-8px] data-[state=active]:after:right-[-8px] data-[state=active]:after:h-[2px] data-[state=active]:after:bg-blue-600"
              asChild
            >
              <Link to="/buscador/imoveis">
                <Home className="w-5 h-5" />
                Imóveis
              </Link>
            </TabsTrigger>
            <TabsTrigger 
              value="veiculos" 
              className="data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:text-blue-600 text-gray-600 font-medium px-0 pb-3 relative border-b-2 border-transparent data-[state=active]:border-blue-600 rounded-none text-lg flex items-center gap-2 data-[state=active]:after:content-[''] data-[state=active]:after:absolute data-[state=active]:after:bottom-[-2px] data-[state=active]:after:left-[-8px] data-[state=active]:after:right-[-8px] data-[state=active]:after:h-[2px] data-[state=active]:after:bg-blue-600"
              asChild
            >
              <Link to="/buscador/veiculos">
                <Car className="w-5 h-5" />
                Veículos
              </Link>
            </TabsTrigger>
          </TabsList>
        </Tabs>
        {isLoading && <LoadingSpinner />}
      </div>
    </div>
  );
};
