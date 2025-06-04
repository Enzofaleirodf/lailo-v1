
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
    ? "font-semibold text-gray-900 text-sm sm:text-sm leading-tight font-urbanist mb-1" 
    : "font-semibold text-gray-900 text-xs sm:text-sm leading-tight font-urbanist mb-1";

  const detailsClass = isVertical 
    ? "text-[10px] font-medium"
    : "text-[10px] sm:text-xs font-medium";

  if (itemType === 'vehicle') {
    const vehicle = item as any;
    return (
      <div className={isVertical ? "space-y-3" : "space-y-1"}>
        <h3 className={`${titleClass} truncate`}>
          {vehicle.name}
        </h3>
        <div className={`flex items-center gap-2 text-gray-500 ${isVertical ? "mt-1" : ""}`}>
          <span className={`${detailsClass} truncate flex-shrink`}>{vehicle.color}</span>
          <span className="w-1 h-1 bg-gray-300 rounded-full flex-shrink-0" />
          <span className={`${detailsClass} flex-shrink-0`}>{vehicle.year}</span>
          <span className="w-1 h-1 bg-gray-300 rounded-full flex-shrink-0" />
          <span className={`${detailsClass} truncate flex-shrink min-w-0`}>{vehicle.location}</span>
        </div>
      </div>
    );
  }

  const property = item as any;
  return (
    <div className={isVertical ? "space-y-3" : "space-y-1"}>
      <div className="flex items-center gap-2">
        <h3 className={`${titleClass} truncate flex-shrink min-w-0`}>
          {property.type}
        </h3>
        <span className="w-1 h-1 bg-gray-300 rounded-full flex-shrink-0" />
        <span className={`${detailsClass} text-gray-500 flex-shrink-0`}>
          {property.area}
        </span>
      </div>
      <div className={`flex items-center gap-2 text-gray-500 ${isVertical ? "mt-1" : ""}`}>
        <span className={`${detailsClass} truncate`}>{property.location}</span>
      </div>
    </div>
  );
};
