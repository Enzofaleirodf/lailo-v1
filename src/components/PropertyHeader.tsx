
import React from "react";

interface PropertyHeaderProps {
  type: string;
  area: string;
  address: string;
  cityState: string;
  isVertical?: boolean;
}

export const PropertyHeader = ({
  type,
  area,
  address,
  cityState,
  isVertical = false
}: PropertyHeaderProps) => {
  const titleClass = isVertical 
    ? "font-bold text-gray-900 text-2xl leading-tight font-urbanist" 
    : "font-bold text-gray-900 text-xl md:text-lg leading-tight truncate font-urbanist";

  const detailsTextClass = isVertical 
    ? "font-medium text-gray-600 text-base whitespace-nowrap"
    : "font-medium text-gray-600 text-sm whitespace-nowrap";

  const addressTextClass = isVertical 
    ? "font-medium text-gray-600 text-base truncate"
    : "font-medium text-gray-600 text-sm truncate";

  return (
    <div className="flex flex-col">
      {/* Primeira linha: Tipo de Imóvel e Área Útil */}
      <div className="flex items-center gap-2 overflow-hidden font-urbanist">
        <span className={titleClass}>
          {type}
        </span>
        <div className="w-1 h-1 bg-gray-400 rounded-full flex-shrink-0" />
        <span className={detailsTextClass}>
          {area}
        </span>
      </div>

      {/* Segunda linha: Endereço - Cidade/Estado */}
      <div className="flex items-center gap-2 overflow-hidden font-urbanist mt-1">
        <span className={addressTextClass}>
          {address} - {cityState}
        </span>
      </div>
    </div>
  );
};
