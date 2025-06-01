
import React, { useState } from "react";
import { Card, CardContent } from "./ui/card";
import { VehicleImage } from "./VehicleImage";
import { VehicleHeader } from "./VehicleHeader";
import { VehiclePrice } from "./VehiclePrice";
import { VehicleBadges } from "./VehicleBadges";
import { VehicleDate } from "./VehicleDate";

interface VehicleData {
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
  const [isFavorited, setIsFavorited] = useState(false);

  const defaultVehicle: VehicleData = {
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
  
  const statusTheme = {
    borderColor: "border-blue-500",
    accentColor: "from-blue-50 to-blue-100",
    badgeColor: "bg-blue-100 text-blue-800",
    priceGradient: "from-blue-600 to-blue-800"
  };

  if (isVertical) {
    return (
      <Card 
        className={`
          group relative w-full max-w-none p-4 
          bg-gradient-to-br from-white via-gray-50 to-gray-100
          rounded-2xl border-0
          shadow-lg backdrop-blur-sm
          focus-within:ring-4 focus-within:ring-blue-200 focus-within:ring-opacity-50
        `}
        role="article"
        aria-label={`Veículo ${vehicleData.name}`}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-2xl pointer-events-none" />
        
        <CardContent className="relative p-0 space-y-4">
          <VehicleImage
            image={vehicleData.image}
            isFavorited={isFavorited}
            onToggleFavorite={() => setIsFavorited(!isFavorited)}
            vehicleName={vehicleData.name}
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

            <div className={`h-px w-full bg-gradient-to-r ${statusTheme.accentColor}`} />

            <div className="flex items-center justify-between">
              <VehicleBadges 
                badges={vehicleData.badges}
                badgeColor={statusTheme.badgeColor}
              />
              <VehicleDate date={vehicleData.date} isVertical={true} />
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card 
      className={`
        group relative w-full max-w-none p-4 
        bg-gradient-to-br from-white via-gray-50 to-gray-100
        rounded-2xl border-0
        shadow-lg backdrop-blur-sm
        focus-within:ring-4 focus-within:ring-blue-200 focus-within:ring-opacity-50
      `}
      role="article"
      aria-label={`Veículo ${vehicleData.name}`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-2xl pointer-events-none" />
      
      <CardContent className="relative p-0 space-y-4">
        <div className="flex gap-4 items-stretch">
          <VehicleImage
            image={vehicleData.image}
            isFavorited={isFavorited}
            onToggleFavorite={() => setIsFavorited(!isFavorited)}
            vehicleName={vehicleData.name}
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

        <div className={`h-px w-full bg-gradient-to-r ${statusTheme.accentColor}`} />

        <div className="flex items-center justify-between">
          <VehicleBadges 
            badges={vehicleData.badges}
            badgeColor={statusTheme.badgeColor}
          />
          <VehicleDate date={vehicleData.date} isVertical={false} />
        </div>
      </CardContent>
    </Card>
  );
};
