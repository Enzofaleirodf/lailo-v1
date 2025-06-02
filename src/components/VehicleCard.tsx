
import React, { useState } from "react";
import { BaseCard } from "./base/BaseCard";
import { BaseImage } from "./base/BaseImage";
import { BaseBadges } from "./base/BaseBadges";
import { BaseDate } from "./base/BaseDate";
import { VehicleHeader } from "./VehicleHeader";
import { VehiclePrice } from "./VehiclePrice";
import { useFavoritesStore } from "../stores/favoritesStore";

interface VehicleData {
  id?: string;
  name: string;
  color: string;
  year: string;
  location: string;
  price: string;
  discount: string;
  badges: string[];
  date: string;
  image: string;
  showNewBadge?: boolean;
}

interface VehicleCardProps {
  vehicle?: VehicleData;
  isVertical?: boolean;
}

export const VehicleCard = ({
  vehicle,
  isVertical = false
}: VehicleCardProps): JSX.Element => {
  const { addFavorite, removeFavorite, isFavorite } = useFavoritesStore();

  const defaultVehicle: VehicleData = {
    id: "default-vehicle",
    name: "Volkswagen T-Cross",
    color: "Preto",
    year: "2025",
    location: "Brasília - DF",
    price: "R$ 78.000",
    discount: "50% OFF",
    badges: ["Extrajudicial", "2ª Praça"],
    date: "15/05 às 10:00",
    image: "/lovable-uploads/9b0b7577-0ba8-4200-abdf-15cdf93a0ba4.png",
    showNewBadge: false
  };

  const vehicleData = vehicle || defaultVehicle;
  const vehicleId = vehicleData.id || `vehicle-${Date.now()}`;
  const isFavorited = isFavorite(vehicleId, 'vehicle');
  
  const statusTheme = {
    badgeColor: "bg-blue-100 text-blue-800",
    priceGradient: "from-blue-600 to-blue-800"
  };

  const handleToggleFavorite = () => {
    if (isFavorited) {
      removeFavorite(vehicleId, 'vehicle');
    } else {
      addFavorite({
        itemId: vehicleId,
        itemType: 'vehicle',
        title: vehicleData.name,
        price: vehicleData.price,
        image: vehicleData.image
      });
    }
  };

  if (isVertical) {
    return (
      <BaseCard isVertical={true}>
        <BaseImage
          image={vehicleData.image}
          alt={`Veículo ${vehicleData.name}`}
          isFavorited={isFavorited}
          onToggleFavorite={handleToggleFavorite}
          isVertical={true}
          showNewBadge={vehicleData.showNewBadge}
        />

        <div className="flex flex-col gap-3">
          <VehicleHeader
            name={vehicleData.name}
            color={vehicleData.color}
            year={vehicleData.year}
            location={vehicleData.location}
            isVertical={true}
          />

          <VehiclePrice
            price={vehicleData.price}
            discount={vehicleData.discount}
            priceGradient={statusTheme.priceGradient}
            isVertical={true}
          />

          <div className="h-px w-full bg-gradient-to-r from-blue-50 to-blue-100" />

          <div className="flex items-center justify-between">
            <BaseBadges 
              badges={vehicleData.badges}
              badgeColor={statusTheme.badgeColor}
            />
            <BaseDate date={vehicleData.date} isVertical={true} />
          </div>
        </div>
      </BaseCard>
    );
  }

  return (
    <BaseCard isVertical={false}>
      <div className="flex gap-3 items-stretch">
        <BaseImage
          image={vehicleData.image}
          alt={`Veículo ${vehicleData.name}`}
          isFavorited={isFavorited}
          onToggleFavorite={handleToggleFavorite}
          isVertical={false}
          showNewBadge={vehicleData.showNewBadge}
        />

        <div className="flex flex-col gap-3 flex-1 min-w-0">
          <VehicleHeader
            name={vehicleData.name}
            color={vehicleData.color}
            year={vehicleData.year}
            location={vehicleData.location}
            isVertical={false}
          />

          <VehiclePrice
            price={vehicleData.price}
            discount={vehicleData.discount}
            priceGradient={statusTheme.priceGradient}
            isVertical={false}
          />
        </div>
      </div>

      <div className="h-px w-full bg-gradient-to-r from-blue-50 to-blue-100" />

      <div className="flex items-center justify-between">
        <BaseBadges 
          badges={vehicleData.badges}
          badgeColor={statusTheme.badgeColor}
        />
        <BaseDate date={vehicleData.date} isVertical={false} />
      </div>
    </BaseCard>
  );
};
