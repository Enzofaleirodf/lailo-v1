
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
    <div className="flex gap-2 min-w-0">
      {badges.map((badge, index) => {
        // Badges de etapa e origem com cor azul
        const isStageOrOrigin = badge.includes('Praça') || 
                               badge === 'Extrajudicial' || 
                               badge === 'Judicial' || 
                               badge === 'Particular' || 
                               badge === 'Público';
        
        const badgeClasses = isStageOrOrigin 
          ? 'bg-blue-100 text-blue-700' 
          : 'bg-gray-100 text-gray-600';
        
        return (
          <span 
            key={index} 
            className={`text-sm md:text-xs rounded-full px-2 py-0.5 font-medium font-urbanist ${badgeClasses} ${
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
