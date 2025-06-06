
import React from "react";

interface BaseBadgesProps {
  badges: string[];
  badgeColor?: string;
  isVertical?: boolean;
}

export const BaseBadges = ({
  badges,
  badgeColor,
  isVertical = false
}: BaseBadgesProps): JSX.Element => {
  return (
    <div className="flex gap-2 mt-2 min-w-0">
      {badges.map((badge, index) => (
        <span 
          key={index} 
          className={`text-xs rounded-full px-2 py-0.5 font-medium font-urbanist bg-gray-100 text-gray-700 ${
            index === 0 ? 'truncate flex-shrink min-w-0' : 'flex-shrink-0'
          }`}
        >
          {badge}
        </span>
      ))}
    </div>
  );
};
