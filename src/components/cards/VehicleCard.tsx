
import React from 'react';
import { Heart, Calendar, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { BaseCard } from '../base/BaseCard';
import { BaseImage } from '../base/BaseImage';
import { BaseItemHeader } from '../base/BaseItemHeader';
import { BaseItemPrice } from '../base/BaseItemPrice';
import { BaseDate } from '../base/BaseDate';
import { BaseBadges } from '../base/BaseBadges';
import { MockVehicle } from '../../data/mockVehicles';
import { useFavoritesStore } from '../../stores/favoritesStore';
import { cardTokens } from '../../styles/card-tokens';

interface VehicleCardProps {
  vehicle: MockVehicle;
  isMobile?: boolean;
}

export const VehicleCard = ({ vehicle, isMobile = false }: VehicleCardProps) => {
  const { isFavorite, addFavorite, removeFavorite } = useFavoritesStore();
  const isFavorited = isFavorite(vehicle.id, 'vehicle');

  const handleFavoriteToggle = () => {
    if (isFavorited) {
      removeFavorite(vehicle.id, 'vehicle');
    } else {
      addFavorite({
        itemId: vehicle.id,
        itemType: 'vehicle',
        type: 'vehicle',
        title: vehicle.title,
        image: vehicle.image,
        price: vehicle.initial_bid_value,
        location: `${vehicle.city}, ${vehicle.state}`,
        endDate: vehicle.end_date,
        href: vehicle.href
      });
    }
  };

  const formatVariant = vehicle.format === 'Leilão' ? 'default' : 'secondary';
  const badges = [
    { text: vehicle.format, variant: formatVariant },
    { text: vehicle.vehicle_category, variant: 'outline' as const },
    { text: vehicle.vehicle_type, variant: 'outline' as const }
  ];

  if (vehicle.origin?.length > 0) {
    badges.push({ text: vehicle.origin[0], variant: 'outline' as const });
  }

  return (
    <BaseCard className={cardTokens.spacing.cardPadding}>
      <div className={`flex ${isMobile ? 'flex-col' : 'flex-row'} ${cardTokens.spacing.contentGap}`}>
        <BaseImage
          src={vehicle.image}
          alt={vehicle.title}
          isFavorited={isFavorited}
          onToggleFavorite={handleFavoriteToggle}
          isVertical={isMobile}
          className={isMobile ? "w-full aspect-[4/3]" : "w-24 h-full"}
        />
        
        <div className="flex-1 flex flex-col justify-between min-w-0">
          <div>
            <BaseItemHeader
              title={vehicle.title}
              location={`${vehicle.brand} ${vehicle.model} - ${vehicle.year}`}
            />
            
            <div className="flex items-center gap-1 text-xs text-gray-600 mt-1">
              <span>{vehicle.color}</span>
              <span>•</span>
              <span>{vehicle.city}, {vehicle.state}</span>
            </div>

            <BaseBadges badges={badges} className="mt-2" />
          </div>

          <div className={cardTokens.spacing.priceMargin}>
            <div className="flex items-center justify-between">
              <BaseItemPrice
                currentPrice={vehicle.initial_bid_value}
                originalPrice={vehicle.appraised_value}
              />
              
              <div className="flex items-center gap-2">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleFavoriteToggle}
                  className="p-2 h-8 w-8"
                >
                  <Heart 
                    className={`w-4 h-4 ${isFavorited ? 'fill-red-500 text-red-500' : 'text-gray-400'}`} 
                  />
                </Button>
                
                <Button 
                  variant="outline" 
                  size="sm"
                  asChild
                >
                  <a href={vehicle.href} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </Button>
              </div>
            </div>

            <div className={`border-t border-gray-100 pt-2 ${cardTokens.spacing.separatorMargin.replace('my-2', '')}`}>
              <BaseDate endDate={vehicle.end_date} />
            </div>
          </div>
        </div>
      </div>
    </BaseCard>
  );
};
