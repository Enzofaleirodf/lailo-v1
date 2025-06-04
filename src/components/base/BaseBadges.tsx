
import React from "react";

interface BaseBadgesProps {
  badges: string[];
  badgeColor?: string;
}

export const BaseBadges = ({
  badges,
  badgeColor = "bg-blue-50 text-blue-700 border border-blue-100"
}: BaseBadgesProps): JSX.Element => {
  return (
    <div className="flex flex-wrap gap-1.5">
      {badges.map((badge, index) => (
        <span 
          key={index} 
          className={`px-2 py-1 text-xs font-medium rounded-md font-urbanist ${badgeColor}`}
        >
          {badge}
        </span>
      ))}
    </div>
  );
};
