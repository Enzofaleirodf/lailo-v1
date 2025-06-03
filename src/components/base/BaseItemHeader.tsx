
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
    ? "font-semibold text-gray-900 text-lg leading-tight font-urbanist mb-1" 
    : "font-semibold text-gray-900 text-base leading-tight truncate font-urbanist mb-1";

  const detailsClass = isVertical 
    ? "text-sm text-gray-600 font-medium"
    : "text-sm text-gray-600 font-medium";

  if (itemType === 'vehicle') {
    const vehicle = item as any;
    return (
      <div className="space-y-1">
        <h3 className={titleClass}>
          {vehicle.name}
        </h3>
        <div className="flex items-center gap-2 text-gray-500">
          <span className={detailsClass}>{vehicle.color}</span>
          <span className="w-1 h-1 bg-gray-300 rounded-full" />
          <span className={detailsClass}>{vehicle.year}</span>
          <span className="w-1 h-1 bg-gray-300 rounded-full" />
          <span className={`${detailsClass} truncate`}>{vehicle.location}</span>
        </div>
      </div>
    );
  }

  const property = item as any;
  return (
    <div className="space-y-1">
      <h3 className={titleClass}>
        {property.type}
      </h3>
      <div className="flex items-center gap-2 text-gray-500">
        <span className={detailsClass}>{property.area}</span>
        <span className="w-1 h-1 bg-gray-300 rounded-full" />
        <span className={`${detailsClass} truncate`}>{property.location}</span>
      </div>
    </div>
  );
};
