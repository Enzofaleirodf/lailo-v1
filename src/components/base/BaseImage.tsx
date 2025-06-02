
import React from "react";
import { Heart } from "lucide-react";
import { Button } from "../ui/button";

interface BaseImageProps {
  src: string;
  alt: string;
  isFavorited: boolean;
  onToggleFavorite: () => void;
  isVertical: boolean;
  showNewBadge?: boolean;
  className?: string;
}

export const BaseImage = ({
  src,
  alt,
  isFavorited,
  onToggleFavorite,
  isVertical,
  showNewBadge = false,
  className = ""
}: BaseImageProps): JSX.Element => {
  const imageClass = className || (isVertical ? 'w-full aspect-[4/3]' : 'w-20 h-14 md:w-24 md:h-20');
  
  return (
    <div className={`relative ${imageClass}`}>
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover rounded-xl"
        loading="lazy"
      />
      
      {showNewBadge && (
        <div className="absolute top-2 left-2 px-2 py-1 bg-green-500 text-white text-xs font-bold rounded-md shadow-md">
          NOVO
        </div>
      )}
      
      <Button
        variant="ghost"
        size="sm"
        className={`
          absolute top-2 right-2 h-8 w-8 p-0
          bg-white/80 backdrop-blur-sm hover:bg-white/90
          rounded-full shadow-md
          transition-all duration-200
          ${isFavorited ? 'text-red-500' : 'text-gray-600'}
        `}
        onClick={(e) => {
          e.stopPropagation();
          onToggleFavorite();
        }}
        aria-label={isFavorited ? "Remover dos favoritos" : "Adicionar aos favoritos"}
      >
        <Heart className={`h-4 w-4 ${isFavorited ? 'fill-current' : ''}`} />
      </Button>
    </div>
  );
};
