
import { useFavoritesStore } from "@/stores/favoritesStore";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Trash2 } from "lucide-react";
import { EmptyState } from "@/components/ui/EmptyState";
import { LoadingSpinner } from "@/components/ui/LoadingSpinner";

const FavoritosVeiculos = () => {
  const { getFavoritesByType, removeFavorite, isLoading } = useFavoritesStore();
  
  const vehicleFavorites = getFavoritesByType('vehicle');

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (vehicleFavorites.length === 0) {
    return (
      <EmptyState
        icon={Heart}
        title="Nenhum veículo favoritado"
        description="Você ainda não adicionou nenhum veículo aos seus favoritos."
      />
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Veículos Favoritos</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {vehicleFavorites.map((favorite) => (
          <Card key={favorite.id} className="overflow-hidden">
            <div className="relative">
              <img 
                src={favorite.image || "https://images.unsplash.com/photo-1549924231-f129b911e442?w=400&h=300&fit=crop&auto=format"} 
                alt={favorite.title || "Veículo"} 
                className="w-full h-48 object-cover"
              />
            </div>
            <CardHeader>
              <CardTitle className="text-lg">{favorite.title || "Veículo sem título"}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between items-center">
                <span className="text-xl font-bold text-green-600">{favorite.price || "Preço não informado"}</span>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => removeFavorite(favorite.itemId)}
                  className="text-red-500 hover:text-red-700"
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
              <p className="text-sm text-gray-500 mt-2">
                Adicionado em {new Date(favorite.createdAt || favorite.addedAt).toLocaleDateString('pt-BR')}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default FavoritosVeiculos;
