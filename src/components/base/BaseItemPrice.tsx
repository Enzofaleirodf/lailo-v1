
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
  const priceClass = isVertical ? "font-bold text-gray-900 text-lg sm:text-lg font-geist" : "font-bold text-gray-900 text-base sm:text-lg font-geist";
  const badgeClass = isVertical ? "bg-green-100 text-green-700 font-medium text-xs px-2 py-1 rounded-md font-inter" : "bg-green-100 text-green-700 font-medium text-xs px-2 py-0 sm:py-1 rounded-md font-inter";
  return <div className="flex items-center gap-2">
      <span className={priceClass} style={{ fontFamily: "'Geist', system-ui, sans-serif", fontWeight: '700' }}>
        {price}
      </span>
      <Badge className={badgeClass} style={{ fontFamily: "'Inter', system-ui, sans-serif", fontWeight: '500' }}>
        {discount}
      </Badge>
    </div>;
};
