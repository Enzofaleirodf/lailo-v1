
import { useState } from "react";
import { PropertyCard } from "../components/PropertyCard";
import { LayoutToggle } from "../components/LayoutToggle";

const BuscadorImoveis = () => {
  const [isVertical, setIsVertical] = useState(false);

  const properties = [
    {
      id: "property-1",
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
      id: "property-2",
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
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">
          Buscar Imóveis
        </h1>

        <LayoutToggle isVertical={isVertical} onToggle={setIsVertical} />
        
        <div className={`${isVertical ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6' : 'space-y-4'}`}>
          {properties.map((property) => (
            <PropertyCard key={property.id} property={property} isVertical={isVertical} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BuscadorImoveis;
