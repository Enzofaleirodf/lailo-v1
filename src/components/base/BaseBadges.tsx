
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
      {badges.map((badge, index) => {
        // Aplicar cores diferentes baseadas no tipo de badge
        let badgeColorClass = "bg-blue-100 text-blue-600";
        
        if (badge.toLowerCase().includes('judicial')) {
          badgeColorClass = "bg-red-100 text-red-600";
        } else if (badge.toLowerCase().includes('extrajudicial')) {
          badgeColorClass = "bg-blue-100 text-blue-600";
        } else if (badge.toLowerCase().includes('particular')) {
          badgeColorClass = "bg-green-100 text-green-600";
        } else if (badge.toLowerCase().includes('público')) {
          badgeColorClass = "bg-yellow-100 text-yellow-600";
        } else if (badge.toLowerCase().includes('praça')) {
          badgeColorClass = "bg-gray-100 text-gray-700";
        }
        
        return (
          <span 
            key={index} 
            className={`text-xs rounded-full px-2 py-0.5 font-medium font-urbanist ${badgeColorClass} ${
              index === 0 ? 'truncate flex-shrink min-w-0' : 'flex-shrink-0'
            }`}
          >
            {badge}
          </span>
        );
      })}
    </div>
  );
};
