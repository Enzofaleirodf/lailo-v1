
import React from "react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface BaseCardProps {
  children: React.ReactNode;
  className?: string;
}

export const BaseCard: React.FC<BaseCardProps> = ({ children, className }) => {
  return (
    <Card className={cn("p-4", className)}>
      {children}
    </Card>
  );
};
