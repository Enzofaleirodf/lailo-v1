
import React from "react";
import { Clock } from "lucide-react";
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
  return (
    <div className={`flex items-center gap-1 text-gray-500 text-sm md:text-[10px] font-urbanist`}>
      <Clock className="h-4 md:h-3 w-4 md:w-3" />
      <span>{date}</span>
    </div>
  );
};
