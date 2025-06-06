
import React from "react";
import { SearchItem } from "../../types/search";
import { cardTokens } from "../../styles/card-tokens";

interface BaseItemHeaderProps {
  item: SearchItem;
  itemType: 'vehicle' | 'property';
  isVertical?: boolean;
}

export const BaseItemHeader = ({
  item,
  itemType,
  isVertical = false
}: BaseItemHeaderProps) => {
  if (itemType === 'vehicle') {
    const vehicle = item as any;
    return (
      <div>
        <h3 className={`${cardTokens.text.title} text-gray-900 leading-tight font-urbanist mb-1 truncate`}>
          {vehicle.name}
        </h3>
        <div className="flex items-center gap-2 text-gray-500 mt-1">
          <span className={`${cardTokens.text.body} truncate flex-shrink`}>{vehicle.color}</span>
          <span className="w-1 h-1 bg-gray-300 rounded-full flex-shrink-0" />
          <span className={`${cardTokens.text.body} flex-shrink-0`}>{vehicle.year}</span>
          <span className="w-1 h-1 bg-gray-300 rounded-full flex-shrink-0" />
          <span className={`${cardTokens.text.body} truncate flex-shrink min-w-0`}>{vehicle.location}</span>
        </div>
      </div>
    );
  }

  const property = item as any;
  return (
    <div>
      <div className="flex items-center gap-2">
        <h3 className={`${cardTokens.text.title} text-gray-900 leading-tight font-urbanist truncate flex-shrink min-w-0`}>
          {property.type}
        </h3>
        <span className="w-1 h-1 bg-gray-300 rounded-full flex-shrink-0" />
        <span className={`${cardTokens.text.body} text-gray-500 flex-shrink-0`}>
          {property.area}
        </span>
      </div>
      <div className="flex items-center gap-2 text-gray-500 mt-1">
        <span className={`${cardTokens.text.body} truncate`}>{property.location}</span>
      </div>
    </div>
  );
};
