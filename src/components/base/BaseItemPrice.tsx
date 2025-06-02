
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
  // CORES UNIFICADAS - sempre azul-roxo para todos os tipos
  const priceGradient = "from-blue-600 to-purple-600";
  
  const priceClass = isVertical 
    ? "font-black text-transparent bg-clip-text bg-gradient-to-r text-3xl leading-none font-urbanist" 
    : "font-black text-transparent bg-clip-text bg-gradient-to-r text-base md:text-lg leading-none font-urbanist";

  const badgeClass = isVertical
    ? "bg-gradient-to-r from-teal-500 to-teal-600 text-white font-bold text-sm px-2 py-0.5 rounded-full shadow-lg font-urbanist"
    : "bg-gradient-to-r from-teal-500 to-teal-600 text-white font-bold text-xs px-1 py-0.5 rounded-full shadow-lg font-urbanist";

  return (
    <div className="flex items-center gap-2">
      <span className={`${priceClass} ${priceGradient}`}>
        {price}
      </span>
      
      <Badge className={badgeClass}>
        {discount}
      </Badge>
    </div>
  );
};
