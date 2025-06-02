
import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Heart } from "lucide-react";
import { VehicleCard } from "../components/VehicleCard";
import { LayoutToggle } from "../components/LayoutToggle";
import { Button } from "@/components/ui/button";
import { SessionNavBar } from "../components/SessionNavBar";
import { useFavoritesStore } from "../stores/favoritesStore";

const FavoritosVeiculos = () => {
  const [isVertical, setIsVertical] = useState(false);
  const { getFavoritesByType } = useFavoritesStore();
  const favoriteVehicles = getFavoritesByType('vehicle');

  // Mock data para demonstração
  const mockVehicles = [
    {
      name: "Volkswagen T-Cross Favorito",
      color: "Preto",
      year: "2025",
      location: "Brasília - DF",
      price: "R$ 78.000",
      discount: "50% OFF",
      badges: ["Extrajudicial", "2ª Praça"],
      date: "15/05 às 10:00",
      image: "/lovable-uploads/c1eac822-7357-49b8-a4ce-a14e374e1167.png",
      showNewBadge: true
    }
  ];

  return (
    <div className="flex h-screen w-screen flex-row">
      <SessionNavBar />
      <main className="flex h-screen grow flex-col overflow-auto ml-12">
        <div className="bg-white px-3 py-3">
          <div className="w-full">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <Button variant="outline" size="sm" asChild>
                  <Link to="/buscador/veiculos">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Voltar
                  </Link>
                </Button>
                <div className="flex items-center gap-2">
                  <Heart className="w-6 h-6 text-red-500" />
                  <h1 className="text-2xl font-bold text-gray-900">Veículos Favoritos</h1>
                </div>
              </div>
            </div>

            {mockVehicles.length > 0 ? (
              <>
                <LayoutToggle isVertical={isVertical} onToggle={setIsVertical} />
                
                <div className={`${isVertical ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3' : 'space-y-3'}`}>
                  {mockVehicles.map((vehicle, index) => (
                    <VehicleCard key={index} vehicle={vehicle} isVertical={isVertical} />
                  ))}
                </div>
              </>
            ) : (
              <div className="text-center py-12">
                <Heart className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">Nenhum veículo favoritado</h3>
                <p className="text-gray-500 mb-4">Comece a favoritar veículos para vê-los aqui.</p>
                <Button asChild>
                  <Link to="/buscador/veiculos">Buscar Veículos</Link>
                </Button>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default FavoritosVeiculos;
