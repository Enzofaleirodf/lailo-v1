
import React from "react";
import { SearchItem, ItemType } from "../../types/search";
import { cardTokens } from "../../styles/card-tokens";

interface BaseItemHeaderProps {
  item: SearchItem;
  itemType: ItemType;
  isVertical?: boolean;
}

const getItemTitle = (item: SearchItem, itemType: ItemType): string => {
  if (itemType === 'vehicle') {
    return (item as any).name;
  } else {
    return (item as any).type;
  }
};

const getItemSubtitle = (item: SearchItem, itemType: ItemType): string => {
  if (itemType === 'vehicle') {
    const vehicle = item as any;
    return `${vehicle.color} • ${vehicle.year} • ${vehicle.location}`;
  } else {
    const property = item as any;
    return `${property.area} • ${property.location}`;
  }
};

export const BaseItemHeader = ({ item, itemType, isVertical = false }: BaseItemHeaderProps) => {
  const title = getItemTitle(item, itemType);
  const subtitle = getItemSubtitle(item, itemType);

  return (
    <div className="w-full min-w-0">
      {/* Layout Vertical */}
      {isVertical && (
        <div>
          <h3 className={`${cardTokens.text.title} text-gray-900 leading-tight truncate`}>
            {title}
          </h3>
          
          <p className={`${cardTokens.text.subtitle} text-gray-600 leading-tight truncate mt-1`}>
            {subtitle}
          </p>
        </div>
      )}

      {/* Layout Horizontal */}
      {!isVertical && (
        <div className="flex flex-col gap-1">
          <h3 className={`${cardTokens.text.title} text-gray-900 leading-tight`}>
            {title}
          </h3>
          
          <p className={`${cardTokens.text.subtitle} text-gray-600 leading-tight truncate`}>
            {subtitle}
          </p>
        </div>
      )}
    </div>
  );
};
