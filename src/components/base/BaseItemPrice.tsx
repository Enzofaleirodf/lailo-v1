
import React from "react";

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
      <span className="text-xl md:text-lg font-bold tracking-tight text-gray-900 font-urbanist leading-none mt-1">
        {price}
      </span>
      <div className="bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-md shadow-md font-urbanist">
        {discount}
      </div>
    </div>
  );
};
