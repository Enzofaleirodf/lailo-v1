
import React from "react";
import { Badge } from "@/components/ui/badge";

interface BaseBadgesProps {
  badges: string[];
}

export const BaseBadges: React.FC<BaseBadgesProps> = ({ badges }) => {
  return (
    <div className="flex gap-2 flex-wrap">
      {badges.map((badge, index) => (
        <Badge key={index} variant="secondary" className="text-xs">
          {badge}
        </Badge>
      ))}
    </div>
  );
};
