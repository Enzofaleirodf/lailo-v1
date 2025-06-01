
import { LayoutGrid, List } from "lucide-react";
import { Button } from "./ui/button";

interface LayoutToggleProps {
  isVertical: boolean;
  onToggle: (isVertical: boolean) => void;
}

export const LayoutToggle = ({ isVertical, onToggle }: LayoutToggleProps) => {
  return (
    <div className="flex items-center gap-2 mb-4">
      <Button
        variant={!isVertical ? "default" : "outline"}
        size="sm"
        onClick={() => onToggle(false)}
        className="flex items-center gap-2"
      >
        <List className="w-4 h-4" />
        Horizontal
      </Button>
      <Button
        variant={isVertical ? "default" : "outline"}
        size="sm"
        onClick={() => onToggle(true)}
        className="flex items-center gap-2"
      >
        <LayoutGrid className="w-4 h-4" />
        Vertical
      </Button>
    </div>
  );
};
