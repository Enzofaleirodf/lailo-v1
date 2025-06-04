import React from "react";
import { BaseCard } from "./BaseCard";
import { BaseImage } from "./BaseImage";
import { BaseBadges } from "./BaseBadges";
import { BaseDate } from "./BaseDate";
import { BaseItemHeader } from "./BaseItemHeader";
import { BaseItemPrice } from "./BaseItemPrice";
import { Separator } from "../ui/separator";
import { useFavoritesStore } from "../../stores/favoritesStore";
import { showSuccess, showInfo } from "../ui/NotificationToast";
import { SearchItem } from "../../types/search";
import { Heart } from "lucide-react";
import { Button } from "../ui/button";

interface BaseItemCardProps {
  item: SearchItem;
  itemType: 'vehicle' | 'property';
  isVertical?: boolean;
}

export const BaseItemCard: React.FC<BaseItemCardProps> = ({
  item,
  itemType,
  isVertical = false
}) => {
  const { addFavorite, removeFavorite, isFavorite } = useFavoritesStore();
  const isItemFavorite = isFavorite(item.id, itemType);

  const handleFavoriteToggle = () => {
    const title = itemType === 'vehicle' ? (item as any).name : (item as any).type;
    
    if (isItemFavorite) {
      removeFavorite(item.id, itemType);
      showInfo("Removido dos favoritos", title);
    } else {
      addFavorite({
        itemId: item.id,
        itemType: itemType,
        title: title,
        price: item.price,
        image: item.image
      });
      showSuccess("Adicionado aos favoritos", title);
    }
  };

  if (isVertical) {
    return (
      <BaseCard className="overflow-hidden">
        <div className="relative mb-3">
          <BaseImage 
            src={item.image} 
            alt={itemType === 'vehicle' ? (item as any).name : (item as any).type}
            isFavorited={isItemFavorite}
            onToggleFavorite={handleFavoriteToggle}
            isVertical={true}
            showNewBadge={item.showNewBadge}
          />
        </div>
        
        <div className="space-y-3">
          <BaseItemHeader 
            item={item}
            itemType={itemType}
            isVertical={true}
          />
          
          <BaseItemPrice 
            price={item.price}
            discount={item.discount}
            itemType={itemType}
            isVertical={true}
          />
          
          <Separator className="!my-3" />
          
          <div className="flex items-center gap-2 min-w-0 overflow-hidden">
            <div className="flex-shrink min-w-0">
              <BaseBadges badges={item.badges} isVertical={true} />
            </div>
            <div className="flex-shrink-0 ml-auto">
              <BaseDate 
                date={item.date} 
                isVertical={true}
                href={(item as any).href || "#"}
              />
            </div>
          </div>
        </div>
      </BaseCard>
    );
  }

  return (
    <BaseCard>
      <div className="flex gap-3 items-start">
        <div className="relative flex-shrink-0 w-20 h-16 md:w-28 md:h-20">
          <BaseImage 
            src={item.image} 
            alt={itemType === 'vehicle' ? (item as any).name : (item as any).type}
            isFavorited={isItemFavorite}
            onToggleFavorite={handleFavoriteToggle}
            isVertical={false}
            showNewBadge={item.showNewBadge}
            className="w-full h-full"
            showFavoriteButton={false}
          />
        </div>
        
        <div className="flex-1 min-w-0 space-y-2">
          <div className="flex items-start justify-between">
            <div className="flex-1 min-w-0 pr-2">
              <BaseItemHeader 
                item={item}
                itemType={itemType}
                isVertical={false}
              />
            </div>
            
            <button
              className={`flex-shrink-0 p-0 m-0 w-4 h-4 transition-colors ${
                isItemFavorite ? 'text-blue-500' : 'text-gray-400'
              }`}
              onClick={(e) => {
                e.stopPropagation();
                handleFavoriteToggle();
              }}
              aria-label={isItemFavorite ? "Remover dos favoritos" : "Adicionar aos favoritos"}
            >
              <Heart className={`w-4 h-4 ${isItemFavorite ? 'fill-current' : ''}`} />
            </button>
          </div>
          
          <BaseItemPrice 
            price={item.price}
            discount={item.discount}
            itemType={itemType}
            isVertical={false}
          />
        </div>
      </div>
      
      <Separator className="!my-3" />
      
      <div className="flex items-center gap-2 min-w-0 overflow-hidden">
        <div className="flex-shrink min-w-0">
          <BaseBadges badges={item.badges} isVertical={false} />
        </div>
        <div className="flex-shrink-0 ml-auto">
          <BaseDate 
            date={item.date} 
            isVertical={false}
            href={(item as any).href || "#"}
          />
        </div>
      </div>
    </BaseCard>
  );
};
