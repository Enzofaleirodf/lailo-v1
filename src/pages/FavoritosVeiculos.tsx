
import { useState } from "react";
import { Heart } from "lucide-react";
import { BaseItemCard } from "../components/base/BaseItemCard";
import { LayoutToggle } from "../components/LayoutToggle";
import { ContentPageLayout } from "../components/layout/ContentPageLayout";
import { EmptyState } from "../components/ui/EmptyState";
import { LoadingSpinner } from "../components/ui/LoadingSpinner";
import { useFavoritesStore } from "../stores/favoritesStore";
import { useAuth } from "../hooks/useAuth";

const FavoritosVeiculos = () => {
  const [isVertical, setIsVertical] = useState(false);
  const { getFavoritesByType, isLoading } = useFavoritesStore();
  const { isAuthenticated } = useAuth();
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
      <ContentPageLayout
        title="Veículos Favoritos"
        titleIcon={Heart}
      >
        <div className="flex justify-center items-center h-64">
          <LoadingSpinner size="lg" />
        </div>
      </ContentPageLayout>
    );
  }

  // Conteúdo para usuários não autenticados
  if (!isAuthenticated) {
    return (
      <ContentPageLayout
        title="Veículos Favoritos"
        subtitle="Seus veículos favoritados aparecem aqui"
        titleIcon={Heart}
      >
        <div className="p-12">
          <EmptyState
            icon={Heart}
            title="Acesse seus favoritos"
            description="Faça login ou crie uma conta gratuita."
            actionLabel="Fazer Login"
            onAction={() => window.location.href = '/auth/login'}
          />
        </div>
      </ContentPageLayout>
    );
  }

  // Conteúdo para usuários autenticados
  return (
    <ContentPageLayout
      title={`Veículos Favoritos (${favoriteVehicles.length})`}
      subtitle="Seus veículos favoritados aparecem aqui"
      titleIcon={Heart}
      headerActions={
        vehicleItems.length > 0 ? (
          <LayoutToggle isVertical={isVertical} onToggle={setIsVertical} />
        ) : null
      }
    >
      {vehicleItems.length > 0 ? (
        <div className="p-6">
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
        </div>
      ) : (
        <div className="p-12">
          <EmptyState
            icon={Heart}
            title="Nenhum veículo favoritado"
            description="Comece a favoritar veículos para vê-los aqui."
            actionLabel="Buscar Veículos"
            onAction={() => window.location.href = '/buscador/veiculos'}
          />
        </div>
      )}
    </ContentPageLayout>
  );
};

export default FavoritosVeiculos;
