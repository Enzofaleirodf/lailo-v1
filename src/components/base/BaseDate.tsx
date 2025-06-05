import React from "react";
import { Clock, ArrowUpRight } from "lucide-react";
import { Button } from "../ui/button";
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
  return <div className={`flex items-center gap-2 text-gray-500 ${cardTokens.text.body} font-urbanist`}>
      <div className="flex items-center gap-1">
        <Clock className="h-3 w-3" />
        <span>{date}</span>
      </div>
      
      <Button variant="ghost" size="icon" onClick={handleClick} aria-label="Abrir leilão em nova aba" className="h-2 w-4 p-0 text-gray-400 hover:text-gray-600 transition-colors bg-transparent">
        <ArrowUpRight className="h-3 w-3" />
      </Button>
    </div>;
};