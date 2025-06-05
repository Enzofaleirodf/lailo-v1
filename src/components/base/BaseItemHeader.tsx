
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

export const BaseItemHeader = ({ item, itemType, isVertical = false }: BaseItemHeaderProps) => {
  return (
    <div className="w-full min-w-0">
      {/* Layout Vertical */}
      {isVertical && (
        <div className="space-y-1">
          <h3 className={`${cardTokens.text.title} text-gray-900 leading-tight truncate`}>
            {item.name}
          </h3>
          
          <BaseBadges 
            badges={item.badges} 
            showNewBadge={item.showNewBadge}
            layout="vertical"
          />
        </div>
      )}

      {/* Layout Horizontal */}
      {!isVertical && (
        <div className="flex flex-col gap-1">
          <h3 className={`${cardTokens.text.title} text-gray-900 leading-tight`}>
            {item.name}
          </h3>
          
          <BaseBadges 
            badges={item.badges} 
            showNewBadge={item.showNewBadge}
            layout="horizontal"
          />
        </div>
      )}
    </div>
  );
};
