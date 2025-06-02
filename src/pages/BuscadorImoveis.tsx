
import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { PropertyCard } from "../components/PropertyCard";
import { LayoutToggle } from "../components/LayoutToggle";
import { Button } from "@/components/ui/button";
import { SessionNavBar } from "../components/SessionNavBar";
import { useFiltersStore } from "../stores/filtersStore";
import { useFavoritesStore } from "../stores/favoritesStore";

const BuscadorImoveis = () => {
  const [isVertical, setIsVertical] = useState(false);
  const { propertyFilters } = useFiltersStore();
  const { favorites } = useFavoritesStore();

  const properties = [
    {
      type: "Casa Térrea",
      area: "250m²",
      address: "Rua das Flores, 123",
      cityState: "Brasília - DF",
      price: "R$ 450.000",
      discount: "30% OFF",
      badges: ["Extrajudicial", "2ª Praça"],
      date: "15/05 às 10:00",
      image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400&h=300&fit=crop&auto=format",
      showNewBadge: true
    },
    {
      type: "Apartamento Moderno",
      area: "80m²",
      address: "Av. Paulista, 456",
      cityState: "São Paulo - SP",
      price: "R$ 320.000",
      discount: "25% OFF",
      badges: ["Judicial", "1ª Praça"],
      date: "20/05 às 14:30",
      image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=400&h=300&fit=crop&auto=format",
      showNewBadge: false
    },
    {
      type: "Sobrado Duplex",
      area: "180m²",
      address: "Rua das Acácias, 789",
      cityState: "Belo Horizonte - MG",
      price: "R$ 520.000",
      discount: "35% OFF",
      badges: ["Extrajudicial", "3ª Praça"],
      date: "22/05 às 09:15",
      image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=400&h=300&fit=crop&auto=format",
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
                  <Link to="/">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Voltar
                  </Link>
                </Button>
                <h1 className="text-2xl font-bold text-gray-900">Buscar Imóveis</h1>
              </div>
            </div>

            <LayoutToggle isVertical={isVertical} onToggle={setIsVertical} />
            
            <div className={`${isVertical ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3' : 'space-y-3'}`}>
              {properties.map((property, index) => (
                <PropertyCard key={index} property={property} isVertical={isVertical} />
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default BuscadorImoveis;
