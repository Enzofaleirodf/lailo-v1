
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
  showFavoriteButton?: boolean;
}

export const BaseImage = ({
  src,
  alt,
  isFavorited,
  onToggleFavorite,
  isVertical,
  showNewBadge = false,
  className = "",
  showFavoriteButton = true
}: BaseImageProps): JSX.Element => {
  const imageClass = className || (isVertical ? 'w-full aspect-[4/3]' : 'w-24 h-16 md:w-28 md:h-20');
  
  return (
    <div className={`relative ${imageClass}`}>
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover rounded-xl"
        loading="lazy"
      />
      
      {showNewBadge && (
        <div className="absolute top-2 left-2 bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded-md shadow-md font-urbanist">
          Novo
        </div>
      )}
      
      {showFavoriteButton && (
        <Button
          variant="ghost"
          size="sm"
          className={`
            absolute top-2 right-2
            ${isVertical ? 'h-8 w-8 p-0 bg-white/80 backdrop-blur-sm hover:bg-white/90 rounded-full shadow-md' : 'h-6 w-6 p-0 m-0 bg-transparent hover:bg-transparent'}
            transition-all duration-200
            ${isFavorited ? 'text-blue-500' : 'text-gray-600'}
          `}
          onClick={(e) => {
            e.stopPropagation();
            onToggleFavorite();
          }}
          aria-label={isFavorited ? "Remover dos favoritos" : "Adicionar aos favoritos"}
        >
          <Heart className="h-4 w-4 ${isFavorited ? 'fill-current' : ''}" />
        </Button>
      )}
    </div>
  );
};
