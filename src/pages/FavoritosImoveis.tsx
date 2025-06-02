
import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Heart } from "lucide-react";
import { PropertyCard } from "../components/PropertyCard";
import { LayoutToggle } from "../components/LayoutToggle";
import { Button } from "@/components/ui/button";
import { SessionNavBar } from "../components/SessionNavBar";
import { useFavoritesStore } from "../stores/favoritesStore";

const FavoritosImoveis = () => {
  const [isVertical, setIsVertical] = useState(false);
  const { getFavoritesByType } = useFavoritesStore();
  const favoriteProperties = getFavoritesByType('property');

  // Mock data para demonstração
  const mockProperties = [
    {
      type: "Casa Térrea Favorita",
      area: "250m²",
      address: "Rua das Flores, 123",
      cityState: "Brasília - DF",
      price: "R$ 450.000",
      discount: "30% OFF",
      badges: ["Extrajudicial", "2ª Praça"],
      date: "15/05 às 10:00",
      image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400&h=300&fit=crop&auto=format",
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
                  <Link to="/buscador/imoveis">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Voltar
                  </Link>
                </Button>
                <div className="flex items-center gap-2">
                  <Heart className="w-6 h-6 text-red-500" />
                  <h1 className="text-2xl font-bold text-gray-900">Imóveis Favoritos</h1>
                </div>
              </div>
            </div>

            {mockProperties.length > 0 ? (
              <>
                <LayoutToggle isVertical={isVertical} onToggle={setIsVertical} />
                
                <div className={`${isVertical ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3' : 'space-y-3'}`}>
                  {mockProperties.map((property, index) => (
                    <PropertyCard key={index} property={property} isVertical={isVertical} />
                  ))}
                </div>
              </>
            ) : (
              <div className="text-center py-12">
                <Heart className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">Nenhum imóvel favoritado</h3>
                <p className="text-gray-500 mb-4">Comece a favoritar imóveis para vê-los aqui.</p>
                <Button asChild>
                  <Link to="/buscador/imoveis">Buscar Imóveis</Link>
                </Button>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default FavoritosImoveis;
