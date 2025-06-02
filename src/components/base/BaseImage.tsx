
import React from "react";
import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface BaseImageProps {
  src: string;
  alt: string;
  isFavorited: boolean;
  onToggleFavorite: () => void;
  isVertical: boolean;
  showNewBadge?: boolean;
  className?: string;
}

export const BaseImage: React.FC<BaseImageProps> = ({
  src,
  alt,
  isFavorited,
  onToggleFavorite,
  isVertical,
  showNewBadge = false,
  className
}) => {
  return (
    <div className={cn("relative", className)}>
      <img
        src={src}
        alt={alt}
        className={cn(
          "object-cover rounded-lg",
          isVertical ? "w-full h-48" : "w-full h-24"
        )}
      />
      <Button
        variant="ghost"
        size="sm"
        className="absolute top-2 right-2 h-8 w-8 p-0 bg-white/80 hover:bg-white"
        onClick={onToggleFavorite}
      >
        <Heart
          className={cn(
            "h-4 w-4",
            isFavorited ? "fill-red-500 text-red-500" : "text-gray-600"
          )}
        />
      </Button>
      {showNewBadge && (
        <Badge className="absolute top-2 left-2 bg-green-500 hover:bg-green-600">
          NOVO
        </Badge>
      )}
    </div>
  );
};
