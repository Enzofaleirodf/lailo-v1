
import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { LayoutToggle } from "../components/LayoutToggle";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Imoveis = () => {
  const [isVertical, setIsVertical] = useState(false);

  const properties = [
    {
      title: "Casa Térrea",
      location: "Brasília - DF",
      area: "250m²",
      bedrooms: 3,
      bathrooms: 2,
      price: "R$ 450.000",
      discount: "30% OFF",
      image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400&h=300&fit=crop&auto=format"
    },
    {
      title: "Apartamento Moderno",
      location: "São Paulo - SP",
      area: "80m²",
      bedrooms: 2,
      bathrooms: 1,
      price: "R$ 320.000",
      discount: "25% OFF",
      image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=400&h=300&fit=crop&auto=format"
    },
    {
      title: "Sobrado Duplex",
      location: "Belo Horizonte - MG",
      area: "180m²",
      bedrooms: 4,
      bathrooms: 3,
      price: "R$ 520.000",
      discount: "35% OFF",
      image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=400&h=300&fit=crop&auto=format"
    }
  ];

  return (
    <div className="min-h-screen bg-white px-3 py-3">
      <div className="w-full">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <Button variant="outline" size="sm" asChild>
              <Link to="/buscador">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Voltar
              </Link>
            </Button>
            <h1 className="text-2xl font-bold text-gray-900">Imóveis</h1>
          </div>
        </div>

        <LayoutToggle isVertical={isVertical} onToggle={setIsVertical} />
        
        <div className={`${isVertical ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3' : 'space-y-3'}`}>
          {properties.map((property, index) => (
            <Card 
              key={index}
              className="group relative w-full max-w-none p-3 bg-gradient-to-br from-white via-gray-50 to-gray-100 rounded-2xl border-0 shadow-lg backdrop-blur-sm"
            >
              <CardContent className="relative p-0 space-y-3">
                <div className={isVertical ? "space-y-3" : "flex gap-3 items-stretch"}>
                  {/* Image */}
                  <div className={isVertical ? "relative w-full aspect-[5/4] overflow-hidden rounded-xl" : "relative w-[120px] flex-shrink-0 overflow-hidden rounded-xl"}>
                    <div 
                      style={{ backgroundImage: `url(${property.image})` }} 
                      className="w-full h-full bg-cover bg-center rounded"
                    />
                  </div>

                  {/* Content */}
                  <div className={isVertical ? "space-y-3" : "flex flex-col gap-3 flex-1 min-w-0"}>
                    {/* Title and Details */}
                    <div>
                      <h3 className="font-bold text-gray-900 text-lg leading-tight">{property.title}</h3>
                      <p className="text-sm text-gray-600">{property.location}</p>
                      <p className="text-sm text-gray-600">{property.area} • {property.bedrooms} quartos • {property.bathrooms} banheiros</p>
                    </div>

                    {/* Price */}
                    <div className="flex items-center gap-2">
                      <span className="text-xl font-bold bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent">
                        {property.price}
                      </span>
                      <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full font-medium">
                        {property.discount}
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Imoveis;
