
import React from "react";
import { Heart } from "lucide-react";

interface VehicleImageProps {
  image: string;
  isFavorited: boolean;
  onToggleFavorite: () => void;
  vehicleName: string;
  isVertical?: boolean;
}

export const VehicleImage = ({
  image,
  isFavorited,
  onToggleFavorite,
  vehicleName,
  isVertical = false
}: VehicleImageProps) => {
  const containerClass = isVertical 
    ? "relative w-full h-48 overflow-hidden rounded-xl" 
    : "relative w-[120px] flex-shrink-0 group/image overflow-hidden rounded-xl";

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
      
      {/* Favorite button */}
      <button
        onClick={onToggleFavorite}
        className="absolute top-1 right-1 p-1.5 rounded-full transition-all duration-200 hover:scale-110"
        aria-label="Adicionar aos favoritos"
      >
        <Heart 
          className={`w-5 h-5 transition-colors ${
            isFavorited 
              ? 'fill-red-500 text-red-500' 
              : 'fill-white/80 text-white stroke-2'
          }`}
        />
      </button>
    </div>
  );
};
