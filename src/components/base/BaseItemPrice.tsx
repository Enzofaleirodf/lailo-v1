
import React from "react";
import { Badge } from "../ui/badge";

interface BaseItemPriceProps {
  price: string;
  discount: string;
  itemType: 'vehicle' | 'property';
  isVertical?: boolean;
}

export const BaseItemPrice = ({
  price,
  discount,
  itemType,
  isVertical = false
}: BaseItemPriceProps) => {
  const priceClass = isVertical 
    ? "font-bold text-gray-900 text-xl sm:text-xl font-urbanist" 
    : "font-bold text-gray-900 text-base sm:text-lg font-urbanist";

  const badgeClass = isVertical
    ? "bg-green-100 text-green-700 font-medium text-xs px-2 py-1 rounded-md font-urbanist"
    : "bg-green-100 text-green-700 font-medium text-xs px-0 sm:px-2 py-1 rounded-md font-urbanist";

  return (
    <div className="flex items-center gap-2 sm:gap-3">
      <div className="min-w-0 flex-1">
        <span className={priceClass}>
          {price}
        </span>
      </div>
      <div className="flex-shrink-0">
        <Badge className={badgeClass}>
          {discount}
        </Badge>
      </div>
    </div>
  );
};
