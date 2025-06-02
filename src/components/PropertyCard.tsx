
import React, { useState } from "react";
import { BaseCard } from "./base/BaseCard";
import { BaseImage } from "./base/BaseImage";
import { BaseBadges } from "./base/BaseBadges";
import { BaseDate } from "./base/BaseDate";
import { PropertyHeader } from "./PropertyHeader";
import { PropertyPrice } from "./PropertyPrice";
import { useFavoritesStore } from "../stores/favoritesStore";

interface PropertyData {
  id?: string;
  type: string;
  area: string;
  address: string;
  cityState: string;
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
  const { addFavorite, removeFavorite, isFavorite } = useFavoritesStore();

  const defaultProperty: PropertyData = {
    id: "default-property",
    type: "Casa Térrea",
    area: "250m²",
    address: "Rua das Flores, 123",
    cityState: "Brasília - DF",
    price: "R$ 450.000",
    discount: "30% OFF",
    badges: ["Extrajudicial", "2ª Praça"],
    date: "15/05 às 10:00",
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400&h=300&fit=crop&auto=format",
    showNewBadge: false
  };

  const propertyData = property || defaultProperty;
  const propertyId = propertyData.id || `property-${Date.now()}`;
  const isFavorited = isFavorite(propertyId, 'property');
  
  const statusTheme = {
    badgeColor: "bg-blue-100 text-blue-800",
    priceGradient: "text-blue-800"
  };

  const handleToggleFavorite = () => {
    if (isFavorited) {
      removeFavorite(propertyId, 'property');
    } else {
      addFavorite({
        itemId: propertyId,
        itemType: 'property',
        title: propertyData.type,
        price: propertyData.price,
        image: propertyData.image
      });
    }
  };

  if (isVertical) {
    return (
      <BaseCard isVertical={true}>
        <BaseImage
          image={propertyData.image}
          alt={`Imóvel ${propertyData.type}`}
          isFavorited={isFavorited}
          onToggleFavorite={handleToggleFavorite}
          isVertical={true}
          showNewBadge={propertyData.showNewBadge}
        />

        <div className="flex flex-col gap-3">
          <PropertyHeader
            type={propertyData.type}
            area={propertyData.area}
            address={propertyData.address}
            cityState={propertyData.cityState}
            isVertical={true}
          />

          <PropertyPrice
            price={propertyData.price}
            discount={propertyData.discount}
            priceGradient={statusTheme.priceGradient}
            isVertical={true}
          />

          <div className="h-px w-full bg-gradient-to-r from-blue-50 to-blue-100" />

          <div className="flex items-center justify-between">
            <BaseBadges 
              badges={propertyData.badges}
              badgeColor={statusTheme.badgeColor}
            />
            <BaseDate date={propertyData.date} isVertical={true} />
          </div>
        </div>
      </BaseCard>
    );
  }

  return (
    <BaseCard isVertical={false}>
      <div className="flex items-stretch" style={{ gap: '12px' }}>
        <BaseImage
          image={propertyData.image}
          alt={`Imóvel ${propertyData.type}`}
          isFavorited={isFavorited}
          onToggleFavorite={handleToggleFavorite}
          isVertical={false}
          showNewBadge={propertyData.showNewBadge}
        />

        <div className="flex flex-col gap-3 flex-1 min-w-0">
          <PropertyHeader
            type={propertyData.type}
            area={propertyData.area}
            address={propertyData.address}
            cityState={propertyData.cityState}
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

      <div className="h-px w-full bg-gradient-to-r from-blue-50 to-blue-100" />

      <div className="flex items-center justify-between">
        <BaseBadges 
          badges={propertyData.badges}
          badgeColor={statusTheme.badgeColor}
        />
        <BaseDate date={propertyData.date} isVertical={false} />
      </div>
    </BaseCard>
  );
};
