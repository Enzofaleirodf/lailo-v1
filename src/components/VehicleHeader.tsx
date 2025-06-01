
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
    ? "font-bold text-gray-900 text-xl leading-tight font-urbanist" 
    : "font-bold text-gray-900 text-xl md:text-lg leading-tight truncate font-urbanist";

  return (
    <div className="flex flex-col gap-1">
      <div className="flex items-start justify-between">
        <h3 className={titleClass}>
          {name}
        </h3>
      </div>

      {/* Enhanced vehicle details with micro-typography */}
      <div className="flex items-center gap-2 overflow-hidden font-urbanist" style={{ marginTop: '2px' }}>
        <span className="font-medium text-gray-600 text-sm whitespace-nowrap">
          {color}
        </span>
        <div className="w-1 h-1 bg-gray-400 rounded-full flex-shrink-0" />
        <span className="font-medium text-gray-600 text-sm whitespace-nowrap">
          {year}
        </span>
        <div className="w-1 h-1 bg-gray-400 rounded-full flex-shrink-0" />
        
        {/* Location display - cidade e estado na mesma linha */}
        <span className="font-medium text-gray-600 text-sm truncate">
          {location}
        </span>
      </div>
    </div>
  );
};
