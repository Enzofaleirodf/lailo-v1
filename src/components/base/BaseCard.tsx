
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
        group relative w-full max-w-none p-2 sm:p-4 font-urbanist
        bg-white border border-gray-100
        rounded-xl shadow-sm hover:shadow-md
        transition-all duration-200 ease-out
        focus-within:ring-2 focus-within:ring-blue-100 focus-within:border-blue-200
        ${onClick ? 'cursor-pointer hover:border-gray-200' : ''}
        ${className}
      `}
      onClick={onClick}
      role="article"
    >
      <CardContent className="relative p-0">
        {children}
      </CardContent>
    </Card>
  );
};
