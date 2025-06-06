
import React from "react";
import { cardTokens } from "../../styles/card-tokens";

interface BaseBadgesProps {
  badges: string[];
  badgeColor?: string;
  isVertical?: boolean;
}

export const BaseBadges = ({
  badges,
  badgeColor = "bg-blue-50 text-blue-700 border border-blue-100",
  isVertical = false
}: BaseBadgesProps): JSX.Element => {
  return (
    <div className="flex items-center gap-1.5 min-w-0">
      {badges.map((badge, index) => (
        <span 
          key={index} 
          className={`px-2 py-1 text-sm md:text-[10px] font-medium rounded-md font-urbanist ${badgeColor} ${
            index === 0 ? 'truncate flex-shrink min-w-0' : 'flex-shrink-0'
          }`}
        >
          {badge}
        </span>
      ))}
    </div>
  );
};
