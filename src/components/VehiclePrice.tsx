
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
      <div className="flex items-center gap-1">
        <div className="flex flex-col">
          <span className={`${priceClass} ${priceGradient}`}>
            {price}
          </span>
          <span className="text-xs text-gray-500 font-medium mt-1">
            Lance atual
          </span>
        </div>
        
        {/* Discount badge moved next to price */}
        <Badge className="bg-gradient-to-r from-teal-500 to-teal-600 text-white font-bold text-xs px-2 py-0.5 rounded-full shadow-lg ml-1">
          {discount}
        </Badge>
      </div>
    </div>
  );
};
