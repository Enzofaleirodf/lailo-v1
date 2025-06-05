
import React from "react";
import { BaseCard } from "./BaseCard";
import { BaseImage } from "./BaseImage";
import { BaseBadges } from "./BaseBadges";
import { BaseDate } from "./BaseDate";
import { BaseItemHeader } from "./BaseItemHeader";
import { BaseItemPrice } from "./BaseItemPrice";
import { Separator } from "../ui/separator";
import { useFavoritesStore } from "../../stores/favoritesStore";
import { showInfo } from "../ui/NotificationToast";
import { SearchItem } from "../../types/search";
import { Heart } from "lucide-react";
import { useFavoriteAuth } from "../../hooks/useFavoriteAuth";
import { FavoriteAuthModal } from "../auth/FavoriteAuthModal";
import { useAuth } from "../../hooks/useAuth";
import { cardTokens } from "../../styles/card-tokens";

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
  const { removeFavorite, isFavorite } = useFavoritesStore();
  const { isAuthenticated } = useAuth();
  const isItemFavorite = isFavorite(item.id, itemType);
  
  const {
    isModalOpen,
    handleFavoriteClick,
    handleLogin,
    handleSignUp,
    closeModal
  } = useFavoriteAuth();

  const handleFavoriteToggle = () => {
    const title = itemType === 'vehicle' ? (item as any).name : (item as any).type;
    
    if (isAuthenticated && isItemFavorite) {
      removeFavorite(item.id, itemType);
      showInfo("Removido dos favoritos", title);
    } else {
      handleFavoriteClick({
        itemId: item.id,
        itemType: itemType,
        title: title,
        price: item.price,
        image: item.image
      });
    }
  };

  if (isVertical) {
    return (
      <>
        <BaseCard className="overflow-hidden">
          <div className={`relative ${cardTokens.spacing.contentGap.replace('gap-', 'mb-')}`}>
            <BaseImage 
              src={item.image} 
              alt={itemType === 'vehicle' ? (item as any).name : (item as any).type}
              isFavorited={isItemFavorite}
              onToggleFavorite={handleFavoriteToggle}
              isVertical={true}
              showNewBadge={item.showNewBadge}
            />
          </div>
          
          <div className={cardTokens.spacing.sectionSpacing}>
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
            
            <Separator className={cardTokens.spacing.separatorMargin} />
            
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
        
        <FavoriteAuthModal
          isOpen={isModalOpen}
          onClose={closeModal}
          onLogin={handleLogin}
          onSignUp={handleSignUp}
        />
      </>
    );
  }

  return (
    <>
      <BaseCard>
        <div className={`flex ${cardTokens.spacing.contentGap} items-stretch h-full`}>
          <div className="relative flex-shrink-0 w-24 h-full">
            <BaseImage 
              src={item.image} 
              alt={itemType === 'vehicle' ? (item as any).name : (item as any).type}
              isFavorited={isItemFavorite}
              onToggleFavorite={handleFavoriteToggle}
              isVertical={false}
              showNewBadge={item.showNewBadge}
              showFavoriteButton={false}
              className="w-24 h-full object-cover"
            />
          </div>
          
          <div className="flex-1 min-w-0 flex flex-col justify-between h-full">
            <div className="flex items-start justify-between">
              <div className="flex-1 min-w-0">
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
            
            <div className="mt-1">
              <BaseItemPrice 
                price={item.price}
                discount={item.discount}
                itemType={itemType}
                isVertical={false}
              />
            </div>
            
            <Separator className={cardTokens.spacing.separatorMargin} />
            
            <div className="flex items-center gap-2 min-w-0 overflow-hidden mt-auto">
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
          </div>
        </div>
      </BaseCard>
      
      <FavoriteAuthModal
        isOpen={isModalOpen}
        onClose={closeModal}
        onLogin={handleLogin}
        onSignUp={handleSignUp}
      />
    </>
  );
};
