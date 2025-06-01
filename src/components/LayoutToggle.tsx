
import { FlipHorizontal, FlipVertical } from "lucide-react";
import { Button } from "./ui/button";

interface LayoutToggleProps {
  isVertical: boolean;
  onToggle: (isVertical: boolean) => void;
}

export const LayoutToggle = ({ isVertical, onToggle }: LayoutToggleProps) => {
  return (
    <div className="inline-flex -space-x-px rounded-lg shadow-sm shadow-black/5 rtl:space-x-reverse mb-4">
      <Button
        className="rounded-none shadow-none first:rounded-s-lg last:rounded-e-lg focus-visible:z-10"
        variant={!isVertical ? "default" : "outline"}
        size="icon"
        onClick={() => onToggle(false)}
        aria-label="Layout Horizontal"
      >
        <FlipHorizontal size={16} strokeWidth={2} aria-hidden="true" />
      </Button>
      <Button
        className="rounded-none shadow-none first:rounded-s-lg last:rounded-e-lg focus-visible:z-10"
        variant={isVertical ? "default" : "outline"}
        size="icon"
        onClick={() => onToggle(true)}
        aria-label="Layout Vertical"
      >
        <FlipVertical size={16} strokeWidth={2} aria-hidden="true" />
      </Button>
    </div>
  );
};
