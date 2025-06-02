
import React from "react";
import { Badge } from "./ui/badge";

interface VehiclePriceProps {
  price: string;
  discount: string;
  priceGradient: string;
  isVertical?: boolean;
}

export const VehiclePrice = ({
  price,
  discount,
  priceGradient,
  isVertical = false
}: VehiclePriceProps) => {
  const priceClass = isVertical 
    ? "font-black text-transparent bg-clip-text bg-gradient-to-r text-3xl leading-none font-urbanist" 
    : "font-black text-transparent bg-clip-text bg-gradient-to-r text-lg md:text-xl leading-none font-urbanist";

  const badgeClass = isVertical
    ? "bg-gradient-to-r from-teal-500 to-teal-600 text-white font-bold text-sm px-2 py-0.5 rounded-full shadow-lg font-urbanist"
    : "bg-gradient-to-r from-teal-500 to-teal-600 text-white font-bold text-xs px-1.5 py-0.5 rounded-full shadow-lg font-urbanist";

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
