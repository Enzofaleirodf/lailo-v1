
import React from "react";
import { Clock, ArrowUpRight } from "lucide-react";
import { cardTokens } from "../../styles/card-tokens";

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
    <div className={`flex items-center gap-2 text-gray-500 text-sm md:text-[10px] font-urbanist`}>
      <div className="flex items-center gap-1">
        <Clock className="h-4 md:h-3 w-4 md:w-3" />
        <span>{date}</span>
      </div>
      
      <button 
        onClick={handleClick} 
        aria-label="Abrir leilão em nova aba" 
        className="h-[20px] md:h-[18px] w-[20px] md:w-[18px] p-0 text-gray-400 hover:text-gray-600 transition-colors bg-transparent flex-shrink-0 flex items-center justify-center rounded hover:bg-gray-100"
      >
        <ArrowUpRight className="h-[20px] md:h-[18px] w-[20px] md:w-[18px]" />
      </button>
    </div>
  );
};
