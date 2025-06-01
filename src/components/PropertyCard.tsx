
import React, { useState } from "react";
import { Card, CardContent } from "./ui/card";
import { PropertyImage } from "./PropertyImage";
import { PropertyHeader } from "./PropertyHeader";
import { PropertyPrice } from "./PropertyPrice";
import { PropertyBadges } from "./PropertyBadges";
import { PropertyDate } from "./PropertyDate";

interface PropertyData {
  type: string;
  area: string;
  address: string;
  cityState: string;
  bedrooms: number;
  bathrooms: number;
  price: string;
  discount: string;
  badges: string[];
  date: string;
  image: string;
  showNewBadge?: boolean;
}

interface PropertyCardProps {
  property?: PropertyData;
  isVertical?: boolean;
}

export const PropertyCard = ({
  property,
  isVertical = false
}: PropertyCardProps): JSX.Element => {
  const [isFavorited, setIsFavorited] = useState(false);

  const defaultProperty: PropertyData = {
    type: "Casa Térrea",
    area: "250m²",
    address: "Rua das Flores, 123",
    cityState: "Brasília - DF",
    bedrooms: 3,
    bathrooms: 2,
    price: "R$ 450.000",
    discount: "30% OFF",
    badges: ["Extrajudicial", "2ª Praça"],
    date: "15/05 às 10:00",
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400&h=300&fit=crop&auto=format",
    showNewBadge: false
  };

  const propertyData = property || defaultProperty;
  
  const statusTheme = {
    borderColor: "border-green-500",
    accentColor: "from-green-50 to-green-100",
    badgeColor: "bg-green-100 text-green-800",
    priceGradient: "from-green-600 to-green-800"
  };

  if (isVertical) {
    return (
      <Card 
        className={`
          group relative w-full max-w-none p-3 
          bg-gradient-to-br from-white via-gray-50 to-gray-100
          rounded-2xl border-0
          shadow-lg backdrop-blur-sm
          focus-within:ring-4 focus-within:ring-green-200 focus-within:ring-opacity-50
        `}
        role="article"
        aria-label={`Imóvel ${propertyData.type}`}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-2xl pointer-events-none" />
        
        <CardContent className="relative p-0 space-y-3">
          <PropertyImage
            image={propertyData.image}
            isFavorited={isFavorited}
            onToggleFavorite={() => setIsFavorited(!isFavorited)}
            propertyType={propertyData.type}
            isVertical={true}
            showNewBadge={propertyData.showNewBadge}
          />

          <div className="flex flex-col gap-3">
            <PropertyHeader
              type={propertyData.type}
              area={propertyData.area}
              address={propertyData.address}
              cityState={propertyData.cityState}
              bedrooms={propertyData.bedrooms}
              bathrooms={propertyData.bathrooms}
              isVertical={true}
            />

            <PropertyPrice
              price={propertyData.price}
              discount={propertyData.discount}
              priceGradient={statusTheme.priceGradient}
              isVertical={true}
            />

            <div className={`h-px w-full bg-gradient-to-r ${statusTheme.accentColor}`} />

            <div className="flex items-center justify-between">
              <PropertyBadges 
                badges={propertyData.badges}
                badgeColor={statusTheme.badgeColor}
              />
              <PropertyDate date={propertyData.date} isVertical={true} />
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card 
      className={`
        group relative w-full max-w-none p-3 
        bg-gradient-to-br from-white via-gray-50 to-gray-100
        rounded-2xl border-0
        shadow-lg backdrop-blur-sm
        focus-within:ring-4 focus-within:ring-green-200 focus-within:ring-opacity-50
      `}
      role="article"
      aria-label={`Imóvel ${propertyData.type}`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-2xl pointer-events-none" />
      
      <CardContent className="relative p-0 space-y-3">
        <div className="flex gap-3 items-stretch">
          <PropertyImage
            image={propertyData.image}
            isFavorited={isFavorited}
            onToggleFavorite={() => setIsFavorited(!isFavorited)}
            propertyType={propertyData.type}
            isVertical={false}
            showNewBadge={propertyData.showNewBadge}
          />

          <div className="flex flex-col gap-3 flex-1 min-w-0">
            <PropertyHeader
              type={propertyData.type}
              area={propertyData.area}
              address={propertyData.address}
              cityState={propertyData.cityState}
              bedrooms={propertyData.bedrooms}
              bathrooms={propertyData.bathrooms}
              isVertical={false}
            />

            <PropertyPrice
              price={propertyData.price}
              discount={propertyData.discount}
              priceGradient={statusTheme.priceGradient}
              isVertical={false}
            />
          </div>
        </div>

        <div className={`h-px w-full bg-gradient-to-r ${statusTheme.accentColor}`} />

        <div className="flex items-center justify-between">
          <PropertyBadges 
            badges={propertyData.badges}
            badgeColor={statusTheme.badgeColor}
          />
          <PropertyDate date={propertyData.date} isVertical={false} />
        </div>
      </CardContent>
    </Card>
  );
};
