
import { useState } from "react";
import { Heart } from "lucide-react";
import { BaseItemCard } from "../components/base/BaseItemCard";
import { LayoutToggle } from "../components/LayoutToggle";
import { ContentPageLayout } from "../components/layout/ContentPageLayout";
import { EmptyState } from "../components/ui/EmptyState";
import { LoadingSpinner } from "../components/ui/LoadingSpinner";
import { useFavoritesStore } from "../stores/favoritesStore";
import { useAuth } from "../hooks/useAuth";
import { formatCurrency } from "../lib/utils";

const FavoritosImoveis = () => {
  const [isVertical, setIsVertical] = useState(false);
  const { getFavoritesByType, isLoading } = useFavoritesStore();
  const { isAuthenticated } = useAuth();
  const favoriteProperties = getFavoritesByType('property');

  // Converter favoritos para formato do BaseItemCard
  const propertyItems = favoriteProperties.map(fav => ({
    id: fav.itemId,
    type: fav.title,
    area: "N/D",
    location: fav.location,
    price: formatCurrency(fav.price),
    discount: "",
    badges: ["Favorito"],
    date: new Date(fav.createdAt).toLocaleDateString('pt-BR'),
    image: fav.image || "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400&h=300&fit=crop&auto=format",
    showNewBadge: false,
    href: fav.href
  }));

  if (isLoading) {
    return (
      <ContentPageLayout
        title="Imóveis Favoritos"
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
        title="Imóveis Favoritos"
        subtitle="Seus imóveis favoritados aparecem aqui"
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
      title={`Imóveis Favoritos (${favoriteProperties.length})`}
      subtitle="Seus imóveis favoritados aparecem aqui"
      titleIcon={Heart}
      headerActions={
        propertyItems.length > 0 ? (
          <LayoutToggle isVertical={isVertical} onToggle={setIsVertical} />
        ) : null
      }
    >
      {propertyItems.length > 0 ? (
        <div className="p-6">
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
        </div>
      ) : (
        <div className="p-12">
          <EmptyState
            icon={Heart}
            title="Nenhum imóvel favoritado"
            description="Comece a favoritar imóveis para vê-los aqui."
            actionLabel="Buscar Imóveis"
            onAction={() => window.location.href = '/buscador/imoveis'}
          />
        </div>
      )}
    </ContentPageLayout>
  );
};

export default FavoritosImoveis;
