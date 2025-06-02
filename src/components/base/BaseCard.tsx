
import React from "react";
import { Card, CardContent } from "../ui/card";

interface BaseCardProps {
  children: React.ReactNode;
  isVertical?: boolean;
  className?: string;
  onClick?: () => void;
}

export const BaseCard = ({
  children,
  isVertical = false,
  className = "",
  onClick
}: BaseCardProps): JSX.Element => {
  return (
    <Card 
      className={`
        group relative w-full max-w-none p-3 
        bg-gradient-to-br from-white via-gray-50 to-gray-100
        rounded-2xl border-0
        shadow-lg backdrop-blur-sm
        focus-within:ring-4 focus-within:ring-blue-200 focus-within:ring-opacity-50
        ${onClick ? 'cursor-pointer hover:shadow-xl transition-shadow' : ''}
        ${className}
      `}
      onClick={onClick}
      role="article"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-2xl pointer-events-none" />
      
      <CardContent className="relative p-0 space-y-3">
        {children}
      </CardContent>
    </Card>
  );
};
