
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
          
          <div className="flex items-center justify-between">
            <BaseBadges badges={item.badges} />
            <BaseDate date={item.date} isVertical={true} />
          </div>
        </div>
      </BaseCard>
    );
  }

  return (
    <BaseCard>
      <div className="flex gap-4 items-start">
        <div className="relative flex-shrink-0 w-28 h-20">
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
            <div className="flex-1 min-w-0">
              <BaseItemHeader 
                item={item}
                itemType={itemType}
                isVertical={false}
              />
            </div>
            
            <Button
              variant="ghost"
              size="sm"
              className={`h-8 w-8 p-0 ml-3 flex-shrink-0 transition-colors ${
                isItemFavorite ? 'text-blue-500 hover:text-blue-600' : 'text-gray-400 hover:text-blue-500'
              }`}
              onClick={(e) => {
                e.stopPropagation();
                handleFavoriteToggle();
              }}
              aria-label={isItemFavorite ? "Remover dos favoritos" : "Adicionar aos favoritos"}
            >
              <Heart className={`h-4 w-4 ${isItemFavorite ? 'fill-current' : ''}`} />
            </Button>
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
      
      <div className="flex items-center justify-between">
        <BaseBadges badges={item.badges} />
        <BaseDate date={item.date} isVertical={false} />
      </div>
    </BaseCard>
  );
};
