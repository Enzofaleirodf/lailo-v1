
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
      <span className={`${cardTokens.text.price} text-gray-900 font-urbanist`}>
        {price}
      </span>
      <Badge className="bg-green-100 text-green-700 font-medium text-[11px] px-2 py-0.5 rounded-md font-urbanist">
        {discount}
      </Badge>
    </div>
  );
};
