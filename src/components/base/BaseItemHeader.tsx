
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
    ? "font-semibold text-gray-900 text-base sm:text-base leading-tight font-geist mb-1" 
    : "font-semibold text-gray-900 text-xs sm:text-sm leading-tight font-geist mb-1";

  const detailsClass = isVertical 
    ? "text-xs font-normal font-inter"
    : "text-[10px] sm:text-xs font-normal font-inter";

  if (itemType === 'vehicle') {
    const vehicle = item as any;
    return (
      <div className="space-y-1">
        <h3 className={`${titleClass} truncate`} style={{ fontFamily: "'Geist', system-ui, sans-serif", fontWeight: '600' }}>
          {vehicle.name}
        </h3>
        <div className="flex items-center gap-2 text-gray-500">
          <span className={`${detailsClass} truncate flex-shrink`} style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>{vehicle.color}</span>
          <span className="w-1 h-1 bg-gray-300 rounded-full flex-shrink-0" />
          <span className={`${detailsClass} flex-shrink-0`} style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>{vehicle.year}</span>
          <span className="w-1 h-1 bg-gray-300 rounded-full flex-shrink-0" />
          <span className={`${detailsClass} truncate flex-shrink min-w-0`} style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>{vehicle.location}</span>
        </div>
      </div>
    );
  }

  const property = item as any;
  return (
    <div className="space-y-1">
      <div className="flex items-center gap-2">
        <h3 className={`${titleClass} truncate flex-shrink min-w-0`} style={{ fontFamily: "'Geist', system-ui, sans-serif", fontWeight: '600' }}>
          {property.type}
        </h3>
        <span className="w-1 h-1 bg-gray-300 rounded-full flex-shrink-0" />
        <span className={`${detailsClass} text-gray-500 flex-shrink-0`} style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
          {property.area}
        </span>
      </div>
      <div className="flex items-center gap-2 text-gray-500">
        <span className={`${detailsClass} truncate`} style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>{property.location}</span>
      </div>
    </div>
  );
};
