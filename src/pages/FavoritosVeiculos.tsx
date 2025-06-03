
import { useState } from "react";
import { Heart } from "lucide-react";
import { BaseItemCard } from "../components/base/BaseItemCard";
import { LayoutToggle } from "../components/LayoutToggle";
import { SessionNavBar } from "../components/SessionNavBar";
import { EmptyState } from "../components/ui/EmptyState";
import { LoadingSpinner } from "../components/ui/LoadingSpinner";
import { useFavoritesStore } from "../stores/favoritesStore";

const FavoritosVeiculos = () => {
  const [isVertical, setIsVertical] = useState(false);
  const { getFavoritesByType, isLoading } = useFavoritesStore();
  const favoriteVehicles = getFavoritesByType('vehicle');

  // Converter favoritos para formato do BaseItemCard
  const vehicleItems = favoriteVehicles.map(fav => ({
    id: fav.itemId,
    name: fav.title,
    color: "N/D",
    year: "N/D",
    location: "N/D",
    price: fav.price,
    discount: "",
    badges: ["Favorito"],
    date: new Date(fav.createdAt).toLocaleDateString('pt-BR'),
    image: fav.image || "/lovable-uploads/c1eac822-7357-49b8-a4ce-a14e374e1167.png",
    showNewBadge: false
  }));

  if (isLoading) {
    return (
      <div className="flex h-screen w-full flex-row max-w-[1440px] mx-auto">
        <SessionNavBar />
        <main className="flex h-screen grow flex-col overflow-auto ml-12">
          <div className="bg-white px-3 py-3 flex justify-center items-center h-full">
            <LoadingSpinner size="lg" />
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="flex h-screen w-full flex-row max-w-[1440px] mx-auto">
      <SessionNavBar />
      <main className="flex h-screen grow flex-col overflow-auto ml-12">
        <div className="bg-white px-3 py-3">
          <div className="w-full">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <Heart className="w-6 h-6 text-red-500" />
                <h1 className="text-2xl font-bold text-gray-900">
                  Veículos Favoritos ({favoriteVehicles.length})
                </h1>
              </div>
            </div>

            {vehicleItems.length > 0 ? (
              <>
                <LayoutToggle isVertical={isVertical} onToggle={setIsVertical} />
                
                <div className={`${isVertical ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3' : 'space-y-3'}`}>
                  {vehicleItems.map((vehicle) => (
                    <BaseItemCard 
                      key={vehicle.id} 
                      item={vehicle} 
                      itemType="vehicle"
                      isVertical={isVertical} 
                    />
                  ))}
                </div>
              </>
            ) : (
              <EmptyState
                icon={Heart}
                title="Nenhum veículo favoritado"
                description="Comece a favoritar veículos para vê-los aqui."
                actionLabel="Buscar Veículos"
                onAction={() => window.location.href = '/buscador/veiculos'}
              />
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default FavoritosVeiculos;
