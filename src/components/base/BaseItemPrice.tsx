
import React from "react";
import { Badge } from "../ui/badge";
import { cardTokens } from "../../styles/card-tokens";
import { formatCurrency } from "../../lib/utils";

interface BaseItemPriceProps {
  currentPrice: number;
  originalPrice?: number;
  className?: string;
}

export const BaseItemPrice = ({
  currentPrice,
  originalPrice,
  className = ""
}: BaseItemPriceProps) => {
  const discountPercentage = originalPrice && originalPrice > currentPrice 
    ? Math.round(((originalPrice - currentPrice) / originalPrice) * 100)
    : 0;

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <span className={`${cardTokens.text.price} text-gray-900 font-urbanist leading-none`}>
        {formatCurrency(currentPrice)}
      </span>
      {discountPercentage > 0 && (
        <Badge className="bg-green-100 text-green-700 font-medium text-[11px] px-2 pt-0.5 pb-0 rounded-md font-urbanist flex items-center justify-center leading-none">
          -{discountPercentage}%
        </Badge>
      )}
    </div>
  );
};
