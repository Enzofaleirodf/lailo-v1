
import React from "react";
import { Calendar } from "lucide-react";

interface PropertyDateProps {
  date: string;
  isVertical?: boolean;
}

export const PropertyDate = ({ date, isVertical = false }: PropertyDateProps) => {
  const textClass = isVertical 
    ? "font-medium text-base font-urbanist"
    : "font-medium text-sm font-urbanist";

  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center gap-1 text-gray-600">
        <Calendar className="w-4 h-4" />
        <span className={textClass}>
          {date}
        </span>
      </div>
    </div>
  );
};
