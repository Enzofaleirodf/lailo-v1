
import React from "react";
import { Badge } from "../ui/badge";
import { cardTokens } from "../../styles/card-tokens";

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
      <span className={`${cardTokens.text.price} text-gray-900 font-urbanist leading-none`}>
        {price}
      </span>
      <span className="bg-green-600 text-white rounded-full px-2 py-0.5 text-sm md:text-[10px] font-medium font-urbanist">
        {discount}
      </span>
    </div>
  );
};
