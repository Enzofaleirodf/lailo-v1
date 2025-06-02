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
  const imageClass = className || (isVertical ? 'w-full aspect-[4/3]' : 'w-32 md:w-28 h-full');
  return <div className="h-auto aspect-[4/3] max-h-full\n">
      <img src={src} alt={alt} loading="lazy" className="aspect-[4/3] h-full w-auto object-cover rounded-xl\n" />
      
      {showNewBadge && <div className={`absolute bg-green-500 text-white text-xs font-bold rounded-md shadow-md font-urbanist ${isVertical ? 'top-2 left-2 md:px-2 md:py-1' : 'top-1 left-1 px-0.5 py-0.5'}`} style={isVertical ? {
      margin: '10px',
      padding: '0'
    } : {
      margin: '4px',
      padding: '2px 4px'
    }}>
          Novo
        </div>}
      
      {showFavoriteButton && <Button variant="ghost" size="sm" className={`
            absolute top-2 right-2
            ${isVertical ? 'h-8 w-8 p-0 bg-white/80 backdrop-blur-sm hover:bg-white/90 rounded-full shadow-md' : 'h-6 w-6 p-0 m-0 bg-transparent hover:bg-transparent'}
            transition-all duration-200
            ${isFavorited ? 'text-red-500' : 'text-gray-600'}
          `} onClick={e => {
      e.stopPropagation();
      onToggleFavorite();
    }} aria-label={isFavorited ? "Remover dos favoritos" : "Adicionar aos favoritos"}>
          <Heart className={`${isVertical ? 'h-4 w-4' : 'h-4 w-4'} ${isFavorited ? 'fill-current' : ''}`} />
        </Button>}
    </div>;
};