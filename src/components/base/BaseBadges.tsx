
import React from "react";
import { Badge } from "../ui/badge";

interface BadgeItem {
  text: string;
  variant?: 'default' | 'secondary' | 'destructive' | 'outline';
}

interface BaseBadgesProps {
  badges: BadgeItem[];
  className?: string;
}

export const BaseBadges = ({
  badges,
  className = ""
}: BaseBadgesProps): JSX.Element => {
  return (
    <div className={`flex items-center gap-1.5 min-w-0 ${className}`}>
      {badges.map((badge, index) => (
        <Badge 
          key={index} 
          variant={badge.variant || 'outline'}
          className={`text-[10px] font-medium font-urbanist ${
            index === 0 ? 'truncate flex-shrink min-w-0' : 'flex-shrink-0'
          }`}
        >
          {badge.text}
        </Badge>
      ))}
    </div>
  );
};
