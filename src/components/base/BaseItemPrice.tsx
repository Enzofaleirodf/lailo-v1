
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
  return (
    <div className="flex items-center gap-2">
      <span className="text-base md:text-lg font-bold tracking-tight text-gray-900 font-urbanist leading-none mt-1">
        {price}
      </span>
      <Badge className="bg-green-100 text-green-700 font-medium text-xs px-2 pt-0.5 pb-0 rounded-md font-urbanist flex items-center justify-center leading-none">
        {discount}
      </Badge>
    </div>
  );
};
