
import React from "react";
import { SearchItem, ItemType } from "../../types/search";
import { BaseBadges } from "./BaseBadges";
import { designTokens } from "../../styles/design-tokens";
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

export const BaseItemHeader = ({ item, itemType, isVertical = false }: BaseItemHeaderProps) => {
  const title = getItemTitle(item, itemType);

  return (
    <div className="w-full min-w-0">
      {/* Layout Vertical */}
      {isVertical && (
        <div>
          <h3 className={`${cardTokens.text.title} text-gray-900 leading-tight truncate`}>
            {title}
          </h3>
          
          <div className="mt-1">
            <BaseBadges 
              badges={item.badges} 
              isVertical={true}
            />
          </div>
        </div>
      )}

      {/* Layout Horizontal */}
      {!isVertical && (
        <div className="flex flex-col gap-1">
          <h3 className={`${cardTokens.text.title} text-gray-900 leading-tight`}>
            {title}
          </h3>
          
          <BaseBadges 
            badges={item.badges} 
            isVertical={false}
          />
        </div>
      )}
    </div>
  );
};
