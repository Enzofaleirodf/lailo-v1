import { useState } from "react";
import { VehicleCard } from "../components/VehicleCard";
import { LayoutToggle } from "../components/LayoutToggle";
import { SessionNavBar } from "../components/SessionNavBar";
import { BottomNavigation } from "../components/BottomNavigation";
import { LoadingSpinner } from "../components/ui/LoadingSpinner";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, ChevronDown } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

const BuscadorVeiculos = () => {
  const [isVertical, setIsVertical] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [sortBy, setSortBy] = useState("Mais recentes");
  const sortOptions = ["Mais recentes", "Menor preço", "Maior preço", "Maior desconto", "Mais próximos"];
  const vehicles = [{
    id: "search-vehicle-1",
    name: "Volkswagen T-Cross",
    color: "Preto",
    year: "2025",
    location: "Brasília - DF",
    price: "R$ 78.000",
    discount: "50% OFF",
    badges: ["Extrajudicial", "2ª Praça"],
    date: "15/05 às 10:00",
    image: "/lovable-uploads/c1eac822-7357-49b8-a4ce-a14e374e1167.png",
    showNewBadge: true
  }, {
    id: "search-vehicle-2",
    name: "Honda Civic",
    color: "Prata",
    year: "2024",
    location: "São Paulo - SP",
    price: "R$ 95.000",
    discount: "30% OFF",
    badges: ["Judicial", "1ª Praça"],
    date: "20/05 às 14:30",
    image: "/lovable-uploads/33a5ac35-f888-4a6f-9cc8-dffa1f394b1e.png",
    showNewBadge: false
  }, {
    id: "search-vehicle-3",
    name: "Toyota Corolla",
    color: "Branco",
    year: "2023",
    location: "Brasília - DF",
    price: "R$ 89.000",
    discount: "25% OFF",
    badges: ["Extrajudicial", "3ª Praça"],
    date: "22/05 às 09:15",
    image: "/lovable-uploads/4ee96d84-707d-45b1-83a8-50e28cd8f583.png",
    showNewBadge: true
  }];
  return (
    <div className="flex h-screen w-screen flex-row">
      <SessionNavBar />
      
      {/* Desktop Top Bar */}
      <div className="hidden md:block fixed top-0 right-0 left-12 h-16 bg-white border-b border-gray-200 z-40">
        <div className="flex items-center justify-between h-full px-6">
          <div className="flex items-center gap-3">
          </div>
          {isLoading && <LoadingSpinner />}
        </div>
      </div>

      {/* Left Sidebar - Desktop only */}
      <div className="hidden md:block fixed left-12 top-16 w-[448px] h-[calc(100vh-4rem)] bg-white border-r border-gray-200 z-30">
        {/* Empty sidebar content as requested */}
      </div>

      <main className="flex h-screen grow flex-col overflow-auto md:ml-12 md:mt-16 md:pl-[448px]">
        <div className="min-h-screen bg-white px-6 py-6 pb-20 md:pb-6">
          <div className="w-full">
            {/* Mobile header - only show on mobile */}
            <div className="flex items-center justify-between mb-6 md:hidden">
              <div className="flex items-center gap-3">
                <Button variant="outline" size="sm" asChild>
                  <Link to="/">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Voltar
                  </Link>
                </Button>
                <h1 className="text-2xl font-bold text-gray-900">Buscar Veículos</h1>
              </div>
              {isLoading && <LoadingSpinner />}
            </div>

            {/* Controls bar with results text and controls */}
            <div className="flex items-center justify-between gap-4 mb-4">
              <div className="text-sm text-gray-600 text-left">
                Encontramos <span className="font-semibold">4.164</span> leilões em <span className="font-semibold">131</span> sites
              </div>
              
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-3">
                  <span className="text-sm font-medium text-gray-700">Ordenar por:</span>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="outline" className="justify-between min-w-[140px]">
                        <span className="text-left">{sortBy}</span>
                        <ChevronDown className="h-4 w-4 ml-2" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="start" className="min-w-[140px] bg-white">
                      {sortOptions.map(option => (
                        <DropdownMenuItem key={option} onClick={() => setSortBy(option)} className="cursor-pointer">
                          {option}
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
                
                <LayoutToggle isVertical={isVertical} onToggle={setIsVertical} />
              </div>
            </div>
            
            <div className={`${isVertical ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6' : 'space-y-4'}`}>
              {vehicles.map(vehicle => (
                <VehicleCard key={vehicle.id} vehicle={vehicle} isVertical={isVertical} />
              ))}
            </div>
          </div>
        </div>
      </main>
      <BottomNavigation />
    </div>
  );
};

export default BuscadorVeiculos;
