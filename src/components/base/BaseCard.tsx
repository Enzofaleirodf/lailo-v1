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
  return <Card onClick={onClick} role="article" className="w-full rounded-xl bg-white shadow p-4 flex flex-col\n">
      <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-2xl pointer-events-none" />
      
      <CardContent className="relative p-0">
        {children}
      </CardContent>
    </Card>;
};