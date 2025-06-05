
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
    <div className={`flex items-center gap-2 text-gray-500 text-[10px] font-urbanist`}>
      <div className="flex items-center gap-1">
        <Clock className="h-3 w-3" />
        <span>{date}</span>
      </div>
      
      <button 
        onClick={handleClick} 
        aria-label="Abrir leilão em nova aba" 
        className="h-[18px] w-[18px] p-0 text-gray-400 hover:text-gray-600 transition-colors bg-transparent flex-shrink-0 flex items-center justify-center rounded hover:bg-gray-100"
      >
        <ArrowUpRight className="h-2.5 w-2.5" />
      </button>
    </div>
  );
};
