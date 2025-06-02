
import { useState } from "react";
import { VehicleCard } from "../components/VehicleCard";
import { VehicleSearchControls } from "../components/VehicleSearchControls";
import { VehicleSearchResults } from "../components/VehicleSearchResults";
import { BottomNavigation } from "../components/BottomNavigation";
import { LoadingSpinner } from "../components/ui/LoadingSpinner";

const BuscadorVeiculos = () => {
  const [isVertical, setIsVertical] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [sortBy, setSortBy] = useState("Mais recentes");
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 5; // Mock total pages

  const vehicles = [
    {
      id: "vehicle-1",
      brand: "Toyota",
      model: "Corolla XEi",
      name: "Toyota Corolla XEi",
      color: "Prata",
      year: "2020",
      location: "São Paulo - SP",
      price: "R$ 65.000",
      discount: "15% OFF",
      badges: ["Único dono", "Baixa KM"],
      date: "15/05 às 14:00",
      image: "https://images.unsplash.com/photo-1549824336-55a2e5f92ad3?w=400&h=300&fit=crop&auto=format",
      showNewBadge: true
    },
    {
      id: "vehicle-2", 
      brand: "Honda",
      model: "Civic Sport",
      name: "Honda Civic Sport",
      color: "Branco",
      year: "2019",
      location: "Rio de Janeiro - RJ",
      price: "R$ 72.000",
      discount: "20% OFF",
      badges: ["Turbo", "Manual"],
      date: "18/05 às 10:30",
      image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=400&h=300&fit=crop&auto=format",
      showNewBadge: false
    },
    {
      id: "vehicle-3",
      brand: "Volkswagen", 
      model: "T-Cross Sense",
      name: "Volkswagen T-Cross Sense",
      color: "Azul",
      year: "2021",
      location: "Belo Horizonte - MG",
      price: "R$ 78.000",
      discount: "12% OFF",
      badges: ["SUV", "Flex"],
      date: "20/05 às 16:15",
      image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=400&h=300&fit=crop&auto=format",
      showNewBadge: true
    }
  ];

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-900">Buscar Veículos</h1>
          {isLoading && <LoadingSpinner />}
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 bg-gray-50 p-6">
        <VehicleSearchControls 
          sortBy={sortBy}
          setSortBy={setSortBy}
          isVertical={isVertical}
          onToggleLayout={setIsVertical}
          resultsCount={vehicles.length}
        />
        
        <VehicleSearchResults 
          vehicles={vehicles}
          isVertical={isVertical}
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>

      {/* Mobile bottom navigation */}
      <div className="md:hidden">
        <BottomNavigation />
      </div>
    </div>
  );
};

export default BuscadorVeiculos;
