
import { useState } from "react";
import { Heart } from "lucide-react";
import { BaseItemCard } from "../components/base/BaseItemCard";
import { LayoutToggle } from "../components/LayoutToggle";
import { SessionNavBar } from "../components/SessionNavBar";
import { EmptyState } from "../components/ui/EmptyState";
import { LoadingSpinner } from "../components/ui/LoadingSpinner";
import { useFavoritesStore } from "../stores/favoritesStore";

const FavoritosImoveis = () => {
  const [isVertical, setIsVertical] = useState(false);
  const { getFavoritesByType, isLoading } = useFavoritesStore();
  const favoriteProperties = getFavoritesByType('property');

  // Converter favoritos para formato do BaseItemCard
  const propertyItems = favoriteProperties.map(fav => ({
    id: fav.itemId,
    type: fav.title,
    area: "N/D",
    location: "N/D",
    price: fav.price,
    discount: "",
    badges: ["Favorito"],
    date: new Date(fav.createdAt).toLocaleDateString('pt-BR'),
    image: fav.image || "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400&h=300&fit=crop&auto=format",
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
                  Imóveis Favoritos ({favoriteProperties.length})
                </h1>
              </div>
            </div>

            {propertyItems.length > 0 ? (
              <>
                <LayoutToggle isVertical={isVertical} onToggle={setIsVertical} />
                
                <div className={`${isVertical ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3' : 'space-y-3'}`}>
                  {propertyItems.map((property) => (
                    <BaseItemCard 
                      key={property.id} 
                      item={property} 
                      itemType="property"
                      isVertical={isVertical} 
                    />
                  ))}
                </div>
              </>
            ) : (
              <EmptyState
                icon={Heart}
                title="Nenhum imóvel favoritado"
                description="Comece a favoritar imóveis para vê-los aqui."
                actionLabel="Buscar Imóveis"
                onAction={() => window.location.href = '/buscador/imoveis'}
              />
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default FavoritosImoveis;
