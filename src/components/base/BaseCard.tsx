
import React from "react";
import { Card, CardContent } from "../ui/card";
import { cardTokens } from "../../styles/card-tokens";

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
        group relative w-full max-w-none p-4 font-urbanist
        bg-white border border-muted
        rounded-xl shadow-sm hover:shadow-md
        transition-shadow duration-200 ease-in-out
        hover:border-gray-200
        focus-within:ring-2 focus-within:ring-blue-100 focus-within:border-blue-200
        ${onClick ? 'cursor-pointer' : ''}
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
