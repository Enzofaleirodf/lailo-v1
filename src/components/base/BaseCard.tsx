
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
        shadow-sm hover:shadow-md 
        transition-shadow duration-200 ease-in-out 
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
