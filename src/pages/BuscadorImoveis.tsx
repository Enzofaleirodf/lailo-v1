
import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ChevronDown } from "lucide-react";
import { PropertyCard } from "../components/PropertyCard";
import { LayoutToggle } from "../components/LayoutToggle";
import { Button } from "@/components/ui/button";
import { SessionNavBar } from "../components/SessionNavBar";
import { LoadingSpinner } from "../components/ui/LoadingSpinner";
import { useFiltersStore } from "../stores/filtersStore";
import { useFavoritesStore } from "../stores/favoritesStore";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const BuscadorImoveis = () => {
  const [isVertical, setIsVertical] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [sortBy, setSortBy] = useState("Mais recentes");
  const { propertyFilters } = useFiltersStore();
  const { favorites } = useFavoritesStore();

  const sortOptions = [
    "Mais recentes",
    "Menor preço", 
    "Maior preço",
    "Maior desconto",
    "Mais próximos"
  ];

  const properties = [
    {
      id: "property-1",
      type: "Casa Térrea",
      area: "250m²",
      address: "Rua das Flores, 123",
      cityState: "Brasília - DF",
      price: "R$ 450.000",
      discount: "30% OFF",
      badges: ["Extrajudicial", "2ª Praça"],
      date: "15/05 às 10:00",
      image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400&h=300&fit=crop&auto=format",
      showNewBadge: true
    },
    {
      id: "property-2",
      type: "Apartamento Moderno",
      area: "80m²",
      address: "Av. Paulista, 456",
      cityState: "São Paulo - SP",
      price: "R$ 320.000",
      discount: "25% OFF",
      badges: ["Judicial", "1ª Praça"],
      date: "20/05 às 14:30",
      image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=400&h=300&fit=crop&auto=format",
      showNewBadge: false
    },
    {
      id: "property-3",
      type: "Sobrado Duplex",
      area: "180m²",
      address: "Rua das Acácias, 789",
      cityState: "Belo Horizonte - MG",
      price: "R$ 520.000",
      discount: "35% OFF",
      badges: ["Extrajudicial", "3ª Praça"],
      date: "22/05 às 09:15",
      image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=400&h=300&fit=crop&auto=format",
      showNewBadge: true
    }
  ];

  return (
    <div className="flex h-screen w-screen flex-row">
      <SessionNavBar />
      
      {/* Desktop Top Bar */}
      <div className="hidden md:block fixed top-0 right-0 left-12 h-16 bg-white border-b border-gray-200 z-40">
        <div className="flex items-center justify-between h-full px-6">
          <div className="flex items-center gap-3">
            <Button variant="outline" size="sm" asChild>
              <Link to="/">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Voltar
              </Link>
            </Button>
            <h1 className="text-2xl font-bold text-gray-900">Buscar Imóveis</h1>
          </div>
          {isLoading && <LoadingSpinner />}
        </div>
      </div>

      {/* Left Sidebar - Desktop only */}
      <div className="hidden md:block fixed left-12 top-16 w-[448px] h-[calc(100vh-4rem)] bg-white border-r border-gray-200 z-30">
        {/* Empty sidebar content as requested */}
      </div>

      <main className="flex h-screen grow flex-col overflow-auto md:ml-12 md:mt-16 md:pl-[448px]">
        <div className="bg-white px-3 py-3">
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
                <h1 className="text-2xl font-bold text-gray-900">Buscar Imóveis</h1>
              </div>
              {isLoading && <LoadingSpinner />}
            </div>

            {/* Controls bar with sort dropdown and layout toggle */}
            <div className="flex items-center justify-end gap-3 mb-4">
              <div className="flex items-center gap-3">
                <span className="text-sm font-medium text-gray-700">Ordenar por:</span>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button 
                      variant="outline" 
                      className="justify-between min-w-[140px]"
                    >
                      <span className="text-left">{sortBy}</span>
                      <ChevronDown className="h-4 w-4 ml-2" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start" className="min-w-[140px] bg-white">
                    {sortOptions.map((option) => (
                      <DropdownMenuItem 
                        key={option}
                        onClick={() => setSortBy(option)}
                        className="cursor-pointer"
                      >
                        {option}
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
              
              <LayoutToggle isVertical={isVertical} onToggle={setIsVertical} />
            </div>
            
            <div className={`${isVertical ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3' : 'space-y-3'}`}>
              {properties.map((property) => (
                <PropertyCard key={property.id} property={property} isVertical={isVertical} />
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default BuscadorImoveis;
