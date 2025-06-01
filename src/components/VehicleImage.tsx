
import React from "react";
import { Heart } from "lucide-react";

interface VehicleImageProps {
  image: string;
  isFavorited: boolean;
  onToggleFavorite: () => void;
  vehicleName: string;
  isVertical?: boolean;
  showNewBadge?: boolean;
}

export const VehicleImage = ({
  image,
  isFavorited,
  onToggleFavorite,
  vehicleName,
  isVertical = false,
  showNewBadge = false
}: VehicleImageProps) => {
  const containerClass = isVertical 
    ? "relative w-full aspect-[5/4] overflow-hidden rounded-xl" 
    : "relative w-[120px] flex-shrink-0 group/image overflow-hidden rounded-xl";

  const heartSize = isVertical ? 24 : 20;
  const buttonClass = isVertical 
    ? "absolute top-3 right-3 w-10 h-10 p-2 rounded-full transition-all duration-200 hover:scale-110"
    : "absolute top-[-1px] right-[-1px] p-1.5 rounded-full transition-all duration-200 hover:scale-110";

  return (
    <div className={containerClass}>
      <div 
        style={{
          backgroundImage: `url(${image})`
        }} 
        className="w-full h-full bg-cover bg-center"
      />
      
      {/* Gradiente de cima para baixo - do topo até 40% */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-transparent" style={{
        background: 'linear-gradient(to bottom, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.3) 25%, transparent 40%)'
      }} />
      
      {/* Gradiente de baixo para cima - do bottom até 40% */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/15 to-transparent" style={{
        background: 'linear-gradient(to top, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.15) 25%, transparent 40%)'
      }} />
      
      {/* Badge "Novo" */}
      {showNewBadge && (
        <div className={`absolute bg-red-500 text-white rounded-md font-bold shadow-lg ${
          isVertical 
            ? "top-3 left-3 px-2 py-1 text-xs" 
            : "top-[-1px] left-[-1px] px-0.5 py-0"
        }`}
        style={!isVertical ? { fontSize: '10px' } : undefined}>
          Novo
        </div>
      )}
      
      {/* Favorite button */}
      <button
        onClick={onToggleFavorite}
        className={buttonClass}
        aria-label="Adicionar aos favoritos"
      >
        <Heart 
          size={heartSize}
          className={`transition-colors ${
            isFavorited 
              ? 'fill-blue-light800 text-white stroke-2' 
              : 'fill-white/80 text-white stroke-2'
          }`}
        />
      </button>
    </div>
  );
};
