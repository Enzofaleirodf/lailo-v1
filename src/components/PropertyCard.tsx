
import React from "react";
import { Heart } from "lucide-react";
import { BaseCard } from "./base/BaseCard";
import { BaseImage } from "./base/BaseImage";
import { BaseBadges } from "./base/BaseBadges";
import { BaseDate } from "./base/BaseDate";
import { PropertyHeader } from "./PropertyHeader";
import { PropertyPrice } from "./PropertyPrice";
import { useFavoritesStore } from "../stores/favoritesStore";
import { showSuccess, showInfo } from "./ui/NotificationToast";

interface PropertyCardProps {
  property: {
    id: string;
    type: string;
    area: string;
    address: string;
    cityState: string;
    price: string;
    discount: string;
    badges: string[];
    date: string;
    image: string;
    showNewBadge: boolean;
  };
  isVertical?: boolean;
}

export const PropertyCard: React.FC<PropertyCardProps> = ({ 
  property, 
  isVertical = false 
}) => {
  const { addFavorite, removeFavorite, isFavorite } = useFavoritesStore();
  const isPropertyFavorite = isFavorite(property.id, 'property');

  const handleFavoriteToggle = () => {
    if (isPropertyFavorite) {
      removeFavorite(property.id, 'property');
      showInfo("Removido dos favoritos", property.type);
    } else {
      addFavorite({
        itemId: property.id,
        itemType: 'property',
        title: property.type,
        price: property.price,
        image: property.image
      });
      showSuccess("Adicionado aos favoritos", property.type);
    }
  };

  if (isVertical) {
    return (
      <BaseCard className="overflow-hidden">
        <div className="relative">
          <BaseImage 
            src={property.image} 
            alt={property.type}
            showNewBadge={property.showNewBadge}
          />
          <button
            onClick={handleFavoriteToggle}
            className="absolute top-2 right-2 p-2 bg-white/80 rounded-full hover:bg-white transition-colors"
          >
            <Heart 
              className={`w-4 h-4 ${isPropertyFavorite ? 'fill-red-500 text-red-500' : 'text-gray-600'}`} 
            />
          </button>
        </div>
        
        <div className="p-3 space-y-2">
          <PropertyHeader 
            type={property.type}
            area={property.area}
            address={property.address}
            cityState={property.cityState}
            isVertical={true}
          />
          
          <BaseBadges badges={property.badges} />
          
          <PropertyPrice 
            price={property.price}
            discount={property.discount}
            isVertical={true}
          />
          
          <BaseDate date={property.date} isVertical={true} />
        </div>
      </BaseCard>
    );
  }

  return (
    <BaseCard className="flex gap-4 p-4">
      <div className="relative flex-shrink-0">
        <BaseImage 
          src={property.image} 
          alt={property.type}
          showNewBadge={property.showNewBadge}
          className="w-32 h-24"
        />
        <button
          onClick={handleFavoriteToggle}
          className="absolute top-1 right-1 p-1 bg-white/80 rounded-full hover:bg-white transition-colors"
        >
          <Heart 
            className={`w-3 h-3 ${isPropertyFavorite ? 'fill-red-500 text-red-500' : 'text-gray-600'}`} 
          />
        </button>
      </div>
      
      <div className="flex-1 min-w-0 space-y-2">
        <PropertyHeader 
          type={property.type}
          area={property.area}
          address={property.address}
          cityState={property.cityState}
          isVertical={false}
        />
        
        <BaseBadges badges={property.badges} />
      </div>
      
      <div className="flex flex-col justify-between items-end">
        <PropertyPrice 
          price={property.price}
          discount={property.discount}
          isVertical={false}
        />
        
        <BaseDate date={property.date} isVertical={false} />
      </div>
    </BaseCard>
  );
};
