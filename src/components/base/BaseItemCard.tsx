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

  return (
    <BaseCard className="font-urbanist">
      <div className={`flex gap-3 items-start w-full ${isVertical ? 'flex-col' : 'flex-row'}`}>
        
        {/* Imagem */}
        <div className="relative w-full md:w-[160px] h-auto md:h-full shrink-0 overflow-hidden">
          <BaseImage 
            src={item.image} 
            alt={itemType === 'vehicle' ? (item as any).name : (item as any).type}
            isFavorited={isItemFavorite}
            onToggleFavorite={handleFavoriteToggle}
            isVertical={isVertical}
            showNewBadge={item.showNewBadge}
            className="w-full h-auto md:h-full object-cover rounded-xl"
            showFavoriteButton={!isVertical} // mostra o botão só no modo list
          />
        </div>

        {/* Conteúdo */}
        <div className="flex flex-col flex-1 min-w-0">
          <div className="flex items-start justify-between">
            <div className="flex-1 min-w-0">
              <BaseItemHeader 
                item={item}
                itemType={itemType}
                isVertical={isVertical}
              />
            </div>

            {!isVertical && (
              <Button
                variant="ghost"
                size="sm"
                className={`
                  h-6 w-6 p-0 m-0 bg-transparent hover:bg-blue-50 flex-shrink-0 ml-2
                  transition-all duration-200
                  ${isItemFavorite ? 'text-blue-600 hover:text-blue-700' : 'text-gray-400 hover:text-blue-600'}
                `}
                onClick={(e) => {
                  e.stopPropagation();
                  handleFavoriteToggle();
                }}
                aria-label={isItemFavorite ? "Remover dos favoritos" : "Adicionar aos favoritos"}
              >
                <Heart className={`h-4 w-4 ${isItemFavorite ? 'fill-current' : ''}`} />
              </Button>
            )}
          </div>

          <div className="mt-2">
            <BaseItemPrice 
              price={item.price}
              discount={item.discount}
              itemType={itemType}
              isVertical={isVertical}
            />
          </div>

          {isVertical && <Separator className="my-2" />}

          <div className="flex items-center justify-between pt-2">
            <BaseBadges badges={item.badges} />
            <BaseDate date={item.date} isVertical={isVertical} />
          </div>
        </div>
      </div>
    </BaseCard>
  );
};
