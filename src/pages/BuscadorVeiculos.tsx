
import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { VehicleCard } from "../components/VehicleCard";
import { LayoutToggle } from "../components/LayoutToggle";
import { VehicleSidebar } from "../components/VehicleSidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { SessionNavBar } from "../components/SessionNavBar";
import { LoadingSpinner } from "../components/ui/LoadingSpinner";
import { Button } from "@/components/ui/button";
import { useFiltersStore } from "../stores/filtersStore";
import { useFavoritesStore } from "../stores/favoritesStore";

const BuscadorVeiculos = () => {
  const [isVertical, setIsVertical] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { vehicleFilters } = useFiltersStore();
  const { favorites } = useFavoritesStore();

  const vehicles = [
    {
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
    },
    {
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
    },
    {
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
    }
  ];
  
  return (
    <div className="flex h-screen w-screen flex-row">
      <SessionNavBar />
      <main className="flex h-screen grow flex-col overflow-auto ml-12">
        <SidebarProvider>
          <div className="flex flex-1">
            <VehicleSidebar />
            
            <div className="flex-1 min-h-screen bg-white px-3 py-3 pt-3">
              <div className="w-full">
                <div className="flex items-center justify-between mb-6">
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

                <LayoutToggle isVertical={isVertical} onToggle={setIsVertical} />
                
                <div className={`${isVertical ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3' : 'space-y-3'}`}>
                  {vehicles.map((vehicle) => (
                    <VehicleCard key={vehicle.id} vehicle={vehicle} isVertical={isVertical} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </SidebarProvider>
      </main>
    </div>
  );
};

export default BuscadorVeiculos;
