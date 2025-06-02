
import React from "react";
import { Clock } from "lucide-react";

interface BaseDateProps {
  date: string;
  isVertical?: boolean;
}

export const BaseDate = ({
  date,
  isVertical = false
}: BaseDateProps): JSX.Element => {
  return (
    <div className={`flex items-center gap-1 text-gray-500 ${isVertical ? 'text-xs' : 'text-xs md:text-sm'}`}>
      <Clock className="h-3 w-3" />
      <span>{date}</span>
    </div>
  );
};
