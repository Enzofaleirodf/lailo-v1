
import React from "react";
import { Button } from "@/components/ui/button";
import { Grid3X3, List } from "lucide-react";

interface LayoutToggleProps {
  isVertical: boolean;
  onToggle: (isVertical: boolean) => void;
}

export const LayoutToggle: React.FC<LayoutToggleProps> = ({
  isVertical,
  onToggle,
}) => {
  return (
    <div className="flex items-center gap-2 mb-4">
      <span className="text-sm font-medium text-gray-700">Visualização:</span>
      <div className="flex border rounded-lg">
        <Button
          variant={isVertical ? "default" : "ghost"}
          size="sm"
          onClick={() => onToggle(true)}
          className="rounded-r-none"
        >
          <Grid3X3 className="h-4 w-4" />
        </Button>
        <Button
          variant={!isVertical ? "default" : "ghost"}
          size="sm"
          onClick={() => onToggle(false)}
          className="rounded-l-none"
        >
          <List className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};
