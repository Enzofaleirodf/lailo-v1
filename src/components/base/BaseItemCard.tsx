
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
        <div className="relative">
          <BaseImage 
            src={item.image} 
            alt={itemType === 'vehicle' ? (item as any).name : (item as any).type}
            isFavorited={isItemFavorite}
            onToggleFavorite={handleFavoriteToggle}
            isVertical={true}
            showNewBadge={item.showNewBadge}
          />
        </div>
        
        <div className="p-3">
          <BaseItemHeader 
            item={item}
            itemType={itemType}
            isVertical={true}
          />
          
          <div className="mt-2">
            <BaseItemPrice 
              price={item.price}
              discount={item.discount}
              itemType={itemType}
              isVertical={true}
            />
          </div>
          
          <Separator className="my-2" />
          
          <div className="flex items-center justify-between pt-2">
            <BaseBadges badges={item.badges} />
            <BaseDate date={item.date} isVertical={true} />
          </div>
        </div>
      </BaseCard>
    );
  }

  return (
    <BaseCard>
      <div className="flex gap-4 items-stretch">
        <div className="relative flex-shrink-0 w-32">
          <BaseImage 
            src={item.image} 
            alt={itemType === 'vehicle' ? (item as any).name : (item as any).type}
            isFavorited={isItemFavorite}
            onToggleFavorite={handleFavoriteToggle}
            isVertical={false}
            showNewBadge={item.showNewBadge}
            className="w-full h-full"
          />
        </div>
        
        <div className="flex-1 min-w-0">
          <BaseItemHeader 
            item={item}
            itemType={itemType}
            isVertical={false}
          />
          
          <div className="mt-2">
            <BaseItemPrice 
              price={item.price}
              discount={item.discount}
              itemType={itemType}
              isVertical={false}
            />
          </div>
        </div>
      </div>
      
      <Separator className="my-2" />
      
      <div className="flex items-center justify-between pt-2">
        <BaseBadges badges={item.badges} />
        <BaseDate date={item.date} isVertical={false} />
      </div>
    </BaseCard>
  );
};
