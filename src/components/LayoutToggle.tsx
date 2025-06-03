
import { FlipHorizontal, FlipVertical } from "lucide-react";
import { Button } from "./ui/button";

interface LayoutToggleProps {
  isVertical: boolean;
  onToggle: (isVertical: boolean) => void;
}

export const LayoutToggle = ({ isVertical, onToggle }: LayoutToggleProps) => {
  return (
    <div className="inline-flex -space-x-px rounded-lg shadow-sm shadow-black/5 rtl:space-x-reverse">
      <Button
        className="rounded-none shadow-none first:rounded-s-lg focus-visible:z-10 h-10 data-[state=on]:bg-blue-50 data-[state=on]:text-blue-700 data-[state=on]:border-blue-200"
        variant={!isVertical ? "secondary" : "outline"}
        size="icon"
        onClick={() => onToggle(false)}
        aria-label="Layout Horizontal"
        style={{
          borderTopRightRadius: 0,
          borderBottomRightRadius: 0,
          backgroundColor: !isVertical ? '#eff6ff' : undefined,
          color: !isVertical ? '#1d4ed8' : undefined,
          borderColor: !isVertical ? '#bfdbfe' : undefined
        }}
      >
        <FlipHorizontal size={16} strokeWidth={2} aria-hidden="true" />
      </Button>
      <Button
        className="rounded-none shadow-none last:rounded-e-lg focus-visible:z-10 h-10 data-[state=on]:bg-blue-50 data-[state=on]:text-blue-700 data-[state=on]:border-blue-200"
        variant={isVertical ? "secondary" : "outline"}
        size="icon"
        onClick={() => onToggle(true)}
        aria-label="Layout Vertical"
        style={{
          borderTopLeftRadius: 0,
          borderBottomLeftRadius: 0,
          backgroundColor: isVertical ? '#eff6ff' : undefined,
          color: isVertical ? '#1d4ed8' : undefined,
          borderColor: isVertical ? '#bfdbfe' : undefined
        }}
      >
        <FlipVertical size={16} strokeWidth={2} aria-hidden="true" />
      </Button>
    </div>
  );
};
