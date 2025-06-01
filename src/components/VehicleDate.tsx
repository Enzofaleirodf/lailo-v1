
import React from "react";
import { Calendar } from "lucide-react";

interface VehicleDateProps {
  date: string;
}

export const VehicleDate = ({ date }: VehicleDateProps) => {
  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center gap-1 text-gray-600">
        <Calendar className="w-4 h-4" />
        <span className="font-medium text-sm font-urbanist">
          {date}
        </span>
      </div>
    </div>
  );
};
