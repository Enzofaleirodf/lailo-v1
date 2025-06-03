
import React from "react";
import { Clock, ArrowUpRight } from "lucide-react";
import { Button } from "../ui/button";

interface BaseDateProps {
  date: string;
  isVertical?: boolean;
  href?: string;
}

export const BaseDate = ({
  date,
  isVertical = false,
  href = "#"
}: BaseDateProps): JSX.Element => {
  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    window.open(href, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className={`flex items-center gap-2 text-gray-500 font-urbanist ${isVertical ? 'text-xs' : 'text-xs md:text-sm'}`}>
      <div className="flex items-center gap-1">
        <Clock className="h-3 w-3" />
        <span>{date}</span>
      </div>
      
      <Button
        variant="ghost"
        size="icon"
        onClick={handleClick}
        className="h-4 w-4 p-0 hover:bg-gray-100 text-gray-400 hover:text-gray-600 transition-colors"
        aria-label="Abrir leilão em nova aba"
      >
        <ArrowUpRight className="h-3 w-3" />
      </Button>
    </div>
  );
};
