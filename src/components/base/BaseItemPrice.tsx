
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
  const priceClass = isVertical ? "font-bold text-gray-900 text-lg sm:text-lg font-urbanist" : "font-bold text-gray-900 text-base sm:text-lg font-urbanist";
  const badgeClass = isVertical ? "bg-green-100 text-green-700 font-medium text-xs px-2 py-1 rounded-md font-urbanist" : "bg-green-100 text-green-700 font-medium text-xs px-2 py-0 sm:py-1 rounded-md font-urbanist";
  
  return (
    <div className="flex items-center gap-2">
      <span className={priceClass}>
        {price}
      </span>
      <Badge className={badgeClass}>
        {discount}
      </Badge>
    </div>
  );
};
