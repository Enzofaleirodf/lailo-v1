
import React from "react";
import { Badge } from "./ui/badge";

interface VehicleBadgesProps {
  badges: string[];
  badgeColor: string;
}

export const VehicleBadges = ({ badges, badgeColor }: VehicleBadgesProps) => {
  return (
    <div className="flex items-center gap-2">
      <Badge className={`
        ${badgeColor} border-none
        px-3 py-1 rounded-full font-semibold text-xs
        shadow-inner backdrop-blur-sm
      `}>
        <span className="font-bold">{badges[1].charAt(0)}</span>
        <span className="font-light">ª</span>
        <span className="font-semibold"> Praça</span>
      </Badge>

      <Badge className={`
        ${badgeColor} border-none
        px-3 py-1 rounded-full font-semibold text-xs
        shadow-inner backdrop-blur-sm
      `}>
        {badges[0]}
      </Badge>
    </div>
  );
};
