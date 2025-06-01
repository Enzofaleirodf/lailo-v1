
import React from "react";
import { Badge } from "./ui/badge";

interface PropertyBadgesProps {
  badges: string[];
  badgeColor: string;
}

export const PropertyBadges = ({ badges, badgeColor }: PropertyBadgesProps) => {
  return (
    <div className="flex items-center gap-2">
      <Badge className={`
        ${badgeColor} border-none
        px-3 py-1 rounded-full font-semibold text-xs
        shadow-inner backdrop-blur-sm font-urbanist
      `}>
        <span className="font-bold">{badges[1].charAt(0)}</span>
        <span className="font-light font-roboto ml-0.5">ª</span>
        <span className="font-semibold ml-1"> Praça</span>
      </Badge>

      <Badge className={`
        ${badgeColor} border-none
        px-3 py-1 rounded-full font-semibold text-xs
        shadow-inner backdrop-blur-sm font-urbanist
      `}>
        {badges[0]}
      </Badge>
    </div>
  );
};
