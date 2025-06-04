
import React from "react";

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
  const textSize = isVertical ? "text-[10px]" : "text-xs";
  
  return (
    <div className="flex items-center gap-1.5 min-w-0">
      {badges.map((badge, index) => (
        <span 
          key={index} 
          className={`px-2 py-1 ${textSize} font-medium rounded-md font-urbanist ${badgeColor} ${
            index === 0 ? 'truncate flex-shrink min-w-0' : 'flex-shrink-0'
          }`}
        >
          {badge}
        </span>
      ))}
    </div>
  );
};
