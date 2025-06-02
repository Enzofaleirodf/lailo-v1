
import { useState } from "react";
import { VehicleCard } from "../components/VehicleCard";
import { VehicleSearchHeader } from "../components/VehicleSearchHeader";
import { VehicleSearchControls } from "../components/VehicleSearchControls";
import { VehicleSearchResults } from "../components/VehicleSearchResults";
import { BottomNavigation } from "../components/BottomNavigation";
import { LoadingSpinner } from "../components/ui/LoadingSpinner";

const BuscadorVeiculos = () => {
  const [isVertical, setIsVertical] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const vehicles = [
    {
      id: "vehicle-1",
      brand: "Toyota",
      model: "Corolla XEi",
      year: 2020,
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
      year: 2019,
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
      year: 2021,
      price: "R$ 78.000",
      discount: "12% OFF",
      badges: ["SUV", "Flex"],
      date: "20/05 às 16:15",
      image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=400&h=300&fit=crop&auto=format",
      showNewBadge: true
    }
  ];

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
          isVertical={isVertical}
          onToggleLayout={setIsVertical}
          resultsCount={vehicles.length}
        />
        
        <VehicleSearchResults 
          vehicles={vehicles}
          isVertical={isVertical}
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
