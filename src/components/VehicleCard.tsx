import React from "react";
import { BaseCard } from "./base/BaseCard";
import { BaseImage } from "./base/BaseImage";
import { BaseBadges } from "./base/BaseBadges";
import { BaseDate } from "./base/BaseDate";
import { VehicleHeader } from "./VehicleHeader";
import { VehiclePrice } from "./VehiclePrice";
import { Separator } from "./ui/separator";
import { useFavoritesStore } from "../stores/favoritesStore";
import { showSuccess, showInfo } from "./ui/NotificationToast";

interface VehicleCardProps {
  vehicle: {
    id: string;
    name: string;
    color: string;
    year: string;
    location: string;
    price: string;
    discount: string;
    badges: string[];
    date: string;
    image: string;
    showNewBadge: boolean;
  };
  isVertical?: boolean;
}
export const VehicleCard: React.FC<VehicleCardProps> = ({
  vehicle,
  isVertical = false
}) => {
  const {
    addFavorite,
    removeFavorite,
    isFavorite
  } = useFavoritesStore();
  const isVehicleFavorite = isFavorite(vehicle.id);
  const handleFavoriteToggle = () => {
    if (isVehicleFavorite) {
      removeFavorite(vehicle.id);
      showInfo("Removido dos favoritos", vehicle.name);
    } else {
      addFavorite(vehicle.id, 'vehicle');
      showSuccess("Adicionado aos favoritos", vehicle.name);
    }
  };
  if (isVertical) {
    return <BaseCard className="overflow-hidden">
        <div className="relative">
          <BaseImage src={vehicle.image} alt={vehicle.name} isFavorited={isVehicleFavorite} onToggleFavorite={handleFavoriteToggle} isVertical={true} showNewBadge={vehicle.showNewBadge} />
        </div>
        
        <div className="p-3">
          <VehicleHeader name={vehicle.name} color={vehicle.color} year={vehicle.year} location={vehicle.location} isVertical={true} />
          
          <div className="mt-2">
            <VehiclePrice price={vehicle.price} discount={vehicle.discount} priceGradient="from-blue-600 to-purple-600" isVertical={true} />
          </div>
          
          <Separator className="my-2" />
          
          <div className="flex items-center justify-between pt-2">
            <BaseBadges badges={vehicle.badges} />
            <BaseDate date={vehicle.date} isVertical={true} />
          </div>
        </div>
      </BaseCard>;
  }
  return <BaseCard>
      <div className="flex gap-4 items-stretch">
        <div className="relative flex-shrink-0 w-32">
          <BaseImage src={vehicle.image} alt={vehicle.name} isFavorited={isVehicleFavorite} onToggleFavorite={handleFavoriteToggle} isVertical={false} showNewBadge={vehicle.showNewBadge} className="w-full h-full" />
        </div>
        
        <div className="flex-1 min-w-0">
          <VehicleHeader name={vehicle.name} color={vehicle.color} year={vehicle.year} location={vehicle.location} isVertical={false} />
          
          <div className="mt-2">
            <VehiclePrice price={vehicle.price} discount={vehicle.discount} priceGradient="from-blue-600 to-purple-600" isVertical={false} />
          </div>
        </div>
      </div>
      
      <Separator className="my-2" />
      
      <div className="flex items-center justify-between pt-2">
        <BaseBadges badges={vehicle.badges} />
        <BaseDate date={vehicle.date} isVertical={false} />
      </div>
    </BaseCard>;
};
