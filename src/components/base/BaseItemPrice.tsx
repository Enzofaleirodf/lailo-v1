
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
  // Padronização: tamanho único para preço independente do layout
  const priceClass = "font-bold text-gray-900 text-base font-urbanist";
  // Padronização: badge com padding e tamanho únicos
  const badgeClass = "bg-green-100 text-green-700 font-medium text-xs px-2 py-1 rounded-md font-urbanist";
  
  return (
    <div className="flex items-center gap-2">
      <span className={priceClass}>
        {price}
      </span>
      <Badge className={badgeClass}>
        {discount}
      </Badge>
    </div>
  );
};
