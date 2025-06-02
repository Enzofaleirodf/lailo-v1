
import React from "react";

interface VehicleHeaderProps {
  name: string;
  color: string;
  year: string;
  location: string;
  isVertical?: boolean;
}

export const VehicleHeader = ({
  name,
  color,
  year,
  location,
  isVertical = false
}: VehicleHeaderProps) => {
  const titleClass = isVertical 
    ? "font-bold text-gray-900 text-2xl leading-tight font-urbanist" 
    : "font-bold text-gray-900 text-xl md:text-lg leading-tight truncate font-urbanist";

  const detailsTextClass = isVertical 
    ? "font-medium text-gray-600 text-base whitespace-nowrap"
    : "font-medium text-gray-600 text-sm whitespace-nowrap";

  const locationTextClass = isVertical 
    ? "font-medium text-gray-600 text-base truncate"
    : "font-medium text-gray-600 text-sm truncate";

  return (
    <div className="flex flex-col">
      <div className="flex items-start justify-between">
        <h3 className={titleClass}>
          {name}
        </h3>
      </div>

      {/* Enhanced vehicle details with micro-typography */}
      <div className="flex items-center gap-2 overflow-hidden font-urbanist mt-1">
        <span className={detailsTextClass}>
          {color}
        </span>
        <div className="w-1 h-1 bg-gray-400 rounded-full flex-shrink-0" />
        <span className={detailsTextClass}>
          {year}
        </span>
        <div className="w-1 h-1 bg-gray-400 rounded-full flex-shrink-0" />
        
        {/* Location display - cidade e estado na mesma linha */}
        <span className={locationTextClass}>
          {location}
        </span>
      </div>
    </div>
  );
};
