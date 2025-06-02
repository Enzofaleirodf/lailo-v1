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
  const isVehicleFavorite = isFavorite(vehicle.id, 'vehicle');
  const handleFavoriteToggle = () => {
    if (isVehicleFavorite) {
      removeFavorite(vehicle.id, 'vehicle');
      showInfo("Removido dos favoritos", vehicle.name);
    } else {
      addFavorite({
        itemId: vehicle.id,
        itemType: 'vehicle',
        title: vehicle.name,
        price: vehicle.price,
        image: vehicle.image
      });
      showSuccess("Adicionado aos favoritos", vehicle.name);
    }
  };
  if (isVertical) {
    return <BaseCard className="overflow-hidden">
        <div className="relative">
          <BaseImage src={vehicle.image} alt={vehicle.name} isFavorited={isVehicleFavorite} onToggleFavorite={handleFavoriteToggle} isVertical={true} showNewBadge={vehicle.showNewBadge} />
        </div>
        
        <div className="p-3 space-y-2">
          <VehicleHeader name={vehicle.name} color={vehicle.color} year={vehicle.year} location={vehicle.location} isVertical={true} />
          
          <BaseBadges badges={vehicle.badges} />
          
          <VehiclePrice price={vehicle.price} discount={vehicle.discount} priceGradient="from-blue-600 to-purple-600" isVertical={true} />
          
          <BaseDate date={vehicle.date} isVertical={true} />
        </div>
      </BaseCard>;
  }
  return <BaseCard>
      <div className="flex gap-4">
        <div className="relative flex-shrink-0">
          <BaseImage src={vehicle.image} alt={vehicle.name} isFavorited={isVehicleFavorite} onToggleFavorite={handleFavoriteToggle} isVertical={false} showNewBadge={vehicle.showNewBadge} className="w-32 h-24" />
        </div>
        
        <div className="flex-1 min-w-0">
          <VehicleHeader name={vehicle.name} color={vehicle.color} year={vehicle.year} location={vehicle.location} isVertical={false} />
          
          <div className="mt-1">
            <VehiclePrice price={vehicle.price} discount={vehicle.discount} priceGradient="from-blue-600 to-purple-600" isVertical={false} />
          </div>
        </div>
      </div>
      
      <Separator className="my-2" />
      
      <div className="flex items-center justify-between">
        <BaseBadges badges={vehicle.badges} />
        <BaseDate date={vehicle.date} isVertical={false} />
      </div>
    </BaseCard>;
};
