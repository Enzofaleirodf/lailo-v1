
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
    ? "font-semibold text-gray-900 text-base sm:text-base leading-tight font-urbanist mb-1" 
    : "font-semibold text-gray-900 text-sm sm:text-base leading-tight font-urbanist mb-1";

  const detailsClass = isVertical 
    ? "text-xs font-medium"
    : "text-xs sm:text-sm font-medium";

  if (itemType === 'vehicle') {
    const vehicle = item as any;
    return (
      <div className="space-y-1">
        <h3 className={`${titleClass} truncate`}>
          {vehicle.name}
        </h3>
        <div className="flex items-center gap-2 text-gray-500">
          <span className={detailsClass}>{vehicle.color}</span>
          <span className="w-1 h-1 bg-gray-300 rounded-full" />
          <span className={detailsClass}>{vehicle.year}</span>
          <span className="w-1 h-1 bg-gray-300 rounded-full" />
          <span className={detailsClass}>{vehicle.location}</span>
        </div>
      </div>
    );
  }

  const property = item as any;
  
  // Separar endereço de cidade/estado
  const locationParts = property.location.split(' - ');
  const address = locationParts[0] || '';
  const cityState = locationParts.slice(1).join(' - ') || '';

  return (
    <div className="space-y-1">
      <div className="flex items-center gap-2">
        <h3 className={`${titleClass} truncate flex-1 min-w-0`}>
          {property.type}
        </h3>
        <span className={`${detailsClass} text-gray-500 flex-shrink-0`}>
          {property.area}
        </span>
      </div>
      <div className="flex items-center gap-2 text-gray-500">
        <span className={`${detailsClass} truncate flex-1 min-w-0`}>{address}</span>
        {cityState && (
          <>
            <span className="w-1 h-1 bg-gray-300 rounded-full flex-shrink-0" />
            <span className={`${detailsClass} flex-shrink-0`}>{cityState}</span>
          </>
        )}
      </div>
    </div>
  );
};
