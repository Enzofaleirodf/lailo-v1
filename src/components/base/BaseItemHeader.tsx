
import React from "react";
import { SearchItem } from "../../types/search";

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
  const titleClass = isVertical 
    ? "font-bold text-gray-900 text-2xl leading-tight font-urbanist" 
    : "font-bold text-gray-900 text-lg md:text-xl leading-tight truncate font-urbanist";

  const detailsTextClass = isVertical 
    ? "font-medium text-gray-600 text-base whitespace-nowrap"
    : "font-medium text-gray-600 text-xs md:text-sm whitespace-nowrap";

  const locationTextClass = isVertical 
    ? "font-medium text-gray-600 text-base truncate"
    : "font-medium text-gray-600 text-xs md:text-sm truncate";

  if (itemType === 'vehicle') {
    const vehicle = item as any;
    return (
      <div className="flex flex-col">
        <div className="flex items-start justify-between">
          <h3 className={titleClass}>
            {vehicle.name}
          </h3>
        </div>

        <div className="flex items-center gap-2 overflow-hidden font-urbanist mt-1">
          <span className={detailsTextClass}>
            {vehicle.color}
          </span>
          <div className="w-1 h-1 bg-gray-400 rounded-full flex-shrink-0" />
          <span className={detailsTextClass}>
            {vehicle.year}
          </span>
          <div className="w-1 h-1 bg-gray-400 rounded-full flex-shrink-0" />
          <span className={locationTextClass}>
            {vehicle.location}
          </span>
        </div>
      </div>
    );
  }

  // Property
  const property = item as any;
  return (
    <div className="flex flex-col">
      <div className="flex items-center gap-2 overflow-hidden font-urbanist">
        <span className={titleClass}>
          {property.type}
        </span>
        <div className="w-1 h-1 bg-gray-400 rounded-full flex-shrink-0" />
        <span className={detailsTextClass}>
          {property.area}
        </span>
      </div>

      <div className="flex items-center gap-2 overflow-hidden font-urbanist mt-1">
        <span className={locationTextClass}>
          {property.address} - {property.cityState}
        </span>
      </div>
    </div>
  );
};
