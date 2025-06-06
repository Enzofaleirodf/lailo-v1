
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
  if (itemType === 'vehicle') {
    const vehicle = item as any;
    return (
      <div>
        <h3 className="text-lg md:text-base font-semibold text-gray-900 leading-tight font-urbanist mb-1 truncate">
          {vehicle.name}
        </h3>
        <div className="flex items-center gap-2 text-base md:text-sm text-muted-foreground mt-1">
          <span className="truncate flex-shrink" data-no-link="true">{vehicle.color}</span>
          <span className="w-1 h-1 bg-gray-300 rounded-full flex-shrink-0" />
          <span className="flex-shrink-0" data-no-link="true">{vehicle.year}</span>
          <span className="w-1 h-1 bg-gray-300 rounded-full flex-shrink-0" />
          <span className="truncate flex-shrink min-w-0" data-no-link="true">{vehicle.location}</span>
        </div>
      </div>
    );
  }

  const property = item as any;
  return (
    <div>
      <div className="flex items-center gap-2">
        <h3 className="text-lg md:text-base font-semibold text-gray-900 leading-tight font-urbanist truncate flex-shrink min-w-0">
          {property.type}
        </h3>
        <span className="w-1 h-1 bg-gray-300 rounded-full flex-shrink-0" />
        <span className="text-base md:text-sm text-muted-foreground flex-shrink-0" data-no-link="true">
          {property.area}
        </span>
      </div>
      <div className="flex items-center gap-2 text-base md:text-sm text-muted-foreground mt-1">
        <span className="truncate" data-no-link="true">{property.location}</span>
      </div>
    </div>
  );
};
