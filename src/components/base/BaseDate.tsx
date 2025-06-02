
import React from "react";
import { Calendar } from "lucide-react";

interface BaseDateProps {
  date: string;
  isVertical: boolean;
}

export const BaseDate: React.FC<BaseDateProps> = ({ date, isVertical }) => {
  return (
    <div className="flex items-center gap-1 text-xs text-gray-500">
      <Calendar className="w-3 h-3" />
      <span>{date}</span>
    </div>
  );
};
