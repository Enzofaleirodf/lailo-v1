
import React from "react";
import { Card } from "../ui/card";

interface BaseCardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export const BaseCard: React.FC<BaseCardProps> = ({
  children,
  className = "",
  onClick
}) => {
  return (
    <Card 
      className={`
        rounded-xl 
        border border-muted 
        bg-white 
        shadow-sm 
        hover:shadow-sm 
        hover:border 
        hover:border-neutral-200
        hover:shadow-[0_1px_4px_rgba(0,0,0,0.06)]
        transition-all duration-200 ease-in-out 
        hover:bg-muted
        p-4 
        ${onClick ? 'cursor-pointer' : ''} 
        ${className}
      `}
      onClick={onClick}
    >
      {children}
    </Card>
  );
};
