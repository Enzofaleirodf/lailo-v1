
import React from "react";
import { Badge } from "./ui/badge";

interface PropertyPriceProps {
  price: string;
  discount: string;
  priceGradient: string;
  isVertical?: boolean;
}

export const PropertyPrice = ({
  price,
  discount,
  priceGradient,
  isVertical = false
}: PropertyPriceProps) => {
  const priceClass = isVertical 
    ? "font-black text-3xl leading-none font-urbanist" 
    : "font-black text-2xl md:text-xl leading-none font-urbanist";

  const badgeClass = isVertical
    ? "bg-gradient-to-r from-teal-500 to-teal-600 text-white font-bold text-sm px-2 py-0.5 rounded-full shadow-lg font-urbanist"
    : "bg-gradient-to-r from-teal-500 to-teal-600 text-white font-bold text-xs px-2 py-0.5 rounded-full shadow-lg font-urbanist";

  return (
    <div className="flex items-center justify-between">
      <span className={`${priceClass} ${priceGradient}`}>
        {price}
      </span>
      
      <Badge className={badgeClass}>
        {discount}
      </Badge>
    </div>
  );
};
