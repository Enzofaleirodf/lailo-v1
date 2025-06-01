
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
    ? "font-black text-transparent bg-clip-text bg-gradient-to-r text-2xl leading-none" 
    : "font-black text-transparent bg-clip-text bg-gradient-to-r text-2xl md:text-xl leading-none";

  return (
    <div className="flex items-center justify-between">
      <span className={`${priceClass} ${priceGradient}`}>
        {price}
      </span>
      
      <Badge className="bg-gradient-to-r from-teal-500 to-teal-600 text-white font-bold text-xs px-2 py-0.5 rounded-full shadow-lg">
        {discount}
      </Badge>
    </div>
  );
};
