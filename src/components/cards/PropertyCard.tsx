
import React from 'react';
import { Heart, MapPin, Calendar, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { BaseCard } from '../base/BaseCard';
import { BaseImage } from '../base/BaseImage';
import { BaseItemHeader } from '../base/BaseItemHeader';
import { BaseItemPrice } from '../base/BaseItemPrice';
import { BaseDate } from '../base/BaseDate';
import { BaseBadges } from '../base/BaseBadges';
import { MockProperty } from '../../data/mockProperties';
import { useFavoritesStore } from '../../stores/favoritesStore';
import { cardTokens } from '../../styles/card-tokens';
import { formatCurrency } from '../../lib/utils';

interface PropertyCardProps {
  property: MockProperty;
  isMobile?: boolean;
}

export const PropertyCard = ({ property, isMobile = false }: PropertyCardProps) => {
  const { favorites, addFavorite, removeFavorite } = useFavoritesStore();
  const isFavorited = favorites.some(fav => fav.id === property.id && fav.type === 'property');

  const handleFavoriteToggle = () => {
    if (isFavorited) {
      removeFavorite(property.id, 'property');
    } else {
      addFavorite({
        id: property.id,
        type: 'property',
        title: property.title,
        image: property.image,
        price: property.initial_bid_value,
        location: `${property.city}, ${property.state}`,
        endDate: property.end_date,
        href: property.href
      });
    }
  };

  const badges = [
    { text: property.format, variant: property.format === 'Leilão' ? 'default' : 'secondary' as const },
    { text: property.property_category, variant: 'outline' as const },
    { text: property.property_type, variant: 'outline' as const }
  ];

  if (property.origin?.length > 0) {
    badges.push({ text: property.origin[0], variant: 'outline' as const });
  }

  const imageLayout = isMobile ? 'vertical' : 'horizontal';

  return (
    <BaseCard className={cardTokens.spacing.cardPadding}>
      <div className={`flex ${isMobile ? 'flex-col' : 'flex-row'} ${cardTokens.spacing.contentGap}`}>
        <BaseImage
          src={property.image}
          alt={property.title}
          layout={imageLayout}
          className={cardTokens.image[imageLayout]}
        />
        
        <div className="flex-1 flex flex-col justify-between min-w-0">
          <div>
            <BaseItemHeader
              title={property.title}
              location={`${property.property_address}, ${property.city}`}
              href={property.href}
            />
            
            <div className="flex items-center gap-1 text-xs text-gray-600 mt-1">
              <span>{property.useful_area_m2}m²</span>
              <span>•</span>
              <span>{property.city}, {property.state}</span>
            </div>

            <BaseBadges badges={badges} className="mt-2" />
          </div>

          <div className={cardTokens.spacing.priceMargin}>
            <div className="flex items-center justify-between">
              <BaseItemPrice
                currentPrice={property.initial_bid_value}
                originalPrice={property.appraised_value}
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
                  <a href={property.href} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </Button>
              </div>
            </div>

            <div className={`border-t border-gray-100 pt-2 ${cardTokens.spacing.separatorMargin.replace('my-2', '')}`}>
              <BaseDate endDate={property.end_date} />
            </div>
          </div>
        </div>
      </div>
    </BaseCard>
  );
};
