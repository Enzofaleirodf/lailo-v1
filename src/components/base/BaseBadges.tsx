
import React from "react";
interface BaseBadgesProps {
  badges: string[];
  badgeColor?: string;
}
export const BaseBadges = ({
  badges,
  badgeColor = "bg-blue-100 text-blue-800"
}: BaseBadgesProps): JSX.Element => {
  return <div className="flex flex-wrap gap-2">
      {badges.map((badge, index) => <span key={index} className={`px-2 py-1 text-xs font-medium rounded-md font-urbanist ${badgeColor}`}>
          {badge}
        </span>)}
    </div>;
};
